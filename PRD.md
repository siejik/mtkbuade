# PRD — Pemaparan, Tips dan Trik Penyelesaian Soal - Soal TKA (Matematika SMA 2025)

## Tujuan
Website latihan 25 soal TKA Matematika. Soal tampil satu-satu, bisa pilih jawaban, langsung muncul BENAR/SALAH + pembahasan langkah demi langkah berdasarkan foto kunci jawaban (@mathforall_).

## Fitur wajib
1. Tampil 1 soal per layar + daftar nomor 1-25 (skip/loncat soal bebas, status: benar/salah/skip).
2. Tipe soal: `single` (pilihan ganda), `multi` (MCMA, checkbox + tombol Periksa), `category` (tabel Benar/Salah per pernyataan), `ds` (kecukupan data, pilihan ganda biasa).
3. Setelah dijawab (benar/salah): tandai opsi benar/salah, tampil pembahasan + foto kunci asli (collapsible).
4. Progres tersimpan di localStorage, tombol Reset & Ulangi soal.
5. UI glassmorphism (blur, gradient blob, dark), responsif HP.
6. Deploy statis di Vercel (tanpa build; upload folder langsung / `vercel --prod`).

## Struktur
- `index.html`, `style.css`, `app.js` (logika), `data/questions.js` (semua soal), `assets/` (foto kunci).
- Skema soal ada di komentar atas `data/questions.js`.

## Status (AI #1, update 2)
SELESAI: 25/25 soal sudah masuk. Tipe: single, multi, category (tabel Benar/Salah). Gambar soal (crop halaman PDF) di `assets/soal/pNN.jpg`, foto kunci di `assets/kunci-*.jpeg`.
- Sumber kunci foto: 1,2,3,4,6,7,9,10,12,14,15,16,17,18,20,22,23,24,25 (badge hijau "Sesuai kunci foto").
- Buatan AI (kunci foto belum ada, badge kuning + border putus-putus di daftar): 5, 8, 11, 13, 19, 21. Ganti dengan versi kunci begitu fotonya ada (ubah `source` ke 'key', tambah `img`).
- Versi ganda "kunci vs Claude" (`aiSteps` + `fixNote`): nomor 12 (√580 salah tulis), 20 (asal AD=3 tidak dijelaskan), 25 (label "Cek jawaban d" seharusnya e).
- Progres tersimpan di localStorage key `tka2`.

## Belum dicek / tugas AI berikutnya
1. Tes di browser (belum pernah dijalankan!) — cek layout HP, gambar tampil, tombol Periksa.
2. Nomor 5, 8, 11, 13, 21: jawaban AI berasumsi (lihat `note`); nomor 8 urutan huruf opsi di PDF berantakan.
3. Gambar soal masih berupa crop halaman utuh (termasuk opsi); rapikan bila perlu. Soal 14 opsi = gambar grafik (p15-p16), opsi teks di web hanya koordinatnya.
4. Opsional: KaTeX untuk pecahan/pangkat, timer, skor akhir, mode acak.
5. Deploy Vercel: `vercel --prod` di folder ini (static, tanpa build).

## Versi PPT (update 3)
- File: `ppt/Tips-Trik-Soal-TKA.pptx`, dibuat otomatis dari `data/questions.js` + `data/questions2.js` oleh `ppt/build.js` (pptxgenjs + sharp). Jalankan: `cd ppt && node build.js`.
- Isi: slide pembuka (Assalamu'alaikum + judul), lalu per soal: slide Soal → slide Gambar (jika ada, 1 slide per gambar) → slide Pembahasan (badge "Sesuai kunci foto"/"Buatan AI", versi ganda kunci vs Claude untuk nomor 12, 20, 25), penutup (Terima kasih + Wassalamu'alaikum). Total ±75 slide.
- Validasi file lolos; render diperiksa lewat LibreOffice (sebagian slide saja).
- Catatan/TODO: gambar soal masih crop halaman PDF utuh (masih ada sisa header kecil di beberapa gambar & tampil kecil); teks pembahasan pendek masih berukuran kecil dan bisa diperbesar; nomor 20 & 25 versi kunci hanya berupa teks (foto kunci tidak dimasukkan ke PPT). Ubah judul di konstanta `TITLE` pada build.js.

## Fitur PDF (update 4)
- Di web: tombol "Buat PDF (pilih soal)" -> modal centang nomor soal -> `window.print()` (Simpan sebagai PDF; aktifkan Background graphics). Render lewat `print.js` (`TKAPrint.doc/css`), sisi browser di akhir `app.js`.
- PDF statis semua soal: `Soal-Lengkap-TKA.pdf` (50 hlm, tombol "Unduh PDF semua soal" di sidebar). Buat ulang: `node make-pdf.js && python3 -c "import weasyprint;weasyprint.HTML('_print.html').write_pdf('Soal-Lengkap-TKA.pdf')"` (perlu `pip install weasyprint`). Wajib dijalankan ulang tiap data soal berubah.
- Isi tiap soal: soal + gambar, opsi (jawaban benar ditandai), pembahasan (versi ganda kunci vs Claude bila ada), lalu foto coretan kunci asli di halaman sendiri.
- Belum dites: tombol Buat PDF di Chrome/HP sungguhan (hanya PDF statis yang sudah dirender & dicek visual).

