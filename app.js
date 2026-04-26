// ── CONSTANTS ───────────────────────────────────────────────────────────────
// C24: standardised type keywords
const TYPES={
  run:    {bg:'var(--run-bg)',    text:'var(--run-text)',    i18n:'type_run'},
  werk:   {bg:'var(--work-bg)',   text:'var(--work-text)',   i18n:'type_werk'},
  kracht: {bg:'var(--str-bg)',    text:'var(--str-text)',    i18n:'type_kracht'},
  mobiliteit:{bg:'var(--mob-bg)',text:'var(--mob-text)',    i18n:'type_mob'},
  rust:   {bg:'var(--rest-bg)',   text:'var(--rest-text)',   i18n:'type_rust'},
  race:   {bg:'var(--race-bg)',   text:'var(--race-text)',   i18n:'type_race'},
  herstel:{bg:'var(--herstel-bg)',text:'var(--herstel-text)',i18n:'type_herstel'},
};
const TYPE_FALLBACK=TYPES.rust;

const PR_ORDER=['800m','1500m','1mile','5km','10km','10mile','HM','M'];
const DAYS_NL=['Ma','Di','Wo','Do','Vr','Za','Zo'];
const DAYS_EN=['Mo','Tu','We','Th','Fr','Sa','Su'];
const MONTHS_FULL_NL=['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
const MONTHS_FULL_EN=['January','February','March','April','May','June','July','August','September','October','November','December'];
const MONTHS_NL=['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'];
const MONTHS_EN=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

// ── I18N ─────────────────────────────────────────────────────────────────────
const STRINGS={
  nl:{
    today:'Vandaag',week:'Week',plan:'Training',calendar:'Kalender',stats:'Stats',settings:'Instellingen',
    sg_account:'Account',sg_profile:'Profiel',sg_notif:'Notificaties',sg_connect:'Koppeling',sg_app:'App',
    your_name:'Jouw naam',
    pr_title:'Persoonlijke records',pr_add:'Afstand toevoegen',pr_none:'Nog geen records toegevoegd.',
    lang_title:'Taal',
    notif_telegram_title:'Telegram',notif_telegram:'Gebruikersnaam',notif_hint:'Koppel je Telegram-account om dagelijkse schema\'s, weekoverzichten en feedback-verzoeken te ontvangen.',
    tg_not_linked:'Niet gekoppeld',tg_linked:'Gekoppeld',tg_verify:'Koppeling starten',tg_verifying:'Verificatie starten…',tg_verify_hint:'Stuur /start naar @RunningXBot in Telegram om de koppeling te bevestigen.',
    schema_title:'Koppel je trainingsschema',schema_hint:'Plak de URL van je gepubliceerde Google Apps Script Web App.',
    sheet_name_label:'Tabblad naam (optioneel)',sheet_name_hint:'Laat leeg om het eerste tabblad automatisch te gebruiken.',
    api_save:'Opslaan & verbinden',not_connected:'Niet verbonden',
    connected:'Verbonden ✓',conn_err:'Fout',
    enter_url:'Voer een URL in',connecting:'Verbinding testen…',
    goal_dist:'Afstand',goal_time:'Doeltijd',goal_race:'Race naam',goal_date:'Racedatum',
    rest_day:'Rustdag',rest_msg:'Vandaag herstel je. Morgen ga je er weer voor.',
    mob_reminder:'Mobiliteit',mob_text:'Dagelijkse routine',
    tomorrow:'Morgen',setup_title:'Koppel je trainingsschema',setup_body:'Ga naar Instellingen → Koppeling.',
    no_schema:'Koppel je trainingsschema',
    feedback_q:'Hoe ging het?',feedback_save:'Feedback opslaan',notes_q:'Notities',notes_save:'Opslaan',
    feedback_logged:'✓ Gelogd',feedback_edit:'Aanpassen',feedback_update:'Bijwerken',feedback_cancel:'Annuleren',
    select_score:'Selecteer eerst een score',
    week_km:'km gepland',week_sessions:'sessies',week_werk:'werkdagen',
    week_progress:'Weekvoortgang',week_done:'gedaan',week_feedback:'feedback',week_todo:'Nog te doen',
    type_run:'Hardlopen',type_kracht:'Kracht',type_mob:'Mobiliteit',type_race:'Race',type_werk:'Werk',type_rust:'Rust',type_herstel:'Herstel',
    days_ago:'geweest',days_today:'Vandaag!',days_label:'dagen',weeks_label:'weken',months_label:'maanden',
    hm:'Halve marathon',marathon:'Marathon',other_dist:'Vrij invoer',
    stats_total:'Totaal km',stats_done:'km in plan',stats_days:'Dagen tot race',
    stats_runs:'Runs gelogd',stats_sessions:'sessies gedaan',stats_week:'Deze week',stats_week_sub:'km tot nu toe',
    stats_feel:'Gem. gevoel',stats_feedback:'Feedback',stats_fb_sub:'sessies',stats_recent:'Recente feedback',
    no_data:'Geen data',
    race_add:'Voeg race toe +',race_name:'Race naam',race_date:'Datum',race_dist:'Afstand',race_type:'Type race',race_main:'Hoofddoel',race_save:'Race opslaan',race_delete:'Verwijderen',race_edit:'Bewerken',
    race_saved:'✓ Race opgeslagen',race_deleted:'Race verwijderd',race_required:'Naam en datum zijn verplicht',
    main_goal:'Hoofddoel',
    cal_add_race:'Voeg race toe +',races_this_month:'Races deze maand',no_races_month:'Geen races deze maand.',
    saved:'✓ Opgeslagen',
    update_available:'🔄 Update beschikbaar',update_apply:'Nu updaten',
    account_title:'Inloggen',account_hint:'Log in om je gegevens te synchroniseren (binnenkort beschikbaar).',
    email_placeholder:'naam@voorbeeld.nl',login_btn:'Inloggen',logout_btn:'Uitloggen',
    logged_in_as:'Ingelogd als',not_logged_in:'Niet ingelogd',
    edit_day:'Dag bewerken',field_titel:'Titel',field_type:'Type',field_km:'Km',field_detail:'Detail',field_emoji:'Emoji',save_changes:'Wijzigingen opslaan',
    pr_placeholder:'bijv. 37:56',
    connect_sheet:'Schema koppelen',connect_active:'Gekoppeld',connect_disconnect:'Ontkoppelen',connect_url_placeholder:'https://script.google.com/macros/s/…/exec',
    connect_hint:'Plak de URL van je gepubliceerde Google Apps Script.',connect_disconnected:'Niet gekoppeld',
    week_label:'Week',next_fase:'Volgende fase',
    add_training:'Training toevoegen',type_label:'Type',
    race_to_sheet:'Race opgeslagen in schema',race_to_sheet_err:'Race lokaal opgeslagen (geen schema)',
  },
  en:{
    today:'Today',week:'Week',plan:'Training',calendar:'Calendar',stats:'Stats',settings:'Settings',
    sg_account:'Account',sg_profile:'Profile',sg_notif:'Notifications',sg_connect:'Connection',sg_app:'App',
    your_name:'Your name',
    pr_title:'Personal records',pr_add:'Add distance',pr_none:'No records added yet.',
    lang_title:'Language',
    notif_telegram_title:'Telegram',notif_telegram:'Username',notif_hint:'Connect your Telegram account to receive daily schedules, weekly overviews and feedback reminders.',
    tg_not_linked:'Not linked',tg_linked:'Linked',tg_verify:'Start linking',tg_verifying:'Starting verification…',tg_verify_hint:'Send /start to @RunningXBot in Telegram to confirm the link.',
    schema_title:'Connect your training schedule',schema_hint:'Paste the URL of your published Google Apps Script Web App.',
    sheet_name_label:'Sheet tab name (optional)',sheet_name_hint:'Leave empty to auto-detect the first tab.',
    api_save:'Save & connect',not_connected:'Not connected',
    connected:'Connected ✓',conn_err:'Error',
    enter_url:'Enter a URL',connecting:'Testing connection…',
    goal_dist:'Distance',goal_time:'Target time',goal_race:'Race name',goal_date:'Race date',
    rest_day:'Rest day',rest_msg:'Today you recover. Tomorrow you push.',
    mob_reminder:'Mobility',mob_text:'Daily routine',
    tomorrow:'Tomorrow',setup_title:'Connect your training schedule',setup_body:'Go to Settings → Connection.',
    no_schema:'Connect your training schedule',
    feedback_q:'How did it go?',feedback_save:'Save feedback',notes_q:'Notes',notes_save:'Save',
    feedback_logged:'✓ Logged',feedback_edit:'Edit',feedback_update:'Update',feedback_cancel:'Cancel',
    select_score:'Select a score first',
    week_km:'km planned',week_sessions:'sessions',week_werk:'work days',
    week_progress:'Week progress',week_done:'done',week_feedback:'feedback',week_todo:'Still to do',
    type_run:'Running',type_kracht:'Strength',type_mob:'Mobility',type_race:'Race',type_werk:'Work',type_rust:'Rest',type_herstel:'Recovery',
    days_ago:'past',days_today:'Today!',days_label:'days',weeks_label:'weeks',months_label:'months',
    hm:'Half marathon',marathon:'Marathon',other_dist:'Custom',
    stats_total:'Total km',stats_done:'km in plan',stats_days:'Days to race',
    stats_runs:'Runs logged',stats_sessions:'sessions done',stats_week:'This week',stats_week_sub:'km so far',
    stats_feel:'Avg feeling',stats_feedback:'Feedback',stats_fb_sub:'sessions',stats_recent:'Recent feedback',
    no_data:'No data',
    race_add:'Add race +',race_name:'Race name',race_date:'Date',race_dist:'Distance',race_type:'Race type',race_main:'Main goal',race_save:'Save race',race_delete:'Delete',race_edit:'Edit',
    race_saved:'✓ Race saved',race_deleted:'Race deleted',race_required:'Name and date are required',
    main_goal:'Main goal',
    cal_add_race:'Add race +',races_this_month:'Races this month',no_races_month:'No races this month.',
    saved:'✓ Saved',
    update_available:'🔄 Update available',update_apply:'Update now',
    account_title:'Sign in',account_hint:'Sign in to sync your data (coming soon).',
    email_placeholder:'name@example.com',login_btn:'Sign in',logout_btn:'Sign out',
    logged_in_as:'Signed in as',not_logged_in:'Not signed in',
    edit_day:'Edit day',field_titel:'Title',field_type:'Type',field_km:'Km',field_detail:'Detail',field_emoji:'Emoji',save_changes:'Save changes',
    pr_placeholder:'e.g. 37:56',
    connect_sheet:'Connect schedule',connect_active:'Connected',connect_disconnect:'Disconnect',connect_url_placeholder:'https://script.google.com/macros/s/…/exec',
    connect_hint:'Paste the URL of your published Google Apps Script.',connect_disconnected:'Not connected',
    week_label:'Week',next_fase:'Next phase',
    add_training:'Add training',type_label:'Type',
    race_to_sheet:'Race saved to schedule',race_to_sheet_err:'Race saved locally (no schedule)',
  }
};

// ── STATE ────────────────────────────────────────────────────────────────────
const state={
  scriptUrl: localStorage.getItem('scriptUrl')||'',
  sheetId:    localStorage.getItem('sheetId')||'',
  sheetName: localStorage.getItem('sheetName')||'',
  lang:      localStorage.getItem('lang')||'nl',
  data:      null,
  currentTab:'today',
  selectedRating:0,
  editingFeedback:false,
  calYear:   new Date().getFullYear(),
  calMonth:  new Date().getMonth(),
  calSelectedDate:null,
  editingRaceId:null,
  weekOffset:0,
  editingRowIndex:null,
  _prs:null,_races:null,
  swReg:null,
  pendingSW:null,
  planWeekOffset:0,     // C27: week swipe offset (0 = current week)
  currentFase:null,     // C29: active fase for floating label
};

// ── HELPERS ──────────────────────────────────────────────────────────────────
const T=k=>STRINGS[state.lang]?.[k]??STRINGS.nl[k]??k;
const esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const todayStr=()=>new Date().toISOString().split('T')[0];
const parseDate=s=>new Date(s+'T00:00:00');
// Mon-first day index: JS getDay() is 0=Sun..6=Sat; our arrays are 0=Ma..6=Zo
const dayIdx=d=>(d.getDay()+6)%7;
const daysUntil=s=>{const n=new Date();n.setHours(0,0,0,0);return Math.round((parseDate(s)-n)/86400000);};

function fmtDate(s){
  const d=parseDate(s),days=state.lang==='en'?DAYS_EN:DAYS_NL,months=state.lang==='en'?MONTHS_EN:MONTHS_NL;
  return `${days[dayIdx(d)]} ${d.getDate()} ${months[d.getMonth()]}`;
}
function fmtDateFull(s){
  const d=parseDate(s),days=state.lang==='en'?DAYS_EN:DAYS_NL,mf=state.lang==='en'?MONTHS_FULL_EN:MONTHS_FULL_NL;
  return `${days[dayIdx(d)]} ${d.getDate()} ${mf[d.getMonth()]} ${d.getFullYear()}`;
}
function getMondayStr(){
  const n=new Date();n.setHours(12,0,0,0);
  const dow=n.getDay();n.setDate(n.getDate()-(dow===0?6:dow-1));
  const y=n.getFullYear(),m=String(n.getMonth()+1).padStart(2,'0'),d=String(n.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function getWeekDates(){
  // C36: always Mon-Sun
  return getWeekDatesOffset(0);
}

// C24: type resolution — comma-separated, first valid type wins for colour
function typeOf(typeStr){
  if(!typeStr)return TYPE_FALLBACK;
  const parts=typeStr.toLowerCase().split(',').map(s=>s.trim());
  for(const p of parts){
    if(TYPES[p])return TYPES[p];
  }
  return TYPE_FALLBACK;
}
// C24: check for specific type in comma-separated string
const hasType=(typeStr,key)=>typeStr?.toLowerCase().split(',').map(s=>s.trim()).includes(key)??false;
const isWork=t=>hasType(t,'werk');
const isRace=t=>hasType(t,'race');
const isRust=t=>hasType(t,'rust');
const isMob=t=>hasType(t,'mobiliteit');

function countdownDisplay(days){
  if(days<0)return{val:'✓',unit:T('days_ago')};
  if(days===0)return{val:'!',unit:T('days_today')};
  if(days<=30)return{val:days,unit:T('days_label')};
  if(days<=90)return{val:Math.round(days/7),unit:T('weeks_label')};
  return{val:Math.round(days/30),unit:T('months_label')};
}

// C25: race emoji - language-agnostic
function raceEmoji(race){
  const d=(race.dist||'').toLowerCase(),tp=(race.raceType||'').toLowerCase();
  if(tp.includes('trail')||tp.includes('ultra'))return'🏔';
  if(tp.includes('baan')||tp.includes('track'))return'🏟';
  if(d.includes('marathon')&&!d.includes('half')&&!d.includes('halve'))return'🏅';
  if(d.includes('halve')||d.includes('half')||d==='hm')return'🥈';
  if(d==='5km'||d==='5 km')return'⚡';
  if(d==='10km'||d==='10 km')return'🎯';
  return'🏁';
}

// Map raceType string → RXIcon type key
function raceTypeIconKey(raceType, dist){
  const tp=(raceType||'').toLowerCase(), d=(dist||'').toLowerCase();
  if(tp.includes('trail')||tp.includes('ultra'))return'trail';
  if(tp.includes('baan')||tp.includes('track'))return'target';
  if(d.includes('marathon')&&!d.includes('half')&&!d.includes('halve'))return'run';
  return'race';
}

// ── LOCALSTORAGE ─────────────────────────────────────────────────────────────
function loadPRs(){if(!state._prs){try{state._prs=JSON.parse(localStorage.getItem('prs')||'{}')}catch{state._prs={}}}return state._prs;}
function loadRaces(){if(!state._races){try{state._races=JSON.parse(localStorage.getItem('userRaces')||'[]')}catch{state._races=[]}}return state._races;}
function persistPRs(p){state._prs=p;localStorage.setItem('prs',JSON.stringify(p));}
function persistRaces(r){state._races=r;localStorage.setItem('userRaces',JSON.stringify(r));}

// ── SERVICE WORKER ───────────────────────────────────────────────────────────
function initServiceWorker(){
  if(!('serviceWorker' in navigator))return;
  navigator.serviceWorker.register('./sw.js').then(reg=>{
    state.swReg=reg;
    // Check for waiting SW immediately
    if(reg.waiting)onSWWaiting(reg.waiting);
    reg.addEventListener('updatefound',()=>{
      const nw=reg.installing;
      nw.addEventListener('statechange',()=>{
        if(nw.state==='installed'&&navigator.serviceWorker.controller)
          onSWWaiting(nw);
      });
    });
  }).catch(()=>{});
  // Listen for message from SW that it has claimed clients after skipWaiting
  navigator.serviceWorker.addEventListener('controllerchange',()=>{
    window.location.reload();
  });
}

function onSWWaiting(sw){
  state.pendingSW=sw;
  const banner=document.getElementById('updateBanner');
  if(banner){
    document.getElementById('updateBannerText').textContent=T('update_available');
    banner.querySelector('button').textContent=T('update_apply');
    banner.style.display='flex';
  }
}

function applyUpdate(){
  if(state.pendingSW){
    state.pendingSW.postMessage({type:'SKIP_WAITING'});
  }
}

// ── DATA LAYER ────────────────────────────────────────────────────────────────
// All sheet writes use rowIndex as the stable identifier.
// state.data rows include rowIndex from the API.

function apiParams(extra={}){
  const p=new URLSearchParams({...extra});
  if(state.sheetId)p.set('sheetId',state.sheetId);
  if(state.sheetName)p.set('sheetName',state.sheetName);
  return p;
}

async function apiCall(params){
  if(!state.scriptUrl)throw new Error('Geen schema gekoppeld');
  const res=await fetch(state.scriptUrl+'?'+params);
  if(!res.ok)throw new Error('HTTP '+res.status);
  const json=await res.json();
  if(json.status!=='ok')throw new Error(json.message||'Onbekende fout');
  return json;
}

async function fetchData(){
  if(!state.scriptUrl){hideLoading();renderActiveView();renderHeader();return;}
  try{
    const json=await apiCall(apiParams({action:'getAll'}));
    state.data=json.rows; // each row has rowIndex
    updateConnectionStatus(true);
  }catch(e){updateConnectionStatus(false,e.message);}
  hideLoading();renderActiveView();renderHeader();
}

// Add a new row — always appends, sheet sorts by date server-side
async function sheetAddRow(fields){
  await apiCall(apiParams({action:'addRow',...fields}));
  // Re-fetch to get correct rowIndexes after server-side sort
  await fetchData();
}

// Update existing row by rowIndex
async function sheetUpdateRow(rowIndex,fields){
  await apiCall(apiParams({action:'updateRow',rowIndex:String(rowIndex),...fields}));
  // Re-fetch after sort (date edit could change order)
  await fetchData();
}

// Delete row by rowIndex
async function sheetDeleteRow(rowIndex){
  await apiCall(apiParams({action:'deleteRow',rowIndex:String(rowIndex)}));
  if(state.data)state.data=state.data.filter(r=>r.rowIndex!==rowIndex);
  // Re-index: rows below the deleted one shift up
  if(state.data)state.data.forEach(r=>{if(r.rowIndex>rowIndex)r.rowIndex--;});
}

async function submitFeedback(datum,rating,tekst){
  if(!state.scriptUrl){showToast('❌ '+T('enter_url'));return false;}
  try{
    // Find the rowIndex of the first trainable row for this datum
    const row=state.data?.find(r=>r.datum===datum&&r.type!=='werk'&&r.type!=='rust');
    const extra=row?.rowIndex?{rowIndex:String(row.rowIndex)}:{};
    const json=await apiCall(apiParams({action:'setFeedback',datum,rating,tekst:tekst||'',...extra}));
    if(row){const e=['😵','😓','😐','💪','🔥'];row.feedback=`${rating}/5 ${e[rating-1]}${tekst?' – '+tekst:''}`;}
    showToast('✓ '+T('feedback_logged'));return true;
  }catch(e){showToast('❌ '+e.message);return false;}
}

// ── RENDER DISPATCH ───────────────────────────────────────────────────────────
function renderActiveView(){
  switch(state.currentTab){
    case 'today':    renderToday();break;
    case 'week':     renderWeek();break;
    case 'plan':     renderPlan();break;
    case 'calendar': renderCalendar();break;
    case 'settings': renderSettingsFields();break;
  }
}

// ── THEME ─────────────────────────────────────────────────────────────────────
function applyTheme(){
  document.documentElement.dataset.theme=state.theme;
  document.querySelector('#themeBtnDark')?.classList.toggle('active',state.theme==='dark');
  document.querySelector('#themeBtnLight')?.classList.toggle('active',state.theme==='light');
}
function setTheme(t){
  state.theme=t;localStorage.setItem('theme',t);
  applyTheme();
}

// ── HEADER ────────────────────────────────────────────────────────────────────
function openDayFromRacesBar(datum){
  // C39: navigate to Training tab and open day detail
  switchTab('plan');
  setTimeout(()=>openDayModal(datum),150);
}

function renderHeader(){
  const name=localStorage.getItem('userName')||'';
  document.getElementById('topbarName').textContent=name;
  renderRacesBar();
}

function renderRacesBar(){
  const bar=document.getElementById('racesBar');if(!bar)return;
  // C38: sheet primary, localStorage fallback
  let sheetRaces=(state.data||[])
    .filter(r=>isRace(r.type)&&r.datum)
    .sort((a,b)=>a.datum.localeCompare(b.datum))
    .filter(r=>daysUntil(r.datum)>=-1)
    .slice(0,4);
  if(!sheetRaces.length&&!state.scriptUrl){
    // No sheet — use localStorage races
    sheetRaces=loadRaces()
      .filter(r=>daysUntil(r.date)>=-1)
      .sort((a,b)=>a.date.localeCompare(b.date))
      .slice(0,4)
      .map(r=>({datum:r.date,titel:r.name,km:r.dist}));
  }
  if(!sheetRaces.length){
    bar.innerHTML='';
    return;
  }

  let h='';
  sheetRaces.forEach(r=>{
    const cd=countdownDisplay(daysUntil(r.datum));
    // C39: smaller chips, click opens day in training tab
    const goalMatch=(r.detail||'').match(/Doel:\s*([0-9:]+)/);
    const goalStr=goalMatch?goalMatch[1]:'';
    const dist=(r.km||'').trim();
    // Parse raceType from detail: "dist · raceType · Doel: xx"
    const detailParts=(r.detail||'').split('·').map(s=>s.trim()).filter(s=>!s.startsWith('Doel:'));
    const chipRaceType=detailParts.length>1?detailParts[1]:'';
    const iconKey=raceTypeIconKey(chipRaceType,dist);
    h+=`<div class="rb-item" onclick="openDayFromRacesBar('${r.datum}')" style="cursor:pointer">
      <div class="rb-title">${esc(r.titel||r.datum)}</div>
      ${dist?`<div class="rb-meta">${esc(dist)} km</div>`:''}
      <div style="margin:2px 0">${RXIcon(iconKey,14,'var(--race-text)','var(--race-text)')}</div>
      ${goalStr?`<div class="rb-goal">🎯 ${esc(goalStr)}</div>`:''}
      <div class="rb-countdown">${cd.val}<span>${cd.unit}</span></div>
    </div>`;
  });
  // C50: always show + to add race
  h+=`<div class="rb-add" onclick="openRaceModal()" style="flex-shrink:0">+</div>`;
  bar.innerHTML=h;
}

// ── TODAY ─────────────────────────────────────────────────────────────────────
function renderToday(){
  const el=document.getElementById('todayContent');
  const t=todayStr();
  const days=state.lang==='en'?DAYS_EN:DAYS_NL;
  const mf=state.lang==='en'?MONTHS_FULL_EN:MONTHS_FULL_NL;
  const d=parseDate(t);

  // fase from data
  let faseKicker='';
  if(state.data){const tr=state.data.find(r=>r.datum===t);if(tr?.fase)faseKicker=tr.fase;}
  // C34: if today is a race day, reflect that
  const todayIsRace=state.data?.some(r=>r.datum===t&&isRace(r.type));

  const kicker=`${days[dayIdx(d)]} ${d.getDate()} ${mf[d.getMonth()]}${faseKicker?' · '+faseKicker:''}`;
  let h=`<div class="page-title"><div><div class="pt-kicker">${kicker}</div><div class="pt-h">Vandaag</div></div><button onclick="openAddActivity('${t}')" style="width:32px;height:32px;border-radius:50%;background:var(--run-text);color:#fff;border:none;cursor:pointer;font-size:22px;font-weight:300;line-height:1;display:flex;align-items:center;justify-content:center;flex-shrink:0;-webkit-tap-highlight-color:transparent">+</button></div>`;

  if(!state.data){
    h+=`<div style="padding:0 16px">`;
    h+=noSchemaHint();
    h+=`<div class="mob-reminder"><div class="mob-title">${T('mob_reminder')}</div><div class="mob-text">${T('mob_text')}</div></div></div>`;
    el.innerHTML=h;return;
  }

  const todayRows=state.data.filter(r=>r.datum===t);
  const row=todayRows[0]||null;
  h+=`<div style="padding:0 16px">`;

  if(!row||isRust(row.type)){
    h+=`<div class="card">
      <div class="rest-card-inner">
        <div class="rest-emoji">😴</div>
        <div><div class="rest-title">${T('rest_day')}</div><div class="rest-sub">${T('rest_msg')}</div></div>
      </div>
    </div>`;
  }else{
    // Render ALL today rows
    const activeRows=todayRows.filter(r=>!isRust(r.type));
    activeRows.forEach(row=>{
      const ti=typeOf(row.type);
      const isRun=hasType(row.type,'run');
      const border=isWork(row.type)?'work-border':isRace(row.type)?'race-border':'';
      const detail=row.detail||'';
      const paceMatch=detail.match(/(\d+:\d+)[–-]?(\d+:\d+)?\/km/);
      const hrMatch=detail.match(/<?\s*(\d+)\s*bpm/i)||detail.match(/HR\s*<?(\d+)/i);
      h+=`<div class="card ${border}" onclick="openDayModalRow(${row.rowIndex},'${t}')" style="padding:16px 16px 14px;cursor:pointer;-webkit-tap-highlight-color:transparent;margin-bottom:8px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div style="font-family:var(--font-m);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;color:${ti.text}">${T(ti.i18n)}${row.titel?' · '+esc(row.titel):''}</div>
          <div style="width:28px;height:28px;background:var(--bg);border:1px solid var(--border);display:flex;align-items:center;justify-content:center">${RXIcon(row.type?.split(',')[0].trim()||'run',16,'var(--text)','var(--accent)')}</div>
        </div>`;
      if(row.km&&isRun){
        h+=`<div style="font-family:var(--font-d);font-weight:800;font-size:44px;letter-spacing:-1px;line-height:1;margin-top:10px">${esc(row.km)} KM<span style="color:var(--accent)">.</span></div>`;
        if(paceMatch||hrMatch){
          h+=`<div class="run-metric-row">`;
          if(paceMatch)h+=`<div><div class="run-metric-label">PACE</div><div class="run-metric-val">${esc(paceMatch[0].replace('/km',''))}<span class="run-metric-unit">/km</span></div></div>`;
          if(hrMatch)h+=`<div><div class="run-metric-label">HR</div><div class="run-metric-val">&lt;${esc(hrMatch[1])}<span class="run-metric-unit">bpm</span></div></div>`;
          h+=`</div>`;
        }
      }else if(row.km){
        h+=`<div style="font-family:var(--font-d);font-weight:800;font-size:36px;line-height:1;margin-top:8px">${esc(row.km)} KM</div>`;
      }
      if(detail){h+=`<div style="font-family:var(--font-m);font-size:11px;color:var(--muted);margin-top:12px;line-height:1.5;padding-top:12px;border-top:1px solid var(--border)">${esc(detail)}</div>`;}
      if(!row.feedback&&isRun){h+=`<button class="btn-cta">Start run →</button>`;}
      h+=`</div>`;
    });
    // Feedback is per-day — show once, after all activity cards
    const fbRow=activeRows.find(r=>!isWork(r.type));
    if(fbRow)h+=feedbackHtml(fbRow.datum,fbRow.feedback);
  }

  // Tomorrow — compact
  const tmrDate=new Date();tmrDate.setDate(tmrDate.getDate()+1);
  const tmr=state.data.find(r=>r.datum===tmrDate.toISOString().split('T')[0]);
  if(tmr){
    h+=`<div class="card" style="padding:14px 16px">
      <div style="font-family:var(--font-m);font-size:9px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;font-weight:600;margin-bottom:6px">${T('tomorrow')} · ${days[dayIdx(tmrDate)]} ${tmrDate.getDate()}</div>
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:28px;height:28px;background:var(--bg);border:1px solid var(--border);display:flex;align-items:center;justify-content:center">${RXIcon(tmr.type?.split(',')[0].trim()||'rust',14,'var(--muted)','var(--accent)')}</div>
        <div style="font-family:var(--font-d);font-weight:700;font-size:16px;flex:1">${esc(tmr.titel||'')}</div>
        ${tmr.km?`<div style="font-family:var(--font-m);font-size:10px;color:var(--accent)">${esc(tmr.km)} km</div>`:''}
      </div>
    </div>`;
  }

  if(!row||isMob(row?.type)){
    h+=`<div class="mob-reminder"><div class="mob-title">${T('mob_reminder')}</div><div class="mob-text">${T('mob_text')}</div></div>`;
  }

  h+=`</div>`;
  el.innerHTML=h;
  attachStarListeners();
}

function noSchemaHint(){
  return `<div class="no-connection-hint" onclick="switchTab('settings')">
    <div class="nch-icon">📋</div>
    <div><div class="nch-text">${T('setup_title')}</div><div class="nch-link">${T('setup_body')}</div></div>
  </div>`;
}

// ── FEEDBACK ──────────────────────────────────────────────────────────────────
function feedbackHtml(datum,existing){
  const isEdit=!!existing;let rating=0,text='';
  if(isEdit){const m=existing.match(/^(\d)/);if(m)rating=parseInt(m[1]);const mt=existing.match(/–\s*(.+)$/);if(mt)text=mt[1];}
  if(isEdit&&!state.editingFeedback){
    return `<div class="prev-feedback">
      <div class="prev-feedback-header">
        <span class="prev-feedback-label">${T('feedback_logged')}</span>
        <button class="edit-link" onclick="state.editingFeedback=true;renderToday()">${T('feedback_edit')}</button>
      </div>
      <div class="prev-feedback-text">${esc(existing)}</div>
    </div>`;
  }
  const stars=['😵','😓','😐','💪','🔥'].map((e,i)=>
    `<button class="star-btn${rating>0&&(i+1)<=rating?' active':''}" data-val="${i+1}">${e}</button>`
  ).join('');
  return `<div class="feedback-section">
    <div class="feedback-title">${T('feedback_q')}</div>
    <div class="feedback-stars">${stars}</div>
    <textarea class="feedback-textarea" id="feedbackText">${esc(text)}</textarea>
    <button class="btn-primary" id="submitBtn" onclick="handleFeedbackSubmit('${esc(datum)}')">${isEdit?T('feedback_update'):T('feedback_save')}</button>
    ${isEdit?`<button class="btn-secondary" onclick="state.editingFeedback=false;renderToday()">${T('feedback_cancel')}</button>`:''}
  </div>`;
}

function attachStarListeners(scope){
  const sel=scope?`#${scope} .star-btn`:'.star-btn';
  document.querySelectorAll(sel).forEach(btn=>{
    btn.addEventListener('click',()=>{
      state.selectedRating=parseInt(btn.dataset.val);
      document.querySelectorAll(sel).forEach(b=>b.classList.toggle('active',parseInt(b.dataset.val)<=state.selectedRating));
    });
  });
}

async function handleFeedbackSubmit(datum){
  if(!state.selectedRating){showToast(T('select_score'));return;}
  const btn=document.getElementById('submitBtn');
  const tekst=document.getElementById('feedbackText')?.value||'';
  btn.disabled=true;btn.textContent='…';
  const ok=await submitFeedback(datum,state.selectedRating,tekst);
  if(ok){state.editingFeedback=false;state.selectedRating=0;setTimeout(renderToday,800);}
  else{btn.disabled=false;btn.textContent=T('feedback_save');}
}

// ── WEEK ──────────────────────────────────────────────────────────────────────
function renderWeek(){
  const el=document.getElementById('weekContent');
  const offset=state.weekOffset||0;
  const dates=getWeekDatesOffset(offset);
  const t=todayStr();
  const days=state.lang==='en'?DAYS_EN:DAYS_NL;
  const wd=dates.map(d=>({date:d,rows:(state.data||[]).filter(r=>r.datum===d),row:(state.data||[]).find(r=>r.datum===d)??null}));
  const d0=parseDate(dates[0]),d6=parseDate(dates[6]);
  const mf=state.lang==='en'?MONTHS_FULL_EN:MONTHS_FULL_NL;
  const months=state.lang==='en'?MONTHS_EN:MONTHS_NL;
  // Week number (ISO)
  const jan4=new Date(d0.getFullYear(),0,4);
  const weekNum=Math.ceil(((d0-jan4)/86400000+jan4.getDay()+1)/7);
  const weekLabel=`${d0.getDate()}–${d6.getDate()} ${months[d0.getMonth()]}`;
  const plannedKm=wd.reduce((s,{rows})=>s+rows.reduce((a,r)=>a+(parseFloat(r.km)||0),0),0);
  const doneKm=wd.filter(({date})=>date<=t).reduce((s,{rows})=>s+rows.reduce((a,r)=>a+(parseFloat(r.km)||0),0),0);
  const workDays=wd.filter(({rows})=>rows.some(r=>isWork(r.type))).length;
  const fbDone=wd.filter(({rows})=>rows.some(r=>r.feedback)).length;
  const pct=plannedKm>0?Math.min(100,Math.round(doneKm/plannedKm*100)):0;

  let h=`<div class="page-title" style="padding:14px 20px 4px">
    <div><div class="pt-kicker">Week ${weekNum}</div><div class="pt-h">${weekLabel}</div></div>
    <div style="text-align:right">
      <div style="font-family:var(--font-d);font-weight:800;font-size:26px;color:var(--accent);line-height:1">${plannedKm.toFixed(0)}<span style="color:var(--muted);font-size:12px">km</span></div>
      <div style="font-family:var(--font-m);font-size:9px;color:var(--muted);letter-spacing:1px">GEPLAND</div>
    </div>
  </div>
  <div style="display:flex;gap:4px;padding:0 20px 8px;align-items:center">
    <button onclick="state.weekOffset=(state.weekOffset||0)-1;renderWeek()" style="background:transparent;border:1px solid var(--border);padding:4px 10px;color:var(--muted);cursor:pointer;font-family:var(--font-d);font-size:16px;-webkit-tap-highlight-color:transparent">‹</button>
    ${offset!==0?`<button onclick="state.weekOffset=0;renderWeek()" style="background:transparent;border:1px solid var(--border);padding:4px 10px;color:var(--muted);cursor:pointer;font-family:var(--font-m);font-size:9px;letter-spacing:1px;text-transform:uppercase">Nu</button>`:''}
    <div style="flex:1"></div>
    <button onclick="state.weekOffset=(state.weekOffset||0)+1;renderWeek()" style="background:transparent;border:1px solid var(--border);padding:4px 10px;color:var(--muted);cursor:pointer;font-family:var(--font-d);font-size:16px;-webkit-tap-highlight-color:transparent">›</button>
  </div>
  <div id="weekSwipeWrap" style="padding:0 20px">
  <div style="margin-bottom:12px">
    <div style="display:flex;justify-content:space-between;margin-bottom:8px">
      <span style="font-family:var(--font-m);font-size:9px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;font-weight:600">${T('week_progress')}</span>
      <span style="font-family:var(--font-m);font-size:10px;color:var(--text)">${doneKm.toFixed(1)} / ${plannedKm.toFixed(0)} km</span>
    </div>
    <div style="height:6px;background:var(--surface);border:1px solid var(--border);position:relative">
      <div style="position:absolute;inset:0;width:${pct}%;background:var(--accent)"></div>
    </div>
    <div style="display:flex;justify-content:space-between;margin-top:6px">
      <span style="font-family:var(--font-m);font-size:9px;color:${pct===100?'var(--accent)':'var(--muted)'}">${pct}%</span>
      <span style="font-family:var(--font-m);font-size:9px;color:var(--muted)">${fbDone>0?`✓ ${fbDone} feedback · `:''}${workDays>0?`${workDays} werk`:''}</span>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:12px">`;

  wd.forEach(({date,row})=>{
    const isT=date===t,isPast=date<t,d=parseDate(date);
    const ti=row?typeOf(row.type):null;
    const isWorkDay=isWork(row?.type);
    let status='';
    if(row?.feedback)status=`<div style="font-family:var(--font-m);font-size:9px;color:var(--accent)">✓${row.km?' '+parseFloat(row.km).toFixed(0)+'k':''}</div>`;
    // C44: werk shows label, no dot
    else if(isWorkDay)status=`<div style="font-family:var(--font-m);font-size:8px;color:var(--work-text);letter-spacing:0.5px">werk</div>`;
    else if(row?.km)status=`<div style="font-family:var(--font-m);font-size:9px;color:var(--muted)">${parseFloat(row.km).toFixed(0)}k</div>`;
    const dot=ti&&!status&&!isWorkDay?`<div style="width:5px;height:5px;border-radius:50%;background:${isPast?'var(--faint)':ti.text};margin-top:4px"></div>`:'';
    // C44: no accent border for work days
    // C45: past days are faded; C46: click highlights day row below
    h+=`<div data-week-tile="${date}" onclick="weekTileClick('${date}')" style="background:${isT?'var(--bg)':'var(--surface)'};border:1px solid ${isT?'var(--accent)':'var(--border)'};padding:8px 2px 10px;text-align:center;min-height:72px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;opacity:${isPast&&!isT?0.45:1};cursor:pointer;transition:border-color 0.15s">
      <div>
        <div style="font-family:var(--font-m);font-size:8px;color:var(--muted);letter-spacing:0.5px">${days[dayIdx(d)]}</div>
        <div style="font-family:var(--font-d);font-weight:800;font-size:16px;color:${isT?'var(--accent)':'var(--text)'};margin-top:2px">${d.getDate()}</div>
      </div>
      ${status||dot}
    </div>`;
  });
  h+=`</div>`;

  if(!state.data){h+=noSchemaHint();}
  else{
    // Week: show active days (exclude rust/werk), include past days greyed
    // All active rows grouped by date
    const activeDays=wd.map(({date,rows})=>({date,activeRows:rows.filter(r=>r.type&&!isWork(r.type)&&!isRust(r.type))})).filter(({activeRows})=>activeRows.length);
    if(activeDays.length){
      h+=`<div style="font-family:var(--font-m);font-size:9px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;font-weight:600;margin-bottom:8px">${T('week_todo')}</div>`;
      activeDays.forEach(({date,activeRows})=>{
        const isTdy=date===t,isPastDay=date<t,d=parseDate(date);
        h+=`<div data-upcoming-date="${date}" style="background:var(--surface);border:1px solid ${isTdy?'var(--accent)':'var(--border)'};padding:12px;margin-bottom:6px;opacity:${isPastDay&&!isTdy?0.45:1};transition:border-color 0.2s">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:${activeRows.length>1?'10':'0'}px">
            <div style="text-align:center;min-width:36px;padding-right:10px;border-right:1px solid var(--border);flex-shrink:0">
              <div style="font-family:var(--font-m);font-size:9px;color:var(--muted)">${days[dayIdx(d)]}</div>
              <div style="font-family:var(--font-d);font-weight:800;font-size:18px;color:${isTdy?'var(--accent)':'var(--text)'}">${d.getDate()}</div>
            </div>
            <div style="flex:1;min-width:0">
              ${activeRows.map((row,i)=>{const ti=typeOf(row.type);return`<div onclick="openDayModalRow(${row.rowIndex},'${date}')" style="display:flex;align-items:center;gap:8px;cursor:pointer;padding:${i>0?'8px 0 0':0};${i>0?'border-top:1px solid var(--border);margin-top:8px':''}">
                <div style="width:18px;height:18px;flex-shrink:0">${RXIcon(row.type?.split(',')[0].trim()||'rust',16,'var(--muted)','var(--accent)')}</div>
                <div style="flex:1;min-width:0">
                  <div style="font-family:var(--font-m);font-size:9px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:${ti.text}">${T(ti.i18n)}</div>
                  <div style="font-family:var(--font-d);font-weight:700;font-size:14px">${esc(row.titel||'')}</div>
                </div>
                ${row.km?`<div style="font-family:var(--font-m);font-size:10px;color:var(--accent);flex-shrink:0">${esc(row.km)}km</div>`:''}
              </div>`;}).join('')}
            </div>
          </div>
        </div>`;
      });
    }
  }
  h+=`</div>`;
  el.innerHTML=h;
  requestAnimationFrame(()=>initWeekSwipe());
}

// ── PLAN ──────────────────────────────────────────────────────────────────────
function renderPlan(){
  const el=document.getElementById('planContent');
  const titleEl=document.getElementById('planPageTitle');
  const t=todayStr();

  // PageTitle — C34: sheet races
  if(titleEl){
    const sheetRaceRows=(state.data||[]).filter(r=>isRace(r.type)&&r.datum).sort((a,b)=>a.datum.localeCompare(b.datum));
    const nextRace=sheetRaceRows.find(r=>daysUntil(r.datum)>=0);
    const _cd=nextRace?countdownDisplay(daysUntil(nextRace.datum)):null;
    const kicker=nextRace?`Next race: ${esc(nextRace.titel||nextRace.datum)} · ${_cd.val} ${_cd.unit}`:'Training';
    titleEl.innerHTML=`<div class="page-title"><div><div class="pt-kicker">${kicker}</div><div class="pt-h">Training</div></div></div>`;
  }

  if(!state.data){renderPlanWithoutData(t);return;}

  const allRows=state.data.filter(r=>r.datum);
  if(!allRows.length){el.innerHTML=`<div class="no-data">${T('no_data')}</div>`;document.getElementById('phaseTabs').innerHTML='';return;}

  const faseValues=[...new Set(allRows.map(r=>r.fase||'').filter(Boolean))];
  const phaseTabs=document.getElementById('phaseTabs');

  // C49: type filter state
  if(!state.planTypeFilter)state.planTypeFilter='all';

  if(faseValues.length>0){
    // Determine active fase
    let activeFase=state.currentFase||phaseTabs.querySelector('.phase-tile.active')?.dataset.fase||faseValues[0];
    if(!faseValues.includes(activeFase))activeFase=faseValues[0];
    state.currentFase=activeFase;

    // Phase strip v4: 4 equal tiles
    phaseTabs.innerHTML=faseValues.map((f,i)=>{
      const shortName=f.replace(/^Fase\s*\d+\s*[·–-]\s*/i,'').trim()||f;
      const faseNum=f.match(/\d+/)?.[0]||String(i+1);
      return `<div class="phase-tile${f===activeFase?' active':''}" onclick="selectFase(this,'${esc(f)}')" data-fase="${esc(f)}">
        <div class="phase-tile-name">F${faseNum}</div>
        <div class="phase-tile-sub">${esc(shortName)}</div>
      </div>`;
    }).join('');

    // Floating fase badge (top-right sticky)
    const faseBadge=`<div class="fase-badge" id="faseBadge">${esc(activeFase)}</div>`;

    const filteredRows=state.planTypeFilter&&state.planTypeFilter!=='all'
      ?allRows.filter(r=>r.fase===activeFase&&hasType(r.type,state.planTypeFilter))
      :allRows.filter(r=>r.fase===activeFase);
    renderPlanRows(filteredRows,t,faseBadge);
  }else{
    phaseTabs.innerHTML='';
    renderPlanRows(allRows,t,'');
  }
}

function buildPhaseTabs(values){
  document.getElementById('phaseTabs').innerHTML=values.map((f,i)=>
    `<button class="phase-tab${i===0?' active':''}" data-fase="${esc(f)}">${esc(f)}</button>`
  ).join('');
}

function renderPlanWithoutData(t){
  // C22: show current week structure, editable, without schema
  const dates=getWeekDates();
  const days=state.lang==='en'?DAYS_EN:DAYS_NL;
  document.getElementById('phaseTabs').innerHTML='';
  let h=`<div style="margin-bottom:10px">${noSchemaHint()}</div><div class="plan-table">`;
  dates.forEach(date=>{
    const isPast=date<t,isTdy=date===t,d=parseDate(date);
    const rowId='pr-empty-'+date;
    h+=`<div>
      <div class="plan-row${isTdy?' is-today':''}${isPast?' is-past':''}" onclick="openDayModal('${date}')">
        <div class="plan-row-date"><strong>${days[dayIdx(d)]} ${d.getDate()}</strong>${MONTHS_NL[d.getMonth()]}</div>
        <div class="plan-row-emoji">·</div>
        <div class="plan-row-body"><div class="plan-row-title" style="color:var(--faint)">—</div></div>
        <div class="plan-row-km"></div>
      </div>
    </div>`;
  });
  h+='</div>';
  document.getElementById('planContent').innerHTML=h;
}

function selectFase(btn,fase){
  state.currentFase=fase;
  document.querySelectorAll('#phaseTabs .phase-tile').forEach(b=>b.classList.toggle('active',b.dataset.fase===fase));
  const badge=fase?`<div class="fase-badge">${esc(fase)}</div>`:'';
  renderPlanRows((state.data||[]).filter(r=>(r.fase||'')===(fase||'')),todayStr(),badge);
}

function renderPlanRows(rows,t,faseBadge=''){
  const el=document.getElementById('planContent');
  if(!rows.length){el.innerHTML=`<div class="no-data">${T('no_data')}</div>`;return;}

  // C49: type filter pills
  const activeTypes=[...new Set(rows.map(r=>r.type?.split(',')[0].trim()).filter(Boolean))];
  let filterH='';
  if(activeTypes.length>1){
    const types=['all',...activeTypes];
    filterH=`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">`;
    types.forEach(tp=>{
      const isAll=tp==='all';
      const active=state.planTypeFilter===tp||(isAll&&(!state.planTypeFilter||state.planTypeFilter==='all'));
      const label=isAll?'Alles':T(TYPES[tp]?.i18n||tp);
      const icon=isAll?'':RXIcon(tp,14,active?'#000':'var(--muted)',active?'#000':'var(--accent)');
      filterH+=`<button onclick="state.planTypeFilter='${tp}';renderPlan()" style="display:flex;align-items:center;gap:4px;padding:5px 10px;background:${active?'var(--accent)':'var(--surface)'};border:1px solid ${active?'var(--accent)':'var(--border)'};color:${active?'#000':'var(--muted)'};font-family:var(--font-m);font-size:9px;letter-spacing:1px;text-transform:uppercase;cursor:pointer;-webkit-tap-highlight-color:transparent">${icon}${label}</button>`;
    });
    filterH+='</div>';
  }

  let h=(faseBadge||'')+filterH;
  let lastFase=null;

  // swipe + scroll container
  h+='<div class="plan-swipe-wrapper" id="planSwipeWrapper"><div class="plan-swipe-inner" id="planSwipeInner">';
  h+='<div class="plan-table">';

  rows.forEach(row=>{
    const isPast=row.datum<t,isTdy=row.datum===t,work=isWork(row.type),ti=typeOf(row.type);
    const parts=fmtDate(row.datum).split(' ');
    const rowId='pr-'+(row.rowIndex||row.datum);

    // C29: insert floating fase label when fase changes
    if(row.fase&&row.fase!==lastFase){
      h+=`</div><div class="fase-float">${esc(row.fase)}</div><div class="plan-table" style="border-top:none;border-radius:0 0 6px 6px">`;
      lastFase=row.fase;
    }else if(!lastFase&&!row.fase){
      // no fase at all, normal rendering
    }

    h+=`<div>
      <div class="plan-row${isPast?' is-past':''}${isTdy?' is-today':''}${work?' is-work':''}" onclick="togglePlanRow('${rowId}','${row.datum}')" style="padding:12px 12px">
        <div class="plan-row-date"><strong>${parts[0]} ${parts[1]}</strong>${parts[2]}</div>
        <div class="plan-row-emoji">${RXIcon(row.type?.split(',')[0].trim()||'rust',16,'var(--muted)','var(--accent)')}</div>
        <div class="plan-row-body"><div class="plan-row-title" style="font-size:16px;font-weight:700">${esc(row.titel||'—')}</div></div>
        ${row.km?`<div class="plan-row-km">${esc(row.km)}km</div>`:'<div class="plan-row-km"></div>'}
        ${row.feedback?'<div class="plan-row-feedback"></div>':''}
      </div>
      <div class="plan-row-detail" id="${rowId}">
        <span class="badge" style="background:${ti.bg};color:${ti.text};margin-bottom:6px">${T(ti.i18n)}</span>
        ${row.detail?`<div style="margin-top:4px;color:var(--muted)">${esc(row.detail)}</div>`:''}
        ${row.feedback?`<div class="plan-feedback-text">✓ ${esc(row.feedback)}</div>`:''}
        <button style="margin-top:8px;background:none;border:1px solid var(--border);padding:5px 12px;color:var(--muted);font-family:var(--font-m);font-size:9px;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:color 0.12s,border-color 0.12s" onmouseover="this.style.color='var(--accent)';this.style.borderColor='var(--accent)'" onmouseout="this.style.color='';this.style.borderColor=''" onclick="openDayModalRow(${row.rowIndex},'${row.datum}');event.stopPropagation()">Bewerken</button>
      </div>
    </div>`;
  });

  h+='</div>';

  // C29: next-fase nudge at bottom
  const faseValues=state.data?[...new Set(state.data.map(r=>r.fase||'').filter(Boolean))]:[];
  const activeFase=document.getElementById('phaseTabs')?.querySelector('.phase-tile.active')?.dataset.fase;
  if(activeFase&&faseValues.length>1){
    const idx=faseValues.indexOf(activeFase);
    if(idx<faseValues.length-1){
      const nextFase=faseValues[idx+1];
      h+=`<div class="fase-next-nudge" onclick="selectFaseByName('${esc(nextFase)}')">
        <span style="color:var(--faint);margin-right:4px">${esc(T('next_fase'))}:</span> ${esc(nextFase)}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>`;
    }
  }

  h+='</div></div>'; // close swipe-inner + swipe-wrapper
  el.innerHTML=h;
  requestAnimationFrame(()=>{
    el.querySelector('.is-today')?.scrollIntoView({behavior:'smooth',block:'center'});
    initPlanSwipe();
  });
}

function togglePlanRow(id){
  const detail=document.getElementById(id);if(!detail)return;
  const isOpen=detail.classList.contains('open');
  document.querySelectorAll('.plan-row-detail.open').forEach(d=>d.classList.remove('open'));
  if(!isOpen)detail.classList.add('open');
}

// navigate to fase by name
function selectFaseByName(fase){
  const tile=document.querySelector(`#phaseTabs .phase-tile[data-fase="${CSS.escape(fase)}"]`);
  if(tile)selectFase(tile,fase);
}

// C27: swipe gesture for Training tab
function initPlanSwipe(){
  const wrapper=document.getElementById('planSwipeWrapper');
  if(!wrapper)return;
  let startX=0,startY=0,dragging=false;
  wrapper.addEventListener('touchstart',e=>{
    startX=e.touches[0].clientX;startY=e.touches[0].clientY;dragging=true;
  },{passive:true});
  wrapper.addEventListener('touchend',e=>{
    if(!dragging)return;dragging=false;
    const dx=e.changedTouches[0].clientX-startX;
    const dy=e.changedTouches[0].clientY-startY;
    if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>40){
      swipePlanFase(dx<0?1:-1);
    }
  },{passive:true});
}

function swipePlanFase(dir){
  if(!state.data)return;
  const faseValues=[...new Set(state.data.map(r=>r.fase||'').filter(Boolean))];
  if(faseValues.length<=1)return;
  const phaseTabs=document.getElementById('phaseTabs');
  const active=phaseTabs?.querySelector('.phase-tile.active');
  if(!active)return;
  const idx=faseValues.indexOf(active.dataset.fase);
  const next=faseValues[idx+dir];
  if(next===undefined)return;
  const btn=phaseTabs.querySelector(`[data-fase="${CSS.escape(next)}"]`);
  if(btn)selectFase(btn,next);
}

// ── DAY MODAL (C22 + C28) ─────────────────────────────────────────────────────
function openDayModal(dateStr,targetRowIndex){
  // C34: support multiple rows per date
  const rows=state.data?.filter(r=>r.datum===dateStr)||[];
  // If targetRowIndex given, show that specific row; else show all
  // Priority: state.editingRowIndex > targetRowIndex > first row
  const resolvedIdx=state.editingRowIndex||targetRowIndex||null;
  const row=resolvedIdx
    ?rows.find(r=>r.rowIndex===resolvedIdx)||rows[0]||null
    :rows[0]||null;
  const t=todayStr(),isPast=dateStr<=t;
  const ti=row?typeOf(row.type):null;
  const content=document.getElementById('dayModalContent');
  state.editingFeedback=false;state.selectedRating=0;

  // C37: date kicker + title layout
  const d=parseDate(dateStr);
  const dayNames=state.lang==='en'?DAYS_EN:DAYS_NL;
  const mNames=state.lang==='en'?MONTHS_FULL_EN:MONTHS_FULL_NL;
  let h=`<div style="margin-bottom:16px">
    <div style="font-family:var(--font-m);font-size:9px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px">${dayNames[dayIdx(d)]} · ${mNames[d.getMonth()]} ${d.getFullYear()}</div>
    <div style="font-family:var(--font-d);font-weight:800;font-size:28px;line-height:1;text-transform:uppercase">${d.getDate()} ${mNames[d.getMonth()]}</div>
  </div>`;

  if(!row){
    // C28: empty day — type picker at top, then training details, notes at bottom (smaller)
    const typeOptions=Object.entries(TYPES).map(([k,v])=>
      `<option value="${k}"${k==='rust'?' selected':''}>${T(v.i18n)}</option>`
    ).join('');
    h+=`<div class="feedback-section" style="margin-bottom:10px">
      <div class="feedback-title">${T('add_training')}</div>
      <div style="margin-bottom:8px">
        <label class="settings-label">${T('type_label')}</label>
        <select class="plan-edit-field" id="edit-type" style="width:100%;padding:8px 10px">
          ${typeOptions}
        </select>
      </div>
      <div style="margin-bottom:8px">
        <label class="settings-label">${T('field_titel')}</label>
        <input class="plan-edit-field" id="edit-titel" value="" placeholder="${T('field_titel')}">
      </div>
      <div style="display:flex;gap:8px;margin-bottom:8px">
        <div style="flex:1">
          <label class="settings-label">${T('field_km')}</label>
          <input class="plan-edit-field" id="edit-km" value="" placeholder="0" type="number" step="0.1">
        </div>
  
      </div>
      <div style="margin-bottom:8px">
        <label class="settings-label">${T('field_detail')}</label>
        <textarea class="plan-edit-field" id="edit-detail" style="height:56px;resize:none"></textarea>
      </div>
      <button class="btn-primary" onclick="saveDayEdit('${dateStr}')">${T('save_changes')}</button>
    </div>
    <div style="background:rgba(255,255,255,0.02);border:1px solid var(--border);border-radius:0;padding:10px 14px;margin-bottom:10px">
      <div style="font-family:var(--font-m);font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--faint);margin-bottom:6px">${T('notes_q')}</div>
      <textarea class="feedback-textarea" id="modalNoteText" style="height:56px;margin-bottom:8px"></textarea>
      <button class="btn-secondary" style="margin-top:0" onclick="saveModalNote('${dateStr}')">${T('notes_save')}</button>
    </div>`;
  }else{
    const border=isWork(row.type)?'work-border':isRace(row.type)?'race-border':'';
    // C37: cleaner card, C34: show all rows if multiple
    rows.forEach((r,idx)=>{
      const rti=typeOf(r.type);
      const rb=isWork(r.type)?'work-border':isRace(r.type)?'race-border':'';
      const isRaceRow=isRace(r.type);
      // Parse raceType from detail (format: "dist · raceType · Doel: xx")
      const detailParts=(r.detail||'').split('·').map(s=>s.trim()).filter(Boolean);
      const parsedRaceType=isRaceRow&&detailParts.length>1?detailParts[1].replace(/Doel:.*/,'').trim():'';
      const iconKey=isRaceRow?raceTypeIconKey(parsedRaceType,r.km):(r.type?.split(',')[0].trim()||'run');
      const clickHandler=isRaceRow?`openRaceModalFromSheet(${r.rowIndex})`:`openDayModal(this.dataset.date)`;
      h+=`<div class="card ${rb}" onclick="${clickHandler}" data-date="${dateStr}" style="padding:14px 16px;margin-bottom:${idx<rows.length-1?'8':'10'}px;cursor:pointer;-webkit-tap-highlight-color:transparent">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:${r.detail?'10':'0'}px">
          <div style="width:32px;height:32px;background:var(--bg);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0">
            ${RXIcon(iconKey,18,isRaceRow?'var(--race-text)':'var(--text)',isRaceRow?'var(--race-text)':'var(--accent)')}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;color:${rti.text};margin-bottom:2px">${T(rti.i18n)}${parsedRaceType?' · '+esc(parsedRaceType):''}</div>
            <div style="font-family:var(--font-d);font-weight:800;font-size:20px;line-height:1">${esc(r.titel||'Training')}</div>
          </div>
          ${r.km?`<div style="font-family:var(--font-d);font-weight:800;font-size:22px;color:${isRaceRow?'var(--race-text)':'var(--accent)'};flex-shrink:0">${esc(r.km)}<span style="font-size:12px;color:var(--muted)">km</span></div>`:''}
        </div>
        ${r.detail?`<div style="font-family:var(--font-m);font-size:11px;color:var(--muted);line-height:1.6;padding-top:10px;border-top:1px solid var(--border)">${esc(r.detail)}</div>`:''}
      </div>`;
    });

    // Feedback — dag level, one block, collapsed by default
    const fbRow=rows.find(r=>!isWork(r.type)&&!isRust(r.type))||null;
    const existingFb=fbRow?.feedback||'';
    if(fbRow){
      if(isPast){
        if(existingFb&&!state.editingFeedback){
          // Show compact "given" state + edit link
          h+=`<div class="prev-feedback" style="margin-bottom:10px">
            <div class="prev-feedback-header">
              <span class="prev-feedback-label">${T('feedback_logged')}</span>
              <button class="edit-link" onclick="state.editingFeedback=true;openDayModal('${dateStr}',${row?.rowIndex||'null'})">${T('feedback_edit')}</button>
            </div>
            <div class="prev-feedback-text">${esc(existingFb)}</div>
          </div>`;
        }else{
          // Collapsed — show "Geef feedback" link that expands inline
          h+=`<div id="fbCollapse" style="margin-bottom:10px">
            ${!existingFb?`<button onclick="expandFeedback('${dateStr}')" style="background:none;border:none;color:var(--accent);font-family:var(--font-m);font-size:10px;letter-spacing:1px;cursor:pointer;padding:0;text-transform:uppercase">› ${T('feedback_q')}</button>`:''}
            ${existingFb?feedbackHtmlModal(dateStr,existingFb):''}
          </div>`;
          // expandFeedback() is called by the button onclick
        }
      }
    }

    // Edit section — collapsible
    const typeOptions=Object.entries(TYPES).map(([k,v])=>
      `<option value="${k}"${row.type===k?' selected':''}>${T(v.i18n)}</option>`
    ).join('');
    h+=`<div style="border-top:1px solid var(--border);margin-top:4px;padding-top:10px">
      <button onclick="document.getElementById('editFields').style.display=document.getElementById('editFields').style.display==='none'?'block':'none'" style="background:none;border:none;color:var(--muted);font-family:var(--font-m);font-size:10px;letter-spacing:1px;cursor:pointer;padding:0;text-transform:uppercase;width:100%;text-align:left;margin-bottom:6px">› Activiteit bewerken</button>
      <div id="editFields" style="display:none">
        <div style="margin-bottom:8px">
          <label class="settings-label">${T('field_titel')}</label>
          <input class="plan-edit-field" id="edit-titel" value="${esc(row?.titel||'')}" placeholder="${T('field_titel')}">
        </div>
        <div style="margin-bottom:8px">
          <label class="settings-label">${T('type_label')}</label>
          <select class="plan-edit-field" id="edit-type" style="width:100%;padding:8px 10px" onchange="document.getElementById('raceGoalWrap')&&(document.getElementById('raceGoalWrap').style.display=this.value==='race'?'block':'none')">
            ${typeOptions}
            <option value="${esc(row.type||'')}"${!TYPES[row.type]?' selected':''}>${esc(row.type||'')}</option>
          </select>
        </div>
        <div id="raceGoalWrap" style="margin-bottom:8px;display:${row.type==='race'?'block':'none'}">
          <label class="settings-label">Doeltijd (optioneel)</label>
          <input class="plan-edit-field" id="edit-goal" placeholder="bijv. 37:30" value="${esc(row?.detail?.match(/doel[:\s]+([0-9:]+)/i)?.[1]||'')}">
        </div>
        <div style="margin-bottom:8px">
          <label class="settings-label">${T('field_km')}</label>
          <input class="plan-edit-field" id="edit-km" value="${esc(row?.km||'')}" placeholder="0" type="number" step="0.1">
        </div>
        <div style="margin-bottom:8px">
          <label class="settings-label">${T('field_detail')}</label>
          <textarea class="plan-edit-field" id="edit-detail" style="height:56px;resize:none">${esc(row?.detail||'')}</textarea>
        </div>
        <button class="btn-primary" onclick="saveDayEdit('${dateStr}')">${T('save_changes')}</button>
        ${row?.rowIndex?`<button class="btn-secondary" style="margin-top:6px;color:var(--race-text);border-color:rgba(244,67,54,0.4)" onclick="deleteActivity(${row.rowIndex})">Verwijderen</button>`:''}
      </div>
    </div>`;
  }

  content.innerHTML=h;
  attachStarListeners('dayModalContent');
  // Store rowIndex for saveDayEdit to use
  state.editingRowIndex=row?.rowIndex||null;
  document.getElementById('dayModal').classList.add('open');
}

function feedbackHtmlModal(datum,existing){
  const isEdit=!!existing;let rating=0,text='';
  if(isEdit){const m=existing.match(/^(\d)/);if(m)rating=parseInt(m[1]);const mt=existing.match(/–\s*(.+)$/);if(mt)text=mt[1];}
  if(isEdit&&!state.editingFeedback){
    return `<div class="prev-feedback">
      <div class="prev-feedback-header">
        <span class="prev-feedback-label">${T('feedback_logged')}</span>
        <button class="edit-link" onclick="state.editingFeedback=true;openDayModal('${datum}')">${T('feedback_edit')}</button>
      </div>
      <div class="prev-feedback-text">${esc(existing)}</div>
    </div>`;
  }
  const stars=['😵','😓','😐','💪','🔥'].map((e,i)=>
    `<button class="star-btn${rating>0&&(i+1)<=rating?' active':''}" data-val="${i+1}">${e}</button>`
  ).join('');
  return `<div class="feedback-section">
    <div class="feedback-title">${T('feedback_q')}</div>
    <div class="feedback-stars">${stars}</div>
    <textarea class="feedback-textarea" id="modalFbText">${esc(text)}</textarea>
    <button class="btn-primary" id="modalSubmitBtn" onclick="handleModalFeedback('${esc(datum)}')">${isEdit?T('feedback_update'):T('feedback_save')}</button>
    ${isEdit?`<button class="btn-secondary" onclick="state.editingFeedback=false;openDayModal('${datum}')">${T('feedback_cancel')}</button>`:''}
  </div>`;
}

function expandFeedback(datum){
  const el=document.getElementById('fbCollapse');if(!el)return;
  const stars=['😵','😓','😐','💪','🔥'].map((e,i)=>
    `<button class="star-btn" data-val="${i+1}">${e}</button>`).join('');
  el.innerHTML=`<div class="feedback-section">
    <div class="feedback-title">${T('feedback_q')}</div>
    <div class="feedback-stars">${stars}</div>
    <textarea class="feedback-textarea" id="modalFbText"></textarea>
    <button class="btn-primary" id="modalSubmitBtn" onclick="handleModalFeedback('${esc(datum)}')">${T('feedback_save')}</button>
  </div>`;
  attachStarListeners('fbCollapse');
}

async function handleModalFeedback(datum){
  if(!state.selectedRating){showToast(T('select_score'));return;}
  const btn=document.getElementById('modalSubmitBtn');
  const tekst=document.getElementById('modalFbText')?.value||'';
  btn.disabled=true;btn.textContent='…';
  const ok=await submitFeedback(datum,state.selectedRating,tekst);
  if(ok){state.editingFeedback=false;state.selectedRating=0;closeDayModal();renderActiveView();}
  else{btn.disabled=false;btn.textContent=T('feedback_save');}
}

async function saveModalNote(datum){
  const tekst=document.getElementById('modalNoteText')?.value||'';
  if(!state.scriptUrl){showToast('❌ '+T('enter_url'));return;}
  try{
    const params=new URLSearchParams({action:'setFeedback',datum,rating:0,tekst});
    if(state.sheetName)params.set('sheetName',state.sheetName);
    const json=await(await fetch(state.scriptUrl+'?'+params)).json();
    if(json.status!=='ok')throw new Error(json.message);
    if(state.data){const row=state.data.find(r=>r.datum===datum);if(row)row.feedback=tekst;}
    showToast('✓ '+T('notes_save'));closeDayModal();
  }catch(e){showToast('❌ '+e.message);}
}

async function saveDayEdit(datum){
  const titel=document.getElementById('edit-titel')?.value.trim()||'';
  const type=document.getElementById('edit-type')?.value.trim()||'';
  const km=document.getElementById('edit-km')?.value.trim()||'';
  const detail=document.getElementById('edit-detail')?.value.trim()||'';
  const fields={datum,titel,type,km,detail};

  // Use only the explicitly set editingRowIndex — never infer from datum
  const editingRowIndex=state.editingRowIndex||null;

  if(state.scriptUrl){
    try{
      if(editingRowIndex){
        await sheetUpdateRow(editingRowIndex,fields);
      }else{
        await sheetAddRow(fields);
      }
    }catch(e){
      // Fallback: update local cache only
      if(state.data){
        let row=state.data.find(r=>r.rowIndex===editingRowIndex||r.datum===datum);
        if(row)Object.assign(row,fields);
        else state.data.push({...fields,feedback:'',rowIndex:null});
      }
      showToast('⚠ Lokaal opgeslagen: '+e.message);
      closeDayModal();renderActiveView();return;
    }
  }else{
    // No sheet — local only
    if(state.data){
      let row=state.data.find(r=>r.rowIndex===editingRowIndex||r.datum===datum);
      if(row)Object.assign(row,fields);
      else state.data.push({...fields,feedback:'',rowIndex:null});
    }
  }

  state.editingRowIndex=null;
  showToast(T('saved'));
  closeDayModal();
  renderActiveView();
}

async function deleteActivity(rowIndex){
  if(!rowIndex)return;
  if(!confirm('Activiteit verwijderen?'))return;
  closeDayModal();
  try{
    if(state.scriptUrl)await sheetDeleteRow(rowIndex);
    else if(state.data)state.data=state.data.filter(r=>r.rowIndex!==rowIndex);
    showToast('Verwijderd');
  }catch(e){
    if(state.data)state.data=state.data.filter(r=>r.rowIndex!==rowIndex);
    showToast('Lokaal verwijderd: '+e.message);
  }
  state.editingRowIndex=null;
  renderActiveView();renderHeader();
}

// C44: open ADD mode (new activity), independent of existing row
// Open day modal for a specific row by rowIndex (multi-activity days)
function openDayModalRow(rowIndex,dateStr){
  // Pre-set the editingRowIndex so openDayModal uses the right row
  state.editingRowIndex=rowIndex;
  // Find the specific row and pass it as context
  const row=state.data?.find(r=>r.rowIndex===rowIndex);
  if(row)openDayModal(dateStr,rowIndex);
  else openDayModal(dateStr);
}

function openAddActivity(dateStr){
  const content=document.getElementById('dayModalContent');
  state.editingFeedback=false;state.selectedRating=0;

  const d=parseDate(dateStr);
  const dayNames=state.lang==='en'?DAYS_EN:DAYS_NL;
  const mNames=state.lang==='en'?MONTHS_FULL_EN:MONTHS_FULL_NL;
  const typeOptions=Object.entries(TYPES).map(([k,v])=>
    `<option value="${k}"${k==='run'?' selected':''}>${T(v.i18n)}</option>`
  ).join('');

  content.innerHTML=`<div style="margin-bottom:16px">
    <div style="font-family:var(--font-m);font-size:9px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px">${dayNames[dayIdx(d)]} · ${mNames[d.getMonth()]} ${d.getFullYear()}</div>
    <div style="font-family:var(--font-d);font-weight:800;font-size:28px;line-height:1;text-transform:uppercase">${d.getDate()} ${mNames[d.getMonth()]}</div>
  </div>
  <div class="feedback-section">
    <div style="font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:12px">${T('add_training')}</div>
    <div style="margin-bottom:8px">
      <label class="settings-label">${T('type_label')}</label>
      <select class="plan-edit-field" id="edit-type" style="width:100%;padding:8px 10px">${typeOptions}</select>
    </div>
    <div style="margin-bottom:8px">
      <label class="settings-label">${T('field_titel')}</label>
      <input class="plan-edit-field" id="edit-titel" value="" placeholder="${T('field_titel')}">
    </div>
    <div style="margin-bottom:8px">
      <label class="settings-label">${T('field_km')}</label>
      <input class="plan-edit-field" id="edit-km" value="" placeholder="0" type="number" step="0.1">
    </div>
    <div style="margin-bottom:8px">
      <label class="settings-label">${T('field_detail')}</label>
      <textarea class="plan-edit-field" id="edit-detail" style="height:56px;resize:none"></textarea>
    </div>
    <button class="btn-primary" onclick="saveDayEdit('${dateStr}')">${T('save_changes')}</button>
  </div>`;
  state.editingRowIndex=null;
  document.getElementById('dayModal').classList.add('open');
}

function closeDayModal(e){
  if(e&&e.target!==document.getElementById('dayModal'))return;
  document.getElementById('dayModal').classList.remove('open');
  state.editingFeedback=false;state.selectedRating=0;
  state.editingRowIndex=null;
}

// ── STATS OVERLAY ─────────────────────────────────────────────────────────────
function openStats(){
  const el=document.getElementById('statsOverlay');
  const content=document.getElementById('statsContent');
  if(!el||!content)return;
  const t=todayStr();
  const past=state.data?state.data.filter(r=>r.datum<=t):[];
  const totalKm=past.reduce((s,r)=>s+(parseFloat(r.km)||0),0);
  const runCount=past.filter(r=>hasType(r.type,'run')).length;
  const fbRows=past.filter(r=>r.feedback);
  const ratingRows=fbRows.filter(r=>/^\d/.test(r.feedback));
  const avgRating=ratingRows.length?ratingRows.reduce((s,r)=>s+parseInt(r.feedback[0]),0)/ratingRows.length:0;
  const sheetRaceRows3=(state.data||[]).filter(r=>isRace(r.type)&&r.datum).sort((a,b)=>a.datum.localeCompare(b.datum));
  const nextRace3=sheetRaceRows3.find(r=>daysUntil(r.datum)>=0)||sheetRaceRows3[0];
  const daysLeft=nextRace3?daysUntil(nextRace3.datum):0;
  const mondayStr=getMondayStr();
  const weekKm=(state.data||[]).filter(r=>r.datum>=mondayStr&&r.datum<=t).reduce((s,r)=>s+(parseFloat(r.km)||0),0);
  const months=state.lang==='en'?MONTHS_EN:MONTHS_NL;

  const tiles=[
    {label:T('stats_total'),val:totalKm.toFixed(0),unit:T('stats_done'),hi:true},
    {label:T('stats_days'),val:daysLeft,unit:nextRace3?.titel||nextRace3?.datum||'—',hi:true},
    {label:T('stats_runs'),val:runCount,unit:T('stats_sessions'),hi:false},
    {label:T('stats_week'),val:weekKm.toFixed(0),unit:T('stats_week_sub'),hi:true},
    avgRating>0?{label:T('stats_feel'),val:avgRating.toFixed(1),unit:`/5 · ${ratingRows.length} ${T('stats_fb_sub')}`,hi:false}:null,
    {label:T('stats_feedback'),val:fbRows.length,unit:T('stats_fb_sub'),hi:false},
  ].filter(Boolean);

  let h=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
    <div>
      <div style="font-family:var(--font-m);font-size:10px;color:var(--accent);letter-spacing:1.5px;text-transform:uppercase;font-weight:600">Stats · all-time</div>
      <div style="font-family:var(--font-d);font-weight:800;font-size:22px;text-transform:uppercase;margin-top:2px">Jouw run</div>
    </div>
    <button onclick="closeStats()" style="background:transparent;border:1px solid var(--border);color:var(--muted);padding:6px 10px;cursor:pointer;font-family:var(--font-m);font-size:10px;letter-spacing:1px;text-transform:uppercase">Sluit ✕</button>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">`;
  tiles.forEach(t=>{
    h+=`<div style="background:var(--surface);border:1px solid var(--border);padding:14px">
      <div style="font-family:var(--font-m);font-size:9px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;font-weight:600;margin-bottom:8px">${esc(t.label)}</div>
      <div style="font-family:var(--font-d);font-weight:800;font-size:32px;line-height:1;color:${t.hi?'var(--accent)':'var(--text)'}">${esc(String(t.val))}</div>
      <div style="font-family:var(--font-m);font-size:9px;color:var(--muted);letter-spacing:0.5px;margin-top:4px">${esc(t.unit)}</div>
    </div>`;
  });
  h+='</div>';
  if(fbRows.length){
    h+=`<div style="font-family:var(--font-m);font-size:10px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;font-weight:600;margin-bottom:8px">${T('stats_recent')}</div>`;
    fbRows.slice(-3).reverse().forEach(row=>{
      const d=parseDate(row.datum);
      h+=`<div style="background:var(--surface);border:1px solid var(--border);padding:12px;margin-bottom:6px">
        <div style="display:flex;justify-content:space-between">
          <div style="font-family:var(--font-d);font-weight:700;font-size:14px">${esc(row.titel||'Training')}</div>
          <span style="font-family:var(--font-m);font-size:10px;color:var(--muted)">${d.getDate()} ${months[d.getMonth()]}</span>
        </div>
        <div style="font-family:var(--font-m);font-size:10px;color:var(--text);margin-top:4px;line-height:1.5">${esc(row.feedback)}</div>
      </div>`;
    });
  }
  content.innerHTML=h;
  el.style.display='flex';
}

function closeStats(e){
  if(e&&e.target!==document.getElementById('statsOverlay'))return;
  document.getElementById('statsOverlay').style.display='none';
}

// ── WEEK SWIPE ────────────────────────────────────────────────────────────────
function initWeekSwipe(){
  const wrap=document.getElementById('weekSwipeWrap');
  if(!wrap||wrap._swipeInit)return;
  wrap._swipeInit=true;
  let sx=0,sy=0;
  wrap.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY;},{passive:true});
  wrap.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;
    if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>40){
      state.weekOffset=(state.weekOffset||0)+(dx<0?1:-1);
      renderWeek();
    }
  },{passive:true});
}

