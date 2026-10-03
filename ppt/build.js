const pptxgen=require('pptxgenjs'),fs=require('fs'),sharp=require('sharp');
global.window={};const d=p=>fs.readFileSync('../data/'+p,'utf8');
eval(d('questions.js').replace('window.QUESTIONS=','global.QUESTIONS=')+d('questions2.js')+d('level2.js'));QUESTIONS.push(...window.LEVEL2);
const TITLE='Pemaparan, Tips dan Trik Penyelesaian Soal - Soal TKA';
const NAVY='0B1020',IND='4F46E5',TXT='1E293B',MUT='64748B',OK='059669',AMB='B45309',F='Calibri';
const L=i=>String.fromCharCode(97+i);
const fs_=(n,w)=>{let s=n>1000?11:n>700?12:n>480?13:n>300?14:n>180?16:18;return w<6?Math.max(10,s-1):s};
(async()=>{
const p=new pptxgen();p.layout='LAYOUT_16x9';p.title=TITLE;
// Pembuka
let s=p.addSlide();s.background={color:NAVY};
s.addText("Assalamu'alaikum Warahmatullahi Wabarakatuh",{x:.7,y:.9,w:8.6,h:.6,fontFace:F,fontSize:22,color:'C7D2FE',align:'center',isTextBox:true});
s.addText(TITLE,{x:.7,y:1.8,w:8.6,h:1.6,fontFace:F,fontSize:34,bold:true,color:'FFFFFF',align:'center',valign:'middle',isTextBox:true});
s.addText(`Level 1 & 2 · ${QUESTIONS.length} Soal dan Pembahasan`,{x:.7,y:3.7,w:8.6,h:.5,fontFace:F,fontSize:16,color:'A5B4FC',align:'center',isTextBox:true});
for(const q of QUESTIONS){
 const figs=(q.figure||[]);const W=8.8;
 // Soal
 s=p.addSlide();s.background={color:'FFFFFF'};
 s.addText(`Soal ${q.no}  ·  ${q.topic}`,{x:.6,y:.3,w:8.8,h:.5,fontFace:F,fontSize:20,bold:true,color:IND,margin:0,isTextBox:true});
 const runs=[{text:q.text,options:{breakLine:true,paraSpaceAfter:8}}];
 if(q.type==='category')runs.push({text:'Tentukan Benar atau Salah:',options:{bold:true,breakLine:true}}),q.options.forEach((o,i)=>runs.push({text:`${i+1}. ${o}`,options:{breakLine:i<q.options.length-1}}));
 else{if(q.type==='multi')runs.push({text:'(Pilih semua jawaban yang benar)',options:{italic:true,breakLine:true}});q.options.forEach((o,i)=>runs.push({text:`${L(i)}. ${o}`,options:{breakLine:i<q.options.length-1}}))}
 const n=runs.reduce((a,r)=>a+r.text.length,0);
 s.addText(runs,{x:.6,y:1.0,w:W,h:4.1,fontFace:F,fontSize:fs_(n,W),color:TXT,valign:'top',margin:0,paraSpaceAfter:4,isTextBox:true});
 for(let k=0;k<figs.length;k++){s=p.addSlide();s.background={color:'FFFFFF'};
  s.addText(`Soal ${q.no}  ·  Gambar${figs.length>1?` (${k+1}/${figs.length})`:''}`,{x:.6,y:.3,w:8.8,h:.5,fontFace:F,fontSize:20,bold:true,color:IND,margin:0,isTextBox:true});
  const m=await sharp('../'+figs[k]).metadata();const r=Math.min(8.8/m.width,4.2/m.height);
  s.addImage({path:'../'+figs[k],x:(10-m.width*r)/2,y:1.0,w:m.width*r,h:m.height*r})}
 // Pembahasan
 s=p.addSlide();s.background={color:'F8FAFC'};
 s.addText(`Pembahasan Soal ${q.no}`,{x:.6,y:.3,w:6,h:.5,fontFace:F,fontSize:20,bold:true,color:IND,margin:0,isTextBox:true});
 s.addText(q.source==='ai'?'Buatan AI (kunci foto belum ada)':'Sesuai kunci foto',{x:6.4,y:.3,w:3,h:.4,fontFace:F,fontSize:12,bold:true,color:q.source==='ai'?AMB:OK,align:'right',margin:0,isTextBox:true});
 const ans=q.type==='category'?q.answer.map((a,i)=>`${i+1}=${a?'Benar':'Salah'}`).join(', '):q.answer.map(i=>L(i)+'. '+q.options[i]).join('  |  ');
 s.addText('Jawaban: '+ans,{x:.6,y:.95,w:8.8,h:.55,fontFace:F,fontSize:ans.length>90?12:15,bold:true,color:OK,valign:'top',margin:0,isTextBox:true});
 const steps=a=>a.map((t,i)=>({text:t,options:{bullet:{type:'number'},breakLine:i<a.length-1,paraSpaceAfter:5}}));
 if(q.aiSteps){const n1=q.steps.join('').length,n2=q.aiSteps.join('').length,sz=Math.min(fs_(Math.max(n1,n2)*1.6,4),12);
  s.addText('Versi kunci (sesuai foto)',{x:.6,y:1.55,w:4.3,h:.3,fontFace:F,fontSize:13,bold:true,color:TXT,margin:0,isTextBox:true});
  s.addText(steps(q.steps),{x:.6,y:1.9,w:4.3,h:2.7,fontFace:F,fontSize:sz,color:TXT,valign:'top',margin:0,isTextBox:true});
  s.addText('Versi Claude (dikoreksi/diperjelas)',{x:5.1,y:1.55,w:4.3,h:.3,fontFace:F,fontSize:13,bold:true,color:TXT,margin:0,isTextBox:true});
  s.addText(steps(q.aiSteps),{x:5.1,y:1.9,w:4.3,h:2.7,fontFace:F,fontSize:sz,color:TXT,valign:'top',margin:0,isTextBox:true});
  s.addText(q.fixNote,{x:.6,y:4.7,w:8.8,h:.6,fontFace:F,fontSize:11,italic:true,color:AMB,valign:'top',margin:0,isTextBox:true});
 }else{const n=q.steps.join('').length;
  s.addText(steps(q.steps),{x:.6,y:1.6,w:8.8,h:q.note?3.0:3.6,fontFace:F,fontSize:Math.min(fs_(n*1.2,9),18),color:TXT,valign:'top',margin:0,isTextBox:true});
  if(q.note)s.addText(q.note,{x:.6,y:4.7,w:8.8,h:.6,fontFace:F,fontSize:11,italic:true,color:AMB,valign:'top',margin:0,isTextBox:true})}
}
s=p.addSlide();s.background={color:NAVY};
s.addText('Terima kasih',{x:.7,y:1.3,w:8.6,h:1,fontFace:F,fontSize:40,bold:true,color:'FFFFFF',align:'center',isTextBox:true});
s.addText("Wassalamu'alaikum Warahmatullahi Wabarakatuh",{x:.7,y:2.6,w:8.6,h:.7,fontFace:F,fontSize:22,color:'C7D2FE',align:'center',isTextBox:true});
await p.writeFile({fileName:'Tips-Trik-Soal-TKA.pptx'});console.log('ok')})();
