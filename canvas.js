// Papan coret putih ala Google Meet: pensil, penghapus, warna, ketebalan, bersihkan, simpan PNG
(function(){const fab=document.createElement('button');fab.id='cvfab';fab.textContent='✏️ Papan Coret';document.body.appendChild(fab);
const box=document.createElement('div');box.id='cvbox';
const cols=['#111827','#ef4444','#2563eb','#16a34a','#f59e0b'];
box.innerHTML=`<div id="cvbar"><button data-t="pen" class="on">✏️ Pensil</button><button data-t="eraser">🧽 Penghapus</button>${cols.map((c,i)=>`<i data-c="${c}" class="${i?'':'on'}" style="background:${c}"></i>`).join('')}<label>Tebal <input type="range" id="cvsz" min="1" max="30" value="3"></label><button id="cvclr">🗑 Bersihkan</button><button id="cvsave">💾 PNG</button><button id="cvx">✕</button></div><div id="cvwrap"><canvas id="cv"></canvas></div>`;
document.body.appendChild(box);
const cv=box.querySelector('#cv'),ctx=cv.getContext('2d');let tool='pen',color=cols[0],draw=false,lx=0,ly=0,snap=null;
function fit(){const r=cv.getBoundingClientRect(),d=window.devicePixelRatio||1;if(!r.width)return;const keep=cv.width?cv.toDataURL():null;const w=Math.round(r.width*d),h=Math.round(r.height*d);if(cv.width===w&&cv.height===h)return;cv.width=w;cv.height=h;ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);if(keep){const im=new Image();im.onload=()=>ctx.drawImage(im,0,0);im.src=keep}}
fab.onclick=()=>{box.classList.toggle('open');setTimeout(fit,30)};box.querySelector('#cvx').onclick=()=>box.classList.remove('open');
new ResizeObserver(()=>fit()).observe(box);
box.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{tool=b.dataset.t;box.querySelectorAll('[data-t]').forEach(x=>x.classList.toggle('on',x===b))});
box.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{color=b.dataset.c;tool='pen';box.querySelectorAll('[data-c]').forEach(x=>x.classList.toggle('on',x===b));box.querySelectorAll('[data-t]').forEach(x=>x.classList.toggle('on',x.dataset.t==='pen'))});
box.querySelector('#cvclr').onclick=()=>{ctx.fillStyle='#fff';ctx.fillRect(0,0,cv.width,cv.height)};
box.querySelector('#cvsave').onclick=()=>{const a=document.createElement('a');a.href=cv.toDataURL('image/png');a.download='coretan.png';a.click()};
const pos=e=>{const r=cv.getBoundingClientRect(),d=cv.width/r.width;return[(e.clientX-r.left)*d,(e.clientY-r.top)*d,d]};
cv.addEventListener('pointerdown',e=>{draw=true;cv.setPointerCapture(e.pointerId);[lx,ly]=pos(e)});
cv.addEventListener('pointermove',e=>{if(!draw)return;const[x,y,d]=pos(e),sz=+box.querySelector('#cvsz').value*d;ctx.lineCap=ctx.lineJoin='round';ctx.lineWidth=tool==='eraser'?sz*4:sz;ctx.strokeStyle=tool==='eraser'?'#fff':color;ctx.beginPath();ctx.moveTo(lx,ly);ctx.lineTo(x,y);ctx.stroke();lx=x;ly=y});
['pointerup','pointercancel','pointerleave'].forEach(t=>cv.addEventListener(t,()=>draw=false));})();