// helper: get week dates for a given offset
// C51: week tile click — only border highlight, never opens modal
function weekTileClick(date){
  const t=todayStr();
  // Remove selected class from all, add to clicked
  document.querySelectorAll('[data-week-tile]').forEach(el=>{
    if(el.dataset.weekTile===date){
      el.classList.add('wt-selected');
    } else {
      el.classList.remove('wt-selected');
    }
  });
  // Scroll upcoming row
  document.querySelectorAll('[data-upcoming-date]').forEach(el=>el.classList.remove('wt-selected'));
  const row=document.querySelector(`[data-upcoming-date="${date}"]`);
  if(row){
    row.scrollIntoView({behavior:'smooth',block:'nearest'});
    row.classList.add('wt-selected');
    setTimeout(()=>row.classList.remove('wt-selected'),1500);
  }
}

function getWeekDatesOffset(offset){
  const n=new Date();n.setHours(12,0,0,0); // noon avoids DST edge cases
  n.setDate(n.getDate()+(offset||0)*7);
  const dow=n.getDay();
  n.setDate(n.getDate()-(dow===0?6:dow-1)); // rewind to Monday
  return Array.from({length:7},(_,i)=>{
    const d=new Date(n);d.setDate(n.getDate()+i);
    // local date parts — never UTC
    const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');
    return `${y}-${m}-${day}`;
  });
}

