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

### Sudah selesai (ringkas)
- Pemilih 4 level di sidebar (kartu Level 1-4), progres localStorage terpisah per level (`tka2`, `tka2_L2`, `tka2_L3`, `tka2_L4`; level terakhir di `tkaLv`). Kode: `LEVELS` + `setLevel()` di `app.js`.
- Level 1 = 25 soal TKA 2025 (kunci tulisan tangan @mathforall_) — selesai.
- Level 2 = `soal1.zip` -> `data/level2.js`, 23 soal nomor 24-46 (Paket 1 ANBK/Pusmendik). Kunci = opsi yang tercentang di screenshot; penjelasan ditulis Claude dan semua jawaban sudah dicek ulang secara hitungan (cocok dengan centang). Badge "Sesuai kunci (opsi tercentang)". Gambar soal tidak di-embed; diganti deskripsi teks. Perlu dicek ulang dengan screenshot: no. 34 (kubus ABCDEFGH, penjelasan hanya mengikuti kunci) dan no. 40 (asumsi AB & CD sisi sejajar), no. 31 (nilai diagram dibaca perkiraan).
- Canvas: `canvas.js` — tombol "Papan Coret" mengambang; panel putih bisa di-resize, alat pensil, penghapus, 5 warna, ketebalan, bersihkan, simpan PNG, tampil di HP (pointer events). Tidak ikut tercetak.
- PDF statis `Soal-Lengkap-TKA.pdf` (73 hlm, Level 1 + 2) dan PPT `ppt/Tips-Trik-Soal-TKA.pptx` (Level 1 + 2) sudah diregenerasi (`node make-pdf.js` + weasyprint; `cd ppt && node build.js`).
- Pengujian: logika level/jawaban/kategori/multi/canvas diuji via jsdom (tanpa error); BELUM pernah dibuka di browser sungguhan / HP.

### Status Level 3 & 4 (diperbarui — gambar dibaca ulang pada resolusi penuh, bisa dibaca)
Kunci: gambar screenshot level 3/4 ternyata terbaca bila dibuka per setengah layar pada resolusi penuh (crop area dokumen, bagi 2 dengan overlap). OCR (`source-images/ocr/*.txt`) hanya cadangan untuk teks.
- **Level 3 (Bilangan Rasional) — 22 soal** di `data/level3.js` (`source:'ai'`), `hi:22`. Pecahan no. 2 (1/8) sudah masuk. Belum: soal laundry koin KPK/FPB (pertanyaan terpotong di rekaman; yang terlihat: Linda tiap 8 hari, Vidya tiap 6 hari, sama-sama datang sekitar pukul 16.00, ada kalender Agustus-September; KPK 8 dan 6 = 24).
- **Level 4 (Geometri & Pengukuran) — 23 soal** di `data/level4.js` (`source:'ai'`), `hi:23`: huruf E/F, segi banyak, keset (jenis 2 & 3, 10 kg, Sejahtera 14 keset), satuan baku, jam (2), neraca (no. 1 & 2), keliling (2), luas (segitiga gabungan, jajargenjang, lukisan, poster), tinggi air botol (2; gambar diperbesar disimpan di `assets/soal/l4-botol*.jpg`), susunan kubus no. 2 (21 kubus, tidak pasti). Belum: susunan kubus no. 1 (opsi 12-15) dan no. 3 (opsi 20,21,24,25); gambar kecil & ambigu, tidak ditebak.
- Soal yang jawabannya dari gambar kecil punya `note`; minta guru memverifikasi (Level 4 no. 1-4, 6, 9, 11, 12, 15, 16, 19-21, 23; Level 3 no. 11, 15, 17, 21).
- Status user: web sudah dibuka di HP, sudah di-deploy ke Vercel, dan sudah dicek guru (info dari user, bukan dari pengujian Claude).

