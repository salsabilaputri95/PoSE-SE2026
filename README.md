# 🌐 PoSE (Portal Sensus Ekonomi 2026)

**PoSE** adalah platform portal terpadu berbasis *Single Page Application* (SPA) yang ringan, modern, dan responsif. Sistem ini dirancang sebagai pusat komando operasional (*monitoring command center*) dan instrumen pengendalian mutu data (*quality control*) dalam pelaksanaan sensus ekonomi.

---

## 🎨 Desain & Antarmuka

- **Desain Modern**: Memanfaatkan palet warna harmonis bertema oranye-slate (*Vibrant Tangerine, Radiant Amber, Dark Slate, Emerald Green, dan Soft Peach*) dengan sentuhan *glassmorphism*.
- **Arsitektur Halaman**: 1 Halaman Terpadu (*Single Page Application*) yang dilengkapi *Floating Action Dock* untuk navigasi cepat antar-modul.
- **Visualisasi Interaktif**: Menggunakan visualisasi Chart.js dinamis (Grouped Bar & Stacked Horizontal Bar) yang otomatis menyesuaikan dimensi tampilan (*dynamic expanded canvas*) dan merespons filter wilayah secara instan.

---

## 🚀 Fitur Utama Sistem

1. **Dashboard Monitoring Pendataan Petugas (PPL & PML)**:
   - Pemantauan real-time capaian kerja Petugas Pendata Lapangan (PPL) dan Petugas Pemeriksa Lapangan (PML).
   - 4 Indikator KPI: Persentase Progres, Open + Draft, Approved, dan Cakupan Wilayah.
   - Dua grafik batang terkelompok: Progres Pendataan (per PPL dengan info pengawas PML) dan Progres Pemeriksaan (per PML dengan keterangan jumlah petugas binaan).
   - Fitur pencarian live (*live search*) nama petugas dan mode tampilan diperluas (*expanded view*).

2. **Dashboard Mitigasi Anomali Usaha & Keluarga**:
   - Pemantauan status tindak lanjut anomali data (*Belum Ditindaklanjuti*, *Ditindaklanjuti dg Catatan*, dan *Ditindaklanjuti dg Perbaikan*).
   - 4 Kartu KPI dinamis untuk persentase dan volume kasus anomali usaha serta keluarga.
   - Tooltip interaktif yang menampilkan persentase capaian beserta jumlah kasus riil, contoh: `Belum Ditindaklanjuti: 3.2% (20)`.
   - Panduan SOP interaktif mitigasi anomali berbasis tab (KBLI, omzet vs pengeluaran, legalitas, dan kependudukan khusus).

3. **Evaluasi Usaha Pertanian vs Baseline Sensus Pertanian**:
   - Komparasi unit usaha pertanian yang terjaring terhadap baseline sensus pertanian sebelumnya.
   - Tabel evaluasi per wilayah dengan persentase realisasi capaian.

4. **Direktori Usaha Besar & Usaha Sumber Pusat (Kode 7)**:
   - Direktori unit usaha skala besar yang memerlukan perlakuan khusus.
   - Panduan pencatatan Kode 7 untuk kantor cabang/waralaba yang laporan keuangannya bersumber terpusat agar tidak terjadi pencatatan ganda.

5. **Direktori & Panduan Keluarga Khusus**:
   - Panduan identifikasi keluarga pada tempat tinggal khusus, baik menetap (asrama, pesantren, panti, barak pekerja) maupun nomaden (tuna wisma, awak kapal).

6. **Pusat Referensi KBLI 2025**:
   - Pencarian instan dan klasifikasi 5-digit Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) untuk sektor-sektor usaha yang sering dijumpai di lapangan.

7. **Pusat Materi Pelatihan Petugas**:
   - Akses cepat satu pintu untuk kuesioner sensus, buku pedoman teknis lapangan, dan materi slide/bahan tayang pelatihan.

8. **Arsip Evaluasi Berkala (Weekly Briefing)**:
   - Bank materi evaluasi mingguan, notulensi arahan teknis pimpinan, dan panduan mitigasi kendala lapangan.

9. **Live Data Sync**:
   - Fitur sinkronisasi otomatis (*background auto-sync*) berkala yang terhubung langsung ke spreadsheet sumber data dengan fallback data lokal yang aman.

---

## ⚡ Cara Menjalankan Secara Lokal

Buka file `index.html` langsung di browser, atau jalankan melalui web server lokal:

```bash
# Menggunakan Python
python -m http.server 8000

# Atau menggunakan Node.js (npx serve)
npx serve .
```

Akses aplikasi melalui browser di `http://localhost:8000`.

---

## ☁️ Panduan Deployment

Karena aplikasi ini dibangun murni berbasis **Frontend Statis Modern** (HTML5 + CSS3 + Modular JavaScript + Chart.js), aplikasi dapat langsung di-deploy tanpa memerlukan proses build yang rumit:

### Opsi A: Menggunakan Vercel CLI
```bash
npm i -g vercel
vercel
```

### Opsi B: Menggunakan Vercel Dashboard / Git
1. Hubungkan repository ke [vercel.com](https://vercel.com).
2. Pilih opsi **Import Repository**.
3. Biarkan framework preset pada pilihan **Other** (Root Directory `./`).
4. Klik **Deploy**.

---

## 📁 Struktur Proyek

```
PoSE/
├── index.html                 # Halaman utama aplikasi (Single Page Application)
├── css/
│   └── style.css              # Tata gaya kustom, komponen UI, dan responsivitas
├── js/
│   ├── data.js                # Database lokal, master data wilayah, dan tautan dokumen
│   ├── charts.js              # Modul konfigurasi dan visualisasi Chart.js interaktif
│   ├── sync.js                # Engine sinkronisasi data online (Google Sheets)
│   └── app.js                 # Logika interaksi antarmuka, live search, dan navigasi
├── .gitignore                 # Daftar file dan direktori yang diabaikan Git
├── vercel.json                # Konfigurasi routing, cache, dan security headers
└── README.md                  # Dokumentasi proyek
```

---

## 📝 Konfigurasi Tautan & Sumber Data

Untuk memperbarui tautan Google Sheets atau Google Drive, buka file `js/data.js` dan sesuaikan URL pada bagian `links`:

```javascript
links: {
  monitoringPetugas: "https://docs.google.com/spreadsheets/d/...",
  anomaliData: "https://docs.google.com/spreadsheets/d/...",
  pertanianData: "https://docs.google.com/spreadsheets/d/...",
  usahaBesar: "https://docs.google.com/spreadsheets/d/...",
  dataPusat: "https://docs.google.com/spreadsheets/d/...",
  kbli2025: "https://s.bps.go.id/...",
  keluargaKhusus: "https://docs.google.com/spreadsheets/d/...",
  materiPelatihan: "https://drive.google.com/drive/folders/...",
  weeklyBriefing: "https://drive.google.com/drive/folders/..."
}
```