## UPDATE 5 — 4 LEVEL + CANVAS (STATUS TERAKHIR)
Permintaan user: web punya 4 level soal yang bisa dipilih + fitur canvas putih coret-coret ala papan Google Meet (pensil + penghapus).

### Sudah selesai
- Pemilih 4 level di sidebar (kartu Level 1-4), progres localStorage terpisah per level (`tka2`, `tka2_L2`, `tka2_L3`, `tka2_L4`; level terakhir di `tkaLv`). Kode: `LEVELS` + `setLevel()` di `app.js`.
- Level 1 = 25 soal TKA 2025 (kunci tulisan tangan @mathforall_) — selesai.
- Level 2 = `soal1.zip` -> `data/level2.js`, 23 soal nomor 24-46 (Paket 1 ANBK/Pusmendik). Kunci = opsi yang tercentang di screenshot; penjelasan ditulis Claude dan semua jawaban sudah dicek ulang secara hitungan (cocok dengan centang). Badge "Sesuai kunci (opsi tercentang)". Gambar soal tidak di-embed; diganti deskripsi teks. Perlu dicek ulang dengan screenshot: no. 34 (kubus ABCDEFGH, penjelasan hanya mengikuti kunci) dan no. 40 (asumsi AB & CD sisi sejajar), no. 31 (nilai diagram dibaca perkiraan).
- Canvas: `canvas.js` — tombol "Papan Coret" mengambang; panel putih bisa di-resize, alat pensil, penghapus, 5 warna, ketebalan, bersihkan, simpan PNG, tampil di HP (pointer events). Tidak ikut tercetak.
- PDF statis `Soal-Lengkap-TKA.pdf` (73 hlm, Level 1 + 2) dan PPT `ppt/Tips-Trik-Soal-TKA.pptx` (Level 1 + 2) sudah diregenerasi (`node make-pdf.js` + weasyprint; `cd ppt && node build.js`).
- Pengujian: logika level/jawaban/kategori/multi/canvas diuji via jsdom (tanpa error); BELUM pernah dibuka di browser sungguhan / HP.

### BELUM selesai (tugas AI berikutnya, urut prioritas)
1. **Level 3 = `soal2.zip` (11 gambar) dan Level 4 = `soal3.zip` (9 gambar)** -> gambar ada di `source-images/level3/bNN.jpg` dan `source-images/level4/cNN.jpg`. Belum ada jawaban; Claude harus mencari jawaban + penjelasan, `source:'ai'` (di web otomatis berlabel "Jawaban dari AI Claude"). Buat `data/level3.js` (`window.LEVEL3=[...]`) dan `data/level4.js` (`window.LEVEL4=[...]`) dengan skema yang sama seperti `data/level2.js`, lalu muat di `index.html` sebelum `app.js`, dan isi `lo`/`hi` (rentang nomor) di `LEVELS` pada `app.js`. Saat ini level 3 & 4 menampilkan pesan "belum didigitalkan".
   - Kendala: gambar level 3-4 adalah tangkapan layar rekaman video sebuah PDF "LATIHAN SOAL TKA MATEMATIKA" (13 halaman, bertema Bilangan Rasional/pecahan, tiap layar memuat beberapa soal, teks kecil, banyak tumpang tindih antar screenshot). Disarankan minta user file PDF aslinya atau resolusi lebih tinggi, atau zoom tiap gambar per bagian.
   - Temuan awal (sudah dihitung, perlu dicocokkan dengan gambar): soal minyak goreng 180 jeriken (opsi 45, 36, 32; tiap keluarga menerima jumlah sama dan lebih dari 1) -> jawaban 45 dan 36; soal beras Januari 2024, 150 karung (opsi 30, 25, 20) -> jawaban 30 dan 25.
2. Tes manual di browser/HP (layout level selector, canvas di layar sentuh, tombol Buat PDF -> print).
3. Jika level 3-4 selesai: jalankan ulang `make-pdf.js` (tambahkan `d('level3.js')`, `d('level4.js')` ke gabungan `ALL`) dan `ppt/build.js`, lalu zip lagi.
4. Opsional: KaTeX, timer, skor akhir, mode acak, embed gambar soal level 2.

### Cara deploy
Static, tanpa build: `vercel --prod` di folder project (isi: index.html, style.css, app.js, canvas.js, print.js, data/, assets/, Soal-Lengkap-TKA.pdf).
