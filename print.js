// Renderer PDF (dipakai browser & node). TKAPrint.doc(list) -> HTML string; TKAPrint.css -> CSS
(function(root){
const L=i=>String.fromCharCode(97+i),e=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const ol=a=>`<ol>${a.map(x=>`<li>${e(x)}</li>`).join('')}</ol>`;
function card(q){const cat=q.type==='category',ai=q.source==='ai';
let h=`<div class="pq"><div><span class="ptag">Soal ${q.no}</span><span class="ptag">${e(q.topic)}</span>${q.type==='multi'?'<span class="ptag">Pilih lebih dari satu</span>':''}${cat?'<span class="ptag">Benar / Salah</span>':''}</div><h2 class="pt">Nomor ${q.no}</h2><div class="ptext">${e(q.text)}</div>`;
if(q.figure)h+=`<div class="pfig">${q.figure.map(f=>`<img src="${f}">`).join('')}</div>`;
if(cat)q.options.forEach((o,i)=>h+=`<div class="popt"><b>${i+1}.</b> ${e(o)} <span class="pmark good">Jawaban: ${q.answer[i]?'BENAR':'SALAH'}</span></div>`);
else q.options.forEach((o,i)=>{const g=q.answer.includes(i);h+=`<div class="popt ${g?'good':''}"><b>${L(i)}.</b> ${e(o)}${g?' <span class="pmark good">&#10003; Jawaban benar</span>':''}</div>`});
const ans=cat?q.answer.map((a,i)=>(i+1)+' = '+(a?'Benar':'Salah')).join(', '):q.answer.map(i=>L(i).toUpperCase()).join(', ');
h+=`<div class="pres">Jawaban benar: ${ans}</div><div class="pbox"><b>Pembahasan</b> <span class="ptag ${ai?'ai':'key'}">${ai?'BUATAN AI &middot; kunci foto belum ada':'SESUAI KUNCI FOTO'}</span>`;
if(q.aiSteps)h+=`<h4>Versi kunci (sesuai foto)</h4>${ol(q.steps)}<h4>Versi Claude (dikoreksi/diperjelas)</h4><div class="pfix">${e(q.fixNote)}</div>${ol(q.aiSteps)}`;
else h+=ol(q.steps);
if(q.note)h+=`<div class="pfix">${e(q.note)}</div>`;
h+='</div>';
if(q.img)h+=`<div class="pbox pimg"><b>Coretan kunci asli</b><img src="${q.img}"></div>`;
return h+'</div>'}
function doc(list){return `<div class="pdoc"><div class="pcover"><div class="pk">MATEMATIKA SMA 2025</div><h1>Pemaparan, Tips dan Trik Penyelesaian Soal - Soal TKA</h1><p>${list.length} soal &middot; lengkap dengan jawaban, pembahasan, dan coretan kunci asli</p></div>${list.map(card).join('')}</div>`}
const css=`@page{size:A4;margin:12mm;background:#0b1020}
.pdoc{color:#eef1ff;font-family:'DejaVu Sans',Arial,sans-serif;font-size:10pt;line-height:1.5;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.pdoc *{box-sizing:border-box}.pcover{text-align:center;padding-top:75mm}.pcover h1{font-size:26pt;line-height:1.25;margin:8mm 0}.pcover .pk{color:#a5b4fc;letter-spacing:2px;font-size:11pt}.pcover p{color:#a9b1d6;font-size:11pt}
.pq{page-break-before:always}.pt{font-size:16pt;margin:8px 0}.ptext{white-space:pre-line;font-size:10.5pt}
.ptag{display:inline-block;background:#3b3f8f;border-radius:12px;padding:2px 9px;font-size:8pt;margin-right:5px}.ptag.ai{background:#8a6a00}.ptag.key{background:#0f6b4d}
.popt{border:1px solid #3b4270;border-radius:8px;padding:6px 10px;margin:5px 0;background:#1a2040;page-break-inside:avoid}.popt.good{border-color:#34d399;background:#0f4a3a}
.pmark{float:right;font-size:8.5pt;color:#6ee7b7;font-weight:bold}
.pres{background:#0f4a3a;border:1px solid #34d399;border-radius:8px;padding:8px 12px;font-weight:bold;margin:10px 0}
.pbox{break-inside:avoid;background:#151b34;border:1px solid #3b4270;border-radius:10px;padding:10px 14px;margin:10px 0}.pbox h4{margin:10px 0 2px}.pbox ol{margin:6px 0;padding-left:20px}.pbox li{margin-bottom:3px}
.pfix{background:#3a2f0a;border-radius:6px;padding:6px 10px;font-size:9pt;margin:6px 0;color:#fde68a}
.pfig img,.pimg img{display:block;max-width:100%;max-height:120mm;width:auto;background:#fff;border-radius:6px;margin:6px auto;page-break-inside:avoid}.pimg{page-break-inside:avoid;break-inside:avoid}.pimg img{max-height:165mm}`;
const api={doc,css,card};if(typeof module!=='undefined')module.exports=api;else root.TKAPrint=api})(this);