// ── CALENDAR ──────────────────────────────────────────────────────────────────
function renderCalendar(){
  const el=document.getElementById('calContent');
  const races=loadRaces();
  const y=state.calYear,m=state.calMonth;
  const mf=state.lang==='en'?MONTHS_FULL_EN:MONTHS_FULL_NL;
  const days=state.lang==='en'?DAYS_EN:DAYS_NL;
  const dowOrder=[1,2,3,4,5,6,0];
  const firstDay=new Date(y,m,1);
  const lastDay=new Date(y,m+1,0);
  const startPad=(firstDay.getDay()+6)%7;
  const t=todayStr();
  const cells=[];
  for(let i=0;i<startPad;i++){const d=new Date(y,m,1-startPad+i);cells.push({date:d,other:true});}
  for(let i=1;i<=lastDay.getDate();i++)cells.push({date:new Date(y,m,i),other:false});
  while(cells.length%7!==0){const p=cells[cells.length-1].date;const nd=new Date(p);nd.setDate(p.getDate()+1);cells.push({date:nd,other:true});}

  // C34: all races come from sheet; no localStorage races
  const sheetRaces=(state.data||[]).filter(r=>isRace(r.type)&&r.datum);
  // Build training day marks from data
  const trainingDates=new Set();
  const doneDates=new Set();
  const workDates=new Set();
  const raceDates=new Set(sheetRaces.map(r=>r.datum));
  if(state.data){
    state.data.forEach(r=>{
      if(!r.datum)return;
      // C43: skip werk and rust from calendar dots
      if(isWork(r.type)||isRust(r.type))return;
      if(!isRace(r.type)){
        trainingDates.add(r.datum);
        if(r.feedback)doneDates.add(r.datum);
      }
    });
  }

  const mf_months=state.lang==='en'?MONTHS_FULL_EN:MONTHS_FULL_NL;
  const months_short=state.lang==='en'?MONTHS_EN:MONTHS_NL;
  let h=`<div class="page-title" style="padding:14px 20px 4px">
    <div><div class="pt-kicker">Overzicht</div><div class="pt-h">${mf[m]} ${y}</div></div>
    <button onclick="openRaceModal()" style="background:var(--accent);border:0;padding:9px 14px;color:#000;cursor:pointer;font-family:var(--font-d);font-weight:800;font-size:12px;letter-spacing:1px;text-transform:uppercase;border-radius:999px">+ Race</button>
  </div>
  <div style="padding:8px 20px 0">
  <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px">
    <button onclick="calPrev()" style="background:transparent;border:1px solid var(--border);padding:6px 10px;color:var(--text);cursor:pointer;font-family:var(--font-d);font-size:14px;-webkit-tap-highlight-color:transparent">‹</button>
    <div style="flex:1;text-align:center;font-family:var(--font-m);font-size:9px;color:var(--muted);letter-spacing:2px;text-transform:uppercase">${months_short[(m+11)%12]} · ${mf[m]} · ${months_short[(m+1)%12]}</div>
    <button onclick="calNext()" style="background:transparent;border:1px solid var(--border);padding:6px 10px;color:var(--text);cursor:pointer;font-family:var(--font-d);font-size:14px;-webkit-tap-highlight-color:transparent">›</button>
  </div>
  <div class="cal-grid" style="margin-bottom:6px">
    ${dowOrder.map(i=>`<div class="cal-dow">${days[i]}</div>`).join('')}`;

  cells.forEach(({date,other})=>{
    const y2=date.getFullYear(),m2=String(date.getMonth()+1).padStart(2,'0'),d2=String(date.getDate()).padStart(2,'0');
    const ds=`${y2}-${m2}-${d2}`;
    const isToday=ds===t,isRaceDay=raceDates.has(ds),isSel=state.calSelectedDate===ds;
    // Dot marks (C35: race = red circle)
    let dot='';
    if(doneDates.has(ds))dot=`<div style="width:5px;height:5px;border-radius:50%;background:var(--accent);margin:3px auto 0"></div>`;

    else if(trainingDates.has(ds)&&!other)dot=`<div style="width:5px;height:5px;border-radius:50%;border:1px solid var(--accent);margin:3px auto 0"></div>`;

    // C35: race day = red circle around number
    const isRaceDayThis=isRaceDay&&!other;
    if(other){h+=`<div style="padding:8px 0 10px;text-align:center"></div>`;return;}
    const textColor=isToday?'#000':isRaceDayThis?'#fff':'var(--text)';
    const circleBg=isToday?'var(--accent)':isRaceDayThis?'var(--race-text)':(isSel?'rgba(198,242,78,0.22)':'transparent');
    const onclick=other?'':`selectCalDate('${ds}')`;
    h+=`<div onclick="${onclick}" style="padding:8px 0 10px;text-align:center;cursor:${other?'default':'pointer'};position:relative">
      <div style="width:30px;height:30px;margin:0 auto;display:flex;align-items:center;justify-content:center;border-radius:50%;background:${circleBg}${isRaceDayThis?';border:2px solid var(--race-text)':''}">
        <span style="font-family:var(--font-d);font-weight:700;font-size:16px;color:${textColor}">${date.getDate()}</span>
      </div>
      ${dot}
    </div>`;
  });
  h+='</div>';

  // Dot legend
  h+=`<div class="cal-dot-legend" style="margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--border)">
    <span><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--accent);margin-right:4px"></span>Gedaan</span>
    <span><span style="display:inline-block;width:6px;height:6px;border-radius:50%;border:1px solid var(--accent);margin-right:4px"></span>Gepland</span>

    <span><span style="display:inline-block;width:14px;height:3px;background:var(--accent);margin-right:4px;vertical-align:middle"></span>Race</span>
  </div>`;

  if(state.calSelectedDate){
    // C34: show all sheet rows for this date
    const selRows=(state.data||[]).filter(r=>r.datum===state.calSelectedDate);
    const selRaceRows=selRows.filter(r=>isRace(r.type));
    if(selRows.length){
      selRows.forEach(r=>{
        const ti=typeOf(r.type);
        h+=`<div style="background:${isRace(r.type)?'rgba(244,67,54,0.06)':'rgba(255,255,255,0.02)'};border:1px solid ${isRace(r.type)?'rgba(244,67,54,0.3)':'var(--border)'};padding:12px 14px;margin-bottom:8px;display:flex;align-items:center;gap:10px" onclick="openDayModal('${state.calSelectedDate}')">
          <div style="width:28px;height:28px;display:flex;align-items:center;justify-content:center">${RXIcon(r.type?.split(',')[0].trim()||'run',18,'var(--text)','var(--accent)')}</div>
          <div style="flex:1;min-width:0">
            <div style="font-family:var(--font-m);font-size:9px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:${ti.text};margin-bottom:2px">${T(ti.i18n)}</div>
            <div style="font-family:var(--font-d);font-weight:700;font-size:15px">${esc(r.titel||'')}</div>
            ${r.km?`<div style="font-family:var(--font-m);font-size:10px;color:var(--accent);margin-top:2px">${esc(r.km)} km</div>`:''}
          </div>
        </div>`;
      });
    }else{
      h+=`<div style="font-family:var(--font-m);font-size:10px;color:var(--muted);padding:8px 0 12px">${fmtDateFull(state.calSelectedDate)}</div>`;
    }
  }

  // C34: month races from sheet
  const monthRaces=sheetRaces.filter(r=>{const rd=parseDate(r.datum);return rd.getFullYear()===y&&rd.getMonth()===m;}).sort((a,b)=>a.datum.localeCompare(b.datum));
  h+=`<div><div style="font-family:var(--font-m);font-size:9px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;font-weight:600;margin-bottom:8px">${T('races_this_month')}</div>`;
  if(!monthRaces.length){
    h+=`<div style="font-family:var(--font-m);font-size:11px;color:var(--muted);padding:8px 2px">${T('no_races_month')}</div>`;
  }else{
    monthRaces.forEach(r=>{
      const cd=countdownDisplay(daysUntil(r.datum));
      h+=`<div class="cal-race-row" onclick="openDayModal('${r.datum}')">
        <div style="width:28px;height:28px;display:flex;align-items:center;justify-content:center">${RXIcon('race',20,'var(--race-text)','var(--race-text)')}</div>
        <div style="flex:1;min-width:0">
          <div style="font-family:var(--font-m);font-size:9px;color:var(--race-text);letter-spacing:1px;text-transform:uppercase;font-weight:600;margin-bottom:2px">Race</div>
          <div style="font-size:13px;font-weight:600">${esc(r.titel||r.datum)}</div>
          ${r.km?`<div style="font-family:var(--font-m);font-size:10px;color:var(--muted)">${esc(r.km)} km</div>`:''}
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-family:var(--font-d);font-size:18px;color:var(--accent)">${cd.val}</div>
          <div style="font-family:var(--font-m);font-size:8px;color:var(--faint)">${cd.unit}</div>
        </div>
      </div>`;
    });
  }
  h+='</div>';
  h+='</div>'; // close padding wrapper
  el.innerHTML=h;
}

