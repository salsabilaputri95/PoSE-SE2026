## **PoSE: Portal Sensus Ekonomi 2026 BPS Kabupaten Jeneponto**

---

## 📌 **1. Latar Belakang**

Sensus Ekonomi 2026 (SE2026) merupakan sensus nasional Badan Pusat Statistik (BPS) setiap 10 tahun sekali yang bertujuan untuk memotret struktur, karakteristik, dan dinamika perekonomian Indonesia secara menyeluruh di luar sektor pertanian murni.

Pada skala daerah di **BPS Kabupaten Jeneponto**, pelaksanaan operasional lapangan melibatkan **327 Petugas Pendata Lapangan (PPL)** dan **48 Petugas Pemeriksa Lapangan (PML)** yang mencakup beban pendataan lebih dari **148.000 target keluarga dan unit usaha** di **11 kecamatan**.

Tingginya volume data harian, keragaman sektor usaha, serta potensi kesalahan lapangan memerlukan sistem mitigasi kualitas data yang cepat dan terintegrasi. Selain itu, petugas lapangan membutuhkan akses satu pintu (*single point of access*) terhadap instrumen pendukung seperti direktori usaha pusat (Kode 7), evaluasi usaha pertanian vs ST2023, referensi KBLI 2025, materi pelatihan, direktori usaha besar, keluarga khusus, dan materi *weekly briefing*.

Untuk menjawab kebutuhan tersebut, dibangunlah platform berbasis web modern bernama **PoSE (Portal Sensus Ekonomi 2026 BPS Kabupaten Jeneponto)** sebagai *central command monitoring* dan *field operational support system*.

---

## 🎯 **2. Tujuan Aplikasi**

1. **Monitoring Kinerja Real-Time**: Menyediakan pemantauan capaian harian dan mingguan PPL serta PML se-Kabupaten Jeneponto secara transparan, akurat, dan dapat difilter per kecamatan hingga level petugas.
2. **Pengendalian Kualitas Data (Quality Control)**: Memaksimalkan mitigasi anomali data (usaha dan keluarga) melalui pemantauan status tindak lanjut (*Belum Ditindaklanjuti*, *Catatan/Penjelasan*, dan *Perbaikan*) sebelum data diproses pada tahap akhir.
3. **Sinkronisasi Data Otomatis**: Menghubungkan dashboard langsung ke sumber data Google Sheets BPS Jeneponto dengan fitur sinkronisasi otomatis (*auto-sync*) setiap 5 menit dan opsi pembaruan manual.
4. **Pusat Referensi Terintegrasi**: Menyediakan direktori Usaha Pusat (Kode 7), Usaha Besar, Evaluasi Pertanian vs ST2023, Keluarga Khusus, KBLI 2025, materi pelatihan teknis, dan arahan *Weekly Briefing*.

---

## 📊 **3. Daftar Sumber Data & Link Spreadsheet**

Aplikasi PoSE terhubung langsung dengan *Google Sheets* dan *Google Drive* resmi BPS Kabupaten Jeneponto:

