**PoSE: Portal Sensus Ekonomi 2026 BPS Kabupaten Jeneponto**

### **Latar Belakang**

Sensus Ekonomi 2026 (SE2026) merupakan agenda nasional BPS setiap 10 tahun sekali yang bertujuan untuk memotret struktur dan dinamika perekonomian Indonesia secara utuh. Pada skala kabupaten seperti BPS Kabupaten Jeneponto, pelaksanaan lapangan melibatkan ratusan Petugas Pendata Lapangan (PPL) dan Petugas Pemeriksa Lapangan (PML) dengan beban pendataan ribuan unit usaha serta keluarga.

Tingginya volume data, variasi jenis usaha, serta dinamika batas wilayah sering memicu isu kualitas data seperti anomali. Di sisi lain, petugas lapangan memerlukan akses cepat terhadap instrumen pendukung seperti daftar usaha yang didata di pusat referensi Klasifikasi Baku Lapangan Usaha Indonesia (KBLI), materi pelatihan, serta administrasi *weekly briefing*. Tanpa media terpadu, aliran informasi rentan terhambat. Untuk itu, diperlukan sebuah platform berbasis web bernama **PoSE (Portal Sensus Ekonomi 2026 BPS Kabupaten Jeneponto)** sebagai *center* monitoring dan sistem pendukung operasional lapangan.

### **Masalah yang Ingin Diselesaikan**

* **Penyelesaian Anomali:** Perlu adanya deteksi cepat kesalahan input (misal: pengeluaran usaha lebih besar daripada pendapatan).
* **Monitoring Progres:** Belum adanya pemantauan capaian harian PPL dan PML, sehingga sulit memetakan wilayah atau petugas yang mengalami keterlambatan.
* **Akses Instrumen dan Referensi yang Tersebar:** Petugas kesulitan mencari materi pelatihan, dan referensi KBLI, dengan cepat saat berada di lapangan.
* **Pendataan Keluarga Khusus:** Perlu dilakukan pencocokan dan pembuatan daftar keluarga khusus yang ada di Kabupaten Jeneponto.
* **Data Pusat:** Beberapa usaha didapatkan datanya dari pusat, sehingga diperlukan penyampaian daftar usaha tersebut untuk diberi kode 7 (data diperoleh dari kantor pusat) oleh petugas lapangan.

### **Tujuan Aplikasi**

* Menyediakan platform monitoring kinerja pencapaian target harian dan mingguan PPL/PML secara transparan.
* Memaksimalkan pengendalian kualitas data SE2026 melalui sistem deteksi dan penanganan anomali (usaha & keluarga) sebelum pengolahan data akhir.
* Memfasilitasi petugas lapangan dengan materi digital mencakup referensi KBLI yang sering muncul, materi pelatihan, dan arahan *weekly briefing*.
* Menyediakan daftar usaha yang didata pusat dan daftar keluarga khusus.

### **Daftar Data yang Dibutuhkan**

Berikut merupakan data yang dibutuhkan untuk penyusunan aplikasi PoSE:

| No          | Nama                                                                                                                                                          | Bentuk       | Deskripsi & Variabel Utama                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| **1** | Data Monitoring Petugas Link: https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/edit?usp=sharing                            | Spreadsheet  | Realisasi pendataan harian PPL/PML (Nama PPL, Nama PML, Kecamatan Tugas, Muatan, Persentase submit, Persentase approved). |
| **2** | Daftar Anomali Usaha dan Keluarga Link: https://docs.google.com/spreadsheets/d/141zngbEXedgCgPF1c0TamUBdCy9g1T4YO-mVSzOmwUQ/edit?gid=105002898\#gid=105002898 | Spreadsheet  | Daftar temuan anomali usaha dan keluarga (Nama PPL, Nama PML, Jenis Anomali, Status Tindak Lanjut).                       |
| **3** | Daftar Usaha yang Datanya Bersumber dari Pusat Link: https://docs.google.com/spreadsheets/d/1BT\_ub01ex\_h3yqI-n\_EFO8pYFoVORRweB8V\_5ebpgHo/edit?usp=sharing | Spreadsheet  | Daftar usaha didata pusat (Nama Kantor Pusat).                                                                            |
| **4** | Daftar Referensi KBLI Kabupaten Jeneponto Link:                                                                                                               | Spreadsheet  | Referensi KBLI 5 digit yang sering muncul.                                                                                |
| **5** | Daftar Keluarga Khusus Link:                                                                                                                                  | Spreadsheet  | Daftar keluarga khusus yang perlu didata.                                                                                 |
| **6** | Materi Pelatihan Petugas SE2026 Link:                                                                                                                         | Folder drive | Folder berisi materi pelatihan petugas SE2026 (kuesioner, buku pedoman, bahan tayang).                                    |
| **7** | Weekly Briefing Link:                                                                                                                                         | Folder drive | Folder berisi bahan paparan weekly briefing.                                                                              |

### **Fitur Aplikasi PoSE**

### **1\. Pengenalan Sensus Ekonomi**

Disampaikan deskripsi singkat terkait Sensus Ekonomi 2026\.

### **2\. Dashboard Monitoring Pendataan Petugas (PPL & PML)**

