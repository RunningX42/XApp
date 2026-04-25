// ═══════════════════════════════════════════════════════
// GOOGLE APPS SCRIPT – RunningX API v2.2
//
// HOE INSTALLEREN:
// 1. Ga naar script.google.com → Nieuw project
// 2. Plak ALLE code hieronder in de editor
// 3. Sla op (Ctrl+S)
// 4. Klik op "Deploy" → "New deployment"
// 5. Type: Web App · Execute as: Me · Who has access: Anyone
// 6. Kopieer de Web App URL → plak in app onder Instellingen
//
// KOLOMMEN: datum | type | titel | detail | km | feedback | fase
// ACTIES: getAll | addRow | updateRow | deleteRow | setFeedback
// ═══════════════════════════════════════════════════════

const DEFAULT_SHEET_ID = '';
const DEFAULT_SHEET_NAME = '';

function getSheet(e) {
  const sheetId = (e && e.parameter && e.parameter.sheetId) || DEFAULT_SHEET_ID;
  if (!sheetId) throw new Error('Sheet ID niet geconfigureerd.');
  const spreadsheet = SpreadsheetApp.openById(sheetId);
  const sheetName = (e && e.parameter && e.parameter.sheetName) || DEFAULT_SHEET_NAME;
  if (sheetName) {
    const sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) throw new Error('Tabblad "' + sheetName + '" niet gevonden.');
    return sheet;
  }
  return spreadsheet.getSheets()[0];
}

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'getAll';
  try {
    if (action === 'getAll')      return buildResponse(getAllRows(e));
    if (action === 'addRow')      return buildResponse(addRow(e));
    if (action === 'updateRow')   return buildResponse(updateRow(e));
    if (action === 'deleteRow')   return buildResponse(deleteRow(e));
    if (action === 'setFeedback') return buildResponse(setFeedback(e));
    if (action === 'setDay')      return buildResponse(setDayLegacy(e));
    if (action === 'getToday')    return buildResponse(getTodayRow(e));
    return buildResponse({ status: 'error', message: 'Onbekende actie: ' + action });
  } catch(err) {
    return buildResponse({ status: 'error', message: err.toString() });
  }
}

function buildResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

const FIELDS = ['datum', 'type', 'titel', 'detail', 'km', 'feedback', 'fase'];

function getHeaders(sheet) {
  return sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    .map(h => String(h).toLowerCase().trim());
}

function fmtDatum(val) {
  if (val instanceof Date) return Utilities.formatDate(val, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  return String(val || '').trim();
}

function getAllRows(e) {
  const sheet = getSheet(e);
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return { status: 'ok', rows: [] };
  const headers = data[0].map(h => String(h).toLowerCase().trim());
  const rows = [];
  for (let i = 1; i < data.length; i++) {
    const row = { rowIndex: i + 1 };
    headers.forEach((h, j) => { row[h] = h === 'datum' ? fmtDatum(data[i][j]) : String(data[i][j] || ''); });
    if (row.datum) rows.push(row);
  }
  return { status: 'ok', rows };
}

function getTodayRow(e) {
  const today = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
  const all = getAllRows(e);
  return { status: 'ok', row: all.rows.find(r => r.datum === today) || null };
}

function sortSheet(sheet) {
  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();
  if (lastRow < 3) return; // header + at least 2 data rows needed
  sheet.getRange(2, 1, lastRow - 1, lastCol).sort({ column: 1, ascending: true });
}

function addRow(e) {
  if (!e.parameter.datum) throw new Error('datum ontbreekt');
  const sheet = getSheet(e);
  const headers = getHeaders(sheet);
  const newRow = new Array(headers.length).fill('');
  FIELDS.forEach(f => { const c = headers.indexOf(f); if (c >= 0 && e.parameter[f] !== undefined) newRow[c] = e.parameter[f]; });
  sheet.appendRow(newRow);
  sortSheet(sheet);
  // rowIndex after sort is unknown — caller should re-fetch
  return { status: 'ok', action: 'added' };
}

function updateRow(e) {
  const rowIndex = parseInt(e.parameter.rowIndex);
  if (!rowIndex || rowIndex < 2) throw new Error('Geldig rowIndex vereist');
  const sheet = getSheet(e);
  const headers = getHeaders(sheet);
  FIELDS.forEach(f => { const c = headers.indexOf(f); if (c >= 0 && e.parameter[f] !== undefined) sheet.getRange(rowIndex, c + 1).setValue(e.parameter[f]); });
  sortSheet(sheet);
  return { status: 'ok', action: 'updated' };
}

function deleteRow(e) {
  const rowIndex = parseInt(e.parameter.rowIndex);
  if (!rowIndex || rowIndex < 2) throw new Error('Geldig rowIndex vereist');
  getSheet(e).deleteRow(rowIndex);
  // No sort needed after delete
  return { status: 'ok', action: 'deleted', rowIndex };
}

function setFeedback(e) {
  const datum = e.parameter.datum;
  const rowIndexHint = parseInt(e.parameter.rowIndex) || 0;
  if (!datum) throw new Error('datum ontbreekt');
  const sheet = getSheet(e);
  const data = sheet.getDataRange().getValues();
  const headers = data[0].map(h => String(h).toLowerCase().trim());
  const datumCol = headers.indexOf('datum');
  const feedbackCol = headers.indexOf('feedback');
  if (datumCol === -1 || feedbackCol === -1) throw new Error('Kolom datum/feedback niet gevonden');
  const emojis = ['😵','😓','😐','💪','🔥'];
  const ratingNum = parseInt(e.parameter.rating) || 0;
  const feedbackStr = ratingNum + '/5 ' + (emojis[ratingNum-1]||'') + (e.parameter.tekst ? ' – ' + e.parameter.tekst : '');
  // Use rowIndex hint if provided, else find first match
  if (rowIndexHint >= 2) {
    sheet.getRange(rowIndexHint, feedbackCol + 1).setValue(feedbackStr);
    return { status: 'ok', datum, feedback: feedbackStr, rowIndex: rowIndexHint };
  }
  for (let i = 1; i < data.length; i++) {
    if (fmtDatum(data[i][datumCol]) !== datum) continue;
    const t = String(data[i][headers.indexOf('type')] || '').toLowerCase();
    if (t === 'werk' || t === 'rust') continue;
    sheet.getRange(i + 1, feedbackCol + 1).setValue(feedbackStr);
    return { status: 'ok', datum, feedback: feedbackStr, rowIndex: i + 1 };
  }
  throw new Error('Rij niet gevonden: ' + datum);
}

function setDayLegacy(e) {
  const datum = e.parameter.datum;
  if (!datum) throw new Error('datum ontbreekt');
  if (e.parameter.addRow === 'true') return addRow(e);
  const sheet = getSheet(e);
  const data = sheet.getDataRange().getValues();
  const headers = data[0].map(h => String(h).toLowerCase().trim());
  const datumCol = headers.indexOf('datum');
  for (let i = 1; i < data.length; i++) {
    if (fmtDatum(data[i][datumCol]) === datum) {
      const fakeE = { parameter: Object.assign({}, e.parameter, { rowIndex: String(i + 1) }) };
      return updateRow(fakeE);
    }
  }
  return addRow(e);
}