### Tugas AI berikutnya (urut prioritas)
1. Lengkapi sisa soal Level 4 dan 3 (daftar di atas); verifikasi ulang soal yang bercatatan "dibaca dari gambar buram".
2. Tes manual di browser/HP (level selector, canvas layar sentuh, tombol Buat PDF -> print).
3. Cek soal Level 2 no. 31, 34, 40 terhadap screenshot `source-images/level2/`.
4. Setelah tiap penambahan: `node make-pdf.js` + weasyprint (lihat bagian Fitur PDF) dan `cd ppt && node build.js`, lalu zip ulang. `make-pdf.js` dan `ppt/build.js` sudah memuat Level 1-4.
5. Deploy Vercel + opsional KaTeX, timer, skor, mode acak.

### Cara deploy
Static, tanpa build: `vercel --prod` di folder project (isi: index.html, style.css, app.js, canvas.js, print.js, data/, assets/, Soal-Lengkap-TKA.pdf).

## UPDATE 6 — LEVEL 5 (TKA Matematika LANJUT 2025)
- Sumber: PDF "Soal Asli TKA SMA 2025 Matematika Lanjut" (m4th-lab.net), 25 soal TANPA kunci (pembahasan ada di situs luar). Level 5 = `data/level5.js` (`window.LEVEL5`, 25 soal, `source:'ai'` -> label "Jawaban dari AI Claude"). Pemilih level sekarang 5 tombol (`LEVELS[5]` di `app.js`, key progres `tka2_L5`).
- Semua jawaban dihitung ulang manual. Rekap kunci: 1 E; 2 E; 3 C (k = 40); 4 opsi 3 & 5; 5 opsi 1 & 3; 6 C (−1); 7 D; 8 Salah/Benar/Benar; 9 Salah/Benar/Salah; 10 Danau C, D, E; 11 E (15 jam); 12 B; 13 C (9); 14 BC, CD, DE; 15 A; 16 (1,−5) & (3,−1); 17 opsi 1, 2, 5; 18 Tidak Pas/Tidak Pas/Pas; 19 E (6); 20 C; 21 (2,0) & (5,2); 22 A (−7/67); 23 B (Rp3 juta); 24 pernyataan 5; 25 E (3/2).
- Gambar soal dipotong dari PDF ke `assets/soal/l5-*.jpg` (render 110 dpi, crop persen halaman).
- PERLU DICEK GURU (ada tafsir/asumsi, lihat `note` di soal): no. 3 (total J & GM di soal tidak persis cocok dengan hitungan: 4.160 dan 5.140 vs 4.360 dan 4.960; k tetap 40 dari persamaan air), no. 8 (tafsir f(x) = 2.000 juta), no. 15 (pusat (−3,4) dibaca dari gambar), no. 17 (tafsir opsi "setengah hitam + warna"; ukuran 10/14/8 cm dari gambar), no. 18 ("√3 ≈ 1,4" dibaca √2 ≈ 1,4), no. 24.
- PDF (`Soal-Lengkap-TKA.pdf`, 188 hlm) dan PPT sudah mencakup Level 1-5. Belum dites ulang di HP setelah penambahan Level 5.

### Catatan Update 6b (perbaikan Level 5 kosong di Vercel)
- Gejala: di Vercel tombol Level 5 muncul tetapi "Terjawab 0/0" dan semua nomor redup. Penyebab paling mungkin: `data/level5.js` (atau `index.html` terbaru yang memuatnya) belum ikut ter-upload / tersimpan cache lama. Perbaikan: `app.js` kini memuat otomatis `data/levelN.js` bila belum ada (fungsi `ensureLevel`), semua `<script>`/CSS diberi `?v=11` agar cache tidak basi, dan ada pesan jelas bila file benar-benar 404. Bug urutan `pick_` (TDZ) ditemukan lewat uji dan sudah diperbaiki (`const pick_` kini di baris atas `app.js`).
- Saat deploy: upload SELURUH isi folder `tka/` (index.html, style.css, app.js, canvas.js, print.js, data/, assets/, Soal-Lengkap-TKA.pdf). Jangan hanya sebagian file.
