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