Fitur ini berfungsi untuk memantau capaian kinerja seluruh Petugas Pendata Lapangan (PPL) dan Petugas Pemeriksa Lapangan (PML). Fitur ini dimulai dengan menampilkan persentase penyelesaian pendataan dan persentase pemeriksaan SE2026 di Kabupaten Jeneponto. Kemudian selanjutnya ditampilkan grafik yang pada pojok kanan atas terdapat dropdown yang dapat dipilih berupa “Kabupaten Jeneponto” dan nama 11 kecamatan. Jika dipilih “Kabupaten Jeneponto” maka yang ditampilkan adalah progres petugas di Kabupaten Jeneponto berdasarkan Kecamatan. Ada 2 grafik yang ditampilkan:

1. Grafik 1 “Progres Pendataan SE2026 Kabupaten Jeneponto” (Sumbu X: Persentase submit dan persentase approved. Sumbu Y: Nama Kecamatan)
2. Grafik 2 “Progres Pemeriksaan SE2026 Kabupaten Jeneponto” (Sumbu X: Persentase rejected dan persentase approved. Sumbu Y: Nama Kecamatan)

Jika salah satu kecamatan dipilih maka yang ditampilkan adalah progres petugas di kecamatan tersebut berdasarkan nama petugas. Ada 2 grafik yang ditampilkan:

1. Grafik 1 “Progres Pendataan SE2026 Kecamatan …” (Sumbu X: Persentase submit dan persentase approved. Sumbu Y: Nama PPL)
2. Grafik 2 “Progres Pemeriksaan SE2026 Kecamatan …” (Sumbu X: Persentase rejected dan persentase approved. Sumbu Y: Nama PML)

### **3\. Anomali Usaha dan Keluarga**

Anomali SE2026 dibagi menjadi 2, yaitu Anomali Usaha dan Anomali Keluarga. Fitur ini dimulai dengan menampilkan persentase penyelesaian anomali usaha dan persentase penyelesaian anomali keluarga di Kabupaten Jeneponto. Kemudian dilanjutkan dengan deskripsi cara penyelesaian anomali-anomali yang ada. Kemudian menampilkan tombol untuk menuju ke spreadsheet daftar anomali. Pada fitur ini juga menampilkan grafik. Terdapat menu untuk dipilih di pojok kanan atas yang berisi “Kabupaten Jeneponto” dan nama 11 kecamatan. Jika dipilih “Kabupaten Jeneponto” maka yang ditampilkan adalah progres penyelesaian anomali petugas di Kabupaten Jeneponto berdasarkan Kecamatan. Ada 2 grafik yang ditampilkan:

1. Grafik 1 “Progres Penyelesaian Anomali SE2026 Kabupaten Jeneponto” (Sumbu X: Persentase anomali yang belum ditindaklanjuti, persentase anomali yang sudah ditindaklanjuti dengan catatan, dan persentase anomali yang sudah ditindaklanjuti dengan perbaikan. Sumbu Y: Nama Kecamatan)
2. Grafik 2 “Progres Pemeriksaan Penyelesaian Anomali SE2026 Kabupaten Jeneponto” (Sumbu X: Persentase anomali yang belum ditindaklanjuti, persentase anomali yang sudah ditindaklanjuti dengan catatan, dan persentase anomali yang sudah ditindaklanjuti dengan perbaikan. Sumbu Y: Nama Kecamatan)

Jika salah satu kecamatan dipilih maka yang ditampilkan adalah progres petugas di kecamatan tersebut berdasarkan nama petugas. Ada 2 grafik yang ditampilkan:

1. Grafik 1 “Progres Penyelesaian Anomali SE2026 Kecamatan …” (Sumbu X: Persentase anomali yang belum ditindaklanjuti, persentase anomali yang sudah ditindaklanjuti dengan catatan, dan persentase anomali yang sudah ditindaklanjuti dengan perbaikan. Sumbu Y: Nama PPL)
2. Grafik 2 “Progres Pemeriksaan Penyelesaian Anomali SE2026 Kecamatan …” (Sumbu X: Persentase anomali yang belum ditindaklanjuti, persentase anomali yang sudah ditindaklanjuti dengan catatan, dan persentase anomali yang sudah ditindaklanjuti dengan perbaikan. Sumbu Y: Nama PML)

### **4\. Materi Pelatihan Petugas**

Menampilkan tombol untuk menuju ke drive materi pelatihan petugas SE2026.

### **5\. KBLI 2025**

Menampilkan tombol untuk menuju ke spreadsheet referensi KBLI 2025 Kabupaten Jeneponto.

### **6\. Daftar Usaha Data dari Pusat**

Fitur ini dimulai dengan deskripsi bahwa usaha yang datanya bersumber dari pusat akan diberi kode 7 “Data berasal dari pusat”. Setelah itu ditampilkan tombol yang menuju spreadsheet daftar usaha yang datanya bersumber dari pusat.

### **7\. Daftar Keluarga Khusus**

Fitur ini dimulai dengan deskripsi cakupan keluarga khusus. Setelah itu ditampilkan tombol yang menuju spreadsheet daftar keluarga khusus yang ada di jeneponto.

### **8\. Weekly Briefing**

Menampilkan tombol untuk menuju drive materi weekly briefing.
