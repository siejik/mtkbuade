const LEVELS={1:{t:'Level 1',sub:'TKA 2025',q:window.QUESTIONS,lo:1,hi:25,key:'tka2'},2:{t:'Level 2',sub:'Paket 1 ANBK',q:window.LEVEL2||[],lo:24,hi:46,key:'tka2_L2'},3:{t:'Level 3',sub:'segera',q:window.LEVEL3||[],lo:1,hi:0,key:'tka2_L3'},4:{t:'Level 4',sub:'segera',q:window.LEVEL4||[],lo:1,hi:0,key:'tka2_L4'}};
let LV=+(localStorage.tkaLv||1),Q=LEVELS[LV].q,LO=LEVELS[LV].lo,HI=LEVELS[LV].hi,cur=Q.length?Q[0].no:0,S=JSON.parse(localStorage[LEVELS[LV].key]||'{}');
const $=id=>document.getElementById(id),save=()=>localStorage[LEVELS[LV].key]=JSON.stringify(S);
const get=n=>Q.find(q=>q.no===n),L=i=>String.fromCharCode(97+i),ol=a=>`<ol>${a.map(x=>`<li>${x}</li>`).join('')}</ol>`;
function nav(){let h='';for(let n=LO;n<=HI;n++){const q=get(n),s=S[n]||{};
const c=!q?'':s.done?(s.right?'ok':'no'):s.skip?'sk':'';
h+=`<button ${q?'':'disabled'} class="${c} ${n===cur?'cur':''} ${q&&q.source==='ai'?'ai':''}" onclick="go(${n})">${n}</button>`}
$('nav').innerHTML=h;const d=Object.values(S).filter(s=>s.done),r=d.filter(s=>s.right).length;
lvbar();$('stat').innerHTML=`Terjawab ${d.length}/${Q.length} · Benar ${r}<br>Border putus-putus = pembahasan buatan AI`}
function lvbar(){$('lv').innerHTML=[1,2,3,4].map(i=>`<button class="${i===LV?'cur':''}" onclick="setLevel(${i})">${LEVELS[i].t}<small>${LEVELS[i].sub}</small></button>`).join('')}
function setLevel(i){LV=i;localStorage.tkaLv=i;const L=LEVELS[i];Q=L.q;LO=L.lo;HI=L.hi;S=JSON.parse(localStorage[L.key]||'{}');pick_.clear();Q.forEach(q=>pick_.add(q.no));cur=Q.length?Q[0].no:0;go(cur)}
function go(n){if(!Q.length){$('main').innerHTML='<h2>Level '+LV+'</h2><div class="q">Soal level ini belum didigitalkan. Gambar sumbernya ada di folder source-images/ pada project (lihat PRD.md, bagian Update 5).</div>';nav();return}cur=n;S[n]=S[n]||{sel:[]};render();window.scrollTo({top:0,behavior:'smooth'})}
function next(d){const ns=Q.map(q=>q.no),j=ns.indexOf(cur)+d;if(ns[j])go(ns[j])}
function expl(q){const b=q.source==='ai'?'<span class="tag ai">🤖 Jawaban dari AI Claude</span>':(LV===1?'<span class="tag key">📷 Sesuai kunci foto</span>':'<span class="tag key">✅ Sesuai kunci (opsi tercentang)</span>');
let h=`<b>Pembahasan</b> ${b}`;
if(q.aiSteps)h+=`<h4>📷 Versi kunci (sesuai foto)</h4>${ol(q.steps)}<h4>🤖 Versi Claude (dikoreksi/diperjelas)</h4><div class="fix">${q.fixNote}</div>${ol(q.aiSteps)}`;
else h+=ol(q.steps);if(q.note)h+=`<div class="fix">${q.note}</div>`;
if(q.img)h+=`<details><summary>Lihat coretan kunci asli</summary><img src="${q.img}" alt="Kunci ${q.no}"></details>`;return `<div class="exp">${h}</div>`}
function render(){const q=get(cur),s=S[cur],cat=q.type==='category',multi=q.type==='multi';s.sel=s.sel||[];
let h=`<span class="tag">Soal ${q.no}</span><span class="tag">${q.topic}</span>${multi?'<span class="tag">Pilih lebih dari satu</span>':''}${cat?'<span class="tag">Benar / Salah</span>':''}<h2>Nomor ${q.no}</h2><div class="q">${q.text}</div>`;
if(q.figure)h+=`<div class="fig">${q.figure.map(f=>`<img src="${f}" alt="Gambar soal">`).join('')}</div>`;
if(cat){q.options.forEach((o,i)=>{const v=s.sel[i];const B=(val,l)=>{let c=v===val?'sel':'';if(s.done)c=q.answer[i]===val?'good':v===val?'bad':'';return `<button class="${c}" ${s.done?'disabled':''} onclick="pickC(${i},${val})">${l}</button>`};
h+=`<div class="st"><span>${o}</span>${B(true,'Benar')}${B(false,'Salah')}</div>`})}
else q.options.forEach((o,i)=>{let c='';if(s.done)c=q.answer.includes(i)?'good':s.sel.includes(i)?'bad':'';else if(s.sel.includes(i))c='sel';
h+=`<button class="opt ${c}" ${s.done?'disabled':''} onclick="pick(${i})"><b>${L(i)}.</b> ${o}</button>`});
const ready=cat?q.options.every((_,i)=>s.sel[i]!==undefined&&s.sel[i]!==null):s.sel.length>0;
if(!s.done){if(multi||cat)h+=`<button class="btn" onclick="check()" ${ready?'':'disabled'}>Periksa jawaban</button>`;h+=`<button class="ghost" onclick="skip()">Skip sementara →</button>`}
else{h+=`<div class="res ${s.right?'ok':'no'}">${s.right?'✅ Benar!':'❌ Salah. Jawaban benar: '+(cat?q.answer.map((a,i)=>(i+1)+'='+(a?'Benar':'Salah')).join(', '):q.answer.map(L).join(', ').toUpperCase())}</div>${expl(q)}<button class="ghost" onclick="retry()">Ulangi soal</button><button class="btn" onclick="next(1)">Soal berikutnya →</button>`}
$('main').innerHTML=h;nav()}
function pick(i){const q=get(cur),s=S[cur];if(s.done)return;if(q.type==='multi')s.sel=s.sel.includes(i)?s.sel.filter(x=>x!==i):[...s.sel,i];else{s.sel=[i];return check()}save();render()}
function pickC(i,v){const s=S[cur];if(s.done)return;s.sel[i]=v;save();render()}
function check(){const q=get(cur),s=S[cur];s.done=true;s.skip=false;
s.right=q.type==='category'?q.answer.every((a,i)=>s.sel[i]===a):[...q.answer].sort().join()===[...s.sel].sort().join();save();render()}
function skip(){S[cur].skip=true;save();nav();next(1)}
function retry(){S[cur]={sel:[]};save();render()}
$('reset').onclick=()=>{if(confirm('Hapus semua progres?')){S={};save();go(Q[0].no)}};
go(cur);
// ===== PDF (cetak dari browser) =====
const pick_=new Set();Q.forEach(q=>pick_.add(q.no));
function drawPick(){$('pick').innerHTML=Q.map(q=>`<label><input type="checkbox" ${pick_.has(q.no)?'checked':''} onchange="tglP(${q.no})"> ${q.no}</label>`).join('');$('pGo').textContent=`Buat PDF (${pick_.size} soal)`;$('pGo').disabled=!pick_.size}
function tglP(n){pick_.has(n)?pick_.delete(n):pick_.add(n);drawPick()}
$('pdfbtn').onclick=()=>{drawPick();$('modal').hidden=false};$('pClose').onclick=()=>$('modal').hidden=true;
$('pAll').onclick=()=>{Q.forEach(q=>pick_.add(q.no));drawPick()};$('pNone').onclick=()=>{pick_.clear();drawPick()};
$('pGo').onclick=()=>{$('print').innerHTML=TKAPrint.doc(Q.filter(q=>pick_.has(q.no)));
let st=document.getElementById('pcss');if(!st){st=document.createElement('style');st.id='pcss';document.head.appendChild(st)}
st.textContent=`@media print{${TKAPrint.css} html,body{background:#0b1020!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}.app,.blob,.modal{display:none!important}#print{display:block!important}}`;
$('modal').hidden=true;setTimeout(()=>window.print(),300)};
