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