function selectCalDate(ds){state.calSelectedDate=state.calSelectedDate===ds?null:ds;renderCalendar();}
function calPrev(){state.calMonth--;if(state.calMonth<0){state.calMonth=11;state.calYear--;}state.calSelectedDate=null;renderCalendar();}
function calNext(){state.calMonth++;if(state.calMonth>11){state.calMonth=0;state.calYear++;}state.calSelectedDate=null;renderCalendar();}

// ── RACE MODAL ────────────────────────────────────────────────────────────────
// Open race edit modal from a sheet row (C34: sheet is source of truth)
function openRaceModalFromSheet(rowIndex){
  const r=state.data?.find(r=>r.rowIndex===rowIndex);
  if(!r)return;
  // detail format: "dist · raceType · Doel: xx" (some parts may be missing)
  const detailParts=(r.detail||'').split('·').map(s=>s.trim());
  // First part could be dist (if it matches km), second is raceType
  let raceType='';
  for(const p of detailParts){
    if(!p.match(/^\d/)&&!p.startsWith('Doel:')){raceType=p;break;}
  }
  const goalMatch=(r.detail||'').match(/Doel:\s*([0-9:]+)/);
  const goal=goalMatch?goalMatch[1]:'';
  const syntheticRace={id:'sheet_'+rowIndex,name:r.titel||'',date:r.datum,dist:r.km||'',raceType,mainGoal:false,goal,_rowIndex:rowIndex};
  state._raceFromSheet=syntheticRace;
  closeDayModal();
  openRaceModal('sheet_'+rowIndex);
}

