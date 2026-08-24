# 🌐 PoSE (Portal Sensus Ekonomi 2026 BPS Kabupaten Jeneponto)

**PoSE** adalah website portal terpadu berbasis *Single Page Application* (SPA) yang sangat ringan, modern, dan responsif. Dirancang khusus untuk **Badan Pusat Statistik (BPS) Kabupaten Jeneponto** dalam mengawal dan mengontrol kualitas pelaksanaan lapangan **Sensus Ekonomi 2026 (SE2026)**.

---

## 🎨 Tema & Desain

- **Palette**: Harmoni Oranye (Vibrant Tangerine `#FF6B00`, Radiant Amber `#FA8C16`, Terracotta `#D4380D`, Honey Gold `#FFC069`, Soft Peach `#FFF7E6`) dengan kontras Dark Slate `#1F2937`.
- **Layout**: 1 Halaman Terpadu (*Single Page Application*) dengan *Smooth Navigation Pill Bar* dan *Glassmorphism*.
- **Visualisasi**: Chart.js interaktif (Horizontal bar & Stacked horizontal bar) yang dinamis merespons pergantian filter wilayah.

---

## 🚀 8 Fitur Utama PoSE (Sesuai Spesifikasi)

1. **Pengenalan Sensus Ekonomi 2026**: Hero section interaktif dengan ringkasan target usaha (48.250+), keluarga (112.400+), serta petugas PPL (248) & PML (62).
2. **Dashboard Monitoring Pendataan Petugas (PPL & PML)**:
   - Filter dropdown: **Kabupaten Jeneponto (Semua)** & **11 Kecamatan**.
   - Grafik 1: *Progres Pendataan SE2026* (% Submit & % Approved).
   - Grafik 2: *Progres Pemeriksaan SE2026* (% Rejected & % Approved).
   - Tombol langsung ke Spreadsheet Data Monitoring.
3. **Anomali Usaha dan Keluarga**:
   - Indikator KPI penyelesaian anomali usaha & keluarga.
   - Petunjuk teknis & SOP cara penyelesaian anomali (pengeluaran > pendapatan, KBLI, Kode 7, keluarga khusus).
   - Grafik 1 & 2: Progres Penyelesaian & Pemeriksaan Anomali dengan 3 status (*Belum Ditindaklanjuti*, *Ditindaklanjuti dg Catatan*, *Ditindaklanjuti dg Perbaikan*).
   - Tombol langsung ke Spreadsheet Daftar Anomali.
4. **Materi Pelatihan Petugas SE2026**: Akses cepat ke Kuesioner, Buku Pedoman Lapangan, dan Bahan Tayang / Slide presentasi.
5. **Referensi KBLI 2025 Kabupaten Jeneponto**: Fitur pencarian instan dan filter kategori KBLI 5-digit yang sering muncul di Jeneponto (Jagung, Garam, Rumput Laut, Kuda, Coto/Gantala, dll).
6. **Daftar Usaha Data dari Pusat (Kode 7)**: Panduan penting pemberian **Kode 7** untuk usaha cabang BUMN/BUMD/waralaba pusat agar omzet tidak terduplikasi.
7. **Daftar Keluarga Khusus**: Deskripsi kriteria keluarga khusus di Jeneponto (pesantren, asrama, mess PLTB Tolo/tambak garam, panti) & tautan spreadsheet.
8. **Weekly Briefing**: Informasi agenda rutin evaluasi mingguan dan tautan ke Google Drive materi briefing.

---

## ⚡ Cara Menjalankan Secara Lokal

Cukup buka file `index.html` langsung di browser favorit Anda, atau jalankan local server:

```bash
# Menggunakan python
python -m http.server 8000

# Atau menggunakan npx serve
npx serve .
```

Buka browser di `http://localhost:8000`.

---

## ☁️ Cara Deploy ke Vercel (Gratis & Cepat)

Karena PoSE dibuat murni berbasis **Frontend Statis Modern** (HTML5 + CSS3 + Modular JS + Chart.js CDN), website ini dapat langsung di-deploy ke Vercel tanpa perlu build step:

### Opsi A: Lewat Vercel CLI

```bash
npm i -g vercel
vercel
```

### Opsi B: Lewat GitHub / Vercel Dashboard

1. Upload folder project ini ke repository GitHub Anda (misal `pose-jeneponto`).
2. Buka [vercel.com](https://vercel.com) dan login.
3. Klik **"Add New Project"** -> **"Import"** repository GitHub Anda.
4. Pada bagian **Framework Preset**, biarkan **"Other"** (Root Directory `./`).
5. Klik **"Deploy"**. Website langsung aktif dengan SSL gratis dalam < 10 detik!

---

## 📁 Struktur File

```
PoSE/
├── index.html                 # Halaman tunggal utama 8 modul PoSE
├── css/
│   └── style.css              # Custom styling oranye, glassmorphism & responsif
├── js/
│   ├── data.js                # Database mock, 11 kecamatan, link spreadsheet/drive
│   ├── charts.js              # Modul visualisasi Chart.js interaktif
│   └── app.js                 # Logika interaksi UI, filter dinamis & live search
├── vercel.json                # Optimasi cache & security headers Vercel
└── README.md                  # Panduan dokumentasi proyek
```

---

## 📝 Konfigurasi Tautan & Data

Untuk memperbarui tautan Google Sheets atau Google Drive, cukup buka file `js/data.js` dan ubah bagian `links`:

```javascript
links: {
  monitoringPetugas: "https://docs.google.com/spreadsheets/d/...",
  anomaliData: "https://docs.google.com/spreadsheets/d/...",
  dataPusat: "https://docs.google.com/spreadsheets/d/...",
  kbli2025: "https://docs.google.com/spreadsheets/d/...",
  keluargaKhusus: "https://docs.google.com/spreadsheets/d/...",
  materiPelatihan: "https://drive.google.com/drive/folders/...",
  weeklyBriefing: "https://drive.google.com/drive/folders/..."
}
```
