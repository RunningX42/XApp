// ═══════════════════════════════════════════════════════
// GOOGLE APPS SCRIPT – RunningX API
//
// HOE INSTALLEREN:
// 1. Ga naar script.google.com → Nieuw project
// 2. Plak ALLE code hieronder in de editor
// 3. Sla op (Ctrl+S)
// 4. Klik op "Deploy" → "New deployment"
// 5. Type: Web App · Execute as: Me · Who has access: Anyone
// 6. Kopieer de Web App URL → plak in app onder Instellingen
//
// CONFIGURATIE (X2/X3):
// - SHEET_ID kan ook via URL-parameter worden meegegeven: ?sheet=<URL>&tab=<naam>
// - Als SHEET_NAME leeg is, wordt het eerste tabblad automatisch gebruikt
// ═══════════════════════════════════════════════════════

// X2: Configureerbaar via URL-parameter 'sheetId', fallback naar constante
const DEFAULT_SHEET_ID = '';  // Vul hier je sheet ID in, of gebruik de URL-parameter
// X3: Configureerbaar via URL-parameter 'sheetName', fallback naar eerste tabblad
const DEFAULT_SHEET_NAME = ''; // Leeg = automatisch eerste tabblad

// Kolommen (C24 + C21 update):
// datum | type | titel | detail | emoji | km | feedback | fase
// type: komma-gescheiden sleutelwoorden: run / werk / kracht / mobiliteit / rust / race / herstel

function getSheetId(e) {
  return (e && e.parameter && e.parameter.sheetId) || DEFAULT_SHEET_ID;
}

function getSheet(e) {
  const sheetId = getSheetId(e);
  if (!sheetId) throw new Error('Sheet ID niet geconfigureerd. Voeg sheet ID toe in de apps-script code of via URL-parameter.');
  const spreadsheet = SpreadsheetApp.openById(sheetId);
  const sheetName = (e && e.parameter && e.parameter.sheetName) || DEFAULT_SHEET_NAME;
  if (sheetName) {
    const sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) throw new Error('Tabblad "' + sheetName + '" niet gevonden.');
    return sheet;
  }
  // X3: auto-detect first sheet
  return spreadsheet.getSheets()[0];
}

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'getAll';
  try {
    let result;
    if (action === 'getAll')         result = getAllRows(e);
    else if (action === 'setFeedback') result = setFeedback(e);
    else if (action === 'setDay')     result = setDay(e);
    else if (action === 'getToday')   result = getTodayRow(e);
    else result = { status: 'error', message: 'Onbekende actie: ' + action };
    return buildResponse(result);
  } catch(err) {
    return buildResponse({ status: 'error', message: err.toString() });
  }
}

function buildResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function getAllRows(e) {
  const sheet = getSheet(e);
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return { status: 'ok', rows: [] };
  const headers = data[0].map(h => String(h).toLowerCase().trim());
  const rows = [];
  for (let i = 1; i < data.length; i++) {
    const row = {};
    headers.forEach((h, j) => {
      let val = data[i][j];
      if (h === 'datum' && val instanceof Date) {
        val = Utilities.formatDate(val, Session.getScriptTimeZone(), 'yyyy-MM-dd');
      } else {
        val = (val !== null && val !== undefined) ? String(val) : '';
      }
      row[h] = val;
    });
    if (row.datum && row.datum !== '') rows.push(row);
  }
  return { status: 'ok', rows };
}

function getTodayRow(e) {
  const today = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
  const all = getAllRows(e);
  return { status: 'ok', row: all.rows.find(r => r.datum === today) || null };
}

function setFeedback(e) {
  const datum  = e.parameter.datum;
  const rating = e.parameter.rating;
  const tekst  = e.parameter.tekst || '';
  if (!datum) throw new Error('Datum ontbreekt');
  const sheet = getSheet(e);
  const data = sheet.getDataRange().getValues();
  const headers = data[0].map(h => String(h).toLowerCase().trim());
  const datumCol = headers.indexOf('datum');
  const feedbackCol = headers.indexOf('feedback');
  if (datumCol === -1) throw new Error('Kolom "datum" niet gevonden');
  if (feedbackCol === -1) throw new Error('Kolom "feedback" niet gevonden');
  for (let i = 1; i < data.length; i++) {
    let rowDatum = data[i][datumCol];
    if (rowDatum instanceof Date) rowDatum = Utilities.formatDate(rowDatum, Session.getScriptTimeZone(), 'yyyy-MM-dd');
    else rowDatum = String(rowDatum).trim();
    if (rowDatum === datum) {
      const emojis = ['😵','😓','😐','💪','🔥'];
      const ratingNum = parseInt(rating) || 0;
      const feedbackStr = ratingNum + '/5 ' + (emojis[ratingNum-1]||'') + (tekst ? ' – ' + tekst : '');
      sheet.getRange(i + 1, feedbackCol + 1).setValue(feedbackStr);
      return { status: 'ok', datum, feedback: feedbackStr };
    }
  }
  throw new Error('Datum niet gevonden: ' + datum);
}

function setDay(e) {
  // C22: update any day field from the app
  const datum  = e.parameter.datum;
  if (!datum) throw new Error('Datum ontbreekt');
  const sheet = getSheet(e);
  const data = sheet.getDataRange().getValues();
  const headers = data[0].map(h => String(h).toLowerCase().trim());
  const datumCol = headers.indexOf('datum');
  if (datumCol === -1) throw new Error('Kolom "datum" niet gevonden');

  const fields = ['titel','type','km','emoji','detail'];
  let rowIdx = -1;
  for (let i = 1; i < data.length; i++) {
    let rowDatum = data[i][datumCol];
    if (rowDatum instanceof Date) rowDatum = Utilities.formatDate(rowDatum, Session.getScriptTimeZone(), 'yyyy-MM-dd');
    else rowDatum = String(rowDatum).trim();
    if (rowDatum === datum) { rowIdx = i; break; }
  }

  if (rowIdx === -1) {
    // New row: append
    const newRow = new Array(headers.length).fill('');
    newRow[datumCol] = datum;
    fields.forEach(f => { const c = headers.indexOf(f); if (c >= 0 && e.parameter[f] !== undefined) newRow[c] = e.parameter[f]; });
    sheet.appendRow(newRow);
  } else {
    fields.forEach(f => {
      const c = headers.indexOf(f);
      if (c >= 0 && e.parameter[f] !== undefined) sheet.getRange(rowIdx + 1, c + 1).setValue(e.parameter[f]);
    });
  }
  return { status: 'ok', datum };
}