function openRaceModal(raceId,prefillDate){
  // BUG1 fix: set editingRaceId before calling closeRaceModal
  const races=loadRaces();
  let race=raceId?races.find(r=>r.id===raceId):null;
  // C34: also look in sheet-derived synthetic race
  if(!race&&raceId&&raceId.startsWith('sheet_'))race=state._raceFromSheet||null;
  state.editingRaceId=race?.id||null;
  document.getElementById('raceModal').classList.remove('open');
  const content=document.getElementById('raceModalContent');
  const distOpts=['5km','10km','10mile','Halve marathon','Marathon','Trailrun','Ultra'].map(d=>
    `<option value="${d}"${race?.dist===d?'selected':''}>${d}</option>`
  ).join('');
  const typeOpts=['Weg','Baan','Trail','Ultra','Virtueel'].map(tp=>
    `<option value="${tp}"${race?.raceType===tp?'selected':''}>${tp}</option>`
  ).join('');
  content.innerHTML=`<div class="modal-title">${T(raceId?'race_edit':'race_add')}</div>
    <div class="settings-field">
      <label class="settings-label">${T('race_name')}</label>
      <input type="text" class="settings-input" id="raceNameInput" value="${esc(race?.name||'')}" placeholder="Big10 Rotterdam">
    </div>
    <div class="settings-field">
      <label class="settings-label">${T('race_date')}</label>
      <input type="date" class="settings-input" id="raceDateInput" value="${esc(race?.date||prefillDate||'')}">
    </div>
    <div class="settings-field">
      <label class="settings-label">${T('race_dist')}</label>
      <select class="settings-input" id="raceDistSelect">
        <option value="">—</option>${distOpts}<option value="__custom">Vrije tekst…</option>
      </select>
      <input type="text" class="settings-input" id="raceDistCustom" placeholder="Vrije tekst" style="margin-top:6px;display:none" value="${esc(['5km','10km','10mile','Halve marathon','Marathon','Trailrun','Ultra'].includes(race?.dist||'')?'':race?.dist||'')}">
    </div>
    <div class="settings-field">
      <label class="settings-label">${T('race_type')}</label>
      <select class="settings-input" id="raceTypeSelect">
        <option value="">—</option>${typeOpts}<option value="__custom">Vrije tekst…</option>
      </select>
      <input type="text" class="settings-input" id="raceTypeCustom" placeholder="Vrije tekst" style="margin-top:6px;display:none" value="${esc(['Weg','Baan','Trail','Ultra','Virtueel'].includes(race?.raceType||'')?'':race?.raceType||'')}">
    </div>
    <div class="settings-field">
      <label class="settings-label">Doeltijd (optioneel)</label>
      <input type="text" class="settings-input" id="raceGoalInput" value="${esc(race?.goal||'')}" placeholder="bijv. 37:30">
    </div>
    <div class="settings-field" style="display:flex;align-items:center;gap:10px">
      <input type="checkbox" id="raceMainInput" ${race?.mainGoal?'checked':''} style="width:18px;height:18px;accent-color:var(--accent)">
      <label for="raceMainInput" class="settings-label" style="margin:0">${T('race_main')}</label>
    </div>
    <button class="btn-primary" style="margin-top:8px" onclick="saveRace()">${T('race_save')}</button>
    ${race?`<button class="btn-secondary" onclick="deleteRace('${race.id}')">🗑 ${T('race_delete')}</button>`:''}`;

  document.getElementById('raceModal').classList.add('open');
  document.getElementById('raceDistSelect')?.addEventListener('change',e=>{document.getElementById('raceDistCustom').style.display=e.target.value==='__custom'?'block':'none';});
  document.getElementById('raceTypeSelect')?.addEventListener('change',e=>{document.getElementById('raceTypeCustom').style.display=e.target.value==='__custom'?'block':'none';});
  if(race?.dist){const s=document.getElementById('raceDistSelect');if([...s.options].some(o=>o.value===race.dist))s.value=race.dist;else{s.value='__custom';document.getElementById('raceDistCustom').style.display='block';}}
  if(race?.raceType){const s=document.getElementById('raceTypeSelect');if([...s.options].some(o=>o.value===race.raceType))s.value=race.raceType;else{s.value='__custom';document.getElementById('raceTypeCustom').style.display='block';}}
}

