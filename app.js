const Q=window.QUESTIONS,TOTAL=25;let cur=Q[0].no,S=JSON.parse(localStorage.tka2||'{}');
const $=id=>document.getElementById(id),save=()=>localStorage.tka2=JSON.stringify(S);
const get=n=>Q.find(q=>q.no===n),L=i=>String.fromCharCode(97+i),ol=a=>`<ol>${a.map(x=>`<li>${x}</li>`).join('')}</ol>`;
function nav(){let h='';for(let n=1;n<=TOTAL;n++){const q=get(n),s=S[n]||{};
const c=!q?'':s.done?(s.right?'ok':'no'):s.skip?'sk':'';
h+=`<button ${q?'':'disabled'} class="${c} ${n===cur?'cur':''} ${q&&q.source==='ai'?'ai':''}" onclick="go(${n})">${n}</button>`}
$('nav').innerHTML=h;const d=Object.values(S).filter(s=>s.done),r=d.filter(s=>s.right).length;
$('stat').innerHTML=`Terjawab ${d.length}/${Q.length} · Benar ${r}<br>Border putus-putus = pembahasan buatan AI`}
function go(n){cur=n;S[n]=S[n]||{sel:[]};render();window.scrollTo({top:0,behavior:'smooth'})}
function next(d){const ns=Q.map(q=>q.no),j=ns.indexOf(cur)+d;if(ns[j])go(ns[j])}
function expl(q){const b=q.source==='ai'?'<span class="tag ai">🤖 Buatan AI · kunci foto belum ada</span>':'<span class="tag key">📷 Sesuai kunci foto</span>';
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