|     No     | Modul / Data                           |    Format    | Sumber & URL Akses                                                                                                                                                                                                                                                                                                                   | Deskripsi & Variabel Utama                                                                                         |
| :---------: | :------------------------------------- | :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| **1** | **Monitoring Petugas**           | Spreadsheet | [Spreadsheet Monitoring](https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/edit?gid=1206401506#gid=1206401506)                                                                                                                                                                                      | Realisasi pendataan harian PPL/PML (Kolom P: % Progres, Kolom Q: % Open+Draft, Kolom R: % Approve, Muatan Target). |
| **2** | **Daftar Anomali Data**          | Spreadsheet | [Spreadsheet Anomali](https://docs.google.com/spreadsheets/d/141zngbEXedgCgPF1c0TamUBdCy9g1T4YO-mVSzOmwUQ/edit?gid=105002898#gid=105002898)                                                                                                                                                                                           | Rekapitulasi 2.005 kasus anomali usaha & keluarga (PPL, PML, Wilayah, Jenis Anomali, Status Tindak Lanjut).        |
| **3** | **Evaluasi Pertanian vs ST2023** | Spreadsheet | [Spreadsheet Pertanian](https://docs.google.com/spreadsheets/d/19DcV3CA0FkcpsZldqd-ChW8JL0SgcVFX-dC7Y_0_3So/edit?gid=46846179#gid=46846179)                                                                                                                                                                                           | Perbandingan capaian unit usaha pertanian SE2026 terhadap baseline UTP ST2023 per Desa/Kelurahan.                  |
| **4** | **Direktori Usaha Besar**        | Spreadsheet | [Spreadsheet Usaha Besar](https://docs.google.com/spreadsheets/d/18e4NwGBJy8myLvNLTVj1jV4pLpwgqZn3/edit?usp=sharing)                                                                                                                                                                                                                  | Direktori Usaha Besar (UB) di Jeneponto (Nama Usaha, Kecamatan, Alamat, Kegiatan Pokok).                           |
| **5** | **Usaha Sumber Pusat (Kode 7)**  | Spreadsheet | [Spreadsheet Usaha Pusat](https://docs.google.com/spreadsheets/d/1BT_ub01ex_h3yqI-n_EFO8pYFoVORRweB8V_5ebpgHo/edit?usp=sharing)                                                                                                                                                                                                       | Direktori 34 unit usaha bersumber kantor pusat (Bank, BUMN/BUMD, PLN, Telkom, Waralaba).                           |
| **6** | **Referensi KBLI 2025**          |  Portal BPS  | [Portal KBLI BPS](https://s.bps.go.id/kbli7304_se2026)                                                                                                                                                                                                                                                                                | Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) 5-digit yang sering digunakan di Jeneponto.                       |
| **7** | **Daftar Keluarga Khusus**       | Spreadsheet | [Spreadsheet Keluarga Khusus](https://docs.google.com/spreadsheets/d/1VfurEu3pLfqO0cJRiUfiB1NcY4MJGAnWWOI0pQIVAng/edit?gid=0#gid=0)                                                                                                                                                                                                   | Direktori lokasi dan daftar keluarga pada tempat tinggal khusus (menetap & nomaden).                               |
| **8** | **Materi Pelatihan Petugas**     | Google Drive | [Drive Bahan Tayang](https://drive.google.com/drive/folders/1ok4nqFSHIuSts33LooUbogjy5SVtOH9G?usp=sharing) / [Drive Kuesioner](https://drive.google.com/drive/folders/1_HbzTVrFoyEy0xAJITJy-oxD6xpaKvYu?usp=drive_link) / [Drive Buku Pedoman](https://drive.google.com/drive/folders/1MifWV2tW0MKPe-05Lz3h1CLqxbgcJQ0U?usp=drive_link) | Dokumen kuesioner SE2026, buku pedoman lapangan, dan bahan tayang pelatihan.                                       |
| **9** | **Weekly Briefing**              | Google Drive | [Drive Weekly Briefing](https://drive.google.com/drive/folders/1xhlZVA5nmpu6BM6YmebZS8loqMxzfZJo?usp=drive_link)                                                                                                                                                                                                                      | Notulensi, slide evaluasi mingguan, dan arahan pimpinan BPS Jeneponto.                                             |

---

## 💻 **4. Rincian Fitur Aplikasi PoSE yang Sedang Berjalan**

### **Fitur 1: Hero & Ringkasan Makro SE2026**

* Menyajikan ringkasan makro indikator target pendataan Kabupaten Jeneponto (Target Keluarga & Usaha: 148.025, Total Muatan: 171.629, Jumlah Petugas: 327 PPL & 48 PML, Wilayah: 11 Kecamatan).
* Disertai tombol aksi cepat untuk langsung melompat ke dashboard monitoring, modul anomali, maupun evaluasi pertanian.
* Tombol sinkronisasi langsung (*Live Sync Status Badge*) dengan indikator waktu pembaruan terakhir.

---

### **Fitur 2: Dashboard Monitoring Pendataan Petugas (PPL & PML)**

Fitur pemantauan kinerja harian dan mingguan petugas pendata dan pemeriksa lapangan:

* **4 Kartu Ringkasan KPI**:
  1. 🔵 **Persentase Progres**: Capaian beban muatan lapangan yang sudah dikerjakan (Kolom P).
  2. 🟡 **Persentase Open + Draft**: Dokumen yang masih dalam status pengerjaan/belum disubmit (Kolom Q).
  3. 🟢 **Persentase Approve**: Dokumen yang telah selesai diperiksa dan disetujui oleh PML (Kolom R).
  4. 📍 **Wilayah Cakupan**: Menampilkan jumlah kecamatan (11 Kecamatan) atau jumlah PPL & PML pada kecamatan yang dipilih.
* **Filter & Pencarian Interaktif**:
  * Dropdown filter wilayah: Pilihan *"Kabupaten Jeneponto"* atau 11 kecamatan individual (*Arungkeke, Bangkala, Bangkala Barat, Batang, Binamu, Bontoramba, Kelara, Rumbia, Tamalatea, Tarowang, Turatea*).
  * **Pencarian Live by Nama Petugas**: Kolom pencarian nama modern dengan tombol *clear* cepat untuk mencari nama PPL / PML tertentu.
* **Dua Grafik Batang Terkelompok (Grouped Horizontal Bar)**:
  * **Sumbu X**: Menampilkan skala persentase `0% – 100%` dengan gridlines halus.
  * **Struktur 3 Batang per Petugas/Wilayah**:
    1. 🔵 **Progress** (Biru - Atas)
    2. 🟡 **Open + Draft** (Kuning - Tengah)
    3. 🟢 **Approve** (Hijau - Bawah)
  * **Hierarki Tampilan**:
    * Pada level Kabupaten: Grafik 1 menampilkan per-Kecamatan, Grafik 2 menampilkan per-Kecamatan.
    * Pada level Kecamatan: Grafik 1 menampilkan per PPL (disertai nama PML pendamping dalam kurung siku `[Nama PML]`), Grafik 2 menampilkan per PML (disertai keterangan jumlah PPL di bawah bimbingannya).
* **Mode Tampilan Diperluas (*Expanded View*)**:
  * Tombol *"Lihat Selengkapnya (Semua Data)"* yang membuat area grafik memanjang ke bawah secara leluasa (*dynamic container height ~75px-80px per petugas*) sehingga puluhan nama petugas terbaca jelas tanpa bertumpuk.
  * Dilengkapi tombol navigasi cepat kembali ke atas (*Scroll to Top*).

---

### **Fitur 3: Dashboard Mitigasi Anomali Usaha & Keluarga**

Modul pengendalian mutu data hasil pendataan untuk memastikan kesalahan input segera diperbaiki:

* **4 Kartu Ringkasan KPI Anomali**:
  1. 🏢 **Penyelesaian Anomali Usaha Sudah Ditindaklanjuti**: Persentase & jumlah kasus anomali usaha yang sudah selesai (se-Kabupaten: `86.6%` — 1.314 dari 1.518 kasus usaha).
  2. ⚠️ **Anomali Usaha Belum Ditindaklanjuti**: Persentase & jumlah kasus anomali usaha yang belum ditindaklanjuti (se-Kabupaten: `13.4%` — 204 kasus usaha belum).
  3. 🏠 **Penyelesaian Anomali Keluarga sudah ditindaklanjuti**: Persentase & jumlah kasus anomali keluarga yang sudah selesai (se-Kabupaten: `97.1%` — 473 dari 487 kasus keluarga).
  4. ⏳ **Anomali Keluarga Belum ditindaklanjuti**: Persentase & jumlah kasus anomali keluarga yang belum ditindaklanjuti (se-Kabupaten: `2.9%` — 14 kasus keluarga belum).
* **Interaktivitas Dropdown & Live Search**:
  * Saat memilih kecamatan, keempat kartu KPI otomatis menghitung ulang data khusus kecamatan yang dipilih.
  * Kolom pencarian nama petugas PPL/PML di modul anomali untuk memfilter kasus anomali per individu.
* **Dua Grafik Stacked Bar (0% – 100%)**:
  * Grafik 1: Progres Tindak Lanjut PPL (per Kecamatan atau per PPL dengan menyertakan nama pengawas PML `[Nama PML]`).
  * Grafik 2: Progres Pemeriksaan PML (per Kecamatan atau per PML dengan keterangan jumlah PPL binaan `(X PPL)`).
  * Kategori Warna: 🔴 *% Belum Ditindaklanjuti*, 🟡 *% Ditindaklanjuti dg Catatan*, 🟢 *% Ditindaklanjuti dg Perbaikan*.
  * **Tooltip Interaktif Lengkap**: Menampilkan persentase sekaligus jumlah kasus riil, contoh: `Belum Ditindaklanjuti: 3.2% (20)`.
  * Fitur ekspansi memanjang ke bawah dinamis (*Expanded View*) tanpa batas tinggi dan tombol *Scroll to Top*.
* **SOP Penanganan Anomali (Navigasi Tab Interaktif)**:
  * **Tab Anomali Usaha**: Panduan mitigasi anomali KBLI (perbedaan 2 digit dengan SBR), anomali pendapatan vs pengeluaran usaha, tenaga kerja, dan legalitas.
  * **Tab Anomali Keluarga**: Panduan mitigasi anomali status tempat tinggal, jumlah anggota keluarga khusus, dan konsistensi kepala keluarga.

---

### **Fitur 4: Evaluasi Usaha Pertanian SE2026 vs ST2023**

Modul evaluasi komparasi jumlah unit usaha pertanian yang terjaring di SE2026 terhadap baseline Unit Usaha Pertanian Perorangan (UTP) Sensus Pertanian 2023:

* **KPI Evaluasi Wilayah**: Menampilkan total usaha pertanian SE2026, baseline UTP ST2023, dan rasio persentase capaian.
* **Filter per Kecamatan**: Memungkinkan peninjauan perbandingan per desa/kelurahan.
* **Tabel Komparasi Lengkap**: Rincian per desa/kelurahan dengan indikator badge persentase realisasi.
* **Akses Spreadsheet**: Tombol langsung menuju spreadsheet analisis pertanian BPS Jeneponto.

---

##### **Fitur 5: Direktori Usaha Besar (UB) Kabupaten Jeneponto**

* Direktori unit-unit usaha skala besar di Kabupaten Jeneponto yang memerlukan perhatian khusus dalam pendataan.
* Tabel interaktif dengan informasi nama badan usaha, sektor ekonomi, kecamatan, dan alamat.
* Tombol akses ke spreadsheet direktori Usaha Besar.

---

### **Fitur 6: Daftar Usaha yang Datanya Bersumber dari Pusat (Kode 7)**

* Instruksi penandaan **Kode 7** pada unit usaha yang laporan keuangannya diperoleh terpusat (Bank/KCP, BUMN/BUMD, PLN, Telkom, Minimarket Waralaba) guna menghindari duplikasi pencatatan.
* **Tabel Bersih & Proporsional**: Menampilkan 3 kolom utama:
  1. `No.`
  2. `Nama Perusahaan` (Badan Hukum/Legal)
  3. `Nama Komersil` (Brand/Badge Usaha)
* Fitur tombol ekspansi daftar lengkap (34 Usaha Pusat) dan tombol kembali ke atas.

---

### **Fitur 7: Direktori & Panduan Keluarga Khusus**

* Panduan identifikasi dan pencocokan keluarga pada tempat tinggal khusus:
  * **Keluarga Khusus Menetap**: Panti asuhan, pondok pesantren, asrama militer/polisi, lapas/rutan, barak pekerja.
  * **Keluarga Khusus Berpindah-pindah (Nomaden)**: Awak kapal berbendera Indonesia, tuna wisma/kolong jembatan, manusia gerobak, pengungsi.
* Tabel direktori keluarga khusus di Jeneponto dan tombol akses spreadsheet.

---

### **Fitur 8: Pusat Referensi KBLI 2025**

* Akses cepat daftar Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) 5-digit yang sering ditemukan di Jeneponto.
* Link langsung ke portal pencarian KBLI terpadu BPS.

---

### **Fitur 9: Pusat Materi Pelatihan & Dokumen Teknis**

* Akses *Google Drive* satu pintu untuk seluruh instrumen sensus:
  1. 📄 **Kuesioner SE2026** (C1, L1, L2, dan instrumen pendataan).
  2. 📘 **Buku Pedoman Teknis** (Buku Pedoman PPL, PML, dan Koseka).
  3. 📽️ **Bahan Tayang & Slide Pelatihan** (Materi presentasi pelatihan petugas).

---

### **Fitur 10: Arsip & Materi Weekly Briefing**

* Pusat arsip bahan paparan, notulensi evaluasi mingguan, dan arahan teknis pimpinan BPS Kabupaten Jeneponto selama periode pendataan lapangan berlangsung.

---

### **Fitur 11: Desain, Navigasi, & Fitur Pendukung (UX/UI)**

1. **Glassmorphism & Modern Theme**: Palet warna resmi BPS (Kombinasi Navy Slate, Vibrant Orange, Emerald Green, dan Amber).
2. **Floating Dock Navigation**: Menu melayang di bagian bawah layar untuk navigasi cepat antar-seksi (*Monitoring, Anomali, Pertanian, Usaha Pusat, Materi, dll.*).
3. **Real-Time Background Auto-Sync**: Sinkronisasi data latar belakang otomatis setiap 5 menit dengan penanganan *fallback* data offline yang aman.
4. **Desain Sepenuhnya Responsif**: Tampilan optimal di perangkat desktop, laptop, tablet, hingga smartphone.

---

*Dokumen ini diperbarui secara berkala sesuai dengan perkembangan rilis fitur dan arsitektur data aplikasi PoSE BPS Kabupaten Jeneponto.*
