// LEVEL 5 = Soal Asli TKA Matematika Lanjut 2025 (PDF m4th-lab.net, tanpa kunci). Semua jawaban = AI Claude, dihitung ulang manual.
window.LEVEL5=[
 {
  "no": 1,
  "type": "single",
  "source": "ai",
  "topic": "Matriks (Invers)",
  "text": "Perhatikan matriks F = [[2, 0], [0, 1/2]]. Invers dari matriks F adalah ....",
  "options": [
   "[[1, 0], [0, 2]]",
   "[[−1, 0], [0, −2]]",
   "[[2, 0], [0, 1]]",
   "[[−1/2, 0], [0, −2]]",
   "[[1/2, 0], [0, 2]]"
  ],
  "answer": [
   4
  ],
  "steps": [
   "F matriks diagonal, sehingga inversnya adalah matriks diagonal dengan elemen kebalikannya.",
   "F⁻¹ = [[1/2, 0], [0, 1/(1/2)]] = [[1/2, 0], [0, 2]].",
   "Cek: F · F⁻¹ = [[2·1/2, 0], [0, 1/2·2]] = [[1, 0], [0, 1]] ✓."
  ]
 },
 {
  "no": 2,
  "type": "single",
  "source": "ai",
  "topic": "Sistem Persamaan & Matriks",
  "text": "Pak Andi memiliki x sapi dan y kambing. Tiap hari tersedia 38 kg rumput gajah dan 34 kg rumput gamal tanpa sisa. Sapi: rumput gajah 10 kg dan gamal 10 kg; kambing: gajah 2 kg dan gamal 1 kg per ekor.\n\nMaka (x, y) = ....",
  "options": [
   "[[−1, 1], [10, −5]] · (19, 34) = (15, 20)",
   "[[10, −10], [−1, 2]] · (38, 34) = (4, 3)",
   "[[−1/10, 2/10], [1, −1]] · (34, 38) = (4, 3)",
   "[[−1, 2], [10, −10]] · (38, 34) = (3, 4)",
   "[[−1/5, 1/5], [2, −1]] · (19, 34) = (3, 4)"
  ],
  "answer": [
   4
  ],
  "steps": [
   "Model: 10x + 2y = 38 dan 10x + y = 34. Bagi persamaan pertama dengan 2: 5x + y = 19.",
   "Bentuk matriks: [[5, 1], [10, 1]] (x, y) = (19, 34). Determinan = 5·1 − 1·10 = −5.",
   "Invers = (1/−5)·[[1, −1], [−10, 5]] = [[−1/5, 1/5], [2, −1]].",
   "(x, y) = [[−1/5, 1/5], [2, −1]] · (19, 34) = (−3,8 + 6,8; 38 − 34) = (3, 4) → 3 sapi dan 4 kambing.",
   "Opsi D: hasil perkalian sebenarnya (30, 40), bukan (3, 4), sehingga salah; hanya opsi E yang perhitungannya benar."
  ],
  "figure": [
   "assets/soal/l5-q02.jpg"
  ]
 },
 {
  "no": 3,
  "type": "single",
  "source": "ai",
  "topic": "Matriks (Perkalian)",
  "text": "Matriks kebutuhan bahan per botol (J, GM, A): wedang jahe [20, 15, 50], beras kencur [10, 25, 40], kunir asem [12, 8, k]. Pesanan: WJ 100, BK 120, KA 80. Total bahan: J = 4.360 g, GM = 4.960 g, A = 13.000 ml.\n\nBanyak air untuk satu botol kunir asem adalah ....",
  "options": [
   "30 ml",
   "35 ml",
   "40 ml",
   "45 ml",
   "50 ml"
  ],
  "answer": [
   2
  ],
  "steps": [
   "Persamaan air (kolom A): 50·100 + 40·120 + k·80 = 13.000.",
   "5.000 + 4.800 + 80k = 13.000 → 80k = 3.200 → k = 40 ml."
  ],
  "note": "Catatan: bila dihitung langsung, total J dan GM dari matriks adalah 4.160 dan 5.140, tidak persis sama dengan angka di soal (4.360 dan 4.960). Nilai k tetap ditentukan dari persamaan air dan hasilnya 40 ml (opsi C)."
 },
 {
  "no": 4,
  "type": "multi",
  "source": "ai",
  "topic": "Matriks (Pendapatan)",
  "text": "Kapasitas kamar (Standard, Deluxe, Suite): Hotel A = 9, 6, 3; Hotel B = 6, 7, 2; Hotel C = 7, 5, 4. Harga per malam: Rp150.000, Rp500.000, Rp1.000.000. Semua kamar terisi penuh dalam 1 hari. Pilih semua jawaban yang benar!",
  "options": [
   "Pendapatan Hotel A dan Hotel C sama besar.",
   "Pendapatan Hotel B lebih besar daripada Hotel A.",
   "Pendapatan paling besar diperoleh dari Hotel C.",
   "Masing-masing hotel memiliki selisih pendapatan yang sama besar.",
   "Pendapatan dari ketiga hotel tersebut lebih dari Rp20.000.000."
  ],
  "answer": [
   2,
   4
  ],
  "steps": [
   "Hotel A = 9·150.000 + 6·500.000 + 3·1.000.000 = 1.350.000 + 3.000.000 + 3.000.000 = Rp7.350.000.",
   "Hotel B = 6·150.000 + 7·500.000 + 2·1.000.000 = 900.000 + 3.500.000 + 2.000.000 = Rp6.400.000.",
   "Hotel C = 7·150.000 + 5·500.000 + 4·1.000.000 = 1.050.000 + 2.500.000 + 4.000.000 = Rp7.550.000.",
   "Pernyataan 1 salah (7,35 ≠ 7,55 juta). Pernyataan 2 salah (6,4 < 7,35). Pernyataan 3 benar (C terbesar).",
   "Pernyataan 4 salah: selisih A−B = 950.000, C−A = 200.000. Pernyataan 5 benar: total = 21.300.000 > 20.000.000."
  ],
  "figure": [
   "assets/soal/l5-q04.jpg"
  ]
 },
 {
  "no": 5,
  "type": "multi",
  "source": "ai",
  "topic": "Suku Banyak (Akar)",
  "text": "Di manakah koordinat titik perpotongan grafik f(x) = x³ + 3x² − 10x − 24 terhadap sumbu X? Pilih semua jawaban yang benar!",
  "options": [
   "(−2, 0)",
   "(−1, 0)",
   "(3, 0)",
   "(4, 0)",
   "(5, 0)"
  ],
  "answer": [
   0,
   2
  ],
  "steps": [
   "Titik potong sumbu X: f(x) = 0.",
   "Coba x = 3: 27 + 27 − 30 − 24 = 0 ✓, sehingga (x − 3) faktor.",
   "Bagi: x³ + 3x² − 10x − 24 = (x − 3)(x² + 6x + 8) = (x − 3)(x + 2)(x + 4).",
   "Akar: x = 3, −2, −4 → titik (3, 0) dan (−2, 0) (juga (−4, 0), tetapi tidak ada di pilihan)."
  ]
 },
 {
  "no": 6,
  "type": "single",
  "source": "ai",
  "topic": "Suku Banyak (Sisa Pembagian)",
  "text": "Suku banyak f(x) = x⁴ + ax³ + bx² + x − 6 jika dibagi x² + x + 1 menghasilkan sisa 5x − 1. Nilai a + b = ....",
  "options": [
   "11",
   "5",
   "−1",
   "−5",
   "−7"
  ],
  "answer": [
   2
  ],
  "steps": [
   "f(x) − (5x − 1) = x⁴ + ax³ + bx² − 4x − 5 habis dibagi x² + x + 1.",
   "Misal ω akar x² + x + 1 = 0, maka ω² = −ω − 1 dan ω³ = 1, ω⁴ = ω.",
   "Substitusi: ω + a + b(−ω − 1) − 4ω − 5 = (−3 − b)ω + (a − b − 5) = 0.",
   "Koefisien ω: −3 − b = 0 → b = −3. Konstanta: a − b − 5 = 0 → a = 2.",
   "a + b = 2 + (−3) = −1."
  ]
 },
 {
  "no": 7,
  "type": "single",
  "source": "ai",
  "topic": "Turunan/Fungsi Polinom",
  "text": "Penambahan volume satu drum: V(T) = 0,05T³ + 0,4T² + 20T. Total penambahan volume 10 drum pada suhu yang sama dinyatakan dengan ....",
  "options": [
   "50T³ + 40T² + 200T",
   "50T³ + 4T² + 200T",
   "5T³ + 4T² + 200T",
   "0,5T³ + 4T² + 200T",
   "0,5T³ + 0,4T² + 200T"
  ],
  "answer": [
   3
  ],
  "steps": [
   "Total 10 drum = 10 · V(T).",
   "10 × 0,05T³ = 0,5T³; 10 × 0,4T² = 4T²; 10 × 20T = 200T.",
   "Jadi 0,5T³ + 4T² + 200T."
  ]
 },
 {
  "no": 8,
  "type": "category",
  "source": "ai",
  "topic": "Fungsi Polinom (Pemodelan)",
  "text": "Modal saham f(x) = x³ − 70x² − 600x + 74.000 (juta rupiah), x = banyak unit saham. Modal yang dimiliki perusahaan Rp2 miliar = 2.000 juta. Tentukan Benar (mungkin) atau Salah (tidak mungkin)!",
  "options": [
   "Perusahaan mungkin dapat menjual 30 unit saham.",
   "Perusahaan mungkin dapat menjual 40 unit saham.",
   "Perusahaan mungkin dapat menjual 60 unit saham."
  ],
  "answer": [
   false,
   true,
   true
  ],
  "steps": [
   "Modal 2.000 juta berarti f(x) = 2.000 → x³ − 70x² − 600x + 72.000 = 0.",
   "Faktorkan: (x − 40)(x − 60)(x + 30) = 0 → x = 40, 60 (x = −30 tidak mungkin).",
   "f(30) = 27.000 − 63.000 − 18.000 + 74.000 = 20.000 ≠ 2.000 → tidak mungkin.",
   "f(40) = 2.000 dan f(60) = 2.000 → mungkin."
  ],
  "note": "Tafsir soal: jumlah unit yang mungkin dijual adalah yang membuat modal f(x) tepat sama dengan 2.000 juta."
 },
 {
  "no": 9,
  "type": "category",
  "source": "ai",
  "topic": "Fungsi Eksponensial",
  "text": "Populasi kelinci K(t) = 4 · 2^(t/4) (t dalam tahun, K dalam ribu ekor). Tentukan Benar atau Salah!",
  "options": [
   "Setiap 4 tahun populasi bertambah menjadi 4 kalinya.",
   "Pada saat awal populasi kelinci berjumlah 4 ribu ekor.",
   "Populasi mencapai 1 juta sebelum 20 tahun dari awal pengamatan."
  ],
  "answer": [
   false,
   true,
   false
  ],
  "steps": [
   "K(t + 4) = 4 · 2^((t+4)/4) = 2 · K(t) → setiap 4 tahun menjadi 2 kali (bukan 4 kali) → Salah.",
   "K(0) = 4 · 2⁰ = 4 ribu ekor → Benar.",
   "K(20) = 4 · 2⁵ = 128 ribu ekor < 1.000 ribu (1 juta) → Salah."
  ]
 },
 {
  "no": 10,
  "type": "multi",
  "source": "ai",
  "topic": "Fungsi Eksponensial",
  "text": "Grafik pertumbuhan eceng gondok: luas 10 m² (awal), 70 m² (tahun ke-1), 490 m² (tahun ke-2). Setelah 3 tahun luas tertutup: Danau A 15.000, B 16.500, C 17.000, D 17.500, E 18.000 m².\n\nDanau mana yang luasnya lebih dari 49 m² pada awal pengamatan? Pilih semua yang benar!",
  "options": [
   "Danau A",
   "Danau B",
   "Danau C",
   "Danau D",
   "Danau E"
  ],
  "answer": [
   2,
   3,
   4
  ],
  "steps": [
   "Pola 10 → 70 → 490: dikali 7 tiap tahun, sehingga L(t) = L₀ · 7ᵗ.",
   "Setelah 3 tahun: L(3) = L₀ · 343, jadi L₀ = L(3) / 343.",
   "Syarat L₀ > 49 → L(3) > 49 × 343 = 16.807 m².",
   "C (17.000), D (17.500), dan E (18.000) melebihi 16.807; A dan B tidak."
  ],
  "figure": [
   "assets/soal/l5-q10a.jpg",
   "assets/soal/l5-q10b.jpg"
  ]
 },
 {
  "no": 11,
  "type": "single",
  "source": "ai",
  "topic": "Fungsi Trigonometri",
  "text": "Grafik kedalaman air laut y = a + b cos(πt/6) memiliki nilai maksimum 14,3 m (t = 0 dan t = 12) dan minimum 10,3 m (t = 6).\n\nWaktu saat kedalaman air laut mencapai 12,3 meter untuk ketiga kalinya setelah pukul 00.00 adalah ....",
  "options": [
   "3 jam",
   "9 jam",
   "10 jam",
   "12 jam",
   "15 jam"
  ],
  "answer": [
   4
  ],
  "steps": [
   "a = (14,3 + 10,3)/2 = 12,3 dan b = (14,3 − 10,3)/2 = 2, sehingga y = 12,3 + 2 cos(πt/6).",
   "y = 12,3 → cos(πt/6) = 0 → πt/6 = π/2 + kπ → t = 3 + 6k.",
   "Waktu-waktunya: t = 3 (pertama), 9 (kedua), 15 (ketiga) → 15 jam."
  ],
  "figure": [
   "assets/soal/l5-q11.jpg"
  ]
 },
 {
  "no": 12,
  "type": "single",
  "source": "ai",
  "topic": "Vektor (Panjang)",
  "text": "Diketahui vektor AB = (2m, m + 3, m). Jika panjang AB = 9 satuan, nilai m yang memenuhi adalah ....",
  "options": [
   "−4 atau −3",
   "−4 atau 3",
   "−3 atau 4",
   "3 atau 4",
   "4 atau 3"
  ],
  "answer": [
   1
  ],
  "steps": [
   "|AB|² = (2m)² + (m + 3)² + m² = 81.",
   "4m² + m² + 6m + 9 + m² = 81 → 6m² + 6m − 72 = 0 → m² + m − 12 = 0.",
   "(m + 4)(m − 3) = 0 → m = −4 atau m = 3."
  ]
 },
 {
  "no": 13,
  "type": "single",
  "source": "ai",
  "topic": "Vektor pada Trapesium",
  "text": "Trapesium sama kaki ABCD dengan AD = BC, A(0,0), AD = (1, 4), AB = (6, 0), dan BC = (a, b). Nilai a² + 2b = ....",
  "options": [
   "5",
   "7",
   "9",
   "10",
   "13"
  ],
  "answer": [
   2
  ],
  "steps": [
   "D = (1, 4), B = (6, 0). Sisi sejajar AB adalah DC mendatar, jadi C = (c, 4).",
   "|BC| = |AD| = √17 → (c − 6)² + 16 = 17 → c = 5 atau 7. Trapesium sama kaki (bukan jajargenjang) → c = 5.",
   "BC = (5 − 6, 4 − 0) = (−1, 4) → a = −1, b = 4.",
   "a² + 2b = 1 + 8 = 9. (Untuk c = 7 pun hasilnya 1 + 8 = 9.)"
  ]
 },
 {
  "no": 14,
  "type": "multi",
  "source": "ai",
  "topic": "Vektor/Jarak Tiga Dimensi",
  "text": "Kereta melaju dengan kecepatan konstan lurus dari stasiun A(2, 3, 5) ke E(11, 6, 8) km. Waktu tempuh: A–B 5 menit, B–C 3 menit, C–D 2 menit, D–E 3 menit.\n\nPasangan stasiun mana yang jaraknya kurang dari 3,5 km? Pilih semua yang benar!",
  "options": [
   "AB",
   "BC",
   "CD",
   "DE",
   "CE"
  ],
  "answer": [
   1,
   2,
   3
  ],
  "steps": [
   "AE = √((11−2)² + (6−3)² + (8−5)²) = √99 ≈ 9,95 km, total waktu 13 menit.",
   "Kecepatan = 9,95/13 ≈ 0,765 km/menit.",
   "AB = 5 × 0,765 ≈ 3,83 km; BC = 3 × 0,765 ≈ 2,30; CD = 2 × 0,765 ≈ 1,53; DE ≈ 2,30; CE = (2 + 3) × 0,765 ≈ 3,83.",
   "Kurang dari 3,5 km: BC, CD, dan DE."
  ],
  "figure": [
   "assets/soal/l5-q14.jpg"
  ]
 },
 {
  "no": 15,
  "type": "single",
  "source": "ai",
  "topic": "Persamaan Lingkaran",
  "text": "Lingkaran pada gambar berpusat di titik p dengan diameter 4 satuan (jari-jari 2). Persamaan lingkaran yang sepusat dengan lingkaran pada gambar tersebut adalah ....",
  "options": [
   "x² + 6x + y² − 8y + 16 = 0",
   "x² − 6x + y² − 8y + 21 = 0",
   "x² + 6x + y² + 8y + 16 = 0",
   "x² − 8x + y² − 6y + 16 = 0",
   "x² + 8x + y² − 6y + 21 = 0"
  ],
  "answer": [
   0
  ],
  "steps": [
   "Dari gambar, pusat lingkaran = (−3, 4).",
   "Persamaan lingkaran sepusat: x² + y² + 6x − 8y + C = 0 (pusat (−3, 4)).",
   "Opsi A: pusat (−3, 4) ✓ (jari-jari √(9 + 16 − 16) = 3). Opsi lain pusatnya (3,4), (−3,−4), (4,3), atau (−4,3) → bukan."
  ],
  "figure": [
   "assets/soal/l5-q15.jpg"
  ],
  "note": "Pusat dibaca dari gambar; semua lingkaran dengan pusat yang sama dianggap sepusat (jari-jari boleh berbeda)."
 },
 {
  "no": 16,
  "type": "multi",
  "source": "ai",
  "topic": "Garis Singgung Lingkaran",
  "text": "Lingkaran berpusat di A(2, −3) melalui B(3, −1). Garis f melalui C(−1, 0) dan D(0, 2).\n\nTentukan semua titik singgung lingkaran dari garis singgung lingkaran yang tegak lurus garis f. Pilih semua yang benar!",
  "options": [
   "(3, 1)",
   "(1, −5)",
   "(−1, 5)",
   "(3, −1)",
   "(−3, −1)"
  ],
  "answer": [
   1,
   3
  ],
  "steps": [
   "Jari-jari² = (3 − 2)² + (−1 + 3)² = 5. Gradien f = (2 − 0)/(0 + 1) = 2.",
   "Garis singgung tegak lurus f bergradien −1/2, sehingga jari-jari ke titik singgungnya sejajar f (arah (1, 2)).",
   "Titik singgung = A ± √5 · (1, 2)/√5 = (2 ± 1, −3 ± 2) = (3, −1) dan (1, −5)."
  ],
  "figure": [
   "assets/soal/l5-q16.jpg"
  ]
 },
 {
  "no": 17,
  "type": "multi",
  "source": "ai",
  "topic": "Luas Lingkaran & Gabungan",
  "text": "Rambu persegi 40 cm × 40 cm (latar biru), lingkaran hitam berdiameter 40 cm, lingkaran putih di dalamnya berjari-jari 14 cm, dan tanda silang merah selebar 8 cm (10 + 8 + 10 = 28 cm). Cat warna apakah yang lebih banyak digunakan dibanding cat warna hitam? Pilih semua yang benar!",
  "options": [
   "Setengah hitam dan biru.",
   "Setengah hitam dan merah.",
   "Setengah hitam dan putih.",
   "Biru dan putih.",
   "Biru dan merah."
  ],
  "answer": [
   0,
   1,
   4
  ],
  "steps": [
   "Hitam = cincin: π(20² − 14²) = π(400 − 196) = 204π ≈ 640,6 cm².",
   "Biru = persegi − lingkaran besar = 1.600 − 400π ≈ 343,4 cm².",
   "Merah = dua jalur lebar 8 cm di dalam lingkaran r = 14: 2 × 220,9 − 8² ≈ 377,8 cm².",
   "Putih = 196π − merah ≈ 615,8 − 377,8 ≈ 237,9 cm².",
   "Setengah hitam ≈ 320,3. Setengah hitam + biru ≈ 663,7 > 640,6 ✓; setengah hitam + merah ≈ 698,1 ✓; setengah hitam + putih ≈ 558,2 ✗; biru + putih ≈ 581,3 ✗; biru + merah ≈ 721,2 ✓."
  ],
  "figure": [
   "assets/soal/l5-q17.jpg"
  ],
  "note": "Tafsir AI: tiap opsi dibaca sebagai jumlah dua cat yang dibandingkan dengan cat hitam; ukuran 10, 14, dan 8 cm dibaca dari gambar."
 },
 {
  "no": 18,
  "type": "category",
  "source": "ai",
  "topic": "Lingkaran & Persegi (Keliling)",
  "text": "Ornamen: lingkaran dengan persegi di dalamnya dan dua diagonalnya; luas 1 potong kaca merah (juring antara lingkaran dan persegi) = 456 cm², π = 3,14, √2 ≈ 1,4. Kerangka logam = lingkaran + persegi + 2 diagonal. Pas = cukup dan sisa tidak lebih dari 1 meter. Logam A 4 m, B 5 m, C 6,5 m. Tentukan Pas atau Tidak Pas!",
  "options": [
   "Membeli 2 buah logam A adalah pas.",
   "Membeli 1 buah logam B adalah pas.",
   "Membeli 1 buah logam C adalah pas."
  ],
  "answer": [
   false,
   false,
   true
  ],
  "steps": [
   "Luas 4 potong merah = luas lingkaran − luas persegi: πr² − 2r² = 4 × 456 = 1.824 → r²(π − 2) = 1.824 → r² = 1.824/1,14 = 1.600 → r = 40 cm.",
   "Keliling lingkaran = 2 × 3,14 × 40 = 251,2 cm. Sisi persegi = r√2 = 40 × 1,4 = 56 cm → keliling persegi = 224 cm. Dua diagonal = 2 × 80 = 160 cm.",
   "Total kerangka = 251,2 + 224 + 160 = 635,2 cm = 6,352 m.",
   "2 logam A = 8 m: cukup, tetapi sisa 1,648 m > 1 m → Tidak Pas. 1 logam B = 5 m < 6,352 m → tidak cukup → Tidak Pas.",
   "1 logam C = 6,5 m: cukup, sisa 0,148 m ≤ 1 m → Pas."
  ],
  "figure": [
   "assets/soal/l5-q18.jpg"
  ],
  "note": "Pada soal tertulis \"√3 ≈ 1,4\"; dibaca sebagai √2 ≈ 1,4 karena sisi persegi dalam lingkaran memakai √2."
 },
 {
  "no": 19,
  "type": "single",
  "source": "ai",
  "topic": "Transformasi (Refleksi dan Translasi)",
  "text": "Garis ax + y − 9 = 0 dan x + by + 6 = 0 dicerminkan terhadap garis y = x, kemudian ditranslasi T(1, −1), menghasilkan bayangan x + 2y − 8 = 0 dan 2x − y − 9 = 0. Nilai 2a − b = ....",
  "options": [
   "−6",
   "−2",
   "0",
   "2",
   "6"
  ],
  "answer": [
   4
  ],
  "steps": [
   "Pencerminan terhadap y = x menukar x dan y: x + ay − 9 = 0 dan bx + y + 6 = 0.",
   "Translasi (1, −1): x → x′ − 1, y → y′ + 1. Garis pertama: x′ + ay′ + (a − 10) = 0; cocokkan dengan x + 2y − 8 = 0 → a = 2 (dan a − 10 = −8 ✓).",
   "Garis kedua: bx′ + y′ + (7 − b) = 0; cocokkan dengan −2x + y + 9 = 0 (kali −1 dari 2x − y − 9 = 0) → b = −2 (dan 7 − b = 9 ✓).",
   "2a − b = 4 + 2 = 6."
  ]
 },
 {
  "no": 20,
  "type": "single",
  "source": "ai",
  "topic": "Transformasi (Translasi dan Dilatasi)",
  "text": "Lingkaran L berpusat (−5, 3) dengan jari-jari 2. L′ adalah bayangan L oleh translasi T, dan L″ : (x + 4)² + (y − 4)² = 16 adalah bayangan L′ oleh dilatasi berpusat O(0, 0).\n\nPernyataan yang benar tentang translasi T dan faktor skala dilatasi adalah ....",
  "options": [
   "T = (3, −1) dan faktor skala 8",
   "T = (3, −1) dan faktor skala 4",
   "T = (3, −1) dan faktor skala 2",
   "T = (1, 1) dan faktor skala 2",
   "T = (1, 1) dan faktor skala 8"
  ],
  "answer": [
   2
  ],
  "steps": [
   "L″ berpusat (−4, 4) dengan jari-jari 4; L berjari-jari 2 → faktor skala k = 4/2 = 2.",
   "Pusat L′ = pusat L″ / k = (−4, 4)/2 = (−2, 2).",
   "Translasi T = (−2 − (−5), 2 − 3) = (3, −1)."
  ]
 },
 {
  "no": 21,
  "type": "multi",
  "source": "ai",
  "topic": "Transformasi (Rotasi)",
  "text": "Garis l adalah bayangan garis 3x + 2y = 6 setelah dirotasi 90° berlawanan arah jarum jam dengan pusat (2, 0). Titik mana yang terletak pada garis l? Pilih semua yang benar!",
  "options": [
   "(−3, −2)",
   "(−2, −1)",
   "(1, 2)",
   "(2, 0)",
   "(5, 2)"
  ],
  "answer": [
   3,
   4
  ],
  "steps": [
   "Rotasi 90° berlawanan jarum jam pusat (2, 0): (x, y) → (2 − y, x − 2). Jadi X = 2 − y dan Y = x − 2, sehingga x = Y + 2 dan y = 2 − X.",
   "Substitusi ke 3x + 2y = 6: 3(Y + 2) + 2(2 − X) = 6 → −2X + 3Y + 4 = 0 → 2x − 3y − 4 = 0 (garis l).",
   "Uji: (2, 0): 4 − 0 − 4 = 0 ✓; (5, 2): 10 − 6 − 4 = 0 ✓; titik lain tidak memenuhi."
  ]
 },
 {
  "no": 22,
  "type": "single",
  "source": "ai",
  "topic": "Limit Fungsi",
  "text": "Nilai lim x→3 (x³ − 3x² + 2x + 1)/(5 + 3x − 9x²) = ....",
  "options": [
   "−7/67",
   "−6/67",
   "6/76",
   "7/67",
   "7/76"
  ],
  "answer": [
   0
  ],
  "steps": [
   "Substitusi langsung (penyebut tidak nol).",
   "Pembilang: 27 − 27 + 6 + 1 = 7. Penyebut: 5 + 9 − 81 = −67.",
   "Nilai limit = −7/67."
  ]
 },
 {
  "no": 23,
  "type": "single",
  "source": "ai",
  "topic": "Limit di Tak Hingga",
  "text": "Keuntungan K(p) = (9p² + 2p + 10)/(3p² + 3p + 2) (juta rupiah). Keuntungan jika menjual porsi sangat banyak (p → ∞) adalah ....",
  "options": [
   "Rp2.000.000",
   "Rp3.000.000",
   "Rp5.000.000",
   "Rp9.000.000",
   "Rp10.000.000"
  ],
  "answer": [
   1
  ],
  "steps": [
   "Pangkat tertinggi pembilang dan penyebut sama (p²), sehingga limitnya = perbandingan koefisien: 9/3 = 3.",
   "Keuntungan = 3 juta rupiah = Rp3.000.000."
  ]
 },
 {
  "no": 24,
  "type": "multi",
  "source": "ai",
  "topic": "Limit Fungsi Trigonometri",
  "text": "Setengah lingkaran berdiameter AB (r = jari-jari) terletak pada segitiga sama kaki ABC dengan sudut puncak θ. X = luas segitiga ABC, Y = luas setengah lingkaran. Manakah pernyataan yang benar tentang lim θ→a X/Y?",
  "options": [
   "Besar jari-jari mempengaruhi nilai limit.",
   "Besar sudut tidak mempengaruhi nilai limit.",
   "Nilai X/Y selalu sama untuk berapa pun θ.",
   "lim θ→π/6 X/Y = 2/π.",
   "Jika θ = π, maka X/Y = 0."
  ],
  "answer": [
   4
  ],
  "steps": [
   "Tinggi segitiga dari C ke AB = r / tan(θ/2), sehingga X = ½ · 2r · r/tan(θ/2) = r² cot(θ/2).",
   "Y = ½πr² → X/Y = 2 cot(θ/2)/π (jari-jari r habis terbagi).",
   "Pernyataan 1 salah (r tidak berpengaruh), 2 salah (θ berpengaruh), 3 salah (X/Y bergantung θ).",
   "Pernyataan 4: untuk θ = π/6, X/Y = 2 cot(π/12)/π = 2(2 + √3)/π ≠ 2/π → salah.",
   "Pernyataan 5: θ = π → cot(π/2) = 0 → X/Y = 0 → benar."
  ],
  "figure": [
   "assets/soal/l5-q24.jpg"
  ]
 },
 {
  "no": 25,
  "type": "single",
  "source": "ai",
  "topic": "Limit Trigonometri",
  "text": "Nilai lim x→3 [1 − cos(6x − 18)] / [(x − 9/x) sin(6x − 18)] = ....",
  "options": [
   "−3/2",
   "−2/3",
   "0",
   "2/3",
   "3/2"
  ],
  "answer": [
   4
  ],
  "steps": [
   "Misal u = x − 3, sehingga 6x − 18 = 6u dan x − 9/x = (x − 3)(x + 3)/x = u(x + 3)/x.",
   "1 − cos 6u ≈ (6u)²/2 = 18u² dan sin 6u ≈ 6u.",
   "Penyebut ≈ [u(x + 3)/x] · 6u = 6u² (x + 3)/x → untuk x = 3: 6u² · 2 = 12u².",
   "Limit = 18u² / 12u² = 3/2."
  ]
 }
];