async function saveRace(){
  const name=document.getElementById('raceNameInput')?.value.trim();
  const date=document.getElementById('raceDateInput')?.value;
  if(!name||!date){showToast(T('race_required'));return;}
  const distSel=document.getElementById('raceDistSelect')?.value;
  const dist=distSel==='__custom'?document.getElementById('raceDistCustom')?.value.trim():distSel;
  const typeSel=document.getElementById('raceTypeSelect')?.value;
  const raceType=typeSel==='__custom'?document.getElementById('raceTypeCustom')?.value.trim():typeSel;
  const mainGoal=document.getElementById('raceMainInput')?.checked;
  const goal=document.getElementById('raceGoalInput')?.value.trim()||'';
  const races=loadRaces();
  if(state.editingRaceId){
    const idx=races.findIndex(r=>r.id===state.editingRaceId);
    if(idx>=0)races[idx]={...races[idx],name,date,dist,raceType,mainGoal,goal};
  }else{
    races.push({id:Date.now().toString(),name,date,dist,raceType,mainGoal,goal});
  }
  persistRaces(races);
  const [sy,sm,sd]=date.split('-').map(Number);
  state.calYear=sy;state.calMonth=sm-1;state.calSelectedDate=date;
  closeRaceModal();renderHeader();
  if(state.currentTab==='calendar')renderCalendar();else switchTab('calendar');

  // C38: write to sheet
  const raceDetail=[dist,raceType,goal?`Doel: ${goal}`:''].filter(Boolean).join(' · ');
  const raceFields={datum:date,titel:name,type:'race',detail:raceDetail,km:dist||''};
  if(state.scriptUrl){
    try{
      // Check if editing existing sheet row
      const existingRow=state.data?.find(r=>r.datum===date&&isRace(r.type));
      if(state.editingRaceId&&existingRow?.rowIndex){
        await sheetUpdateRow(existingRow.rowIndex,raceFields);
      }else{
        await sheetAddRow(raceFields);
      }
      showToast(T('race_to_sheet'));
      await fetchData();
    }catch(e){
      showToast('❌ '+e.message);
    }
  }else{
    // Local only
    if(state.data){
      const ex=state.data.find(r=>r.datum===date&&isRace(r.type));
      if(ex)Object.assign(ex,raceFields);
      else state.data.push({...raceFields,feedback:'',rowIndex:null});
    }
    showToast(T('race_saved'));
  }
}

