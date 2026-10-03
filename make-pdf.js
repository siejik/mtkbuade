// node make-pdf.js  -> membuat _print.html; lalu: python3 -c "import weasyprint;weasyprint.HTML('_print.html').write_pdf('Soal-Lengkap-TKA.pdf')"
const fs=require('fs'),P=require('./print.js');global.window={};
const d=p=>fs.readFileSync('data/'+p,'utf8');eval(d('questions.js').replace('window.QUESTIONS=','global.QUESTIONS=')+d('questions2.js')+d('level2.js'));global.ALL=QUESTIONS.concat(window.LEVEL2);
fs.writeFileSync('_print.html',`<!DOCTYPE html><html><head><meta charset="utf-8"><style>${P.css}</style></head><body>${P.doc(ALL)}</body></html>`);