function deleteRace(id){
  persistRaces(loadRaces().filter(r=>r.id!==id));
  closeRaceModal();renderHeader();
  if(state.currentTab==='calendar')renderCalendar();
  showToast(T('race_deleted'));
}

function closeRaceModal(e){
  if(e&&e.target!==document.getElementById('raceModal'))return;
  document.getElementById('raceModal').classList.remove('open');
  state.editingRaceId=null;
}

// ── STATS ─────────────────────────────────────────────────────────────────────
function renderStats(){
  const el=document.getElementById('statsContent');
  const t=todayStr();
  const past=state.data?state.data.filter(r=>r.datum<=t):[];
  const totalKm=past.reduce((s,r)=>s+(parseFloat(r.km)||0),0);
  // C24: count by type 'run'
  const runCount=past.filter(r=>hasType(r.type,'run')).length;
  const fbRows=past.filter(r=>r.feedback);
  const ratingRows=fbRows.filter(r=>/^\d/.test(r.feedback));
  const avgRating=ratingRows.length?ratingRows.reduce((s,r)=>s+parseInt(r.feedback[0]),0)/ratingRows.length:0;
  // C34: races from sheet
  const sheetRaceRows2=(state.data||[]).filter(r=>isRace(r.type)&&r.datum).sort((a,b)=>a.datum.localeCompare(b.datum));
  const nextRace2=sheetRaceRows2.find(r=>daysUntil(r.datum)>=0)||sheetRaceRows2[0];
  const daysLeft=nextRace2?daysUntil(nextRace2.datum):0;
  const raceName=nextRace2?.titel||nextRace2?.datum||'—';
  const mondayStr=getMondayStr();
  const weekKm=(state.data||[]).filter(r=>r.datum>=mondayStr&&r.datum<=t).reduce((s,r)=>s+(parseFloat(r.km)||0),0);
  const months=state.lang==='en'?MONTHS_EN:MONTHS_NL;

  let h=`<div class="stats-grid">
    <div class="stat-card"><div class="stat-label">${T('stats_total')}</div><div class="stat-val">${totalKm.toFixed(0)}</div><div class="stat-sub">${T('stats_done')}</div></div>
    <div class="stat-card"><div class="stat-label">${T('stats_days')}</div><div class="stat-val">${daysLeft}</div><div class="stat-sub">${esc(raceName)}</div></div>
    <div class="stat-card"><div class="stat-label">${T('stats_runs')}</div><div class="stat-val">${runCount}</div><div class="stat-sub">${T('stats_sessions')}</div></div>
    <div class="stat-card"><div class="stat-label">${T('stats_week')}</div><div class="stat-val">${weekKm.toFixed(0)}</div><div class="stat-sub">${T('stats_week_sub')}</div></div>
    ${avgRating>0?`<div class="stat-card"><div class="stat-label">${T('stats_feel')}</div><div class="stat-val" style="font-size:28px">${['😵','😓','😐','💪','🔥'][Math.round(avgRating)-1]}</div><div class="stat-sub">${avgRating.toFixed(1)}/5 · ${ratingRows.length} ${T('stats_fb_sub')}</div></div>`:''}
    <div class="stat-card"><div class="stat-label">${T('stats_feedback')}</div><div class="stat-val">${fbRows.length}</div><div class="stat-sub">${T('stats_fb_sub')}</div></div>
  </div>`;

  if(!state.data)h+=noSchemaHint();

  const recent=fbRows.slice(-8).reverse();
  if(recent.length){
    h+=`<div class="section-label" style="margin-bottom:10px">${T('stats_recent')}</div><div class="feedback-history">`;
    recent.forEach(row=>{
      const d=parseDate(row.datum);
      h+=`<div class="fh-row">
        <div class="fh-date">${d.getDate()} ${months[d.getMonth()]}</div>
        <div class="fh-body"><div class="fh-title">${esc(row.titel||row.type||'Training')}</div><div class="fh-text">${esc(row.feedback)}</div></div>
        ${row.km?`<div class="fh-km">${esc(row.km)}km</div>`:''}
      </div>`;
    });
    h+='</div>';
  }
  el.innerHTML=h;
}

// ── SETTINGS ──────────────────────────────────────────────────────────────────
// B3a: Login UI
function renderAccountSection(){
  const el=document.getElementById('accountSection');if(!el)return;
  const email=localStorage.getItem('userEmail')||'';
  if(email){
    el.innerHTML=`<div class="account-row">
      <div class="account-avatar">👤</div>
      <div class="account-info">
        <div class="account-email">${esc(email)}</div>
        <div class="account-status">${T('logged_in_as')}</div>
      </div>
      <button class="account-logout" onclick="logoutAccount()">${T('logout_btn')}</button>
    </div>`;
  }else{
    el.innerHTML=`<div style="font-size:12px;color:var(--muted);margin-bottom:12px">${T('account_hint')}</div>
    <div class="login-form">
      <input type="email" class="settings-input" id="loginEmail" placeholder="${T('email_placeholder')}">
      <button class="btn-primary" onclick="loginAccount()">${T('login_btn')}</button>
    </div>`;
  }
}

function loginAccount(){
  const email=document.getElementById('loginEmail')?.value.trim();
  if(!email)return;
  localStorage.setItem('userEmail',email);
  renderAccountSection();
  showToast(T('saved'));
}

function logoutAccount(){
  localStorage.removeItem('userEmail');
  renderAccountSection();
  showToast(T('saved'));
}

// ── C26: CONNECT SECTION ──────────────────────────────────────────────────────
function renderConnectSection(){
  const el=document.getElementById('connectSection');if(!el)return;
  const connected=!!state.scriptUrl;
  // Shorten URL for display — show only the ID segment
  function shortUrl(url){
    if(!url)return'';
    const m=url.match(/\/s\/([^\/]+)\//);
    return m?'…'+m[1].slice(-12)+'…':url.slice(0,32)+'…';
  }
  // Always show URL input; connected state adds status badge above it
  const connectedBadge=connected?`
    <div class="connect-btn connected" style="margin-bottom:10px;cursor:default">
      <div class="cb-dot"></div>
      <div class="cb-label">
        <div class="cb-name">${T('connect_active')}</div>
        <div class="cb-status">${esc(shortUrl(state.scriptUrl))}${state.sheetName?' · '+esc(state.sheetName):''}</div>
      </div>
      <span style="font-size:14px">✓</span>
    </div>
    <button class="disconnect-btn" style="margin-bottom:12px" onclick="disconnectSheet()">${T('connect_disconnect')}</button>`:'';
  el.innerHTML=connectedBadge+`
    <div class="settings-title">Hardloopschema koppelen</div>
    <div class="settings-field">
      <label class="settings-label">Google Sheet URL</label>
      <div class="settings-hint" style="margin-bottom:6px">Plak de volledige URL van je Google Sheet.</div>
      <input type="url" class="settings-input" id="sheetIdInput" placeholder="https://docs.google.com/spreadsheets/d/..."
        value="${esc(state.sheetId)}">
    </div>
    <div class="settings-field">
      <label class="settings-label">${T('sheet_name_label')}</label>
      <input type="text" class="settings-input" id="sheetNameInput" placeholder="Sheet1 / Blad1"
        value="${esc(state.sheetName)}" oninput="saveSheetName()">
      <div class="settings-hint">${T('sheet_name_hint')}</div>
    </div>
    <button class="btn-save" onclick="saveSettings()">${T('api_save')}</button>
    <div class="connection-status" style="margin-top:10px">
      <div class="status-dot${connected?' ok':''}" id="statusDot"></div>
      <span id="statusText">${connected?T('connected'):T('not_connected')}</span>
    </div>
    <!-- DEV: Apps Script URL — verberg door deze sectie te commentariëren -->
    <details style="margin-top:14px;border-top:1px solid var(--border);padding-top:10px">
      <summary style="font-family:var(--font-m);font-size:9px;color:var(--faint);letter-spacing:1px;text-transform:uppercase;cursor:pointer">Dev</summary>
      <div class="settings-field" style="margin-top:8px">
        <label class="settings-label">Apps Script URL</label>
        <div class="settings-hint" style="margin-bottom:6px">${T('connect_hint')}</div>
        <input type="url" class="settings-input" id="scriptUrl" placeholder="${T('connect_url_placeholder')}"
          value="${esc(state.scriptUrl)}">
      </div>
    </details>`;
}

function disconnectSheet(){
  // C26: disconnect but keep data
  state.scriptUrl='';state.sheetName='';
  localStorage.removeItem('scriptUrl');localStorage.removeItem('sheetName');
  // keep state.data in memory so existing views still work until reload
  renderConnectSection();
  renderHeader();
  showToast(T('saved'));
}

// Telegram verify
function verifyTelegram(){
  const user=document.getElementById('telegramUser')?.value.trim();
  if(!user){showToast(T('notif_telegram'));return;}
  showToast(T('tg_verifying'));
  // Show hint to user
  setTimeout(()=>showToast(T('tg_verify_hint')),2600);
}

function updateTelegramStatus(){
  const dot=document.getElementById('tgDot'),txt=document.getElementById('tgStatusText');
  const linked=!!localStorage.getItem('telegramLinked');
  if(dot)dot.className='tg-dot'+(linked?' linked':'');
  if(txt)txt.textContent=linked?T('tg_linked'):T('tg_not_linked');
}

function addPrField(){
  const sel=document.getElementById('prDistSelect'),dist=sel.value;
  if(!dist)return;sel.value='';
  const prs=loadPRs();if(dist in prs)return;
  prs[dist]='';persistPRs(prs);renderPrFields();
}
function removePrField(dist){const prs=loadPRs();delete prs[dist];persistPRs(prs);renderPrFields();}
function updatePR(dist,val){const prs=loadPRs();prs[dist]=val;persistPRs(prs);}

function renderPrFields(){
  const c=document.getElementById('prFields');if(!c)return;
  const prs=loadPRs(),active=PR_ORDER.filter(d=>d in prs);
  if(!active.length){c.innerHTML=`<div style="font-size:11px;color:var(--faint);padding:4px 0">${T('pr_none')}</div>`;return;}
  c.innerHTML=active.map(d=>`
    <div class="pr-row">
      <label class="pr-dist-lbl">${d}</label>
      <input type="text" class="settings-input" style="flex:1" placeholder="${T('pr_placeholder')}" value="${esc(prs[d]||'')}" oninput="updatePR('${d}',this.value)">
      <button onclick="removePrField('${d}')" style="background:none;border:none;color:var(--faint);cursor:pointer;font-size:18px;padding:0 4px;line-height:1">×</button>
    </div>`).join('');
}

function renderSettingsFields(){
  // C26/C30: connect section is fully dynamic
  renderConnectSection();
  const tgEl=document.getElementById('telegramUser');if(tgEl)tgEl.value=localStorage.getItem('telegramUser')||'';
  const nameEl=document.getElementById('settingsName');if(nameEl)nameEl.value=localStorage.getItem('userName')||'';
  renderPrFields();renderAccountSection();updateTelegramStatus();applyI18n();
}

function saveSettingsName(){
  localStorage.setItem('userName',document.getElementById('settingsName')?.value||'');
  renderHeader();showToast(T('saved'));
}

function saveSettings(){
  // Apps Script URL from dev section (optional)
  const url=document.getElementById('scriptUrl')?.value.trim()||state.scriptUrl||'';
  state.scriptUrl=url;if(url)localStorage.setItem('scriptUrl',url);
  const sheetRaw=document.getElementById('sheetIdInput')?.value.trim()||'';
  const sheetIdMatch=sheetRaw.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
  const sid=sheetIdMatch?sheetIdMatch[1]:sheetRaw; // fallback: treat as raw ID
  state.sheetId=sid;localStorage.setItem('sheetId',sid);
  const sn=document.getElementById('sheetNameInput')?.value||'';
  state.sheetName=sn;localStorage.setItem('sheetName',sn);
  showToast(T('connecting'));
  fetchData().then(()=>renderConnectSection());
}

function saveSheetName(){
  state.sheetName=document.getElementById('sheetNameInput')?.value||'';
  localStorage.setItem('sheetName',state.sheetName);
}

function saveTelegram(){
  localStorage.setItem('telegramUser',document.getElementById('telegramUser')?.value||'');
  updateTelegramStatus();showToast(T('saved'));
}

// ── I18N ──────────────────────────────────────────────────────────────────────
function applyI18n(){
  const tabKeys=['today','week','plan','calendar'];
  document.querySelectorAll('#bottomNav .bn-label').forEach((el,i)=>{el.textContent=T(tabKeys[i]);});
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=T(el.dataset.i18n);});
  document.querySelectorAll('[data-i18n-opt]').forEach(el=>{el.textContent=T(el.dataset.i18nOpt);});
  document.getElementById('langBtnNl')?.classList.toggle('active',state.lang==='nl');
  document.getElementById('langBtnEn')?.classList.toggle('active',state.lang==='en');
  document.documentElement.lang=state.lang;
  // Update banner text if visible
  const b=document.getElementById('updateBanner');
  if(b&&b.style.display!=='none'){
    document.getElementById('updateBannerText').textContent=T('update_available');
    b.querySelector('button').textContent=T('update_apply');
  }
}

function setLang(lang){
  state.lang=lang;localStorage.setItem('lang',lang);
  applyI18n();applyTheme();renderHeader();renderActiveView();
  showToast(T('saved')); // X14: toast after lang switch, already in new language
}

// ── UI ────────────────────────────────────────────────────────────────────────
function switchTab(tab){
  state.currentTab=tab;state.selectedRating=0;
  document.querySelectorAll('#bottomNav .bn-item').forEach(el=>el.classList.toggle('active',el.dataset.tab===tab));
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id==='view-'+tab));
  document.getElementById('scrollArea').scrollTop=0;
  renderActiveView();
}

function hideLoading(){
  const el=document.getElementById('loadingOverlay');
  el.classList.add('hidden');setTimeout(()=>el.style.display='none',350);
}

function showToast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg;el.classList.add('show');
  clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('show'),2500);
}

function updateConnectionStatus(ok,err){
  // Update status dot/text if they exist in DOM (connect section when disconnected)
  const dot=document.getElementById('statusDot'),txt=document.getElementById('statusText');
  if(dot)dot.className='status-dot '+(ok?'ok':'err');
  if(txt)txt.textContent=ok?T('connected'):`${T('conn_err')}: ${err||'?'}`;
  // If connected, re-render the connect section to show connected state
  if(ok&&state.currentTab==='settings')renderConnectSection();
}

// ── ONBOARDING ────────────────────────────────────────────────────────────────
// U1: click outside sheet dismisses (wegklikbaar)
function onboardingOverlayClick(e){
  if(e.target===document.getElementById('onboarding'))onboardingFinish();
}

function shouldShowOnboarding(){
  return loadRaces().length===0&&!localStorage.getItem('userName');
}

function onboardingNext(){
  // B7: name removed from onboarding
  const raceName=document.getElementById('obRace')?.value.trim();
  const raceDate=document.getElementById('obDate')?.value;
  const dist=document.getElementById('obDist')?.value;
  const time=document.getElementById('obTime')?.value.trim();
  if(raceName&&raceDate){
    const races=loadRaces();
    races.push({id:Date.now().toString(),name:raceName,date:raceDate,dist:dist||'',mainGoal:true});
    persistRaces(races);
  }
  // X12: removed legacy goal object write
  document.getElementById('onboardingStep1').style.display='none';
  document.getElementById('onboardingStep2').style.display='block';
}

function addObPrField(){
  const sel=document.getElementById('obPrDist'),dist=sel.value;
  if(!dist)return;sel.value='';
  const prs=loadPRs();if(dist in prs)return;
  prs[dist]='';persistPRs(prs);
  const c=document.getElementById('obPrFields');
  c.innerHTML=PR_ORDER.filter(d=>d in prs).map(d=>`
    <div class="pr-row" style="margin-bottom:8px">
      <label class="pr-dist-lbl">${d}</label>
      <input type="text" class="settings-input" style="flex:1" placeholder="${T('pr_placeholder')}" value="${esc(prs[d]||'')}" oninput="updatePR('${d}',this.value)">
    </div>`).join('');
}

function onboardingFinish(){
  document.getElementById('onboarding').style.display='none';
  renderHeader();renderActiveView();
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  initServiceWorker();

  document.getElementById('bottomNav').addEventListener('click',e=>{
    const tab=e.target.closest('.bn-item')?.dataset.tab;if(tab)switchTab(tab);
  });

  // Check URL params for sheet config (X2/X3)
  const urlParams=new URLSearchParams(window.location.search);
  if(urlParams.get('sheet'))state.scriptUrl=urlParams.get('sheet');
  if(urlParams.get('tab'))state.sheetName=urlParams.get('tab');

  applyI18n();renderHeader();

  if(shouldShowOnboarding()){
    hideLoading();document.getElementById('onboarding').style.display='flex';
  }else if(state.scriptUrl){
    fetchData();
  }else{
    setTimeout(()=>{hideLoading();renderActiveView();},600);
  }
});
