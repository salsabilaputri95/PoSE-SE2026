/**
 * PoSE - Portal Sensus Ekonomi 2026 BPS Kabupaten Jeneponto
 * Data Configuration & Real Dataset from BPS Jeneponto Spreadsheets
 */

const POSE_DATA = {
    // 11 Kecamatan di Kabupaten Jeneponto
    kecamatanList: [
        "Arungkeke",
        "Bangkala",
        "Bangkala Barat",
        "Batang",
        "Binamu",
        "Bontoramba",
        "Kelara",
        "Rumbia",
        "Tamalatea",
        "Tarowang",
        "Turatea"
    ],

    // Link Eksternal Spreadsheet & Drive (Sesuai Dokumen PoSE & Input User)
    links: {
        monitoringPetugas: "https://docs.google.com/spreadsheets/d/1R1UAfk_LlQM06nwiEK5_WFbIvqyTU3yjuxHlcJtf1qI/edit?gid=0#gid=0",
        anomaliData: "https://docs.google.com/spreadsheets/d/141zngbEXedgCgPF1c0TamUBdCy9g1T4YO-mVSzOmwUQ/edit?gid=105002898#gid=105002898",
        dataPusat: "https://docs.google.com/spreadsheets/d/1BT_ub01ex_h3yqI-n_EFO8pYFoVORRweB8V_5ebpgHo/edit?usp=sharing",
        kbli2025: "https://s.bps.go.id/kbli7304_se2026",
        keluargaKhusus: "https://docs.google.com/spreadsheets/d/1VfurEu3pLfqO0cJRiUfiB1NcY4MJGAnWWOI0pQIVAng/edit?usp=sharing",
        materiBahanTayang: "https://drive.google.com/drive/folders/1ok4nqFSHIuSts33LooUbogjy5SVtOH9G?usp=sharing",
        materiKuesioner: "https://drive.google.com/drive/folders/1_HbzTVrFoyEy0xAJITJy-oxD6xpaKvYu?usp=drive_link",
        materiPedoman: "https://drive.google.com/drive/folders/1MifWV2tW0MKPe-05Lz3h1CLqxbgcJQ0U?usp=drive_link",
        weeklyBriefing: "https://drive.google.com/drive/folders/1xhlZVA5nmpu6BM6YmebZS8loqMxzfZJo?usp=drive_link"
    },

    // KPI Ringkasan Kabupaten Jeneponto (Data Riil)
    kpiKabupaten: {
            "targetKeluargaUsaha": "148.025",
            "totalMuatan": 148025,
            "persentaseApproved": 36.9,
            "persentaseSubmit": 17.2,
            "persentaseRejected": 1.9,
            "persentaseProgresTotal": 56,
            "totalPPL": 324,
            "totalPML": 48,
            "persentaseAnomaliUsahaSelesai": 65.8,
            "persentaseAnomaliKeluargaSelesai": 65.8,
            "persentaseAnomaliBelum": 34.2,
            "persentaseAnomaliCatatan": 22.3,
            "persentaseAnomaliPerbaikan": 43.5,
            "totalAnomali": 1731,
            "totalUsahaPusat": 34,
            "totalKeluargaKhusus": 38
    },

    // Data Progres per Kecamatan untuk Grafik Kabupaten (Data Riil)
    progresKecamatan: [
            {
                    "nama": "Arungkeke",
                    "submit": 26.3,
                    "approved": 37.5,
                    "rejected": 0.6,
                    "muatan": 8339,
                    "anomaliBelum": 34.2,
                    "anomaliCatatan": 22.3,
                    "anomaliPerbaikan": 43.5
            },
            {
                    "nama": "Bangkala",
                    "submit": 22.9,
                    "approved": 27.5,
                    "rejected": 1,
                    "muatan": 22634,
                    "anomaliBelum": 34.2,
                    "anomaliCatatan": 22.3,
                    "anomaliPerbaikan": 43.5
            },
            {
                    "nama": "Bangkala Barat",
                    "submit": 21.1,
                    "approved": 30.7,
                    "rejected": 1.8,
                    "muatan": 11687,
                    "anomaliBelum": 34.2,
                    "anomaliCatatan": 22.3,
                    "anomaliPerbaikan": 43.5
            },
            {
                    "nama": "Batang",
                    "submit": 21.4,
                    "approved": 34.6,
                    "rejected": 2.7,
                    "muatan": 7415,
                    "anomaliBelum": 34.2,
                    "anomaliCatatan": 22.3,
                    "anomaliPerbaikan": 43.5
            },
            {
                    "nama": "Binamu",
                    "submit": 14.1,
                    "approved": 40.9,
                    "rejected": 1.6,
                    "muatan": 23576,
                    "anomaliBelum": 34.2,
                    "anomaliCatatan": 22.3,
                    "anomaliPerbaikan": 43.5
            },
            {
                    "nama": "Bontoramba",
                    "submit": 15.1,
                    "approved": 41,
                    "rejected": 2.4,
                    "muatan": 15398,
                    "anomaliBelum": 34.2,
                    "anomaliCatatan": 22.3,
                    "anomaliPerbaikan": 43.5
            },
            {
                    "nama": "Kelara",
                    "submit": 11.5,
                    "approved": 44.8,
                    "rejected": 1.2,
                    "muatan": 11243,
                    "anomaliBelum": 34.2,
                    "anomaliCatatan": 22.3,
                    "anomaliPerbaikan": 43.5
            },
            {
                    "nama": "Rumbia",
                    "submit": 4.1,
                    "approved": 48.2,
                    "rejected": 4.4,
                    "muatan": 9885,
                    "anomaliBelum": 34.2,
                    "anomaliCatatan": 22.3,
                    "anomaliPerbaikan": 43.5
            },
            {
                    "nama": "Tamalatea",
                    "submit": 17.4,
                    "approved": 37,
                    "rejected": 1.4,
                    "muatan": 17461,
                    "anomaliBelum": 34.2,
                    "anomaliCatatan": 22.3,
                    "anomaliPerbaikan": 43.5
            },
            {
                    "nama": "Tarowang",
                    "submit": 17.8,
                    "approved": 42.6,
                    "rejected": 0.4,
                    "muatan": 8558,
                    "anomaliBelum": 34.2,
                    "anomaliCatatan": 22.3,
                    "anomaliPerbaikan": 43.5
            },
            {
                    "nama": "Turatea",
                    "submit": 17.8,
                    "approved": 27.5,
                    "rejected": 4.9,
                    "muatan": 11829,
                    "anomaliBelum": 34.2,
                    "anomaliCatatan": 22.3,
                    "anomaliPerbaikan": 43.5
            }
    ],

    // Data Petugas per Kecamatan (PPL & PML Lengkap Data Riil)
    petugasKecamatan: {
        "Arungkeke": {
            "ppl": [
                {
                    "nama": "Medi afriani",
                    "submit": 99.7,
                    "approved": 97.2,
                    "anomaliBelum": 0.6,
                    "anomaliCatatan": 0.8,
                    "anomaliPerbaikan": 97.2
                },
                {
                    "nama": "RESKY HANDAYANI",
                    "submit": 98.8,
                    "approved": 97.3,
                    "anomaliBelum": 0.5,
                    "anomaliCatatan": 0.8,
                    "anomaliPerbaikan": 97.3
                },
                {
                    "nama": "Rizal Ilyas",
                    "submit": 100.0,
                    "approved": 98.9,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.3,
                    "anomaliPerbaikan": 98.9
                },
                {
                    "nama": "Annisa M",
                    "submit": 100.0,
                    "approved": 99.2,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.2,
                    "anomaliPerbaikan": 99.2
                },
                {
                    "nama": "Kurnia",
                    "submit": 100.0,
                    "approved": 98.9,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.3,
                    "anomaliPerbaikan": 98.9
                },
                {
                    "nama": "MUH. ANSYAR. A",
                    "submit": 100.0,
                    "approved": 92.9,
                    "anomaliBelum": 1.4,
                    "anomaliCatatan": 2.1,
                    "anomaliPerbaikan": 92.9
                },
                {
                    "nama": "Rasni Ramadhani",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Rizki Wahyuni",
                    "submit": 97.8,
                    "approved": 93.7,
                    "anomaliBelum": 1.3,
                    "anomaliCatatan": 1.9,
                    "anomaliPerbaikan": 93.7
                },
                {
                    "nama": "Sahabuddin",
                    "submit": 96.7,
                    "approved": 81.8,
                    "anomaliBelum": 3.6,
                    "anomaliCatatan": 5.5,
                    "anomaliPerbaikan": 81.8
                },
                {
                    "nama": "Sri Rahmidani Imran",
                    "submit": 100.0,
                    "approved": 93.1,
                    "anomaliBelum": 1.4,
                    "anomaliCatatan": 2.1,
                    "anomaliPerbaikan": 93.1
                },
                {
                    "nama": "Hasri Muliati",
                    "submit": 99.2,
                    "approved": 96.4,
                    "anomaliBelum": 0.7,
                    "anomaliCatatan": 1.1,
                    "anomaliPerbaikan": 96.4
                },
                {
                    "nama": "NADYA",
                    "submit": 96.0,
                    "approved": 80.3,
                    "anomaliBelum": 3.9,
                    "anomaliCatatan": 5.9,
                    "anomaliPerbaikan": 80.3
                },
                {
                    "nama": "Nirawanti",
                    "submit": 100.0,
                    "approved": 76.3,
                    "anomaliBelum": 4.7,
                    "anomaliCatatan": 7.1,
                    "anomaliPerbaikan": 76.3
                },
                {
                    "nama": "Nur Rahmadani. S",
                    "submit": 100.0,
                    "approved": 76.4,
                    "anomaliBelum": 4.7,
                    "anomaliCatatan": 7.1,
                    "anomaliPerbaikan": 76.4
                },
                {
                    "nama": "RESKY ARDIANTI.M",
                    "submit": 99.8,
                    "approved": 95.8,
                    "anomaliBelum": 0.8,
                    "anomaliCatatan": 1.3,
                    "anomaliPerbaikan": 95.8
                },
                {
                    "nama": "Syamsinar",
                    "submit": 100.0,
                    "approved": 98.1,
                    "anomaliBelum": 0.4,
                    "anomaliCatatan": 0.6,
                    "anomaliPerbaikan": 98.1
                },
                {
                    "nama": "Waslah Zakiah Syam",
                    "submit": 100.0,
                    "approved": 84.4,
                    "anomaliBelum": 3.1,
                    "anomaliCatatan": 4.7,
                    "anomaliPerbaikan": 84.4
                }
            ],
            "pml": [
                {
                    "nama": "ABD HALIM HAKIM",
                    "approved": 97.4,
                    "rejected": 0.3,
                    "anomaliBelum": 0.6,
                    "anomaliCatatan": 0.9,
                    "anomaliPerbaikan": 97.4
                },
                {
                    "nama": "HASBULLAH. H",
                    "approved": 93.6,
                    "rejected": 1.4,
                    "anomaliBelum": 1.6,
                    "anomaliCatatan": 2.2,
                    "anomaliPerbaikan": 93.6
                },
                {
                    "nama": "IMA RESKI",
                    "approved": 86.0,
                    "rejected": 0.5,
                    "anomaliBelum": 3.5,
                    "anomaliCatatan": 4.9,
                    "anomaliPerbaikan": 86.0
                }
            ],
            "submit": 99.3,
            "approved": 91.8,
            "totalPPL": 17,
            "totalPML": 3
        },
        "Bangkala": {
            "ppl": [
                {
                    "nama": "A.m.Ilham Firdaus",
                    "submit": 90.3,
                    "approved": 70.3,
                    "anomaliBelum": 5.9,
                    "anomaliCatatan": 8.9,
                    "anomaliPerbaikan": 70.3
                },
                {
                    "nama": "Astri Yuliatmi",
                    "submit": 100.0,
                    "approved": 66.8,
                    "anomaliBelum": 6.6,
                    "anomaliCatatan": 10.0,
                    "anomaliPerbaikan": 66.8
                },
                {
                    "nama": "Halija",
                    "submit": 99.4,
                    "approved": 79.2,
                    "anomaliBelum": 4.2,
                    "anomaliCatatan": 6.2,
                    "anomaliPerbaikan": 79.2
                },
                {
                    "nama": "Nurul fahmi",
                    "submit": 97.3,
                    "approved": 86.0,
                    "anomaliBelum": 2.8,
                    "anomaliCatatan": 4.2,
                    "anomaliPerbaikan": 86.0
                },
                {
                    "nama": "PUTRI DWI ARIANTI",
                    "submit": 99.6,
                    "approved": 75.2,
                    "anomaliBelum": 5.0,
                    "anomaliCatatan": 7.4,
                    "anomaliPerbaikan": 75.2
                },
                {
                    "nama": "Rahmi",
                    "submit": 99.4,
                    "approved": 96.2,
                    "anomaliBelum": 0.8,
                    "anomaliCatatan": 1.1,
                    "anomaliPerbaikan": 96.2
                },
                {
                    "nama": "SRI INDAH SARI",
                    "submit": 98.0,
                    "approved": 73.8,
                    "anomaliBelum": 5.2,
                    "anomaliCatatan": 7.9,
                    "anomaliPerbaikan": 73.8
                },
                {
                    "nama": "Andi Ayu Junia Fitriani Lomba",
                    "submit": 100.0,
                    "approved": 59.3,
                    "anomaliBelum": 8.1,
                    "anomaliCatatan": 12.2,
                    "anomaliPerbaikan": 59.3
                },
                {
                    "nama": "Ansar",
                    "submit": 94.8,
                    "approved": 26.1,
                    "anomaliBelum": 14.8,
                    "anomaliCatatan": 22.2,
                    "anomaliPerbaikan": 26.1
                },
                {
                    "nama": "Aulia Shiera",
                    "submit": 90.1,
                    "approved": 34.0,
                    "anomaliBelum": 13.2,
                    "anomaliCatatan": 19.8,
                    "anomaliPerbaikan": 34.0
                },
                {
                    "nama": "Hasmila",
                    "submit": 99.6,
                    "approved": 46.9,
                    "anomaliBelum": 10.6,
                    "anomaliCatatan": 15.9,
                    "anomaliPerbaikan": 46.9
                },
                {
                    "nama": "Mentari Asmar",
                    "submit": 100.0,
                    "approved": 49.8,
                    "anomaliBelum": 10.0,
                    "anomaliCatatan": 15.1,
                    "anomaliPerbaikan": 49.8
                },
                {
                    "nama": "Mira",
                    "submit": 98.7,
                    "approved": 51.6,
                    "anomaliBelum": 9.7,
                    "anomaliCatatan": 14.5,
                    "anomaliPerbaikan": 51.6
                },
                {
                    "nama": "NURHANA RAHMA DEWI",
                    "submit": 97.4,
                    "approved": 42.5,
                    "anomaliBelum": 11.5,
                    "anomaliCatatan": 17.2,
                    "anomaliPerbaikan": 42.5
                },
                {
                    "nama": "IRWANTO",
                    "submit": 97.0,
                    "approved": 13.8,
                    "anomaliBelum": 17.2,
                    "anomaliCatatan": 25.9,
                    "anomaliPerbaikan": 13.8
                },
                {
                    "nama": "MUH.FAHMI PRASETYO",
                    "submit": 98.4,
                    "approved": 65.8,
                    "anomaliBelum": 6.8,
                    "anomaliCatatan": 10.3,
                    "anomaliPerbaikan": 65.8
                },
                {
                    "nama": "NUR FITRAH",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "NURJANNAH",
                    "submit": 99.8,
                    "approved": 49.5,
                    "anomaliBelum": 10.1,
                    "anomaliCatatan": 15.1,
                    "anomaliPerbaikan": 49.5
                },
                {
                    "nama": "Riska Sainuddin",
                    "submit": 100.0,
                    "approved": 48.1,
                    "anomaliBelum": 10.4,
                    "anomaliCatatan": 15.6,
                    "anomaliPerbaikan": 48.1
                },
                {
                    "nama": "Riskawati",
                    "submit": 100.0,
                    "approved": 99.4,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.2,
                    "anomaliPerbaikan": 99.4
                },
                {
                    "nama": "SUNARTI",
                    "submit": 99.8,
                    "approved": 14.5,
                    "anomaliBelum": 17.1,
                    "anomaliCatatan": 25.6,
                    "anomaliPerbaikan": 14.5
                },
                {
                    "nama": "A.Tri Nurul Adha. K,",
                    "submit": 99.4,
                    "approved": 67.3,
                    "anomaliBelum": 6.5,
                    "anomaliCatatan": 9.8,
                    "anomaliPerbaikan": 67.3
                },
                {
                    "nama": "Evi Ashari",
                    "submit": 99.5,
                    "approved": 35.1,
                    "anomaliBelum": 13.0,
                    "anomaliCatatan": 19.5,
                    "anomaliPerbaikan": 35.1
                },
                {
                    "nama": "ferri fadli",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Halzahirah Syahwani Hasbi",
                    "submit": 98.2,
                    "approved": 70.0,
                    "anomaliBelum": 6.0,
                    "anomaliCatatan": 9.0,
                    "anomaliPerbaikan": 70.0
                },
                {
                    "nama": "Sunarti",
                    "submit": 100.0,
                    "approved": 47.1,
                    "anomaliBelum": 10.6,
                    "anomaliCatatan": 15.9,
                    "anomaliPerbaikan": 47.1
                },
                {
                    "nama": "Syamsuria",
                    "submit": 99.5,
                    "approved": 54.5,
                    "anomaliBelum": 9.1,
                    "anomaliCatatan": 13.7,
                    "anomaliPerbaikan": 54.5
                },
                {
                    "nama": "Yuyun dwi andika",
                    "submit": 100.0,
                    "approved": 53.9,
                    "anomaliBelum": 9.2,
                    "anomaliCatatan": 13.8,
                    "anomaliPerbaikan": 53.9
                },
                {
                    "nama": "A.RIVALDY LATIEF",
                    "submit": 93.0,
                    "approved": 36.4,
                    "anomaliBelum": 12.7,
                    "anomaliCatatan": 19.1,
                    "anomaliPerbaikan": 36.4
                },
                {
                    "nama": "Daswang",
                    "submit": 100.0,
                    "approved": 99.6,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.6
                },
                {
                    "nama": "Marlina",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Nurfani kadir",
                    "submit": 79.5,
                    "approved": 7.6,
                    "anomaliBelum": 18.5,
                    "anomaliCatatan": 27.7,
                    "anomaliPerbaikan": 7.6
                },
                {
                    "nama": "Sri Ratnawati Nur",
                    "submit": 99.6,
                    "approved": 65.2,
                    "anomaliBelum": 7.0,
                    "anomaliCatatan": 10.4,
                    "anomaliPerbaikan": 65.2
                },
                {
                    "nama": "Sri wahyuni",
                    "submit": 97.6,
                    "approved": 16.0,
                    "anomaliBelum": 16.8,
                    "anomaliCatatan": 25.2,
                    "anomaliPerbaikan": 16.0
                },
                {
                    "nama": "Sumarni",
                    "submit": 100.0,
                    "approved": 98.9,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.3,
                    "anomaliPerbaikan": 98.9
                },
                {
                    "nama": "Andi Hasrul Haris",
                    "submit": 97.1,
                    "approved": 34.3,
                    "anomaliBelum": 13.1,
                    "anomaliCatatan": 19.7,
                    "anomaliPerbaikan": 34.3
                },
                {
                    "nama": "Basri",
                    "submit": 95.9,
                    "approved": 36.4,
                    "anomaliBelum": 12.7,
                    "anomaliCatatan": 19.1,
                    "anomaliPerbaikan": 36.4
                },
                {
                    "nama": "Hasmira",
                    "submit": 99.5,
                    "approved": 38.8,
                    "anomaliBelum": 12.2,
                    "anomaliCatatan": 18.4,
                    "anomaliPerbaikan": 38.8
                },
                {
                    "nama": "IRMA PUTRIADE",
                    "submit": 98.6,
                    "approved": 24.0,
                    "anomaliBelum": 15.2,
                    "anomaliCatatan": 22.8,
                    "anomaliPerbaikan": 24.0
                },
                {
                    "nama": "MUH.ANGGA GAUTAMA PUTRA",
                    "submit": 98.6,
                    "approved": 33.0,
                    "anomaliBelum": 13.4,
                    "anomaliCatatan": 20.1,
                    "anomaliPerbaikan": 33.0
                },
                {
                    "nama": "Rahmawati",
                    "submit": 100.0,
                    "approved": 59.1,
                    "anomaliBelum": 8.2,
                    "anomaliCatatan": 12.3,
                    "anomaliPerbaikan": 59.1
                },
                {
                    "nama": "RAHMIATI",
                    "submit": 100.0,
                    "approved": 82.4,
                    "anomaliBelum": 3.5,
                    "anomaliCatatan": 5.3,
                    "anomaliPerbaikan": 82.4
                },
                {
                    "nama": "Arifin",
                    "submit": 94.9,
                    "approved": 50.8,
                    "anomaliBelum": 9.8,
                    "anomaliCatatan": 14.8,
                    "anomaliPerbaikan": 50.8
                },
                {
                    "nama": "Arwini Puspitasari",
                    "submit": 99.5,
                    "approved": 78.1,
                    "anomaliBelum": 4.4,
                    "anomaliCatatan": 6.6,
                    "anomaliPerbaikan": 78.1
                },
                {
                    "nama": "ELVA RIANI",
                    "submit": 99.3,
                    "approved": 71.9,
                    "anomaliBelum": 5.6,
                    "anomaliCatatan": 8.4,
                    "anomaliPerbaikan": 71.9
                },
                {
                    "nama": "RABIATUL AL ADAWIAH",
                    "submit": 100.0,
                    "approved": 90.4,
                    "anomaliBelum": 1.9,
                    "anomaliCatatan": 2.9,
                    "anomaliPerbaikan": 90.4
                },
                {
                    "nama": "Rusni",
                    "submit": 97.8,
                    "approved": 46.6,
                    "anomaliBelum": 10.7,
                    "anomaliCatatan": 16.0,
                    "anomaliPerbaikan": 46.6
                },
                {
                    "nama": "Sri warni",
                    "submit": 99.8,
                    "approved": 46.5,
                    "anomaliBelum": 10.7,
                    "anomaliCatatan": 16.1,
                    "anomaliPerbaikan": 46.5
                },
                {
                    "nama": "ST. Kasma",
                    "submit": 100.0,
                    "approved": 99.8,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.8
                }
            ],
            "pml": [
                {
                    "nama": "AFDALIAH YAHYA",
                    "approved": 77.6,
                    "rejected": 0.4,
                    "anomaliBelum": 5.6,
                    "anomaliCatatan": 7.8,
                    "anomaliPerbaikan": 77.6
                },
                {
                    "nama": "ANDI ASTRID",
                    "approved": 45.7,
                    "rejected": 1.2,
                    "anomaliBelum": 13.6,
                    "anomaliCatatan": 19.0,
                    "anomaliPerbaikan": 45.7
                },
                {
                    "nama": "FADEL",
                    "approved": 56.0,
                    "rejected": 2.0,
                    "anomaliBelum": 11.0,
                    "anomaliCatatan": 15.4,
                    "anomaliPerbaikan": 56.0
                },
                {
                    "nama": "HENDRA SUGIARTHO",
                    "approved": 61.8,
                    "rejected": 0.2,
                    "anomaliBelum": 9.6,
                    "anomaliCatatan": 13.4,
                    "anomaliPerbaikan": 61.8
                },
                {
                    "nama": "NASRULLAH",
                    "approved": 57.4,
                    "rejected": 2.3,
                    "anomaliBelum": 10.7,
                    "anomaliCatatan": 14.9,
                    "anomaliPerbaikan": 57.4
                },
                {
                    "nama": "PERAWATI RAMLI",
                    "approved": 44.6,
                    "rejected": 4.8,
                    "anomaliBelum": 13.8,
                    "anomaliCatatan": 19.4,
                    "anomaliPerbaikan": 44.6
                },
                {
                    "nama": "ROBI DARWIS",
                    "approved": 66.9,
                    "rejected": 1.1,
                    "anomaliBelum": 8.3,
                    "anomaliCatatan": 11.6,
                    "anomaliPerbaikan": 66.9
                }
            ],
            "submit": 98.1,
            "approved": 59.0,
            "totalPPL": 49,
            "totalPML": 7
        },
        "Bangkala Barat": {
            "ppl": [
                {
                    "nama": "Diva Alfathiha Maharani",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Dwi Erni Al Hijrah",
                    "submit": 97.7,
                    "approved": 74.2,
                    "anomaliBelum": 5.2,
                    "anomaliCatatan": 7.7,
                    "anomaliPerbaikan": 74.2
                },
                {
                    "nama": "Hasbi sukku",
                    "submit": 85.0,
                    "approved": 48.9,
                    "anomaliBelum": 10.2,
                    "anomaliCatatan": 15.3,
                    "anomaliPerbaikan": 48.9
                },
                {
                    "nama": "Linda Dg Te'ne",
                    "submit": 96.8,
                    "approved": 17.0,
                    "anomaliBelum": 16.6,
                    "anomaliCatatan": 24.9,
                    "anomaliPerbaikan": 17.0
                },
                {
                    "nama": "Nopiyanti",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Rosmawati, Spd",
                    "submit": 95.6,
                    "approved": 64.9,
                    "anomaliBelum": 7.0,
                    "anomaliCatatan": 10.5,
                    "anomaliPerbaikan": 64.9
                },
                {
                    "nama": "Selmianti",
                    "submit": 100.0,
                    "approved": 99.8,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.8
                },
                {
                    "nama": "A. POPPI AZHARI",
                    "submit": 99.6,
                    "approved": 81.7,
                    "anomaliBelum": 3.7,
                    "anomaliCatatan": 5.5,
                    "anomaliPerbaikan": 81.7
                },
                {
                    "nama": "ANSAR RAHIMAKUMULLAH",
                    "submit": 77.7,
                    "approved": 33.2,
                    "anomaliBelum": 13.4,
                    "anomaliCatatan": 20.0,
                    "anomaliPerbaikan": 33.2
                },
                {
                    "nama": "PUTRI NENGSI",
                    "submit": 100.0,
                    "approved": 77.3,
                    "anomaliBelum": 4.5,
                    "anomaliCatatan": 6.8,
                    "anomaliPerbaikan": 77.3
                },
                {
                    "nama": "Rahman",
                    "submit": 99.8,
                    "approved": 79.9,
                    "anomaliBelum": 4.0,
                    "anomaliCatatan": 6.0,
                    "anomaliPerbaikan": 79.9
                },
                {
                    "nama": "Rosmawati",
                    "submit": 100.0,
                    "approved": 76.8,
                    "anomaliBelum": 4.6,
                    "anomaliCatatan": 7.0,
                    "anomaliPerbaikan": 76.8
                },
                {
                    "nama": "Suhartati Tahir",
                    "submit": 100.0,
                    "approved": 46.8,
                    "anomaliBelum": 10.6,
                    "anomaliCatatan": 16.0,
                    "anomaliPerbaikan": 46.8
                },
                {
                    "nama": "Taba",
                    "submit": 99.3,
                    "approved": 53.2,
                    "anomaliBelum": 9.4,
                    "anomaliCatatan": 14.0,
                    "anomaliPerbaikan": 53.2
                },
                {
                    "nama": "Faisal",
                    "submit": 91.8,
                    "approved": 41.1,
                    "anomaliBelum": 11.8,
                    "anomaliCatatan": 17.7,
                    "anomaliPerbaikan": 41.1
                },
                {
                    "nama": "Indra Sultan",
                    "submit": 100.0,
                    "approved": 52.6,
                    "anomaliBelum": 9.5,
                    "anomaliCatatan": 14.2,
                    "anomaliPerbaikan": 52.6
                },
                {
                    "nama": "M Bakri Tamar",
                    "submit": 99.9,
                    "approved": 60.3,
                    "anomaliBelum": 7.9,
                    "anomaliCatatan": 11.9,
                    "anomaliPerbaikan": 60.3
                },
                {
                    "nama": "MITRA",
                    "submit": 100.0,
                    "approved": 43.0,
                    "anomaliBelum": 11.4,
                    "anomaliCatatan": 17.1,
                    "anomaliPerbaikan": 43.0
                },
                {
                    "nama": "Ratna",
                    "submit": 100.0,
                    "approved": 70.4,
                    "anomaliBelum": 5.9,
                    "anomaliCatatan": 8.9,
                    "anomaliPerbaikan": 70.4
                },
                {
                    "nama": "Supalding",
                    "submit": 88.9,
                    "approved": 21.8,
                    "anomaliBelum": 15.6,
                    "anomaliCatatan": 23.5,
                    "anomaliPerbaikan": 21.8
                },
                {
                    "nama": "DANDI",
                    "submit": 93.2,
                    "approved": 38.2,
                    "anomaliBelum": 12.4,
                    "anomaliCatatan": 18.5,
                    "anomaliPerbaikan": 38.2
                },
                {
                    "nama": "JUSRI",
                    "submit": 69.4,
                    "approved": 18.1,
                    "anomaliBelum": 16.4,
                    "anomaliCatatan": 24.6,
                    "anomaliPerbaikan": 18.1
                },
                {
                    "nama": "Muh. Ilyas Pasang S.Kep",
                    "submit": 78.8,
                    "approved": 73.9,
                    "anomaliBelum": 5.2,
                    "anomaliCatatan": 7.8,
                    "anomaliPerbaikan": 73.9
                },
                {
                    "nama": "Nengsi",
                    "submit": 100.0,
                    "approved": 68.6,
                    "anomaliBelum": 6.3,
                    "anomaliCatatan": 9.4,
                    "anomaliPerbaikan": 68.6
                },
                {
                    "nama": "NURINDAH SUKRI",
                    "submit": 95.5,
                    "approved": 81.2,
                    "anomaliBelum": 3.8,
                    "anomaliCatatan": 5.6,
                    "anomaliPerbaikan": 81.2
                },
                {
                    "nama": "Sri Yuliana P.",
                    "submit": 96.9,
                    "approved": 66.4,
                    "anomaliBelum": 6.7,
                    "anomaliCatatan": 10.1,
                    "anomaliPerbaikan": 66.4
                }
            ],
            "pml": [
                {
                    "nama": "AMANDA TRINI WAHDANIAH",
                    "approved": 70.1,
                    "rejected": 7.5,
                    "anomaliBelum": 7.5,
                    "anomaliCatatan": 10.5,
                    "anomaliPerbaikan": 70.1
                },
                {
                    "nama": "KASMAWATI ARLAN",
                    "approved": 65.3,
                    "rejected": 0.5,
                    "anomaliBelum": 8.7,
                    "anomaliCatatan": 12.1,
                    "anomaliPerbaikan": 65.3
                },
                {
                    "nama": "RESKI ANGGA",
                    "approved": 47.5,
                    "rejected": 4.5,
                    "anomaliBelum": 13.1,
                    "anomaliCatatan": 18.4,
                    "anomaliPerbaikan": 47.5
                },
                {
                    "nama": "SULTAN",
                    "approved": 59.1,
                    "rejected": 1.0,
                    "anomaliBelum": 10.2,
                    "anomaliCatatan": 14.3,
                    "anomaliPerbaikan": 59.1
                }
            ],
            "submit": 94.8,
            "approved": 61.1,
            "totalPPL": 26,
            "totalPML": 4
        },
        "Batang": {
            "ppl": [
                {
                    "nama": "EKA LESTARI",
                    "submit": 97.4,
                    "approved": 82.1,
                    "anomaliBelum": 3.6,
                    "anomaliCatatan": 5.4,
                    "anomaliPerbaikan": 82.1
                },
                {
                    "nama": "NURUL HIKMAH. AS",
                    "submit": 99.6,
                    "approved": 90.4,
                    "anomaliBelum": 1.9,
                    "anomaliCatatan": 2.9,
                    "anomaliPerbaikan": 90.4
                },
                {
                    "nama": "SUSANTO",
                    "submit": 97.7,
                    "approved": 84.6,
                    "anomaliBelum": 3.1,
                    "anomaliCatatan": 4.6,
                    "anomaliPerbaikan": 84.6
                },
                {
                    "nama": "A.muti angraeni",
                    "submit": 99.2,
                    "approved": 60.0,
                    "anomaliBelum": 8.0,
                    "anomaliCatatan": 12.0,
                    "anomaliPerbaikan": 60.0
                },
                {
                    "nama": "Elviana",
                    "submit": 97.0,
                    "approved": 60.7,
                    "anomaliBelum": 7.9,
                    "anomaliCatatan": 11.8,
                    "anomaliPerbaikan": 60.7
                },
                {
                    "nama": "M.Azhar",
                    "submit": 100.0,
                    "approved": 52.8,
                    "anomaliBelum": 9.4,
                    "anomaliCatatan": 14.2,
                    "anomaliPerbaikan": 52.8
                },
                {
                    "nama": "Namira rahmadani adil ninra",
                    "submit": 98.7,
                    "approved": 48.4,
                    "anomaliBelum": 10.3,
                    "anomaliCatatan": 15.5,
                    "anomaliPerbaikan": 48.4
                },
                {
                    "nama": "SAHARUDDIN",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Sri Devi",
                    "submit": 100.0,
                    "approved": 52.4,
                    "anomaliBelum": 9.5,
                    "anomaliCatatan": 14.3,
                    "anomaliPerbaikan": 52.4
                },
                {
                    "nama": "Sugianto",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Karmila",
                    "submit": 100.0,
                    "approved": 95.2,
                    "anomaliBelum": 1.0,
                    "anomaliCatatan": 1.4,
                    "anomaliPerbaikan": 95.2
                },
                {
                    "nama": "M Wahyu Ap",
                    "submit": 91.3,
                    "approved": 70.8,
                    "anomaliBelum": 5.8,
                    "anomaliCatatan": 8.8,
                    "anomaliPerbaikan": 70.8
                },
                {
                    "nama": "martati",
                    "submit": 99.2,
                    "approved": 82.3,
                    "anomaliBelum": 3.5,
                    "anomaliCatatan": 5.3,
                    "anomaliPerbaikan": 82.3
                },
                {
                    "nama": "Rahmawati",
                    "submit": 100.0,
                    "approved": 99.3,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.2,
                    "anomaliPerbaikan": 99.3
                },
                {
                    "nama": "Sukaena",
                    "submit": 100.0,
                    "approved": 99.5,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.5
                },
                {
                    "nama": "WIWIK PRATIWI",
                    "submit": 81.7,
                    "approved": 60.4,
                    "anomaliBelum": 7.9,
                    "anomaliCatatan": 11.9,
                    "anomaliPerbaikan": 60.4
                }
            ],
            "pml": [
                {
                    "nama": "ABD HALIM HAKIM",
                    "approved": 85.5,
                    "rejected": 4.1,
                    "anomaliBelum": 3.6,
                    "anomaliCatatan": 5.1,
                    "anomaliPerbaikan": 85.5
                },
                {
                    "nama": "AHMAD SETYAWAN HALIM",
                    "approved": 65.4,
                    "rejected": 3.5,
                    "anomaliBelum": 8.6,
                    "anomaliCatatan": 12.1,
                    "anomaliPerbaikan": 65.4
                },
                {
                    "nama": "NUR ANNIZA HALIM",
                    "approved": 85.0,
                    "rejected": 5.9,
                    "anomaliBelum": 3.8,
                    "anomaliCatatan": 5.2,
                    "anomaliPerbaikan": 85.0
                }
            ],
            "submit": 97.6,
            "approved": 77.4,
            "totalPPL": 16,
            "totalPML": 3
        },
        "Binamu": {
            "ppl": [
                {
                    "nama": "ABD.RAHMAN,S.KEP",
                    "submit": 86.5,
                    "approved": 62.7,
                    "anomaliBelum": 7.5,
                    "anomaliCatatan": 11.2,
                    "anomaliPerbaikan": 62.7
                },
                {
                    "nama": "Alifia Ramadhani Emily",
                    "submit": 87.3,
                    "approved": 70.6,
                    "anomaliBelum": 5.9,
                    "anomaliCatatan": 8.8,
                    "anomaliPerbaikan": 70.6
                },
                {
                    "nama": "Arini Nurfadhilah Ridwan",
                    "submit": 96.8,
                    "approved": 56.0,
                    "anomaliBelum": 8.8,
                    "anomaliCatatan": 13.2,
                    "anomaliPerbaikan": 56.0
                },
                {
                    "nama": "Feby Awaliyah",
                    "submit": 87.8,
                    "approved": 41.3,
                    "anomaliBelum": 11.7,
                    "anomaliCatatan": 17.6,
                    "anomaliPerbaikan": 41.3
                },
                {
                    "nama": "Jumriani",
                    "submit": 100.0,
                    "approved": 85.0,
                    "anomaliBelum": 3.0,
                    "anomaliCatatan": 4.5,
                    "anomaliPerbaikan": 85.0
                },
                {
                    "nama": "NURLIANTI",
                    "submit": 99.6,
                    "approved": 69.2,
                    "anomaliBelum": 6.2,
                    "anomaliCatatan": 9.2,
                    "anomaliPerbaikan": 69.2
                },
                {
                    "nama": "Parida purnama ramadhani",
                    "submit": 99.2,
                    "approved": 91.0,
                    "anomaliBelum": 1.8,
                    "anomaliCatatan": 2.7,
                    "anomaliPerbaikan": 91.0
                },
                {
                    "nama": "Sri Rahmadani",
                    "submit": 88.2,
                    "approved": 46.5,
                    "anomaliBelum": 10.7,
                    "anomaliCatatan": 16.1,
                    "anomaliPerbaikan": 46.5
                },
                {
                    "nama": "ANDI SASTRA AVRIL",
                    "submit": 93.5,
                    "approved": 75.7,
                    "anomaliBelum": 4.9,
                    "anomaliCatatan": 7.3,
                    "anomaliPerbaikan": 75.7
                },
                {
                    "nama": "Annisa Nur Padila",
                    "submit": 76.2,
                    "approved": 53.2,
                    "anomaliBelum": 9.4,
                    "anomaliCatatan": 14.0,
                    "anomaliPerbaikan": 53.2
                },
                {
                    "nama": "Anugrah Dewantoro",
                    "submit": 83.3,
                    "approved": 77.6,
                    "anomaliBelum": 4.5,
                    "anomaliCatatan": 6.7,
                    "anomaliPerbaikan": 77.6
                },
                {
                    "nama": "Dewi",
                    "submit": 94.8,
                    "approved": 92.4,
                    "anomaliBelum": 1.5,
                    "anomaliCatatan": 2.3,
                    "anomaliPerbaikan": 92.4
                },
                {
                    "nama": "Kasmawati",
                    "submit": 100.0,
                    "approved": 94.3,
                    "anomaliBelum": 1.1,
                    "anomaliCatatan": 1.7,
                    "anomaliPerbaikan": 94.3
                },
                {
                    "nama": "Nurul Awaliah",
                    "submit": 81.9,
                    "approved": 46.0,
                    "anomaliBelum": 10.8,
                    "anomaliCatatan": 16.2,
                    "anomaliPerbaikan": 46.0
                },
                {
                    "nama": "Riska eka Putri",
                    "submit": 95.8,
                    "approved": 76.4,
                    "anomaliBelum": 4.7,
                    "anomaliCatatan": 7.1,
                    "anomaliPerbaikan": 76.4
                },
                {
                    "nama": "Sri israwati",
                    "submit": 100.0,
                    "approved": 84.0,
                    "anomaliBelum": 3.2,
                    "anomaliCatatan": 4.8,
                    "anomaliPerbaikan": 84.0
                },
                {
                    "nama": "Asmaul Husna",
                    "submit": 100.0,
                    "approved": 99.7,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.7
                },
                {
                    "nama": "Aswidah syahrir",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "FEBRIYANA GUNAWAN",
                    "submit": 100.0,
                    "approved": 99.3,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.2,
                    "anomaliPerbaikan": 99.3
                },
                {
                    "nama": "Muh nurwahyu",
                    "submit": 97.3,
                    "approved": 95.8,
                    "anomaliBelum": 0.8,
                    "anomaliCatatan": 1.3,
                    "anomaliPerbaikan": 95.8
                },
                {
                    "nama": "Nabila Liliyanti Salsabil",
                    "submit": 100.0,
                    "approved": 96.6,
                    "anomaliBelum": 0.7,
                    "anomaliCatatan": 1.0,
                    "anomaliPerbaikan": 96.6
                },
                {
                    "nama": "Sahrul rezki setiawan",
                    "submit": 100.0,
                    "approved": 99.1,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.3,
                    "anomaliPerbaikan": 99.1
                },
                {
                    "nama": "Selfi",
                    "submit": 100.0,
                    "approved": 98.9,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.3,
                    "anomaliPerbaikan": 98.9
                },
                {
                    "nama": "Dela Nurcahyani",
                    "submit": 98.3,
                    "approved": 85.6,
                    "anomaliBelum": 2.9,
                    "anomaliCatatan": 4.3,
                    "anomaliPerbaikan": 85.6
                },
                {
                    "nama": "FADLIAH YUSMAN",
                    "submit": 100.0,
                    "approved": 60.5,
                    "anomaliBelum": 7.9,
                    "anomaliCatatan": 11.8,
                    "anomaliPerbaikan": 60.5
                },
                {
                    "nama": "NUR ALDHIRA AZIZAH. K",
                    "submit": 100.0,
                    "approved": 93.1,
                    "anomaliBelum": 1.4,
                    "anomaliCatatan": 2.1,
                    "anomaliPerbaikan": 93.1
                },
                {
                    "nama": "Nur Rahma Azizah Basmahuddin",
                    "submit": 99.9,
                    "approved": 97.4,
                    "anomaliBelum": 0.5,
                    "anomaliCatatan": 0.8,
                    "anomaliPerbaikan": 97.4
                },
                {
                    "nama": "Satturia",
                    "submit": 99.1,
                    "approved": 80.3,
                    "anomaliBelum": 3.9,
                    "anomaliCatatan": 5.9,
                    "anomaliPerbaikan": 80.3
                },
                {
                    "nama": "Siti Ainun Jeniharta",
                    "submit": 100.0,
                    "approved": 91.0,
                    "anomaliBelum": 1.8,
                    "anomaliCatatan": 2.7,
                    "anomaliPerbaikan": 91.0
                },
                {
                    "nama": "Syamsiar",
                    "submit": 100.0,
                    "approved": 99.5,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.5
                },
                {
                    "nama": "HUSNIATI K",
                    "submit": 89.7,
                    "approved": 81.5,
                    "anomaliBelum": 3.7,
                    "anomaliCatatan": 5.5,
                    "anomaliPerbaikan": 81.5
                },
                {
                    "nama": "Lesyia Nurfadila",
                    "submit": 100.0,
                    "approved": 92.7,
                    "anomaliBelum": 1.5,
                    "anomaliCatatan": 2.2,
                    "anomaliPerbaikan": 92.7
                },
                {
                    "nama": "Mirwahyuni",
                    "submit": 99.9,
                    "approved": 99.2,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.2,
                    "anomaliPerbaikan": 99.2
                },
                {
                    "nama": "NUR ALIYAH FEBRINA RAZAK",
                    "submit": 79.9,
                    "approved": 68.8,
                    "anomaliBelum": 6.2,
                    "anomaliCatatan": 9.4,
                    "anomaliPerbaikan": 68.8
                },
                {
                    "nama": "Nurfani Fadhila Razak",
                    "submit": 97.5,
                    "approved": 89.0,
                    "anomaliBelum": 2.2,
                    "anomaliCatatan": 3.3,
                    "anomaliPerbaikan": 89.0
                },
                {
                    "nama": "Nurfina Fadhila Razak",
                    "submit": 92.6,
                    "approved": 91.2,
                    "anomaliBelum": 1.8,
                    "anomaliCatatan": 2.6,
                    "anomaliPerbaikan": 91.2
                },
                {
                    "nama": "Rismayanti",
                    "submit": 100.0,
                    "approved": 75.9,
                    "anomaliBelum": 4.8,
                    "anomaliCatatan": 7.2,
                    "anomaliPerbaikan": 75.9
                },
                {
                    "nama": "St Arphina Bahar",
                    "submit": 99.2,
                    "approved": 83.0,
                    "anomaliBelum": 3.4,
                    "anomaliCatatan": 5.1,
                    "anomaliPerbaikan": 83.0
                },
                {
                    "nama": "Asis Arifuddin",
                    "submit": 50.1,
                    "approved": 17.8,
                    "anomaliBelum": 16.4,
                    "anomaliCatatan": 24.7,
                    "anomaliPerbaikan": 17.8
                },
                {
                    "nama": "Isna",
                    "submit": 96.4,
                    "approved": 51.4,
                    "anomaliBelum": 9.7,
                    "anomaliCatatan": 14.6,
                    "anomaliPerbaikan": 51.4
                },
                {
                    "nama": "Misnah",
                    "submit": 85.5,
                    "approved": 50.7,
                    "anomaliBelum": 9.9,
                    "anomaliCatatan": 14.8,
                    "anomaliPerbaikan": 50.7
                },
                {
                    "nama": "Muh. Asri",
                    "submit": 52.8,
                    "approved": 45.4,
                    "anomaliBelum": 10.9,
                    "anomaliCatatan": 16.4,
                    "anomaliPerbaikan": 45.4
                },
                {
                    "nama": "Sayid Muhammad Nur Al Aidid, S.Sos",
                    "submit": 72.7,
                    "approved": 40.7,
                    "anomaliBelum": 11.9,
                    "anomaliCatatan": 17.8,
                    "anomaliPerbaikan": 40.7
                },
                {
                    "nama": "Sri Wahyuni Pratiwi Sudirman",
                    "submit": 78.3,
                    "approved": 36.4,
                    "anomaliBelum": 12.7,
                    "anomaliCatatan": 19.1,
                    "anomaliPerbaikan": 36.4
                },
                {
                    "nama": "Wawan Setiawan",
                    "submit": 68.9,
                    "approved": 43.8,
                    "anomaliBelum": 11.2,
                    "anomaliCatatan": 16.9,
                    "anomaliPerbaikan": 43.8
                }
            ],
            "pml": [
                {
                    "nama": "DWI REZKI AMALIA SYARIFUDDIN",
                    "approved": 65.0,
                    "rejected": 1.8,
                    "anomaliBelum": 8.8,
                    "anomaliCatatan": 12.2,
                    "anomaliPerbaikan": 65.0
                },
                {
                    "nama": "EKAWATI",
                    "approved": 76.0,
                    "rejected": 4.0,
                    "anomaliBelum": 6.0,
                    "anomaliCatatan": 8.4,
                    "anomaliPerbaikan": 76.0
                },
                {
                    "nama": "H. M. SABRI. G. SE. DG JARRE",
                    "approved": 98.5,
                    "rejected": 0.0,
                    "anomaliBelum": 0.4,
                    "anomaliCatatan": 0.5,
                    "anomaliPerbaikan": 98.5
                },
                {
                    "nama": "MUH TRIALDI SYARIFUDDIN",
                    "approved": 87.6,
                    "rejected": 3.5,
                    "anomaliBelum": 3.1,
                    "anomaliCatatan": 4.3,
                    "anomaliPerbaikan": 87.6
                },
                {
                    "nama": "NURLIYANA S.SOS",
                    "approved": 85.3,
                    "rejected": 0.2,
                    "anomaliBelum": 3.7,
                    "anomaliCatatan": 5.1,
                    "anomaliPerbaikan": 85.3
                },
                {
                    "nama": "WAHYUNI TOMO",
                    "approved": 41.7,
                    "rejected": 6.5,
                    "anomaliBelum": 14.6,
                    "anomaliCatatan": 20.4,
                    "anomaliPerbaikan": 41.7
                }
            ],
            "submit": 91.8,
            "approved": 75.2,
            "totalPPL": 45,
            "totalPML": 6
        },
        "Bontoramba": {
            "ppl": [
                {
                    "nama": "HASLINDAH. S",
                    "submit": 99.8,
                    "approved": 97.6,
                    "anomaliBelum": 0.5,
                    "anomaliCatatan": 0.7,
                    "anomaliPerbaikan": 97.6
                },
                {
                    "nama": "Hendrik",
                    "submit": 100.0,
                    "approved": 88.8,
                    "anomaliBelum": 2.2,
                    "anomaliCatatan": 3.4,
                    "anomaliPerbaikan": 88.8
                },
                {
                    "nama": "IRPANDI NUR SPDI",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Sahabuddin Al hasar",
                    "submit": 99.8,
                    "approved": 97.9,
                    "anomaliBelum": 0.4,
                    "anomaliCatatan": 0.6,
                    "anomaliPerbaikan": 97.9
                },
                {
                    "nama": "Sahrullah",
                    "submit": 99.1,
                    "approved": 95.4,
                    "anomaliBelum": 0.9,
                    "anomaliCatatan": 1.4,
                    "anomaliPerbaikan": 95.4
                },
                {
                    "nama": "Tori",
                    "submit": 100.0,
                    "approved": 77.4,
                    "anomaliBelum": 4.5,
                    "anomaliCatatan": 6.8,
                    "anomaliPerbaikan": 77.4
                },
                {
                    "nama": "Wahyuningsih",
                    "submit": 100.0,
                    "approved": 92.2,
                    "anomaliBelum": 1.6,
                    "anomaliCatatan": 2.3,
                    "anomaliPerbaikan": 92.2
                },
                {
                    "nama": "Ana Mardiana",
                    "submit": 98.8,
                    "approved": 84.0,
                    "anomaliBelum": 3.2,
                    "anomaliCatatan": 4.8,
                    "anomaliPerbaikan": 84.0
                },
                {
                    "nama": "Faridatulwinarni",
                    "submit": 100.0,
                    "approved": 99.8,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.8
                },
                {
                    "nama": "Hairin Annisa",
                    "submit": 86.7,
                    "approved": 60.8,
                    "anomaliBelum": 7.8,
                    "anomaliCatatan": 11.8,
                    "anomaliPerbaikan": 60.8
                },
                {
                    "nama": "Nur Anisa",
                    "submit": 100.0,
                    "approved": 84.0,
                    "anomaliBelum": 3.2,
                    "anomaliCatatan": 4.8,
                    "anomaliPerbaikan": 84.0
                },
                {
                    "nama": "Nurmiati",
                    "submit": 99.5,
                    "approved": 79.8,
                    "anomaliBelum": 4.0,
                    "anomaliCatatan": 6.1,
                    "anomaliPerbaikan": 79.8
                },
                {
                    "nama": "Sunarti",
                    "submit": 100.0,
                    "approved": 89.6,
                    "anomaliBelum": 2.1,
                    "anomaliCatatan": 3.1,
                    "anomaliPerbaikan": 89.6
                },
                {
                    "nama": "Zarah Azhari",
                    "submit": 88.7,
                    "approved": 77.3,
                    "anomaliBelum": 4.5,
                    "anomaliCatatan": 6.8,
                    "anomaliPerbaikan": 77.3
                },
                {
                    "nama": "Haerul Nur Amin",
                    "submit": 100.0,
                    "approved": 93.1,
                    "anomaliBelum": 1.4,
                    "anomaliCatatan": 2.1,
                    "anomaliPerbaikan": 93.1
                },
                {
                    "nama": "Kiki Nuswati",
                    "submit": 100.0,
                    "approved": 98.8,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.4,
                    "anomaliPerbaikan": 98.8
                },
                {
                    "nama": "NUR HADIJAH",
                    "submit": 100.0,
                    "approved": 95.7,
                    "anomaliBelum": 0.9,
                    "anomaliCatatan": 1.3,
                    "anomaliPerbaikan": 95.7
                },
                {
                    "nama": "NURLIAH S.PDI",
                    "submit": 100.0,
                    "approved": 98.2,
                    "anomaliBelum": 0.4,
                    "anomaliCatatan": 0.5,
                    "anomaliPerbaikan": 98.2
                },
                {
                    "nama": "ratna wati",
                    "submit": 100.0,
                    "approved": 99.3,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.2,
                    "anomaliPerbaikan": 99.3
                },
                {
                    "nama": "Sabiani",
                    "submit": 99.6,
                    "approved": 94.9,
                    "anomaliBelum": 1.0,
                    "anomaliCatatan": 1.5,
                    "anomaliPerbaikan": 94.9
                },
                {
                    "nama": "WAHDANIAR",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Erni ariyanti",
                    "submit": 100.0,
                    "approved": 86.5,
                    "anomaliBelum": 2.7,
                    "anomaliCatatan": 4.0,
                    "anomaliPerbaikan": 86.5
                },
                {
                    "nama": "JUMRIANI",
                    "submit": 94.6,
                    "approved": 35.3,
                    "anomaliBelum": 12.9,
                    "anomaliCatatan": 19.4,
                    "anomaliPerbaikan": 35.3
                },
                {
                    "nama": "Nanna Safitri",
                    "submit": 99.5,
                    "approved": 38.0,
                    "anomaliBelum": 12.4,
                    "anomaliCatatan": 18.6,
                    "anomaliPerbaikan": 38.0
                },
                {
                    "nama": "RAHMIATI",
                    "submit": 100.0,
                    "approved": 98.9,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.3,
                    "anomaliPerbaikan": 98.9
                },
                {
                    "nama": "Rohani Nasaruddin",
                    "submit": 100.0,
                    "approved": 99.6,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.6
                },
                {
                    "nama": "Rosmini",
                    "submit": 100.0,
                    "approved": 98.3,
                    "anomaliBelum": 0.3,
                    "anomaliCatatan": 0.5,
                    "anomaliPerbaikan": 98.3
                },
                {
                    "nama": "Rusmin Nuryadin",
                    "submit": 100.0,
                    "approved": 75.8,
                    "anomaliBelum": 4.8,
                    "anomaliCatatan": 7.3,
                    "anomaliPerbaikan": 75.8
                },
                {
                    "nama": "Suandi",
                    "submit": 100.0,
                    "approved": 80.6,
                    "anomaliBelum": 3.9,
                    "anomaliCatatan": 5.8,
                    "anomaliPerbaikan": 80.6
                },
                {
                    "nama": "ARMITA KURNIA DEWI",
                    "submit": 86.3,
                    "approved": 75.9,
                    "anomaliBelum": 4.8,
                    "anomaliCatatan": 7.2,
                    "anomaliPerbaikan": 75.9
                },
                {
                    "nama": "Muh. Imran",
                    "submit": 94.3,
                    "approved": 78.9,
                    "anomaliBelum": 4.2,
                    "anomaliCatatan": 6.3,
                    "anomaliPerbaikan": 78.9
                },
                {
                    "nama": "MULIANA.M",
                    "submit": 99.6,
                    "approved": 97.9,
                    "anomaliBelum": 0.4,
                    "anomaliCatatan": 0.6,
                    "anomaliPerbaikan": 97.9
                },
                {
                    "nama": "Rahmah Djabal Arfah",
                    "submit": 83.7,
                    "approved": 30.9,
                    "anomaliBelum": 13.8,
                    "anomaliCatatan": 20.7,
                    "anomaliPerbaikan": 30.9
                },
                {
                    "nama": "Rika Siswati",
                    "submit": 99.8,
                    "approved": 99.3,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.2,
                    "anomaliPerbaikan": 99.3
                },
                {
                    "nama": "ROSDIANA",
                    "submit": 99.2,
                    "approved": 97.0,
                    "anomaliBelum": 0.6,
                    "anomaliCatatan": 0.9,
                    "anomaliPerbaikan": 97.0
                },
                {
                    "nama": "Syamsul Bakhry, SE",
                    "submit": 100.0,
                    "approved": 97.1,
                    "anomaliBelum": 0.6,
                    "anomaliCatatan": 0.9,
                    "anomaliPerbaikan": 97.1
                }
            ],
            "pml": [
                {
                    "nama": "KADIR JAELANI",
                    "approved": 93.5,
                    "rejected": 1.4,
                    "anomaliBelum": 1.6,
                    "anomaliCatatan": 2.3,
                    "anomaliPerbaikan": 93.5
                },
                {
                    "nama": "MUHAMMAD TAHIR",
                    "approved": 82.3,
                    "rejected": 0.9,
                    "anomaliBelum": 4.4,
                    "anomaliCatatan": 6.2,
                    "anomaliPerbaikan": 82.3
                },
                {
                    "nama": "NUR AULIA",
                    "approved": 97.1,
                    "rejected": 0.5,
                    "anomaliBelum": 0.7,
                    "anomaliCatatan": 1.0,
                    "anomaliPerbaikan": 97.1
                },
                {
                    "nama": "NURJANNAH B.S",
                    "approved": 76.9,
                    "rejected": 2.6,
                    "anomaliBelum": 5.8,
                    "anomaliCatatan": 8.1,
                    "anomaliPerbaikan": 76.9
                },
                {
                    "nama": "UMRAYENI JAMAL",
                    "approved": 83.1,
                    "rejected": 0.9,
                    "anomaliBelum": 4.2,
                    "anomaliCatatan": 5.9,
                    "anomaliPerbaikan": 83.1
                }
            ],
            "submit": 98.0,
            "approved": 86.0,
            "totalPPL": 36,
            "totalPML": 5
        },
        "Kelara": {
            "ppl": [
                {
                    "nama": "APDI",
                    "submit": 100.0,
                    "approved": 78.9,
                    "anomaliBelum": 4.2,
                    "anomaliCatatan": 6.3,
                    "anomaliPerbaikan": 78.9
                },
                {
                    "nama": "M ASPAR",
                    "submit": 97.9,
                    "approved": 68.0,
                    "anomaliBelum": 6.4,
                    "anomaliCatatan": 9.6,
                    "anomaliPerbaikan": 68.0
                },
                {
                    "nama": "MUH. RIZKY TAUFIK ISMAIL",
                    "submit": 100.0,
                    "approved": 89.0,
                    "anomaliBelum": 2.2,
                    "anomaliCatatan": 3.3,
                    "anomaliPerbaikan": 89.0
                },
                {
                    "nama": "Muh.fadil usamah dalali",
                    "submit": 85.6,
                    "approved": 41.8,
                    "anomaliBelum": 11.6,
                    "anomaliCatatan": 17.5,
                    "anomaliPerbaikan": 41.8
                },
                {
                    "nama": "NUR AL HAYYUL RAMADHANI",
                    "submit": 97.9,
                    "approved": 80.4,
                    "anomaliBelum": 3.9,
                    "anomaliCatatan": 5.9,
                    "anomaliPerbaikan": 80.4
                },
                {
                    "nama": "Nurjanna S",
                    "submit": 100.0,
                    "approved": 64.8,
                    "anomaliBelum": 7.0,
                    "anomaliCatatan": 10.6,
                    "anomaliPerbaikan": 64.8
                },
                {
                    "nama": "Citra Ayu Lestari",
                    "submit": 100.0,
                    "approved": 98.8,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.4,
                    "anomaliPerbaikan": 98.8
                },
                {
                    "nama": "mirna yolanda",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "NURUL AZIZA",
                    "submit": 100.0,
                    "approved": 99.4,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.2,
                    "anomaliPerbaikan": 99.4
                },
                {
                    "nama": "NURUL FADILA",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Rahmat Lallo",
                    "submit": 100.0,
                    "approved": 98.2,
                    "anomaliBelum": 0.4,
                    "anomaliCatatan": 0.5,
                    "anomaliPerbaikan": 98.2
                },
                {
                    "nama": "Siti Syahidah Mujahidah",
                    "submit": 100.0,
                    "approved": 98.9,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.3,
                    "anomaliPerbaikan": 98.9
                },
                {
                    "nama": "Supriadi",
                    "submit": 100.0,
                    "approved": 98.8,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.4,
                    "anomaliPerbaikan": 98.8
                },
                {
                    "nama": "Agung Sahdana SE",
                    "submit": 98.3,
                    "approved": 86.2,
                    "anomaliBelum": 2.8,
                    "anomaliCatatan": 4.1,
                    "anomaliPerbaikan": 86.2
                },
                {
                    "nama": "Dahlia",
                    "submit": 95.1,
                    "approved": 81.5,
                    "anomaliBelum": 3.7,
                    "anomaliCatatan": 5.5,
                    "anomaliPerbaikan": 81.5
                },
                {
                    "nama": "ernawati",
                    "submit": 94.3,
                    "approved": 83.0,
                    "anomaliBelum": 3.4,
                    "anomaliCatatan": 5.1,
                    "anomaliPerbaikan": 83.0
                },
                {
                    "nama": "IRMA INDI PRATAMA",
                    "submit": 85.6,
                    "approved": 20.9,
                    "anomaliBelum": 15.8,
                    "anomaliCatatan": 23.7,
                    "anomaliPerbaikan": 20.9
                },
                {
                    "nama": "Muh Fathir Reski Ilyas A.Md.p",
                    "submit": 97.1,
                    "approved": 89.8,
                    "anomaliBelum": 2.0,
                    "anomaliCatatan": 3.1,
                    "anomaliPerbaikan": 89.8
                },
                {
                    "nama": "REGINA MAHARANI. R, A.MD.KEP",
                    "submit": 100.0,
                    "approved": 99.1,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.3,
                    "anomaliPerbaikan": 99.1
                },
                {
                    "nama": "Ahmad Alamsyah Said",
                    "submit": 100.0,
                    "approved": 84.8,
                    "anomaliBelum": 3.0,
                    "anomaliCatatan": 4.6,
                    "anomaliPerbaikan": 84.8
                },
                {
                    "nama": "JUSNI",
                    "submit": 100.0,
                    "approved": 70.9,
                    "anomaliBelum": 5.8,
                    "anomaliCatatan": 8.7,
                    "anomaliPerbaikan": 70.9
                },
                {
                    "nama": "MAULIDIANTI PUSPITA HAMSURI",
                    "submit": 97.9,
                    "approved": 66.4,
                    "anomaliBelum": 6.7,
                    "anomaliCatatan": 10.1,
                    "anomaliPerbaikan": 66.4
                },
                {
                    "nama": "RABASENG",
                    "submit": 100.0,
                    "approved": 96.7,
                    "anomaliBelum": 0.7,
                    "anomaliCatatan": 1.0,
                    "anomaliPerbaikan": 96.7
                },
                {
                    "nama": "Rahmadani",
                    "submit": 95.6,
                    "approved": 72.6,
                    "anomaliBelum": 5.5,
                    "anomaliCatatan": 8.2,
                    "anomaliPerbaikan": 72.6
                },
                {
                    "nama": "SUMARTI.J",
                    "submit": 99.4,
                    "approved": 84.5,
                    "anomaliBelum": 3.1,
                    "anomaliCatatan": 4.6,
                    "anomaliPerbaikan": 84.5
                }
            ],
            "pml": [
                {
                    "nama": "KARIMALI SOFYAN",
                    "approved": 70.3,
                    "rejected": 2.5,
                    "anomaliBelum": 7.4,
                    "anomaliCatatan": 10.4,
                    "anomaliPerbaikan": 70.3
                },
                {
                    "nama": "KASMAWATI. HJ",
                    "approved": 99.1,
                    "rejected": 0.0,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.3,
                    "anomaliPerbaikan": 99.1
                },
                {
                    "nama": "PUTRI WAHDA",
                    "approved": 76.0,
                    "rejected": 7.2,
                    "anomaliBelum": 6.0,
                    "anomaliCatatan": 8.4,
                    "anomaliPerbaikan": 76.0
                },
                {
                    "nama": "YUNITA",
                    "approved": 78.5,
                    "rejected": 0.5,
                    "anomaliBelum": 5.4,
                    "anomaliCatatan": 7.5,
                    "anomaliPerbaikan": 78.5
                }
            ],
            "submit": 97.8,
            "approved": 82.1,
            "totalPPL": 25,
            "totalPML": 4
        },
        "Rumbia": {
            "ppl": [
                {
                    "nama": "Ayunengsih",
                    "submit": 99.6,
                    "approved": 98.9,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.3,
                    "anomaliPerbaikan": 98.9
                },
                {
                    "nama": "NIRWAN",
                    "submit": 86.7,
                    "approved": 68.2,
                    "anomaliBelum": 6.4,
                    "anomaliCatatan": 9.5,
                    "anomaliPerbaikan": 68.2
                },
                {
                    "nama": "Nurfitra Qauli",
                    "submit": 100.0,
                    "approved": 98.7,
                    "anomaliBelum": 0.3,
                    "anomaliCatatan": 0.4,
                    "anomaliPerbaikan": 98.7
                },
                {
                    "nama": "NURUL NOVITASARI",
                    "submit": 100.0,
                    "approved": 98.8,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.4,
                    "anomaliPerbaikan": 98.8
                },
                {
                    "nama": "Rahmi Yul Hidayanti",
                    "submit": 97.9,
                    "approved": 93.6,
                    "anomaliBelum": 1.3,
                    "anomaliCatatan": 1.9,
                    "anomaliPerbaikan": 93.6
                },
                {
                    "nama": "Surya andini",
                    "submit": 100.0,
                    "approved": 99.8,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.8
                },
                {
                    "nama": "Winda.L",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "INDAH B",
                    "submit": 100.0,
                    "approved": 99.3,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.2,
                    "anomaliPerbaikan": 99.3
                },
                {
                    "nama": "Nadila kurniati",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Nurlindah",
                    "submit": 91.5,
                    "approved": 81.4,
                    "anomaliBelum": 3.7,
                    "anomaliCatatan": 5.6,
                    "anomaliPerbaikan": 81.4
                },
                {
                    "nama": "Rospinawati",
                    "submit": 100.0,
                    "approved": 99.3,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.2,
                    "anomaliPerbaikan": 99.3
                },
                {
                    "nama": "SALMA",
                    "submit": 100.0,
                    "approved": 98.5,
                    "anomaliBelum": 0.3,
                    "anomaliCatatan": 0.4,
                    "anomaliPerbaikan": 98.5
                },
                {
                    "nama": "Sukri. B",
                    "submit": 93.9,
                    "approved": 84.7,
                    "anomaliBelum": 3.1,
                    "anomaliCatatan": 4.6,
                    "anomaliPerbaikan": 84.7
                },
                {
                    "nama": "Syarifuddin",
                    "submit": 99.4,
                    "approved": 96.6,
                    "anomaliBelum": 0.7,
                    "anomaliCatatan": 1.0,
                    "anomaliPerbaikan": 96.6
                },
                {
                    "nama": "Irmawati Said",
                    "submit": 98.0,
                    "approved": 89.7,
                    "anomaliBelum": 2.1,
                    "anomaliCatatan": 3.1,
                    "anomaliPerbaikan": 89.7
                },
                {
                    "nama": "M JUFRI HS",
                    "submit": 100.0,
                    "approved": 95.9,
                    "anomaliBelum": 0.8,
                    "anomaliCatatan": 1.2,
                    "anomaliPerbaikan": 95.9
                },
                {
                    "nama": "Nur amnah fhadillah",
                    "submit": 100.0,
                    "approved": 99.1,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.3,
                    "anomaliPerbaikan": 99.1
                },
                {
                    "nama": "NUR CAHYANI",
                    "submit": 100.0,
                    "approved": 99.0,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.3,
                    "anomaliPerbaikan": 99.0
                },
                {
                    "nama": "Sri wahyuni",
                    "submit": 100.0,
                    "approved": 99.5,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.5
                },
                {
                    "nama": "Suaib",
                    "submit": 100.0,
                    "approved": 73.7,
                    "anomaliBelum": 5.3,
                    "anomaliCatatan": 7.9,
                    "anomaliPerbaikan": 73.7
                },
                {
                    "nama": "Hardianti",
                    "submit": 100.0,
                    "approved": 97.2,
                    "anomaliBelum": 0.6,
                    "anomaliCatatan": 0.8,
                    "anomaliPerbaikan": 97.2
                },
                {
                    "nama": "Indah",
                    "submit": 100.0,
                    "approved": 98.0,
                    "anomaliBelum": 0.4,
                    "anomaliCatatan": 0.6,
                    "anomaliPerbaikan": 98.0
                },
                {
                    "nama": "M. Ishak",
                    "submit": 95.6,
                    "approved": 76.6,
                    "anomaliBelum": 4.7,
                    "anomaliCatatan": 7.0,
                    "anomaliPerbaikan": 76.6
                },
                {
                    "nama": "RAYHANA SYAM",
                    "submit": 98.6,
                    "approved": 34.6,
                    "anomaliBelum": 13.1,
                    "anomaliCatatan": 19.6,
                    "anomaliPerbaikan": 34.6
                },
                {
                    "nama": "Sri ira anita putri",
                    "submit": 100.0,
                    "approved": 98.8,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.4,
                    "anomaliPerbaikan": 98.8
                },
                {
                    "nama": "St Nurpadila DL",
                    "submit": 100.0,
                    "approved": 74.2,
                    "anomaliBelum": 5.2,
                    "anomaliCatatan": 7.7,
                    "anomaliPerbaikan": 74.2
                },
                {
                    "nama": "Wahyuni",
                    "submit": 100.0,
                    "approved": 95.0,
                    "anomaliBelum": 1.0,
                    "anomaliCatatan": 1.5,
                    "anomaliPerbaikan": 95.0
                }
            ],
            "pml": [
                {
                    "nama": "AYU WINATA ILHAM",
                    "approved": 94.6,
                    "rejected": 0.5,
                    "anomaliBelum": 1.4,
                    "anomaliCatatan": 1.9,
                    "anomaliPerbaikan": 94.6
                },
                {
                    "nama": "MIFTAHUDDIN",
                    "approved": 94.0,
                    "rejected": 0.4,
                    "anomaliBelum": 1.5,
                    "anomaliCatatan": 2.1,
                    "anomaliPerbaikan": 94.0
                },
                {
                    "nama": "RESKINA",
                    "approved": 91.7,
                    "rejected": 1.7,
                    "anomaliBelum": 2.1,
                    "anomaliCatatan": 2.9,
                    "anomaliPerbaikan": 91.7
                },
                {
                    "nama": "RUSWITA",
                    "approved": 81.3,
                    "rejected": 2.6,
                    "anomaliBelum": 4.7,
                    "anomaliCatatan": 6.5,
                    "anomaliPerbaikan": 81.3
                }
            ],
            "submit": 98.6,
            "approved": 90.7,
            "totalPPL": 27,
            "totalPML": 4
        },
        "Tamalatea": {
            "ppl": [
                {
                    "nama": "AN NAHL NUR SA'AD",
                    "submit": 90.5,
                    "approved": 61.7,
                    "anomaliBelum": 7.7,
                    "anomaliCatatan": 11.5,
                    "anomaliPerbaikan": 61.7
                },
                {
                    "nama": "Asda Zulqaidah",
                    "submit": 87.3,
                    "approved": 42.8,
                    "anomaliBelum": 11.4,
                    "anomaliCatatan": 17.2,
                    "anomaliPerbaikan": 42.8
                },
                {
                    "nama": "EKA PUTRI AMELIA",
                    "submit": 93.6,
                    "approved": 72.3,
                    "anomaliBelum": 5.5,
                    "anomaliCatatan": 8.3,
                    "anomaliPerbaikan": 72.3
                },
                {
                    "nama": "Emmi Agustina",
                    "submit": 94.3,
                    "approved": 52.6,
                    "anomaliBelum": 9.5,
                    "anomaliCatatan": 14.2,
                    "anomaliPerbaikan": 52.6
                },
                {
                    "nama": "Indah Anggraeni",
                    "submit": 100.0,
                    "approved": 98.7,
                    "anomaliBelum": 0.3,
                    "anomaliCatatan": 0.4,
                    "anomaliPerbaikan": 98.7
                },
                {
                    "nama": "ST SAHARA",
                    "submit": 99.9,
                    "approved": 85.5,
                    "anomaliBelum": 2.9,
                    "anomaliCatatan": 4.3,
                    "anomaliPerbaikan": 85.5
                },
                {
                    "nama": "St. Hardiani Jufri",
                    "submit": 95.8,
                    "approved": 53.6,
                    "anomaliBelum": 9.3,
                    "anomaliCatatan": 13.9,
                    "anomaliPerbaikan": 53.6
                },
                {
                    "nama": "MUH. IKBAL",
                    "submit": 98.8,
                    "approved": 79.0,
                    "anomaliBelum": 4.2,
                    "anomaliCatatan": 6.3,
                    "anomaliPerbaikan": 79.0
                },
                {
                    "nama": "NETTI IRAWATI",
                    "submit": 84.4,
                    "approved": 45.0,
                    "anomaliBelum": 11.0,
                    "anomaliCatatan": 16.5,
                    "anomaliPerbaikan": 45.0
                },
                {
                    "nama": "NURJANNAH",
                    "submit": 71.8,
                    "approved": 35.8,
                    "anomaliBelum": 12.8,
                    "anomaliCatatan": 19.3,
                    "anomaliPerbaikan": 35.8
                },
                {
                    "nama": "SRI DEWY",
                    "submit": 75.6,
                    "approved": 59.3,
                    "anomaliBelum": 8.1,
                    "anomaliCatatan": 12.2,
                    "anomaliPerbaikan": 59.3
                },
                {
                    "nama": "sukmawati",
                    "submit": 100.0,
                    "approved": 97.3,
                    "anomaliBelum": 0.5,
                    "anomaliCatatan": 0.8,
                    "anomaliPerbaikan": 97.3
                },
                {
                    "nama": "Suparman",
                    "submit": 62.5,
                    "approved": 60.3,
                    "anomaliBelum": 7.9,
                    "anomaliCatatan": 11.9,
                    "anomaliPerbaikan": 60.3
                },
                {
                    "nama": "SYAMSINAR",
                    "submit": 92.0,
                    "approved": 76.0,
                    "anomaliBelum": 4.8,
                    "anomaliCatatan": 7.2,
                    "anomaliPerbaikan": 76.0
                },
                {
                    "nama": "Devi Ariastriyanti Idrus",
                    "submit": 99.2,
                    "approved": 97.5,
                    "anomaliBelum": 0.5,
                    "anomaliCatatan": 0.8,
                    "anomaliPerbaikan": 97.5
                },
                {
                    "nama": "Indah Sari Syam",
                    "submit": 94.8,
                    "approved": 94.0,
                    "anomaliBelum": 1.2,
                    "anomaliCatatan": 1.8,
                    "anomaliPerbaikan": 94.0
                },
                {
                    "nama": "Pitri Handayani",
                    "submit": 100.0,
                    "approved": 99.5,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.5
                },
                {
                    "nama": "Selvi",
                    "submit": 96.2,
                    "approved": 92.2,
                    "anomaliBelum": 1.6,
                    "anomaliCatatan": 2.3,
                    "anomaliPerbaikan": 92.2
                },
                {
                    "nama": "SINTA WULAN SARI",
                    "submit": 95.7,
                    "approved": 93.0,
                    "anomaliBelum": 1.4,
                    "anomaliCatatan": 2.1,
                    "anomaliPerbaikan": 93.0
                },
                {
                    "nama": "Sri Wahyuni",
                    "submit": 84.2,
                    "approved": 75.7,
                    "anomaliBelum": 4.9,
                    "anomaliCatatan": 7.3,
                    "anomaliPerbaikan": 75.7
                },
                {
                    "nama": "TAHIRUDDIN",
                    "submit": 100.0,
                    "approved": 85.1,
                    "anomaliBelum": 3.0,
                    "anomaliCatatan": 4.5,
                    "anomaliPerbaikan": 85.1
                },
                {
                    "nama": "Wiwid Windasari",
                    "submit": 97.5,
                    "approved": 96.1,
                    "anomaliBelum": 0.8,
                    "anomaliCatatan": 1.2,
                    "anomaliPerbaikan": 96.1
                },
                {
                    "nama": "Ariadi",
                    "submit": 96.5,
                    "approved": 94.0,
                    "anomaliBelum": 1.2,
                    "anomaliCatatan": 1.8,
                    "anomaliPerbaikan": 94.0
                },
                {
                    "nama": "Murni syam",
                    "submit": 100.0,
                    "approved": 99.8,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.8
                },
                {
                    "nama": "Naldi Saputra",
                    "submit": 95.9,
                    "approved": 86.9,
                    "anomaliBelum": 2.6,
                    "anomaliCatatan": 3.9,
                    "anomaliPerbaikan": 86.9
                },
                {
                    "nama": "Rahmi Damayanti",
                    "submit": 92.1,
                    "approved": 86.5,
                    "anomaliBelum": 2.7,
                    "anomaliCatatan": 4.0,
                    "anomaliPerbaikan": 86.5
                },
                {
                    "nama": "Reski Amelia Putri",
                    "submit": 99.6,
                    "approved": 98.5,
                    "anomaliBelum": 0.3,
                    "anomaliCatatan": 0.4,
                    "anomaliPerbaikan": 98.5
                },
                {
                    "nama": "Saiful Anwar",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Suci Rahmadani.A",
                    "submit": 97.5,
                    "approved": 97.3,
                    "anomaliBelum": 0.5,
                    "anomaliCatatan": 0.8,
                    "anomaliPerbaikan": 97.3
                },
                {
                    "nama": "Annisa Indie Eka Hadini",
                    "submit": 90.3,
                    "approved": 19.8,
                    "anomaliBelum": 16.0,
                    "anomaliCatatan": 24.1,
                    "anomaliPerbaikan": 19.8
                },
                {
                    "nama": "Harmiati",
                    "submit": 77.4,
                    "approved": 18.2,
                    "anomaliBelum": 16.4,
                    "anomaliCatatan": 24.5,
                    "anomaliPerbaikan": 18.2
                },
                {
                    "nama": "Irfan",
                    "submit": 99.8,
                    "approved": 41.4,
                    "anomaliBelum": 11.7,
                    "anomaliCatatan": 17.6,
                    "anomaliPerbaikan": 41.4
                },
                {
                    "nama": "Masni",
                    "submit": 99.9,
                    "approved": 34.0,
                    "anomaliBelum": 13.2,
                    "anomaliCatatan": 19.8,
                    "anomaliPerbaikan": 34.0
                },
                {
                    "nama": "Nurfadhilah",
                    "submit": 100.0,
                    "approved": 25.5,
                    "anomaliBelum": 14.9,
                    "anomaliCatatan": 22.3,
                    "anomaliPerbaikan": 25.5
                },
                {
                    "nama": "Santi",
                    "submit": 98.9,
                    "approved": 31.1,
                    "anomaliBelum": 13.8,
                    "anomaliCatatan": 20.7,
                    "anomaliPerbaikan": 31.1
                },
                {
                    "nama": "Suhartini",
                    "submit": 86.8,
                    "approved": 18.6,
                    "anomaliBelum": 16.3,
                    "anomaliCatatan": 24.4,
                    "anomaliPerbaikan": 18.6
                }
            ],
            "pml": [
                {
                    "nama": "A. ALFIRA YUNINGSIH. M",
                    "approved": 68.3,
                    "rejected": 3.6,
                    "anomaliBelum": 7.9,
                    "anomaliCatatan": 11.1,
                    "anomaliPerbaikan": 68.3
                },
                {
                    "nama": "AFDALUDDIN RAUF",
                    "approved": 65.7,
                    "rejected": 7.1,
                    "anomaliBelum": 8.6,
                    "anomaliCatatan": 12.0,
                    "anomaliPerbaikan": 65.7
                },
                {
                    "nama": "LESTARI",
                    "approved": 91.6,
                    "rejected": 0.7,
                    "anomaliBelum": 2.1,
                    "anomaliCatatan": 2.9,
                    "anomaliPerbaikan": 91.6
                },
                {
                    "nama": "MEGAWATI, S.E",
                    "approved": 94.7,
                    "rejected": 1.3,
                    "anomaliBelum": 1.3,
                    "anomaliCatatan": 1.9,
                    "anomaliPerbaikan": 94.7
                },
                {
                    "nama": "WA ODE NUR WAFIQ AZIZAH",
                    "approved": 27.2,
                    "rejected": 2.0,
                    "anomaliBelum": 18.2,
                    "anomaliCatatan": 25.5,
                    "anomaliPerbaikan": 27.2
                }
            ],
            "submit": 93.0,
            "approved": 69.6,
            "totalPPL": 36,
            "totalPML": 5
        },
        "Tarowang": {
            "ppl": [
                {
                    "nama": "Aina alfira",
                    "submit": 100.0,
                    "approved": 99.8,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.8
                },
                {
                    "nama": "Erna Sri Ratna Nur",
                    "submit": 100.0,
                    "approved": 99.6,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.6
                },
                {
                    "nama": "Nopiana",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Nur Harini",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "Rahman",
                    "submit": 100.0,
                    "approved": 99.8,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.8
                },
                {
                    "nama": "ST. KHADIJAH",
                    "submit": 100.0,
                    "approved": 99.8,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.8
                },
                {
                    "nama": "Andi Tenri Aprianti",
                    "submit": 99.6,
                    "approved": 97.4,
                    "anomaliBelum": 0.5,
                    "anomaliCatatan": 0.8,
                    "anomaliPerbaikan": 97.4
                },
                {
                    "nama": "Ayu andira",
                    "submit": 100.0,
                    "approved": 99.5,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.5
                },
                {
                    "nama": "MUSDALIFAH",
                    "submit": 99.6,
                    "approved": 96.2,
                    "anomaliBelum": 0.8,
                    "anomaliCatatan": 1.1,
                    "anomaliPerbaikan": 96.2
                },
                {
                    "nama": "Reski Amalia",
                    "submit": 100.0,
                    "approved": 94.8,
                    "anomaliBelum": 1.0,
                    "anomaliCatatan": 1.6,
                    "anomaliPerbaikan": 94.8
                },
                {
                    "nama": "ROSDAYANTI",
                    "submit": 100.0,
                    "approved": 98.7,
                    "anomaliBelum": 0.3,
                    "anomaliCatatan": 0.4,
                    "anomaliPerbaikan": 98.7
                },
                {
                    "nama": "Rosmini Baji Mustafa",
                    "submit": 100.0,
                    "approved": 98.5,
                    "anomaliBelum": 0.3,
                    "anomaliCatatan": 0.4,
                    "anomaliPerbaikan": 98.5
                },
                {
                    "nama": "RUSDI",
                    "submit": 100.0,
                    "approved": 99.1,
                    "anomaliBelum": 0.2,
                    "anomaliCatatan": 0.3,
                    "anomaliPerbaikan": 99.1
                },
                {
                    "nama": "Endah Dwi Ningrum Sasmito, S.Pt",
                    "submit": 100.0,
                    "approved": 98.6,
                    "anomaliBelum": 0.3,
                    "anomaliCatatan": 0.4,
                    "anomaliPerbaikan": 98.6
                },
                {
                    "nama": "Fira Dian Utari",
                    "submit": 100.0,
                    "approved": 88.1,
                    "anomaliBelum": 2.4,
                    "anomaliCatatan": 3.6,
                    "anomaliPerbaikan": 88.1
                },
                {
                    "nama": "Hendriansyah",
                    "submit": 100.0,
                    "approved": 94.8,
                    "anomaliBelum": 1.0,
                    "anomaliCatatan": 1.6,
                    "anomaliPerbaikan": 94.8
                },
                {
                    "nama": "Kasma",
                    "submit": 100.0,
                    "approved": 97.3,
                    "anomaliBelum": 0.5,
                    "anomaliCatatan": 0.8,
                    "anomaliPerbaikan": 97.3
                },
                {
                    "nama": "MASITA",
                    "submit": 89.0,
                    "approved": 72.3,
                    "anomaliBelum": 5.5,
                    "anomaliCatatan": 8.3,
                    "anomaliPerbaikan": 72.3
                },
                {
                    "nama": "NITA",
                    "submit": 100.0,
                    "approved": 99.7,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.7
                },
                {
                    "nama": "RISDA PERMATASARI",
                    "submit": 100.0,
                    "approved": 96.8,
                    "anomaliBelum": 0.6,
                    "anomaliCatatan": 1.0,
                    "anomaliPerbaikan": 96.8
                }
            ],
            "pml": [
                {
                    "nama": "DARMA",
                    "approved": 99.8,
                    "rejected": 0.0,
                    "anomaliBelum": 0.1,
                    "anomaliCatatan": 0.1,
                    "anomaliPerbaikan": 99.8
                },
                {
                    "nama": "DISMA",
                    "approved": 97.8,
                    "rejected": 0.4,
                    "anomaliBelum": 0.6,
                    "anomaliCatatan": 0.8,
                    "anomaliPerbaikan": 97.8
                },
                {
                    "nama": "HARNIATI",
                    "approved": 93.1,
                    "rejected": 0.6,
                    "anomaliBelum": 1.7,
                    "anomaliCatatan": 2.4,
                    "anomaliPerbaikan": 93.1
                }
            ],
            "submit": 99.4,
            "approved": 96.5,
            "totalPPL": 20,
            "totalPML": 3
        },
        "Turatea": {
            "ppl": [
                {
                    "nama": "Asfhira",
                    "submit": 90.0,
                    "approved": 47.7,
                    "anomaliBelum": 10.5,
                    "anomaliCatatan": 15.7,
                    "anomaliPerbaikan": 47.7
                },
                {
                    "nama": "Juita Fitriani",
                    "submit": 100.0,
                    "approved": 34.7,
                    "anomaliBelum": 13.1,
                    "anomaliCatatan": 19.6,
                    "anomaliPerbaikan": 34.7
                },
                {
                    "nama": "JUSRIADI LIWANG",
                    "submit": 100.0,
                    "approved": 57.0,
                    "anomaliBelum": 8.6,
                    "anomaliCatatan": 12.9,
                    "anomaliPerbaikan": 57.0
                },
                {
                    "nama": "Lisdawati",
                    "submit": 95.8,
                    "approved": 42.8,
                    "anomaliBelum": 11.4,
                    "anomaliCatatan": 17.2,
                    "anomaliPerbaikan": 42.8
                },
                {
                    "nama": "Lismawati",
                    "submit": 98.4,
                    "approved": 35.8,
                    "anomaliBelum": 12.8,
                    "anomaliCatatan": 19.3,
                    "anomaliPerbaikan": 35.8
                },
                {
                    "nama": "Nur Ika Putri",
                    "submit": 88.8,
                    "approved": 44.5,
                    "anomaliBelum": 11.1,
                    "anomaliCatatan": 16.6,
                    "anomaliPerbaikan": 44.5
                },
                {
                    "nama": "Sri ariyanti dewi",
                    "submit": 100.0,
                    "approved": 66.9,
                    "anomaliBelum": 6.6,
                    "anomaliCatatan": 9.9,
                    "anomaliPerbaikan": 66.9
                },
                {
                    "nama": "Syeh Awal Alham",
                    "submit": 100.0,
                    "approved": 57.6,
                    "anomaliBelum": 8.5,
                    "anomaliCatatan": 12.7,
                    "anomaliPerbaikan": 57.6
                },
                {
                    "nama": "Al Maida Maulana",
                    "submit": 100.0,
                    "approved": 89.1,
                    "anomaliBelum": 2.2,
                    "anomaliCatatan": 3.3,
                    "anomaliPerbaikan": 89.1
                },
                {
                    "nama": "Masdar Sila",
                    "submit": 100.0,
                    "approved": 57.9,
                    "anomaliBelum": 8.4,
                    "anomaliCatatan": 12.6,
                    "anomaliPerbaikan": 57.9
                },
                {
                    "nama": "Mita",
                    "submit": 95.4,
                    "approved": 25.4,
                    "anomaliBelum": 14.9,
                    "anomaliCatatan": 22.4,
                    "anomaliPerbaikan": 25.4
                },
                {
                    "nama": "Nurwahyuni",
                    "submit": 100.0,
                    "approved": 41.0,
                    "anomaliBelum": 11.8,
                    "anomaliCatatan": 17.7,
                    "anomaliPerbaikan": 41.0
                },
                {
                    "nama": "Randy hariady raha",
                    "submit": 85.1,
                    "approved": 21.3,
                    "anomaliBelum": 15.7,
                    "anomaliCatatan": 23.6,
                    "anomaliPerbaikan": 21.3
                },
                {
                    "nama": "Rini Winarsih",
                    "submit": 100.0,
                    "approved": 100.0,
                    "anomaliBelum": 0.0,
                    "anomaliCatatan": 0.0,
                    "anomaliPerbaikan": 100.0
                },
                {
                    "nama": "SULFADILA",
                    "submit": 99.6,
                    "approved": 34.6,
                    "anomaliBelum": 13.1,
                    "anomaliCatatan": 19.6,
                    "anomaliPerbaikan": 34.6
                },
                {
                    "nama": "Anugrah Putri Pratiwi",
                    "submit": 97.5,
                    "approved": 47.0,
                    "anomaliBelum": 10.6,
                    "anomaliCatatan": 15.9,
                    "anomaliPerbaikan": 47.0
                },
                {
                    "nama": "Debi",
                    "submit": 99.8,
                    "approved": 46.4,
                    "anomaliBelum": 10.7,
                    "anomaliCatatan": 16.1,
                    "anomaliPerbaikan": 46.4
                },
                {
                    "nama": "FAIDUL ARIF",
                    "submit": 91.4,
                    "approved": 28.6,
                    "anomaliBelum": 14.3,
                    "anomaliCatatan": 21.4,
                    "anomaliPerbaikan": 28.6
                },
                {
                    "nama": "Indah Wahyuni",
                    "submit": 100.0,
                    "approved": 96.6,
                    "anomaliBelum": 0.7,
                    "anomaliCatatan": 1.0,
                    "anomaliPerbaikan": 96.6
                },
                {
                    "nama": "m. nur fajar bakri",
                    "submit": 100.0,
                    "approved": 54.9,
                    "anomaliBelum": 9.0,
                    "anomaliCatatan": 13.5,
                    "anomaliPerbaikan": 54.9
                },
                {
                    "nama": "MUHAMMAD YUSUF",
                    "submit": 98.5,
                    "approved": 72.0,
                    "anomaliBelum": 5.6,
                    "anomaliCatatan": 8.4,
                    "anomaliPerbaikan": 72.0
                },
                {
                    "nama": "Nurhidayat Anggi",
                    "submit": 100.0,
                    "approved": 22.1,
                    "anomaliBelum": 15.6,
                    "anomaliCatatan": 23.4,
                    "anomaliPerbaikan": 22.1
                },
                {
                    "nama": "Sahar purnama",
                    "submit": 100.0,
                    "approved": 46.2,
                    "anomaliBelum": 10.8,
                    "anomaliCatatan": 16.1,
                    "anomaliPerbaikan": 46.2
                },
                {
                    "nama": "Ali syamzu zain",
                    "submit": 98.9,
                    "approved": 20.9,
                    "anomaliBelum": 15.8,
                    "anomaliCatatan": 23.7,
                    "anomaliPerbaikan": 20.9
                },
                {
                    "nama": "JUNITA",
                    "submit": 99.8,
                    "approved": 38.4,
                    "anomaliBelum": 12.3,
                    "anomaliCatatan": 18.5,
                    "anomaliPerbaikan": 38.4
                },
                {
                    "nama": "Martini",
                    "submit": 100.0,
                    "approved": 40.2,
                    "anomaliBelum": 12.0,
                    "anomaliCatatan": 17.9,
                    "anomaliPerbaikan": 40.2
                },
                {
                    "nama": "NASARUDDIN",
                    "submit": 99.8,
                    "approved": 37.5,
                    "anomaliBelum": 12.5,
                    "anomaliCatatan": 18.8,
                    "anomaliPerbaikan": 37.5
                },
                {
                    "nama": "SRI HANDAYANI",
                    "submit": 100.0,
                    "approved": 65.0,
                    "anomaliBelum": 7.0,
                    "anomaliCatatan": 10.5,
                    "anomaliPerbaikan": 65.0
                },
                {
                    "nama": "Suryadi",
                    "submit": 100.0,
                    "approved": 58.1,
                    "anomaliBelum": 8.4,
                    "anomaliCatatan": 12.6,
                    "anomaliPerbaikan": 58.1
                },
                {
                    "nama": "SYAMSINAR. S",
                    "submit": 99.8,
                    "approved": 63.4,
                    "anomaliBelum": 7.3,
                    "anomaliCatatan": 11.0,
                    "anomaliPerbaikan": 63.4
                }
            ],
            "pml": [
                {
                    "nama": "MUHAMMAD KAHFI MS",
                    "approved": 49.9,
                    "rejected": 16.4,
                    "anomaliBelum": 12.5,
                    "anomaliCatatan": 17.5,
                    "anomaliPerbaikan": 49.9
                },
                {
                    "nama": "RAHMAWATI",
                    "approved": 50.4,
                    "rejected": 3.0,
                    "anomaliBelum": 12.4,
                    "anomaliCatatan": 17.4,
                    "anomaliPerbaikan": 50.4
                },
                {
                    "nama": "SUDIRMAN M",
                    "approved": 50.9,
                    "rejected": 4.1,
                    "anomaliBelum": 12.3,
                    "anomaliCatatan": 17.2,
                    "anomaliPerbaikan": 50.9
                },
                {
                    "nama": "WAHYU ADRIANI",
                    "approved": 45.6,
                    "rejected": 1.9,
                    "anomaliBelum": 13.6,
                    "anomaliCatatan": 19.0,
                    "anomaliPerbaikan": 45.6
                }
            ],
            "submit": 98.0,
            "approved": 49.8,
            "totalPPL": 30,
            "totalPML": 4
        }
    },

    // Referensi KBLI 2025 yang Sering Muncul di Jeneponto (5 Digit)
    kbliJeneponto: [
        { kode: "01121", judul: "Pertanian Jagung", kategori: "Pertanian", deskripsi: "Mencakup usaha penanaman jagung pipil, jagung manis, dan benih jagung hibrida yang dominan di Jeneponto." },
        { kode: "03213", judul: "Budidaya Rumput Laut", kategori: "Perikanan", deskripsi: "Mencakup usaha pembibitan dan budidaya rumput laut di perairan pantai Arungkeke, Bangkala, dan Tarowang." },
        { kode: "08930", judul: "Ekstraksi Garam / Tambak Garam", kategori: "Pertambangan & Penggalian", deskripsi: "Mencakup usaha produksi garam mentah dari air laut di wilayah pesisir Bangkala dan sekitarnya." },
        { kode: "01420", judul: "Peternakan Kuda dan Sejenisnya", kategori: "Peternakan", deskripsi: "Mencakup usaha pembibitan dan penggemukan ternak kuda (khas Turatea/Jeneponto) untuk transportasi, ternak potong, atau pacuan." },
        { kode: "47111", judul: "Perdagangan Eceran Berbagai Barang (Kelontong)", kategori: "Perdagangan", deskripsi: "Toko/kios kelontong yang utamanya menjual sembako, makanan, minuman, dan kebutuhan rumah tangga harian." },
        { kode: "56101", judul: "Restoran dan Rumah Makan (Coto & Gantala)", kategori: "Penyediaan Makanan Minuman", deskripsi: "Warung makan tradisional khas Jeneponto yang menyajikan Gantala Jarang, Coto Kuda, Konro, dll." },
        { kode: "45201", judul: "Reparasi dan Perawatan Mobil & Sepeda Motor", kategori: "Jasa Otomotif", deskripsi: "Bengkel servis mesin, ganti oli, tambal ban, dan perbaikan bodi kendaraan bermotor." },
        { kode: "10792", judul: "Industri Kerupuk, Keripik, Peyek dan Sejenisnya", kategori: "Industri Pengolahan", deskripsi: "Usaha pengolahan emping jagung (marning jagung Jeneponto), keripik singkong, dan olahan pangan lokal." },
        { kode: "01111", judul: "Pertanian Padi Sawah", kategori: "Pertanian", deskripsi: "Usaha budidaya padi sawah irigasi maupun tadah hujan di Jeneponto." },
        { kode: "47211", judul: "Perdagangan Eceran Padi, Palawija dan Hasil Tani", kategori: "Perdagangan", deskripsi: "Pengepul dan pedagang eceran hasil panen jagung, gabah, dan kacang-kacangan." }
    ],


    // Referensi Lengkap KBLI 2025 Kabupaten Jeneponto (Sheet A s.d. V dengan Label Frekuensi)
    kbliCategories: {
    "A": {
        "name": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "short": "A - Pertanian, Kehutanan, Perikanan"
    },
    "B": {
        "name": "Kategori B: Pertambangan dan Penggalian",
        "short": "B - Pertambangan & Penggalian"
    },
    "C": {
        "name": "Kategori C: Industri Pengolahan",
        "short": "C - Industri Pengolahan"
    },
    "D": {
        "name": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "short": "D - Listrik, Gas, & Energi"
    },
    "E": {
        "name": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "short": "E - Air & Pengelolaan Limbah"
    },
    "F": {
        "name": "Kategori F: Konstruksi",
        "short": "F - Konstruksi"
    },
    "G": {
        "name": "Kategori G: Perdagangan Besar dan Eceran",
        "short": "G - Perdagangan Besar & Eceran"
    },
    "H": {
        "name": "Kategori H: Transportasi dan Pergudangan",
        "short": "H - Transportasi & Pergudangan"
    },
    "I": {
        "name": "Kategori I: Penyediaan Akomodasi dan Makan Minum",
        "short": "I - Akomodasi & Makan Minum"
    },
    "J": {
        "name": "Kategori J: Penerbitan, Penyiaran, & Konten Media",
        "short": "J - Penerbitan & Konten Media"
    },
    "K": {
        "name": "Kategori K: Telekomunikasi, IT, & Jasa Informasi",
        "short": "K - Telekomunikasi & IT"
    },
    "L": {
        "name": "Kategori L: Aktivitas Keuangan dan Asuransi",
        "short": "L - Keuangan & Asuransi"
    },
    "M": {
        "name": "Kategori M: Aktivitas Real Estat",
        "short": "M - Real Estat & Properti"
    },
    "N": {
        "name": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "short": "N - Profesional, Ilmiah, & Teknis"
    },
    "O": {
        "name": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "short": "O - Persewaan & Jasa Penunjang"
    },
    "P": {
        "name": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "short": "P - Administrasi Pemerintahan"
    },
    "Q": {
        "name": "Kategori Q: Aktivitas Pendidikan",
        "short": "Q - Pendidikan"
    },
    "R": {
        "name": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "short": "R - Kesehatan & Aktivitas Sosial"
    },
    "S": {
        "name": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "short": "S - Kesenian & Rekreasi"
    },
    "T": {
        "name": "Kategori T: Aktivitas Jasa Lainnya",
        "short": "T - Aktivitas Jasa Lainnya"
    },
    "U": {
        "name": "Kategori U: Aktivitas Rumah Tangga Pemberi Kerja",
        "short": "U - Rumah Tangga Mandiri"
    },
    "V": {
        "name": "Kategori V: Badan Internasional & Ekstra Internasional",
        "short": "V - Badan Internasional"
    }
},

    kbliJeneponto: [
    {
        "kode": "01111",
        "judul": "Pertanian Jagung",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan pengolahan lahan, penanaman, pemeliharaan, pemanenan, dan kegiatan pascapanen pertanian jagung yang dilakukan sebagai satu rangkaian kegiatan, selain buruh pertanian dan kegiatan pertanian jagung manis",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01115",
        "judul": "Pertanian Kacang Hijau",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan pengolahan lahan, penanaman, pemeliharaan, pemanenan, dan kegiatan pascapanen pertanian kacang hijau yang dilakukan sebagai satu rangkaian kegiatan, selain buruh pertanian kacang hijau",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01122",
        "judul": "Pertanian Padi Inbrida",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan pengolahan lahan, penanaman, pemeliharaan, pemanenan, dan kegiatan pascapanen pertanian padi inbrida yang dilakukan sebagai satu rangkaian kegiatan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01131",
        "judul": "Pertanian Sayuran Daun",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan pertanian sayuran yang daun, bunga atau batangnya dimakan sebagai sayur, seperti petsai/sawi, selada, seledri, daun bawang, bayam, dan kangkung, kubis/kol, kembang kol, brokoli dll, Selain buruh pertanian sayuran daun",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01132",
        "judul": "Pertanian Buah Semusim",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Pertanian buah semusim, seperti semangka, blewah, melon, dan timun suri, selain buruh pertanian buah semusim",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01133",
        "judul": "Pertanian Sayuran Buah",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan pertanian hortikultura sayuran buah, seperti mentimun, terong, tomat, belimbing sayur, labu sayur (siam), waluh/labu kuning, dan gambas/oyong, selain buruh pertanian sayuran buah",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01134",
        "judul": "Pertanian Sayuran Umbi",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan pertanian sayuran umbi seperti kentang, wortel, , bawang putih, bawang bombai, bawang merah, lobak cina, rebung dll, selain buruh pertanian sayuran umbi",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01138",
        "judul": "Pertanian Cabai",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Aktivitas pertanian cabai (Capsicum spp), seperti cabai besar, cabai rawit, cabai keriting, dan paprika, selain buruh pertanian cabai",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01191",
        "judul": "Pertanian Tanaman Pakan Ternak",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "pertanian tanaman pakan ternak untuk \n memproduksi hijauan pakan ternak yang meliputi rumput pakan ternak dan tanaman legum/kacang-kacangan, seperti rumput gajah, rumput raja, rumput odot, rumput setaria dll, selain buruh pertanian tanaman pakan ternak",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01220",
        "judul": "Pertanian Buah-Buahan Tropis Dan Subtropis",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan pertanian buah-buahan tropis dan subtropis, seperti alpukat, pisang dan pisang raja, kurma, buah ara, pepaya, nanas, rambutan, durian, duku, jambu biji, jambu air, lengkeng, nangka, mangga, manggis, sawo, belimbing, salak, sirsak, dan buah naga, selain buruh pertanian buah-buahan Tropis dan Subtropis",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01230",
        "judul": "Pertanian Buah Jeruk",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan pertanaian buah jeruk, seperti jeruk bali, jeruk lemon, jeruk nipis, limau, jeruk siam, jeruk mandarin, dll, selain buruh pertaniah buah jeruk",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01253",
        "judul": "Pertanian Sayuran Tahunan",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan pertanian tanaman sayuran tahunan seperti kluwih/timbul, sukun, nangka sayur, petai, jengkol, melinjo dll, selain buruh pertanian sayuran tahunan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01261",
        "judul": "Pertanian Kelapa",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan pertanian kelapa, selain buruh pertanian kelapa",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01271",
        "judul": "Pertanian Kopi",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan pertanian kopi, selain buruh pertanian kopi",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01285",
        "judul": "Pertanian Tanaman Obat Rimpang",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan pertanain obat rimpang seperti jahe, kunyit, temulawak, kencur, lengkuas, lempuyang dll, selain buruh tanaman obat rimbang",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01286",
        "judul": "Pertanian Tanaman Obat Nonrimpang",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan pertanian tanaman obat nonrimpang seperti serai hijau kapulaga, lidah buaya, sambiloto, mengkudu atau pace, mahkota dewa dll, Selain buruh pertanian tanaman obat nonrimpang",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01411",
        "judul": "Budi Daya Dan Pembibitan Sapi Potong",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan budi daya sapi potong berupa \n penggemukan dan budidaya untuk menghasilkan sapi siap potong",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01413",
        "judul": "Budi Daya Dan Pembibitan Kerbau Potong",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan budi daya kerbau potong berupa penggemukan untuk menghasilkan kerbau siap potong",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01420",
        "judul": "Peternakan Kuda Dan Sejenisnya",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan budi daya kuda yang menghasilkan \n kuda, seperti kuda potong, kuda perah, kuda pacu, kuda tunggang, kuda tarik, dll",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01442",
        "judul": "Budi Daya Dan Pembibitan Kambing Potong",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan budi daya berupa penggemukan untuk \n menghasilkan kambing potong",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01461",
        "judul": "Budi Daya Ayam Ras Pedaging",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan budi daya ayam ras untuk menghasilkan \n ayam pedaging",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01465",
        "judul": "Budi Daya Dan Pembibitan Itik Dan Bebek",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan budi daya itik dan bebek untuk menghasilkan itik dan bebek pedaging, itik dan bebek petelur, telur konsumsi dan lainnya, dan kegiatan pembibitan untuk menghasilkan telur tetas serta bibit itik dan bebek.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01611",
        "judul": "Jasa Pengolahan Lahan",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "(Buruh) Melakukan kegiatan pengolahan lahan pertanian atas dasar balas jasa atau kontrak dengan tujuan untuk persiapan penanaman, baik di lahan sawah maupun bukan sawah.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01612",
        "judul": "Jasa Pemupukan",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "(Buruh) Melakukan kegiatan pemupukan lahan pertanian",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01613",
        "judul": "Jasa Pemanenan",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "(Buruh) Melakukan kegiatan pemanenan tanaman",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01616",
        "judul": "Jasa Penanaman Benih",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "(Buruh) Melakukan kegiatan penanaman benih komoditas pertanian",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01619",
        "judul": "Jasa Penunjang Pertanian Lainnya",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan jasa penunjang pertanian seperti pengairan/penyiraman serta penyediaan alat pertanian berikut operatornya, pemeliharaan, dan perawatan alat pertanian",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "02201",
        "judul": "Pemanenan Kayu",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan produksi kayu bulat dari penebangan \n hutan, baik digunakan dalam industri berbasis produk hutan maupun digunakan dalam bentuk yang tidak diolah, seperti pit-props, tonggak pagar, dan tiang listrik atau telepon.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "03110",
        "judul": "Penangkapan Ikan Dan Biota Air Lainnya Di Laut",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Penangkapan ikan dan biota laut yang dilakukan di laut seperti ikan bersirip, udang kepiting, cumi-cumi, gurita, rumput laut, terumbu karang dsb, selain penangkapan mamalia di laut",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "03120",
        "judul": "Penangkapan Ikan Dan Biota Air Lainnya Di Perairan Air Tawar",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Penangkapan ikan dan biota laut air tawar seperti udang, kepiting, cumi-cimi, dan lainnya yang hidup di air tawar",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "01113",
        "judul": "Pertanian Kedelai",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan pertanian kedelai selain kedelai sayur, selain buruh pertanian  kedelai",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "01121",
        "judul": "Pertanian Padi Hibrida",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan pertanian padi hibrida (Padi hibrida adalah keturunan pertama (F1) yang dihasilkan dari persilangan antara dua galur atau lebih tetua pembentuknya dan/atau galur/inbrida homozigot, contohnya: Bernas Super, Bernas Prima, Sembada B3, Sembada 626, Sembada 989 dll, selain buruh pertanian Hibrida",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "01136",
        "judul": "Pertanian Jamur",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan pertanian jamur, seperti jamur merang, jamur tiram, jamur shittake, jamur kuping dll, selain buruh pertanian jamur",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "01251",
        "judul": "Pertanian Buah Beri",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan pertanian buah beri seperti bluberi, kismis (currants), gooseberry, kiwi, rasberi, dan stroberi, selain buruh pertanian buah beri",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "01287",
        "judul": "Pertanian Tanaman Narkotika Dan Tanaman Obat Terlarang",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan pertanian narkotika dan tanaman obat terlarang, selain buruh Pertanian Tanaman Narkotika Dan Tanaman Obat Terlarang",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "01301",
        "judul": "Pertanian Tanaman Hias",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan pertanian atau budi daya tanaman hias daun dan tanaman hias bunga hidup, seperti bonsai, kuping gajah, tanaman hias bunga seperti anggrek, mawar dll, selain buruh pertanian tanaman hias",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "01412",
        "judul": "Budi Daya Dan Pembibitan Sapi Perah",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan  budi daya sapi perah berupa penggemukan, produksi susu, dan kegiatan pembibitan untuk menghasilkan bibit ternak sapi perah, semen, dan embrio.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "01414",
        "judul": "Budi Daya Dan Pembibitan Kerbau Perah",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan budi daya kerbau perah berupa penggemukan dan produksi susu, dan kegiatan pembibitan untuk menghasilkan bibit ternak kerbau perah, semen, dan embrio.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "01430",
        "judul": "Peternakan Unta Dan Sejenisnya",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan budi daya untuk menghasilkan unta \npotong, unta perah, dan hewan sejenisnya seperti llama, alpaka,",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "01450",
        "judul": "Peternakan Babi",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan budi daya babi berupa penggemukan untuk menghasilkan babi siap potong dan kegiatan pembibitan babi untuk menghasilkan bibit ternak babi, semen, dan embrio.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "01467",
        "judul": "Budi Daya Dan Pembibitan Burung Merpati",
        "kategori": "A",
        "kategoriNama": "Kategori A: Pertanian, Kehutanan, dan Perikanan",
        "kategoriShort": "A - Pertanian, Kehutanan, Perikanan",
        "deskripsi": "Melakukan kegiatan budi daya burung merpati untuk menghasilkan burung merpati potong atau lainnya, dan kegiatan pembibitan untuk menghasilkan bibit ternak burung merpati dan telur tetas.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "08103",
        "judul": "Penggalian Kerikil/Sirtu",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "Penggalian, pembersihan dan pemisahan kerikil. Hasil dari penggalian kerikil antara lain batu pasir, bongkah keras, dan pasir kerikil.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "08104",
        "judul": "Penggalian Pasir",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "Penggalian, pembersihan dan pemisahan pasir seperti pasir beton, pasir pasang, pasir uruk, dst.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "08930",
        "judul": "Ekstraksi Garam",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "Pengambilan garam dari bawah tanah termasuk dengan pelarutan dan pemompaan, serta produksi garam dengan penguapan air laut.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "08105",
        "judul": "Penggalian Tanah Dan Tanah Liat",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "Kegiatan penggalian tanah dan tanah liat. Hasil dari penggalian tanah \ndan tanah liat/lempung antara lain kaolin (china clay), ball clay (firing \nclay), abu bumi, serpih, dan tanah uruk",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "05101",
        "judul": "Pertambangan Batu Bara",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "Melakukan pertambangan batu bara termasuk pembersihan, pengukuran, pengelompokan, penghancuran, pemadatan batu bara untuk mengklasifikasikan, meningkatkan kualitas, atau memudahkan pengangkutan atau penyimpanan.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "05200",
        "judul": "Pertambangan Lignit",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "Melakukan pertambangan lignit (batu bara muda) termasuk pencucian, perekatan, penghancuran, pemadatan lignit untuk memperbaiki kualitas atau memudahkan pengangkutan atau penyimpanan.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "06100",
        "judul": "Pertambangan Minyak Bumi",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "Melakukan kegiatan pertambangan minyak bumi mentah, termasuk kegiatan pencarian kandungan minyak bumi, pengeboran, penambangan, pemisahan serta penampungan,",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "06201",
        "judul": "Pertambangan Gas Alam",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "Kelompok ini mencakup kegiatan pencarian kandungan, pengeboran, \nMelakukan penambangan, pemisahan serta penampungan gas alam, meliputi gas hidrogen alami dan gas alam lainnya,",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "07102",
        "judul": "Pertambangan Bijih Besi",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "Melakukan kegiatan pertambangan bijih besi, termasuk kegiatan peningkatan mutu dan aglomerasi bijih besi serta konsentratnya.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "07221",
        "judul": "Pertambangan Emas Dan Perak",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "Melakukan kegiatan pertambangan, pembersihan, dan pemisahan bijih emas dan perak.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "07291",
        "judul": "Pertambangan Bijih Timah",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "Melakukan kegiatan pertambangan dan penyiapan bijih timah.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "07295",
        "judul": "Pertambangan Bijih Nikel",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "Kegiatan pertambangan dan penyiapan bijih nikel.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "08911",
        "judul": "Pertambangan Belerang",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "kegiatan pertambangan bijih belerang, termasuk juga kegiatan penghancuran, dan pembersihan terhadap mineral \nbelerang",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "08920",
        "judul": "Ekstraksi Tanah Gambut",
        "kategori": "B",
        "kategoriNama": "Kategori B: Pertambangan dan Penggalian",
        "kategoriShort": "B - Pertambangan & Penggalian",
        "deskripsi": "Kegiatan ekstraksi dan penggalian tanah gambut",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "10111",
        "judul": "Kegiatan Rumah Potong Hewan Ruminansia",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "kegiatan pemotongan, pengulitan, pembersihan dan pengepakan daging seperti sapi, kerbau, kambing, dan domba",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10211",
        "judul": "Pengolahan Dan Pengawetan Ikan Dengan Penggaraman Atau Pengeringan",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "kegiatan pengolahan dan pengawetan ikan bersirip melalui proses penggaraman atau pengeringan yang menghasilkan produk seperti ikan tembang asin, ikan teri asin, dan ikan kering tawar.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10299",
        "judul": "Pengolahan dan Pengawetan Rumput Laut",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "kegiatan pengolahan rumput laut, misalnya pengeringan rumput laut menjadi rumput laut kering. Kelompok ini tidak mencakup kegiatan pembuatan agar-agar",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10301",
        "judul": "Pengasinan Buah-Buahan Dan Sayuran",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Asinan kedondong, asinan wortel.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10307",
        "judul": "Pembuatan Tempe Kedelai",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Usaha pembuatan tempe dari kedelai.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10308",
        "judul": "Pembuatan Tahu Kedelai",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Usaha pembuatan tahu dari kedelai.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10504",
        "judul": "Industri Es Yang Dapat Dimakan Dan Es Pencuci Mulut",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan berbagai macam es yang bahan utamanya bukan dari susu seperti es lilin, ice drop, es mambo, es putar.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10612",
        "judul": "Industri Penggilingan Aneka Kacang",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan tepung dari aneka kacang melalui proses penggilingan seperti tepung kacang hijau, tepung kacang kedelai, dll.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10613",
        "judul": "Industri Penggilingan dari Aneka Umbi, Tanaman Rimpang dan Sayuran",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan tepung dari aneka umbi dan sayuran termasuk rhizoma melalui proses penggilingan seperti tepung dari ubi kayu, tepung dari ubi jalar, talas, jahe, kunyit, dll.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10631",
        "judul": "Industri Penggilingan Padi dan Penyosohan Beras",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Penggilingan padi menjadi beras, termasuk penyosohan beras yang terpisah dengan usaha penggilingan padi.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10632",
        "judul": "Industri Pemipilan Jagung",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pengolahan jagung basah menjadi \n jagung pipilan kering.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10633",
        "judul": "Industri Tepung Beras Dan Tepung Jagung",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "pembuatan tepung beras dan tepung jagung",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10710",
        "judul": "Industri Produk Bakeri",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan berbagai macam roti, kue dan produk lainnya seperti kue kering atau kue dalam kemasan.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10721",
        "judul": "Industri Gula Pasir",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan gula yang berbentuk kristal, bahan utamanya dari tebu, bit ataupun lainnya.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10722",
        "judul": "Industri Gula Merah",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan gula merah baik berbentuk cetakan maupun cair, yang murni dari nira sebagai bahan baku baik berasal dari tebu maupun tanaman lainnya.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10761",
        "judul": "Pengolahan Kopi",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "kegiatan, pengeringan, penyangraian, penggilingan dan penyarian (ekstraksi) kopi menjadi kopi sangrai, kopi bubuk, kopi instan, kopi dekafein, ekstrak dan sari kopi, serta produk kopi \n lainnya, termasuk pengganti kopi.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10792",
        "judul": "Industri Kue Basah",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Membuat kue relatif tidak tahan lama seperti wajik, lemper, kue lapis, lumpia, martabak, jalangkote dst.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10796",
        "judul": "Industri Dodol",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan dodol yang terbuat diperoleh dari bahan utama tepung beras atau tepung beras ketan, santan kelapa dan gula, dengan atau tanpa bahan tambahan lain.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "11020",
        "judul": "Industri Minuman Beralkohol Hasil Fermentasi Anggur Dan Hasil Pertanian Lainnya",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pengolahan minuman secara fermentasi dengan bahan baku hasil pertanian seperti ballo dari nira/tala.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "11051",
        "judul": "Industri Air Kemasan",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Proses pengolahan air baku menjadi air minum yang dikemas dan siap dikonsumsi langsung, mengandung mineral ataupun tidak, dengan atau tanpa penambahan mineral seperti air minum aqila, air minum radar, dst.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "11052",
        "judul": "Industri Air Minum Isi Ulang",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Industri air minum yang dapat langsung dikonsumsi berupa depot air isi ulang baik yang dioperasikan manual maupun mesin otomatis seperti depot air minum aqila, depot air minum anugrah, dst.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "13921",
        "judul": "Industri Barang Jadi Tekstil Untuk Keperluan Rumah Tangga",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan barang-barang jadi tekstil seperti selimut, seprei, taplak meja, sarung bantal, bed cover, gorden, handuk, sarung alas kursi, sejadah dst.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "13923",
        "judul": "Industri Barang Tekstil Dengan Bahan Pengisi",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "pembuatan barang jadi tekstil dengan bahan pengisi (kapuk, dakron, bulu hewan, atau bahan sejenisnya), seperti bantal dan guling tidur, alas duduk dan sandaran kursi yang bukan merupakan bagian utama dari furnitur, selimut bulu angsa, bantal kursi/lantai (cushion/throw pillow), kantong tidur, bed cover,",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "13924",
        "judul": "Industri Barang Tekstil Bukan Pakaian Jadi Lainnya",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "usaha pembuatan bendera, spanduk, umbul-umbul, pelampung/jaket penyelamat tekstil.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "13995",
        "judul": "Industri Kapuk",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Usaha pengolahan kapuk.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "14111",
        "judul": "Industri Pakaian Jadi Dari Tekstil",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan pakaian jadi dari tekstil atau kain yang siap dipakai seperti kemeja, celana, kebaya, blus, rok, baju bayi hingga pakaian olahraga.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "14120",
        "judul": "Industri Penjahitan Dan Pembuatan (Bukan Konfeksi) Pakaian Sesuai Pesanan/Kustomisasi",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Penjahitan dan pembuatan pakaian sesuai pesanan yang melayani masyarakat umum dengan tujuan komersi seperti penjahit rumahan yang membuat baju pesta sesuai dengan pesanan konsumen.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "15201",
        "judul": "Industri Alas Kaki untuk Keperluan Sehari Hari",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan alas kaki keperluan sehari hari dari kulit, dan kulit buatan, karet, kanvas dan kayu seperti sepatu harian ataupun sandal selop.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "16101",
        "judul": "Penggergajian Kayu dan penghalusan kayu",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Penggergajian, pengirisan, pengulitan dan pemotongan kayu gelondongan menjadi balok, kaso, reng, papan dan sebagainya.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "16291",
        "judul": "Industri Barang Anyaman dari Rotan dan Bambu",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan macam-macam tikar, tas, topi, kukusan, bakul, kipas, tatakan dan sejenisnya yang bahan utamanya dari rotan atau bambu.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "16294",
        "judul": "Industri Alat Dapur Dan Alat Makan Dari Kayu, Rotan, Dan \n Bambu",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan alat-alat dapur yang bahan utamanya kayu, bambu dan rotan seperti rak piring, rak bumbu masak, parutan, alu, lesung, telanan, cobek, dll.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "18111",
        "judul": "Pencetakan Umum",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Percetakan surat kabar, majalah dan periodik lainnya seperti surat kabar, majalah, kalender, dan barang-barang cetakan lainnya hasil mesin cetak.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "18120",
        "judul": "Kegiatan Jasa Penunjang Pencetakan",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Penjilidan lembar cetakan, misalnya menjadi buku, brosur, penjilidan dengan perekat, penjilidan buku.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "20232",
        "judul": "Industri Kosmetik untuk Manusia Termasuk Pasta Gigi",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan kosmetik untuk manusia misalnya parfum, shampoo, hingga pasta gigi.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "23921",
        "judul": "Industri Batu Bata dari Tanah Liat",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan macam-macam batu bata.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "23932",
        "judul": "Industri Perlengkapan Rumah Tangga dari Tanah Liat/Keramik",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan macam-macam perlengkapan rumah tangga dari porselen, seperti piring, tatakan, cangkir dst.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "25111",
        "judul": "Industri Produk Logam Struktural Bukan Aluminium Untuk Konstruksi Ringan",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan bahan bangunan siap pasang dari logam bukan aluminium seperti pagar besi, teralis, pintu/jendela, besi pengaman dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "25112",
        "judul": "Industri Produk Logam Struktural Aluminium Untuk Konstruksi Ringan",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan bahan bangunan siap pasang dari logam aluminium seperti kusen jendela, kusen pintu, teralis aluminium, dst.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "25931",
        "judul": "Industri Perkakas Tangan",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "pembuatan perkakas tangan pertukangan, seperti tang dan obeng; perkakas tangan pertanian, seperti cangkul, sekop, sabit, egrek, dodos, dan kapak; perlengkapan untuk perkakas tangan, baik yang digerakkan dengan tenaga maupun tidak, seperti mata bor, pemukul, dan pisau penggiling",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "25932",
        "judul": "Industri Alat Potong",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan bermacam-macam pisau, parang/golok, pisau bergerigi, parang dan sejenisnya.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "31011",
        "judul": "Industri Furnitur dari Kayu",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan furnitur dari kayu untuk rumah tangga dan kantor seperti meja, kursi, bangku, lemari dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "31022",
        "judul": "Industri Furnitur dari Logam",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan furnitur untuk rumah tangga dan kantor dari logam seperti meja, kursi, rak, spring bed, dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "33121",
        "judul": "Reparasi dan pemeliharaan Mesin Untuk Keperluan Umum",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Reparasi mesin untuk keperluan umum seperti perkakas tangan yang digerakkan tenaga, peralatan pendingin dan pembersih udara, timbangan dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "10112",
        "judul": "Kegiatan Rumah Potong Babi",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Kegiatan rumah potong babi, termasuk babi hutan, yang mencakup kegiatan pemotongan, pengulitan, pembersihan, dan pengepakan daging.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "11040",
        "judul": "Industri Malt",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "kegiatan pembuatan malt dari barli, gandum hitam, atau serealia lainnya.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "13994",
        "judul": "Industri Kain Ban",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "kegiatan pembuatan kain ban dari benang sintetis berkekuatan tinggi, seperti kain ban dari nilon dan kain ban dari poliester.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "14200",
        "judul": "Industri Barang Dari Kulit Berbulu",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "kegiatan pembuatan barang jadi dari kulit berbulu, seperti pakaian jadi dan perlengkapan pakaian, misalnya mantel berbulu; rakitan kulit berbulu dll",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "17011",
        "judul": "Industri Bubur Kertas (Pulp)",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "kegiatan pembuatan bubur kertas dengan bahan dari kayu atau serat lainnya dan atau kertas bekas. Kegiatannya mencakup pembuatan bubur kertas yang diputihkan, diseparuhputihkan atau yang tidak diputihkan, baik melalui proses mekanis, kimia (pelarutan atau nonpelarutan), maupun semikimia;",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "17013",
        "judul": "Industri Kertas Berharga",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "kegiatan pembuatan kertas bandrol, surat berharga bank/bank note, kertas cek/cheque paper, security paper, kertas tanda air/watermark paper, meterai, prangko, dan sejenisnya.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "18201",
        "judul": "Reproduksi Media Rekaman Suara Dan Perangkat Lunak",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "kegiatan reproduksi dari salinan induk piringan hitam, cakram padat/compact disk (CD) dan pita yang berisikan musik atau rekaman suara (audio) lainnya",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "20114",
        "judul": "Industri Kimia Dasar Radioaktif",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "pembuatan produk kimia dasar yang bersifat radioaktif, misalnya uranium, radium, torium, dan radon, termasuk pengayaan bijih uranium dan torium, pembuatan radioisotop dari zat-zat radioaktif.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "20116",
        "judul": "Industri Kimia Dasar Dari Minyak Bumi, Gas Alam, Dan Batu Bara",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "pembuatan kimia dasar organik yang bahan bakunya berasal dari minyak bumi, gas bumi, atau batu bara.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "20233",
        "judul": "Industri Kosmetik Untuk Hewan",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "kegiatan pembuatan kosmetik untuk hewan, termasuk parfum, sampo, sabun, bedak, krim atau losion, dan lainnya.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "23122",
        "judul": "Industri Peralatan Laboratorium Dan Kesehatan Dari Kaca",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "kegiatan pembuatan berbagai macam peralatan laboratorium dan kesehatan dari kaca, termasuk alat laboratorium klinis yang pada umumnya untuk keperluan diagnosis seperti tabung uji untuk sampel biologis (darah, urin, dan saliva), serta alat laboratorium nonklinis dan kesehatan seperti botol serum/infus, ampul, tabung uji, tabung ukur, kaca sorong mikroskop, kuvet, dan desikator.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "23943",
        "judul": "Industri Gips",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "kegiatan pembuatan gips, yang terbentuk dari gipsum kalsinasi (calcined gypsum) atau kalsium sulfat, termasuk dolomit kalsinasi (calcined dolomite)",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "26210",
        "judul": "Industri Komputer Dan Perakitan Komputer",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan atau perakitan Komputer, Laptop, server komputer",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "26391",
        "judul": "Industri Kartu Cerdas (Smart Card)",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan kartu cerdas (smart card), seperti perencanaan desain cip (chip) design (house design), perencanaan tata letak sirkuit kartu cerdas, pembuatan chip foundry, pembuatan chip module packaging, pembuatan firmware dan perangkat lunak/software yang berkaitan langsung dengan kartu cerdas, serta chip packaging.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "26410",
        "judul": "Industri Televisi, Monitor Televisi, Dan Displai",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan dan perakitan televisi, seperti pesawat penerima televisi dan kombinasi, monitor televisi, dan displai seperti videotron.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "26601",
        "judul": "Industri Peralatan Iradiasi, Perlengkapan, Dan Sejenisnya",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Kegiatan pembuatan peralatan dan tabung iradiasi (penyinaran) yang didasarkan pada penggunaan radiasi sinar-X, sinar alfa, beta, gamma, atau radiasi pengion lainnya, yang digunakan untuk keperluan industri, diagnosis medis, terapi medis, penelitian, dan ilmu pengetahuan.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "27201",
        "judul": "Industri Batu Baterai",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan berbagai macam batu baterai, seperti sel dan baterai listrik primer, baterai alkali, baterai merkuri, serta pembuatan baterai dan sel-sel turunannya",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "30111",
        "judul": "Industri Kendaraan Air Dan Bawah Air Berawak",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan atau perakitan berbagai kendaraan air dan bawah air berawak, baik militer maupun sipil, seperti kapal penumpang, kapal feri, kapal kargo, kapal tanker, kapal penyeret, kapal layar untuk komersil, kapal perang, kapal untuk penelitian, kapal penangkap ikan, kapal untuk pengolahan ikan",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "30200",
        "judul": "Industri Lokomotif Dan Gerbong Kereta",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "pembuatan atau perakitan lokomotif dan gerbong kereta api",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "30301",
        "judul": "Industri Pesawat Udara Berawak Dan Mesin Terkait",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pesawat udara, seperti pesawat udara bermesin jet, pesawat udara \npropeler, helikopter, balon udara dan pesawat layang dll",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "30400",
        "judul": "Industri Kendaraan Tempur Militer",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan tank, pembuatan kendaraan tempur berlapis baja untuk mengangkut orang, pembuatan kendaraan perang militer lainnya",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "30911",
        "judul": "Industri Sepeda Motor Roda Dua Dan Tiga",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Pembuatan dan perakitan secara lengkap dari macam-macam kendaraan bermotor roda dua dan tiga, seperti sepeda motor, moped, skuter, bemo,dll",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "33152",
        "judul": "Reparasi Dan Pemeliharaan Lokomotif Dan Gerbong Kereta",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Jasa reparasi dan pemeliharaan lokomotif dan gerbong kereta api dan kendaraan jalan rel lainnya",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "33153",
        "judul": "Reparasi Dan Pemeliharaan Pesawat Udara",
        "kategori": "C",
        "kategoriNama": "Kategori C: Industri Pengolahan",
        "kategoriShort": "C - Industri Pengolahan",
        "deskripsi": "Reparasi dan pemeliharaan pesawat udara, termasuk reparasi dan pemeliharaan untuk drone",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "35129",
        "judul": "Aktivitas Penunjang Tenaga Listrik Lainnya",
        "kategori": "D",
        "kategoriNama": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "kategoriShort": "D - Listrik, Gas, & Energi",
        "deskripsi": "Usaha jasa yang berkaitan dengan penyediaan dan pemanfaatan tenaga listrik seperti jasa pencatatan meteran, pemberian tagihan listrik, dan juga kegiatan perdagangan pulsa/token listrik serta kegiatan penunjang kelistrikan lainnya",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "35302",
        "judul": "Produksi Es",
        "kategori": "D",
        "kategoriNama": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "kategoriShort": "D - Listrik, Gas, & Energi",
        "deskripsi": "Kegiatan produksi dan distribusi air dingin/air es untuk kebutuhan pendinginan, dan produksi es termasuk es untuk kebutuhan makanan atau minuman dan kegunaan lain seperti pendinginan.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "35111",
        "judul": "Pembangkitan Tenaga Listrik dari Sumber Energi tidak terbarukan yang menghasilkan Emisi",
        "kategori": "D",
        "kategoriNama": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "kategoriShort": "D - Listrik, Gas, & Energi",
        "deskripsi": "pengoperasian fasilitas pembangkit yang   enghasilkan energi listrik, dari sumber energi tidak terbarukan yang berasal dari fosil, seperti gas alam, batu bara, minyak bumi, produk petroleum, gambut, dan bahan bakar fosil lainnya. Contoh PLTU Punagayya Bangkala",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "35120",
        "judul": "Pembangkit Tenaga listrik dari Sumber Energi Terbarukan",
        "kategori": "D",
        "kategoriNama": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "kategoriShort": "D - Listrik, Gas, & Energi",
        "deskripsi": "pengoperasian fasilitas pembangkit yang memproduksi listrik dari sumber energi terbarukan, seperti gas bahan bakar hayati (biofuel), tenaga air, tenaga angin di darat dan lepas pantai, tenaga surya fotovoltaik, serta energi termal, panas bumi dan pasang surut,\ngelombang, dan laut.  Contok: PLTB Tolo, Turatea",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "35401",
        "judul": "Aktivitas Broker dan Agen Penjualan Tenaga Listrik",
        "kategori": "D",
        "kategoriNama": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "kategoriShort": "D - Listrik, Gas, & Energi",
        "deskripsi": "Penjual token Listrik, kegiatan penjualan untuk mengeperasikan tenaga listrik",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "35402",
        "judul": "Aktivitas Broker dan Agen Penjualan Gas Alam",
        "kategori": "D",
        "kategoriNama": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "kategoriShort": "D - Listrik, Gas, & Energi",
        "deskripsi": "Kelompok ini mencakup kegiatan penjualan bahan bakar gas melalui sistem distribusi yang dioperasikan oleh pihak lain, termasuk kegiatan agen penjualan pertukaran kapasitas komoditas dan distribusi bahan bakar gas, namun tidak mencakup penyimpanan dan distribusi gas alam oleh produsen melalui sistem utama maupun jasa intermediasi pengangkutan bahan bakar gas.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "35112",
        "judul": "Pembangkitan Tenaga Listrik dari Sumber Energi tidak terbarukan yang tidak menghasilkan  Emisi",
        "kategori": "D",
        "kategoriNama": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "kategoriShort": "D - Listrik, Gas, & Energi",
        "deskripsi": "pengoperasian fasilitas pembangkit yang menghasilkan energi listrik, dari sumber energi tidak terbarukan yang tidak menghasilkan  emisi, seperti nuklir, hidrogen, dan amonia. kelompok ini juga mencakup",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "35133",
        "judul": "Pengoperasian Fasilitas atau Stasiun Pengisian Daya untuk Kendaraan dan Peralatan listrik",
        "kategori": "D",
        "kategoriNama": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "kategoriShort": "D - Listrik, Gas, & Energi",
        "deskripsi": "pengoperasian fasilitas atau stasiun pengisian daya untuk kendaraan listrik seperti mobil, sepeda motor, skuter, dan sepeda listrik atau stasiun pengisian kendaraan listrik umum (SPKLU) yang tidak terintegrasi dengan pembangkit;",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "35140",
        "judul": "Penyedia tenaga listrik dalam Satu Kesatuan Usaha",
        "kategori": "D",
        "kategoriNama": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "kategoriShort": "D - Listrik, Gas, & Energi",
        "deskripsi": "Kelompok ini mencakup kegiatan pembangkitan tenaga listrik, penyaluran tenaga listrik melalui jaringan transmisi dan/atau distribusi tenaga listrik, penyimpanan tenaga listrik, dan penjualan tenaga listrik kepada konsumen akhir yang dilaksanakan dalam satu kesatuan usaha.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "35151",
        "judul": "Pengoperasian Instalasi Penyediaan tenaga Listrik",
        "kategori": "D",
        "kategoriNama": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "kategoriShort": "D - Listrik, Gas, & Energi",
        "deskripsi": "Kelompok ini mencakup pengoperasian yang dilakukan oleh pihak lain atas fasilitas pembangkit yang menghasilkan energi listrik, fasilitas sistem transmisi tenaga listrik, dan sistem distribusi tenaga listrik.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "35201",
        "judul": "Produksi gas Alam dan Buatan",
        "kategori": "D",
        "kategoriNama": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "kategoriShort": "D - Listrik, Gas, & Energi",
        "deskripsi": "kegiatan pengolahan bahan bakar gas yang dapat dimanfaatkan secara langsung sebagai bahan bakar. dengan pembuatannya disertai usaha peningkatan mutu gas, seperti  pemurnian, pencampuran, dan proses lainnya yang dihasilkan dari gas alam,",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "35202",
        "judul": "Distribusi Gas Alam dan Buatan melalui Jaringan",
        "kategori": "D",
        "kategoriNama": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "kategoriShort": "D - Listrik, Gas, & Energi",
        "deskripsi": "kegiatan distribusi melalui jaringan untuk bahan bakar gas hidrogen yang dihasilkan melalui proses elektrolisis, fotolisis, termokimia, biologis, geologis, dan/atau metode lainnya, dengan memanfaatkan sumber energi baru dan terbarukan maupun sumber energi fosil;",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "35301",
        "judul": "Pengadaan Uap/Air Panas dan Udara Dingin",
        "kategori": "D",
        "kategoriNama": "Kategori D: Pengadaan Listrik, Gas, dan Energi",
        "kategoriShort": "D - Listrik, Gas, & Energi",
        "deskripsi": "Kelompok ini mencakup kegiatan memproduksi dan mendistribusikan uap dan air panas untuk pemanasan, pembangkit tenaga, dan penggunaan lainnya, seperti produksi, pengumpulan dan distribusi uap dan air panas untuk pemanas, energi, dan kegunaan lain, serta kegiatan produksi dan distribusi udara dingin. Kelompok ini juga mencakup penyimpanan energi panas bumi.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "36001",
        "judul": "Pengolahan dan Penyediaan Air minum",
        "kategori": "E",
        "kategoriNama": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "kategoriShort": "E - Air & Pengelolaan Limbah",
        "deskripsi": "Kelompok ini mencakup kegiatan penampungan dan pengambilan air dari air permukaan, air tanah, air laut, dan sebagainya serta pengolahan menjadi air minum dan pendistribusian air minum melalui jaringan perpipaan dan bukan jaringan perpipaan, seperti mobil tangki (asal mobil tangki tersebut masih dalam satu pengelolaan administratif dari perusahaan air minum tersebut), untuk dijual kepada konsumen atau pelanggan.\nContoh : PDAM jeneponto",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "38110",
        "judul": "Pengumpulan limbah sampah tidak berbahaya",
        "kategori": "E",
        "kategoriNama": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "kategoriShort": "E - Air & Pengelolaan Limbah",
        "deskripsi": "Pengumpulan limbah atau sampah padat yang tidak berbahaya dilakukan dalam wilayah setempat, seperti pengumpulan sampah rumah tangga dan usaha menggunakan tempat sampah atau kontainer yang memungkinkan material tertentu dapat didaur ulang. Selain itu, dilakukan pula pengumpulan bahan-bahan yang dapat didaur ulang, baik yang dipisahkan maupun tidak dipisahkan sebelumnya. Kegiatan ini juga mencakup pengumpulan limbah tidak berbahaya yang berasal dari hewan atau tumbuhan, minyak dan lemak bekas pakai, serta sampah di tempat umum. Tidak hanya itu, pengumpulan limbah konstruksi dan pembongkaran bangunan, pembersihan runtuhan atau puing, hingga pengumpulan sampah dari pabrik-pabrik industri juga termasuk dalam kegiatan tersebut.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "38212",
        "judul": "Produksi Kompos Sampah Organik",
        "kategori": "E",
        "kategoriNama": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "kategoriShort": "E - Air & Pengelolaan Limbah",
        "deskripsi": "kegiatan produksi kompos dari sampah organik dan abu tanaman (pupuk organik misalnya kotoran Kuda atau kotoran sapi)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "36002",
        "judul": "Penampungan dan Penyediaan Air Baku",
        "kategori": "E",
        "kategoriNama": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "kategoriShort": "E - Air & Pengelolaan Limbah",
        "deskripsi": "Kelompok ini mencakup kegiatan penyediaan air baku untuk keperluan industri, pembangkit listrik, dan lain-lain, termasuk yang dilakukan di dalam kawasan hutan. Kelompok ini juga mencakup kegiatan pengelolaan jaringan irigasi.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "37001",
        "judul": "Pengumpulan Air limbah",
        "kategori": "E",
        "kategoriNama": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "kategoriShort": "E - Air & Pengelolaan Limbah",
        "deskripsi": "Kelompok ini mencakup kegiatan pengumpulan dan pengangkutan air limbah yang berasal dari berbagai sumber, seperti rumah tangga dan unit industri, melalui jaringan saluran pembuangan, pengumpul air limbah, serta sarana pengangkutan lainnya, termasuk kendaraan pengangkut limbah atau kotoran. Selain itu, kegiatan ini juga meliputi penyedotan dan pembersihan perigi jamban, tangki septik, serta lubang limbah. Termasuk pula pengumpulan air limbah dari toilet kimia, seperti toilet portabel, toilet pesawat, dan toilet kereta api.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "37002",
        "judul": "Pengolahan dan Pembuangan Air Limbah",
        "kategori": "E",
        "kategoriNama": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "kategoriShort": "E - Air & Pengelolaan Limbah",
        "deskripsi": "Golongan pokok ini mencakup kegiatan pengumpulan, pengolahan, pemulihan, dan pembuangan limbah serta sampah, termasuk pengorganisasiannya. Kegiatan ini juga meliputi pengoperasian fasilitas daur ulang dan pengelolaan limbah oleh unit yang mewakili produsen, seperti pengumpulan, pemulihan kemasan bekas, serta pengolahan produk retur atau bekas.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "38121",
        "judul": "Pengumpulan limbah Berbahaya selain limbah Radioaktif",
        "kategori": "E",
        "kategoriNama": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "kategoriShort": "E - Air & Pengelolaan Limbah",
        "deskripsi": "Kegiatan ini mencakup pengumpulan limbah berbahaya dan sampah spesifik, seperti minyak bekas, limbah biologis berbahaya, aki dan baterai bekas, limbah hewan, serta obat kedaluwarsa. Selain itu, termasuk juga pengoperasian fasilitas pemindahan limbah berbahaya nonradioaktif.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "38122",
        "judul": "Pengumpul Limbah Radioaktif",
        "kategori": "E",
        "kategoriNama": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "kategoriShort": "E - Air & Pengelolaan Limbah",
        "deskripsi": "Kelompok ini mencakup pengumpulan limbah radioaktif yang dapat mencakup identifikasi, penanganan, pengemasan, dan pelabelan limbah radioaktif. Kelompok ini juga mencakup kegiatan pengangkutan limbah radioaktif ke pengelola limbah",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "38211",
        "judul": "Pengolahan sampah tidak berbahaya untuk menghasilkan energi",
        "kategori": "E",
        "kategoriNama": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "kategoriShort": "E - Air & Pengelolaan Limbah",
        "deskripsi": "Kelompok ini mencakup kegiatan pembuangan limbah atau sampah yang tidak berbahaya melalui proses pembakaran maupun metode lainnya. Proses tersebut dilakukan untuk menghasilkan berbagai produk, seperti listrik atau uap, bahan bakar minyak terbarukan, bioenergi, abu, maupun bentuk energi lainnya.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "38219",
        "judul": "Pengolahan dan Pembuangan limbah atau tidak Berbahaya lainnya",
        "kategori": "E",
        "kategoriNama": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "kategoriShort": "E - Air & Pengelolaan Limbah",
        "deskripsi": "Kelompok ini mencakup kegiatan pengoperasian lahan untuk pembuangan limbah dan sampah yang tidak berbahaya. Selain itu, kelompok ini juga meliputi pembuangan limbah dan sampah tidak berbahaya melalui proses pemanasan, pembakaran, insinerasi, maupun metode lainnya, baik dengan maupun tanpa menghasilkan produk berupa bahan baku industri atau produk ikutan selain energi. Termasuk pula kegiatan pengolahan limbah dan sampah organik untuk tujuan pembuangan.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "38221",
        "judul": "Pengolahan dan Pembuangan Limbah atau Sampah Berbahaya selain Limbah radioaktif",
        "kategori": "E",
        "kategoriNama": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "kategoriShort": "E - Air & Pengelolaan Limbah",
        "deskripsi": "Kelompok ini mencakup kegiatan pengolahan dan pembuangan limbah berbahaya nonradioaktif yang dikelola pemerintah maupun swasta, termasuk pengoperasian fasilitas pengolahan, pembakaran limbah berbahaya, serta penanganan limbah beracun dan terkontaminasi yang dapat membahayakan kesehatan manusia dan lingkungan.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "38222",
        "judul": "Pengolahan dan Pembuangan Limbah Radioaktif",
        "kategori": "E",
        "kategoriNama": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "kategoriShort": "E - Air & Pengelolaan Limbah",
        "deskripsi": "Kelompok ini mencakup kegiatan pengolahan, penyimpanan, dan pembuangan limbah radioaktif, termasuk limbah dari rumah sakit serta proses penyiapan dan pengolahan lainnya terhadap limbah radioaktif.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "39001",
        "judul": "Aktivitas Penangkapan karbon",
        "kategori": "E",
        "kategoriNama": "Kategori E: Penyediaan Air, Pengelolaan Limbah, & Daur Ulang",
        "kategoriShort": "E - Air & Pengelolaan Limbah",
        "deskripsi": "Kelompok ini mencakup kegiatan pengolahan, penyimpanan, dan pembuangan limbah radioaktif, termasuk limbah rumah sakit.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "41011",
        "judul": "Kontruksi Konvevsional Gedung Hunian",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Usaha pembangunan, pemeliharaan, pembangunan kembali bangunan yang dipakai untuk hunian seperti rumah tinggal.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "41014",
        "judul": "Kontruksi Konvevsional Gedung Perbelanjaan",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Usaha pembangunan, pemeliharaan, pembangunan kembali bangunan yang dipakai untuk perbelanjaan seperti gedung perdagangan, toko, rumah toko ataupun warung.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "41015",
        "judul": "Kontruksi Konvevsional Gedung Kesehatan",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Usaha pembangunan, pemeliharaan, pembangunan kembali bangunan yang dipakai untuk sarana kesehatan seperti rumah sakit, poliklinik, puskesmas dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "41016",
        "judul": "Kontruksi Konvevsional Gedung Pendidikan",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Usaha pembangunan, pemeliharaan, pembangunan kembali bangunan yang dipakai untuk sarana pendidikan seperti gedung sekolah, tempat kursus dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "42102",
        "judul": "Kontruksi Bangunan Sipil Jembatan, Jalan layang, Fly Over dan Underpass",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan pembangunan kembali jembatan, jalan layang, underpass, dan fly over, termasuk fasilitas penunjang seperti drainase, marka jalan, rambu-rambu, serta pagar atau tembok penahan.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "42101",
        "judul": "Kontruksi Jalan pada Permukaan Tanah",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Usaha pembangunan, pemeliharaan, pembangunan kembali bangunan yang dipakai jalan seperti jalan raya, jalan sedang ataupun jalan kecil. Termasuk didalamnya kegiatan penunjang seperti pemeliharaan pagar/tembok penahan jalan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "42207",
        "judul": "kontruksi Pengeboran/Penggalian Air Tanah",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kegiatan pengeboran/pembuatan untuk mendapatkan air tanah",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "43303",
        "judul": "Pengecatan",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kegiatan pengecatan interior dan eksterior bangunan dalam rangka penyelesaiaan bangunan gedung hunian dan non hunian.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "43905",
        "judul": "Penyewaan Alat Kontruksi dengan Operator",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Usaha penyewaan alat atau mesin konstriksi dan perlengkapannya dengan operator.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "43110",
        "judul": "Pembongkaran",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan pembongkaran atau penghancuran berbagai jenis bangunan, termasuk struktur baja, beton bertulang, bangunan semipermanen, dan bangunan berbahan berbahaya, serta pembongkaran terkontrol untuk pemanfaatan kembali material.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "42207",
        "judul": "Konstruksi Pengeboran/penggalian Air Tanah",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan jasa konstruksi pengeboran/penggalian, pembangunan konstruksi sumur/bor gali air tanah.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "42915",
        "judul": "Konstruksi bangunan Sipil Pelindung Pantai",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan pembangunan kembali bangunan pelindung pantai, seperti groin, pemecah ombak, seawall, artificial headland, beach nourishment, terumbu buatan, dan bangunan sejenis lainnya.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "42994",
        "judul": "Konstruksi Bangunan Sipil Fasilitas Olahraga",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan pembangunan kembali fasilitas olahraga, seperti stadion, lapangan olahraga, lintasan balap, kolam renang, lapangan golf, lintasan atletik, dan gelanggang olahraga lainnya.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "43120",
        "judul": "Penyiapan Lahan",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan penyiapan lahan untuk berbagai pekerjaan konstruksi, seperti pembersihan dan pematangan lahan, penggalian, pengurukan, perataan tanah, peledakan batu, pemasangan utilitas, pengujian tanah, penyiapan drainase, pengeringan lahan, hingga persiapan area pertambangan dan fasilitas ketenaganukliran. Selain itu, kelompok ini juga meliputi kegiatan penunjang konstruksi, seperti pemasangan fasilitas sementara proyek, mobilisasi alat, dewatering, pengukuran ulang, serta pembangunan jalan sementara dan fasilitas pendukung lainnya.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "41013",
        "judul": "Konstruksi Konvensional Gedung Industri",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, renovasi, dan pembangunan kembali bangunan industri, seperti pabrik, bengkel kerja, serta fasilitas pengelolaan dan pemrosesan bahan nuklir.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "41020",
        "judul": "Konstruksi Prapabrikansi Gedung",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan konstruksi bangunan prapabrikasi di lokasi pembangunan melalui pemasangan dan perakitan berbagai bahan hasil produksi pabrik, seperti beton pracetak, baja, plastik, karet, kayu, aluminium, dan sandwich panel untuk bangunan gedung.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "42103",
        "judul": "Konstruksi Jalan Rel",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan pembangunan kembali jalan rel, termasuk pemasangan rel, bantalan kereta api, serta penimbunan kerikil untuk badan jalan kereta api, namun tidak mencakup konstruksi jembatan rel.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "42104",
        "judul": "Konstruksi Terowongan",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan perbaikan terowongan di bawah air, bukit, pegunungan, maupun bawah tanah dengan menggunakan mesin bor, bahan peledak, serta pekerjaan beton dan pembesian",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "42914",
        "judul": "Konstruksi Reservoir Pembangkit Listrik Tenaga Air",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan pembangunan reservoir, intake, control gate, penstock, dan outflow pada pembangkit listrik tenaga air.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "42991",
        "judul": "Konstruksi Bangunan Sipil Minyak dan Gas Bumi",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan pembangunan kembali bangunan sipil untuk usaha hulu dan hilir minyak dan gas, baik di darat, bawah tanah, maupun di perairan, seperti pipa angkutan minyak dan gas serta anjungan lepas pantai.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "42992",
        "judul": "Konstruksi Bangunan Sipil Pertambangan",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan pembangunan kembali fasilitas eksplorasi dan operasi produksi pertambangan, termasuk pengendalian dampak lingkungan.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "42993",
        "judul": "Konstruksi Bangunan Sipil Fasilitas Olahraga",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup jasa konstruksi untuk pembangunan, pemeliharaan, dan pembangunan kembali fasilitas hulu dan hilir panas bumi, seperti sumur, fasilitas lapangan uap, dan pipa penyalur.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "42996",
        "judul": "Konstruksi Bangunan Sipil Fasilitas Sumbe radiasi Pengion",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan konstruksi bangunan sipil yang memanfaatkan sumber radiasi pengion, seperti fasilitas radioterapi, kedokteran nuklir, radiologi, akselerator partikel, iradiasi, kalibrasi, serta penyimpanan zat radioaktif.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "42998",
        "judul": "Konstruksi Bangunan Sipil Fasilitas eaktor Nuklir",
        "kategori": "F",
        "kategoriNama": "Kategori F: Konstruksi",
        "kategoriShort": "F - Konstruksi",
        "deskripsi": "Kelompok ini mencakup kegiatan konstruksi bangunan sipil reaktor nuklir, seperti reaktor untuk energi, penelitian dan pengujian, serta produksi radioisotop dan radiofarmaka.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "46201",
        "judul": "Perdagangan Besar Padi dan Palawija",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan besar hasil pertanian tanaman padi dan palawija sebagai bahan baku atau bahan dasar dari suatu kegiatan berikutnya. Termasuk didalamnya perdagangan besar benih dan bibit padi.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "46311",
        "judul": "Perdagangan Besar Beras",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan beras untuk digunakan sebagai konsumsi akhir.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "43313",
        "judul": "Perdagangan Besar Sayuran",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan besar sayur sayuran untuk digunakan sebagai konsumsi akhir seperti bayam, kangkung, kol, dan sayuran lainnya.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "46331",
        "judul": "Perdagangan Besar Gula, Coklat dan Kembang Gula",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan besar gula, coklat, kembang gula dan sediaan pemanis",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "46411",
        "judul": "Perdagangan Besar Tekstil",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan besar hasil industri tekstil seperti kain, kain batik, termasuk barang linen rumah tangga, dll.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "46412",
        "judul": "Perdagangan Besar Pakaian",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan besar pakaian, termasuk pakaian olahraga dan perdagangan besar aksesoris pakaian seperti sarung tangan, dasi dan penjepit termasuk kaos kaki.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "46491",
        "judul": "Perdagangan Besar Peralatan masak Dapurdan Elektronik Rumah Tangga",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan besar peralatan dan perlengkapan rumah tangga seperti peralatan dapur, lampu, perlengkapan elektronik seperti televisi, dvd, dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "46710",
        "judul": "Perdagangan Besar Bahan Bakar Padat, Cair dan Gas dan Produk beserta produk terkait",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan besar bahan bakar gas, cair dan padat serta sejenisnya seperti minyak tanah, batu bara, termasuk didalamnya LPG.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "96901",
        "judul": "Perdagangan Besar Berbagai Macam Barang di grosir/perkulakan Swalayan",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan besar berbagai macam barang yang tanpa mengkhususkan barang tertentu )tanpa ada kekhususan tertentu termasuk perkulakan, contohnya toko Hj. Lanti di Pasar Karisa.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47111",
        "judul": "Perdagangan Eceran Berbagai Macam Barang yang Utamanya Makanan, Minuman atau Tembakau di Minimarket",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran berbagai jenis barang kebutuhan yang utamanya bahan makanan, minuman atau tembakau dengan harga yang sudah ditentukan serta pembeli mengambil dan membayar sendiri kepada kasir. Disamping itu juga dapat menjual beberapa barang bukan makanan seperti perabot rumah tangga, mainan anak anak. Misalnya Indomaret atau Alfamart",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47112",
        "judul": "Perdagangan Eceran Berbagai Macam Barang yang Utamanya Makanan, Minuman atau Tembakau Bukan di Minimarket",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran berbagai jenis barang kebutuhan yang utamanya bahan makanan, minuman atau tembakau didalam bangunan bukan swalayan. Misalnya seperti warung atau toko bahan kebutuhan pokok.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47192",
        "judul": "Perdagangan Berbagai Macam Barang yang Utamanya Bukan Makanan, Minuman atau Tembakau Bukan di Toserba",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran berbagai jenis barang yang utamanya bukan makanan, minuman atau tembakau bukan toserba. Pada umumnya barang-barang yang diperdagangkan antara lain pakaian, perabot rumah tangga, perhiasan, mainan anak-anak dll. Misalnya toko barang kelontong",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47212",
        "judul": "Perdagangan Eceran Buah Buahan",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus buah buahan didalam bangunan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47213",
        "judul": "Perdagangan Eceran Buah Sayuran",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus sayuran didalam bangunan.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47214",
        "judul": "Perdagangan Eceran Hasil Peternakan",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus hasil peternakan didalam bangunan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47215",
        "judul": "Perdagangan Eceran Hasil Perikanan",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus hasil perikanan didalam bangunan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47241",
        "judul": "Perdagangan Eceran Beras",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus berbagai jenis beras didalam bangunan.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47242",
        "judul": "Perdagangan Eceran Roti, Kue Kering, Serta Kue Basah dan Sejenisnya",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus berbagai jenis roti, kue kering dan kue basah didalam bangunan seperti roti manis, roti tawar, bolu, dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47302",
        "judul": "Perdagangan Eceran Bahan Bakar Minyak, Bahan Bakar Gas, LPG Selain di Sarana Pengisian Bahan Bakar",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Perdagangan eceran bahan bakar minyak, bahan bakar gas, LPG atau jenis bahan bakar lain.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47404",
        "judul": "perdagangan Eceran Telepon beserta Aksesorisnya",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Perdagangan eceran alat telekomunikasi seperti handphone dan perlengkapan lainnya beserta aksesorisnya",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47511",
        "judul": "Perdagangan Eceran Tekstil",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Perdagangan eceran khusus tekstil, seperti macam-macam kain.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47521",
        "judul": "Perdagangan Eceran Bahan dan Material Konstruksi",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "perdagangan eceran bahan konstruksi dari logam, seperti kawat tali, kawat nyamuk, paku, mur atau baut, engsel, gerendel, kunci, anak kunci, tangki air, menara air, pintu rol/rolling door, auning/awning dan seng lembaran; perdagangan eceran bahan konstruksi dari porselen, seperti kloset, bidet, wastafel, winoir, bak cuci, bak mandi, dan ubin dinding; perdagangan eceran bahan konstruksi dari kayu, seperti papan, galar, papan reng, papan lis, tiang telepon, tiang listrik, balok bantalan, kusen/pintu jendela, daun pintu/jendela, ubin kayu, atap kayu (sirap), kayu lapis tripleks, kayu lapis interior, teak wood, papan partikel/particle board, papan cip/chip board, kayu pelapis, dan kayu lapis untuk cetak beton;   perdagangan eceran bahan konstruksi dari tanah liat, kapur, semen, atau kaca seperti genteng pres, genteng kodok, batu bata pres, batu bata berongga, batu tahan api, ubin lantai, ubin dinding, ubin batako, lubang angin, bak mandi, kloset, eternit, pipa irigasi, dan buis; perdagangan eceran material bangunan lainnya, seperti pipa dan selang dari plastik, formika, plastik lembaran bergelombang, asbes semen rata, asbes semen berlapis, pipa saluran asbes semen, semen, kapur, pasir, batu, paku, dan peralatan sanitasi.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47522",
        "judul": "Perdagangan Eceran Kaca Lembaran",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus kaca lembaran untuk bahan konstruksi seperi kaca lembaran bening, kaca lembaran buram, dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47591",
        "judul": "Perdagangan Eceran Furnitur",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus furniture, seperti meja, lemari, tempat tidur, rak buku, dsb. Termasuk juga usaha perdagangan eceran khusus kasur, dan bantal/guling.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47593",
        "judul": "Perdagangan Eceran Barang Pecah Belah dan Perlengkapan Dapur dan Makan",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus barang pecah belah dan perlengkapan dapur yang terbuat dari plastik seperti piring, pisin, mangkok dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47611",
        "judul": "Perdagangan Eceran Alat Tulis Menulis dan Gambar",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus alat tulis menulis dan gambar seperti pensil, pulpen, spidol, buku, dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47613",
        "judul": "Perdagangan Eceran Kertas, Kertas Karton dan Barang Kertas/Karton",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus kertas, kertas karton ataupun barang dari kertas/karto seperti kertas HVS, kertas kraft, kertas tipis, karton berwarna, karton manila, dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47711",
        "judul": "Perdagangan Eceran Pakaian",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus pakaian baik terbuat dari tekstil, kulit dsb seperti kemeja, celana, jas, mantel, daster, rok, blus, baju, dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47721",
        "judul": "Perdagangan Eceran Barang dan Obat Farmasi untuk manusia di Apotek",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus barang farmasi dan obat obatan untuk manusia yang berbentuk jadi di Apotek.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47724",
        "judul": "Perdagangan Eceran Kosmetik untuk Manusia",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus barang-barang kosmetik untuk manusia.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47763",
        "judul": "Perdagangan Eceran Pupuk dan Pemberantas Hama",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus berbagai macam pupuk dan pemberantas hama, seperti pupuk buatan tunggal (Urea dsb), pupuk kompos, racun serangga, racun jamur dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "47772",
        "judul": "Perdagangan Eceran Gas Elpiji",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Usaha perdagangan eceran khusus gas elpiji.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "46332",
        "judul": "Perdagangan Besar Produk Bakteri",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Kelompok ini mencakup perdagangan besar produk roti, kue, dan produk bakeri lainnya.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "46333",
        "judul": "Perdagangan Besar Minuman Beralkohol",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Kelompok ini mencakup perdagangan besar minuman beralkohol, seperti\nminuman keras, wine, malt, dan bir.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "46411",
        "judul": "Perdagangan Besar Tekstil",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Kelompok ini mencakup perdagangan besar hasil industri tekstil, seperti bermacam-macam tekstil/kain, kain batik, dan linen rumah tangga (kain untuk keperluan rumah tangga).",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "46412",
        "judul": "Perdagangan Besar Pakaian",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Kelompok ini mencakup perdagangan besar pakaian, termasuk pakaian olahraga; perdagangan besar aksesori pakaian seperti sarung tangan, dasi, penjepit, dan kaos kaki.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "46413",
        "judul": "Perdagangan Besar Alas Kaki",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Kelompok ini mencakup perdagangan besar alas kaki, seperti sepatu, sandal, dan selop.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "46414",
        "judul": "Perdagangan Besar Barang Jadi Tekstil",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Kelompok ini mencakup perdagangan besar hasil industri tekstil, seperti\ntali-temali, karpet/permadani dari bahan tekstil, karung, aneka hasil\nrajutan, barang dari kulit berbulu, payung, parasol, terpal, layar kapal,\nparasut.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "46430",
        "judul": "Perdagangan besar alat fotografi dan barang Optik",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Kelompok ini mencakup perdagangan besar alat fotografi dan barang optik, seperti kaca mata, teropong, dan kaca pembesar.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "46441",
        "judul": "Perdagangan Bewsar sediaan Frmasi unutk Manusia",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Kelompok ini mencakup perdagangan besar berbagai bentuk sediaan farmasi, meliputi bahan obat, bahan obat alam, kosmetik, obat kuasi, suplemen kesehatan, obat, dan obat bahan alam yang ditujukan untuk digunakan oleh manusia.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "46442",
        "judul": "Perdagangan Besar sediaan Farmasi Untuk hewan",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Kelompok ini mencakup perdagangan besar, termasuk pemasukan/impor, pengeluaran/ekspor, dan peredaran, berbagai bentuk sediaan farmasi yang ditujukan untuk penggunaan hewan, seperti bahan baku obat hewan, kosmetik hewan, dan obat hewan.",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "46493",
        "judul": "Perdagangan Besar Alat Musik",
        "kategori": "G",
        "kategoriNama": "Kategori G: Perdagangan Besar dan Eceran",
        "kategoriShort": "G - Perdagangan Besar & Eceran",
        "deskripsi": "Kelompok ini mencakup kegiatan perdagangan besar berbagai alat musik, baik alat musik tradisional maupun alat musik  modern, seperti kecapi, seruling bambu, calung, angklung, kolintang, gamelan, rebab, rebana, tifa, sasando, seruling, flute, saksofon, harmonika, trombon, gitar,",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "49222",
        "judul": "Angkutan Antarkota Dalam Provinsi (AKDP)",
        "kategori": "H",
        "kategoriNama": "Kategori H: Transportasi dan Pergudangan",
        "kategoriShort": "H - Transportasi & Pergudangan",
        "deskripsi": "Angkutan penumpang menggunakan bus/travel dengan trayek antar kabupaten/kota dalam satu provinsi, misalnya rute Makassar–Jeneponto.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "49231",
        "judul": "Angkutan Bermotor untuk Barang Umum",
        "kategori": "H",
        "kategoriNama": "Kategori H: Transportasi dan Pergudangan",
        "kategoriShort": "H - Transportasi & Pergudangan",
        "deskripsi": "Pengangkutan barang umum menggunakan truk/pick up seperti pengiriman sembako, bahan bangunan, atau hasil pertanian.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "49232",
        "judul": "Angkutan Bermotor untuk Barang Khusus",
        "kategori": "H",
        "kategoriNama": "Kategori H: Transportasi dan Pergudangan",
        "kategoriShort": "H - Transportasi & Pergudangan",
        "deskripsi": "Pengangkutan barang khusus yang memerlukan perlakuan tertentu, seperti mobil tangki BBM, pengangkut gas, atau kendaraan pendingin untuk ikan dan frozen food.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "49292",
        "judul": "Angkutan Pariwisata",
        "kategori": "H",
        "kategoriNama": "Kategori H: Transportasi dan Pergudangan",
        "kategoriShort": "H - Transportasi & Pergudangan",
        "deskripsi": "Penyediaan kendaraan untuk kegiatan wisata, study tour, atau perjalanan rombongan tanpa trayek tetap",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "49294",
        "judul": "Angkutan Khusus",
        "kategori": "H",
        "kategoriNama": "Kategori H: Transportasi dan Pergudangan",
        "kategoriShort": "H - Transportasi & Pergudangan",
        "deskripsi": "Angkutan untuk keperluan tertentu seperti antar jemput karyawan, antar jemput sekolah, atau angkutan bandara",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "49295",
        "judul": "Angkutan Mobil Sewa",
        "kategori": "H",
        "kategoriNama": "Kategori H: Transportasi dan Pergudangan",
        "kategoriShort": "H - Transportasi & Pergudangan",
        "deskripsi": "Penyewaan mobil dengan atau tanpa sopir untuk kebutuhan pribadi, dinas, maupun perjalanan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "49296",
        "judul": "Angkutan Ojek Motor",
        "kategori": "H",
        "kategoriNama": "Kategori H: Transportasi dan Pergudangan",
        "kategoriShort": "H - Transportasi & Pergudangan",
        "deskripsi": "Jasa angkutan penumpang atau barang menggunakan sepeda motor",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "53100",
        "judul": "Aktivitas Pos",
        "kategori": "H",
        "kategoriNama": "Kategori H: Transportasi dan Pergudangan",
        "kategoriShort": "H - Transportasi & Pergudangan",
        "deskripsi": "-",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "53200",
        "judul": "Aktivitas Kurir",
        "kategori": "H",
        "kategoriNama": "Kategori H: Transportasi dan Pergudangan",
        "kategoriShort": "H - Transportasi & Pergudangan",
        "deskripsi": "-",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "49233",
        "judul": "Angkutan Tidak Bermotor untuk Barang",
        "kategori": "H",
        "kategoriNama": "Kategori H: Transportasi dan Pergudangan",
        "kategoriShort": "H - Transportasi & Pergudangan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "55909",
        "judul": "Penyediaan Aktivitas Lainnya YTDL",
        "kategori": "I",
        "kategoriNama": "Kategori I: Penyediaan Akomodasi dan Makan Minum",
        "kategoriShort": "I - Akomodasi & Makan Minum",
        "deskripsi": "rumah kos",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "56101",
        "judul": "Aktivitas Penyediaan Makanan di Bangunan Tetap",
        "kategori": "I",
        "kategoriNama": "Kategori I: Penyediaan Akomodasi dan Makan Minum",
        "kategoriShort": "I - Akomodasi & Makan Minum",
        "deskripsi": "Restoran, rumah makan, kedai makanan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "56102",
        "judul": "Aktivitas Penyediaan Makanan di Bangunan Tidak Tetap",
        "kategori": "I",
        "kategoriNama": "Kategori I: Penyediaan Akomodasi dan Makan Minum",
        "kategoriShort": "I - Akomodasi & Makan Minum",
        "deskripsi": "Penjual makanan keliling gerobak dorong, warung tenda, stan makanan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "56210",
        "judul": "AKtivitas Jasa Boga untuk Acara Tertentu (Event Catering)",
        "kategori": "I",
        "kategoriNama": "Kategori I: Penyediaan Akomodasi dan Makan Minum",
        "kategoriShort": "I - Akomodasi & Makan Minum",
        "deskripsi": "Catering makanan untuk event",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "56303",
        "judul": "Aktivitas Rumah Minum/Kafe",
        "kategori": "I",
        "kategoriNama": "Kategori I: Penyediaan Akomodasi dan Makan Minum",
        "kategoriShort": "I - Akomodasi & Makan Minum",
        "deskripsi": "-",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "56304",
        "judul": "Aktivitas Kedai Minuman",
        "kategori": "I",
        "kategoriNama": "Kategori I: Penyediaan Akomodasi dan Makan Minum",
        "kategoriShort": "I - Akomodasi & Makan Minum",
        "deskripsi": "Kedai kopi, kedai jus, kedai smoothies",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "56306",
        "judul": "Aktivitas Minuman Keliling/Tempat Tidak Tetap",
        "kategori": "I",
        "kategoriNama": "Kategori I: Penyediaan Akomodasi dan Makan Minum",
        "kategoriShort": "I - Akomodasi & Makan Minum",
        "deskripsi": "Es dawet. es cincau, jamau gendong, es krim keliling",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "58190",
        "judul": "Aktivitas Penerbitan Lainnya",
        "kategori": "J",
        "kategoriNama": "Kategori J: Penerbitan, Penyiaran, & Konten Media",
        "kategoriShort": "J - Penerbitan & Konten Media",
        "deskripsi": "Penerbitan kalender, katalog, poster, dll",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "59112",
        "judul": "Aktivitas Produksi Film, Video dan Program Televisi oleh Swasta",
        "kategori": "J",
        "kategoriNama": "Kategori J: Penerbitan, Penyiaran, & Konten Media",
        "kategoriShort": "J - Penerbitan & Konten Media",
        "deskripsi": "Jasa videografi",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "59122",
        "judul": "Aktivitas Pascaproduksi Film, Video dan Program Televisi Swasta",
        "kategori": "J",
        "kategoriNama": "Kategori J: Penerbitan, Penyiaran, & Konten Media",
        "kategoriShort": "J - Penerbitan & Konten Media",
        "deskripsi": "Jasa editing video, desain konten video",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "59131",
        "judul": "Aktivitas Distribusi Film, Video dan Program Televisi oleh Pemerintah",
        "kategori": "J",
        "kategoriNama": "Kategori J: Penerbitan, Penyiaran, & Konten Media",
        "kategoriShort": "J - Penerbitan & Konten Media",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "59111",
        "judul": "Aktivitas Produksi Film, Video dan Program Televisi oleh Pemeriintah",
        "kategori": "J",
        "kategoriNama": "Kategori J: Penerbitan, Penyiaran, & Konten Media",
        "kategoriShort": "J - Penerbitan & Konten Media",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "61209",
        "judul": "Aktivitas Penjualan Kembali dan Jasa Intermediasi untuk Telekomunikasi Lainnya",
        "kategori": "K",
        "kategoriNama": "Kategori K: Telekomunikasi, IT, & Jasa Informasi",
        "kategoriShort": "K - Telekomunikasi & IT",
        "deskripsi": "penjual kartu panggil prabayar",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "61209",
        "judul": "Aktivitas Penjualan Kembali dan Jasa Intermediasi untuk Telekomunikasi Lainnya",
        "kategori": "K",
        "kategoriNama": "Kategori K: Telekomunikasi, IT, & Jasa Informasi",
        "kategoriShort": "K - Telekomunikasi & IT",
        "deskripsi": "wartel, warnet, jarang dijumpai",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "62110",
        "judul": "Pengembangan Video Gim, Perangkat Lunak Video Gim, dan Perangkat Lunak Pendukungnya",
        "kategori": "K",
        "kategoriNama": "Kategori K: Telekomunikasi, IT, & Jasa Informasi",
        "kategoriShort": "K - Telekomunikasi & IT",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "64121",
        "judul": "Perbankan Umum Konvensional",
        "kategori": "L",
        "kategoriNama": "Kategori L: Aktivitas Keuangan dan Asuransi",
        "kategoriShort": "L - Keuangan & Asuransi",
        "deskripsi": "BRI, BNI, Mandiri, Bank Sulselbar",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "64122",
        "judul": "Perbankan Umum Syariah",
        "kategori": "L",
        "kategoriNama": "Kategori L: Aktivitas Keuangan dan Asuransi",
        "kategoriShort": "L - Keuangan & Asuransi",
        "deskripsi": "-",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "64953",
        "judul": "Aktivitas Gadai Konvensional",
        "kategori": "L",
        "kategoriNama": "Kategori L: Aktivitas Keuangan dan Asuransi",
        "kategoriShort": "L - Keuangan & Asuransi",
        "deskripsi": "Pegadaian",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "64191",
        "judul": "Aktivitas Kredit oleh Koperasi Konvensional",
        "kategori": "L",
        "kategoriNama": "Kategori L: Aktivitas Keuangan dan Asuransi",
        "kategoriShort": "L - Keuangan & Asuransi",
        "deskripsi": "Koperasi",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "68111",
        "judul": "Aktivitas pengembangan bangunan dan lahan hunian",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "Jual beli rumah atau tempat tinggal, Developer rumah, Developer proyek bangunan (Properti Green Lino Residen 3, Perumahan Bumi Empoang)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "68112",
        "judul": "Aktivitas penyewaan bangunan dan lahan hunian milik sendiri atau sewa",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "Sewa penginapan, Kost , homestay (Kost Yasir, Kost & Penginapan Ratu Anugrah)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "68121",
        "judul": "Pengelolaan kawasan pariwisata",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "Pengelolaan kawasan wisata (Salmira beach cottage, Jeneponto kitesurfing Indonesia, Basecamp Bulu Bialo, Basecamp Bulu Pengka)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "68124",
        "judul": "Penyewaan tempat penyelenggaraan aktivitas pertemuan, perjalanan insentif, konvensi, dan pameran, serta acara khusus",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "Penyewaan gedung serbaguna (Gedung Sipittangari, Gedung Serbaguna Aisyiyah)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "68129",
        "judul": "Aktivitas real estat (bangunan dan lahan) nonhunian lainnya milik sendiri atau sewa",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "Sewa ruko untuk warung",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "68210",
        "judul": "Aktivitas jasa intermediasi real estat",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "Makelar penjualan tanah, tanah kavling",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "68122",
        "judul": "Pengelolaan kawasan industri",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "68123",
        "judul": "Pengelolaan kawasan ekonomi khusus",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "68125",
        "judul": "Pengelolaan pusat perbelanjaan",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "68126",
        "judul": "Penyewaan gudang dan fasilitas penyimpanan mandiri",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "68127",
        "judul": "Pengelolaan gedung perkantoran",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "68291",
        "judul": "Jasa penaksir real estat",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "68292",
        "judul": "Pengelolaan real estat hunian atas dasar balas jasa (fee) atau kontrak",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "68299",
        "judul": "Aktivitas real estat atas dasar balas jasa (fee) atau kontrak lainnya ytdl",
        "kategori": "M",
        "kategoriNama": "Kategori M: Aktivitas Real Estat",
        "kategoriShort": "M - Real Estat & Properti",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "69104",
        "judul": "Aktivitas Notaris Dan Pejabat Pembuat Akta Tanah",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "Notaris ( Notaris PPAT Andi Tri Andriani, Siti Khadijah, Nur Alimah dll)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "71101",
        "judul": "Aktivitas Arsitektural",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "Jasa desain rumah/perumahan (Trisa Desain Arsitektur Consultant)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "74112",
        "judul": "Aktivitas desain peralatan rumah tangga dan furnitur",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "Desain kursi, meja dan peralatan lainnya (Meubel)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "74113",
        "judul": "Aktivitas desain tekstil, mode/fesyen, dan garmen",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "Desain model pakaian atau barang pakai tekstil (Butik Ara Collection, Queen butik sanur 2)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "74209",
        "judul": "Aktivitas fotografi lainnya",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "Foto ijazah, paspor, pernikahan; Photosop atau tempat cetak foto",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "74191",
        "judul": "Aktivitas desain interior",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "Jasa interior (Zifara Interior Karisa Jeneponto, )",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "69101",
        "judul": "Aktivitas pengacara",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "69202",
        "judul": "Aktivitas konsultasi pajak",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "70100",
        "judul": "Aktivitas kantor pusat",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "72101",
        "judul": "Penelitian dan pengembangan ilmu alam",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "72106",
        "judul": "Penelitian dan pengembangan ketenaganukliran",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "74114",
        "judul": "Aktivitas desain industri strategis dan pertahanan",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "74115",
        "judul": "Aktivitas desain alat komunikasi dan elektronika",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "74193",
        "judul": "Aktivitas desain khusus film, video, program televisi, animasi dan komik",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "74194",
        "judul": "Aktivitas kontem gim",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "74201",
        "judul": "Aktivitas fotografi udara",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "74991",
        "judul": "Jasa metereologi dan prakiraan cuaca",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "75001",
        "judul": "Aktivitas personel kesehatan hewan mandiri",
        "kategori": "N",
        "kategoriNama": "Kategori N: Aktivitas Profesional, Ilmiah, dan Teknis",
        "kategoriShort": "N - Profesional, Ilmiah, & Teknis",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "77291",
        "judul": "Penyewaan peralatan dan perlengkapan acara",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "Kegiatan penyewaan dan sewa guna usaha tanpa hak opsi semua jenis barang untuk keperluan pesta seperti tenda, kursi tamu, kursi pelaminan dan dekor serta kostum, peralatan makan dan saji, dsb.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "77292",
        "judul": "Penyewaan alat musik",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "Kegiatan penyewaan dan sewa guna usaha tanpa opsi peralatan musik, organ untuk acara tertentu atau pesta",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "77299",
        "judul": "Penyewaan barang pribadi dan barang rumah tangga lainnya YTDL",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "Penyewaan barang pribadi (Rental PS)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "77392",
        "judul": "Penyewaan dan sewa guna usaha mesin dan alat pertanian",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "Penyewaan alat pertanian tanpa operator (Sewa traktor, pemotong rumput, alat pemanen padi)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "77510",
        "judul": "Aktivitas jasa intermediasi untuk penyewaan dan sewa guna usaha mobil",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "Kegiatan penyewaan dan sewa guna usaha tanpa hak opsi semua jenis alat transportasi darat tanpa operatornya seperti mobil, truk dsb. Contohnya carter mobil tanpa sopir.",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "79110",
        "judul": "Aktivitas agen perjalanan",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "Agen umroh dan haji",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "79121",
        "judul": "Aktivitas biro perjalanan wisata",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "-",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "79122",
        "judul": "Aktivitas biro perjalanan ibadah umrah dan haji khusus",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "-",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "81210",
        "judul": "Aktivitas kebersihan umum bangunan",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "Office boy kantor, cleaning service",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "82100",
        "judul": "Aktivitas administrasi kantor dan penunjang kantor",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "Resespsionis, admin kantor",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "77100",
        "judul": "Penyewaan dan sewa guna usaha kendaraan bermotor",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "77210",
        "judul": "Penyewan dan sewa guna usaha alat rekreasi dan olahraga",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "77293",
        "judul": "Penyewaan barang hasil percetakan dan penerbitan",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "77294",
        "judul": "Penyewaan bunga dan tanaman hias",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "77311",
        "judul": "Penyewaan dan sewa guna usaha alat transportasi darat bukan kendaraan bermotor",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "77313",
        "judul": "Penyewaan dan sewa guna usaha transportasi udara",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "77400",
        "judul": "Sewa guna usaha kekayaan intelektual dan produk sejenis, bukankarya hak cipta",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "80190",
        "judul": "Aktivitas keamanan YTDL",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "82200",
        "judul": "Aktivitas pusat panggilan",
        "kategori": "O",
        "kategoriNama": "Kategori O: Aktivitas Persewaan & Penunjang Usaha",
        "kategoriShort": "O - Persewaan & Jasa Penunjang",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "84111",
        "judul": "Lembaga legislatif",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "DPRD",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84112",
        "judul": "Penyelenggaraan pemerintahan negara dan kesekretariatan negara",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Bupati, Camat, Lurah atau Kepala Desa",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84113",
        "judul": "Lembaga eksekutif keuangan, perpajakan, dan bea cukai",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "KPPKP",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84115",
        "judul": "Lembaga pemerintah nonkementrian dengan tugas khusus",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "BKKBN, BPS",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84119",
        "judul": "Kegiatan administrasi pemerintahan lainnya",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Lembaga non struktural",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84121",
        "judul": "Administrasi pelayanan pemerintah bidang pendidikan",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Dinas Pendidikan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84122",
        "judul": "Administrasi pelayanan pemerintah bidang kesehatan",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Dinas Kesehatan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84123",
        "judul": "Administrasi pelayanan pemerintah bidang perumahan",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Kementan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84124",
        "judul": "Administrasi pelayanan pemerintah bidang kesejahteraan sosial",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "BPJS Kesehatan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84125",
        "judul": "Administrasi pelayanan pemerintah bidang keagamaan",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Kementrian Agama",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84126",
        "judul": "Administrasi pelayanan pemerintah bidang kebudayaan/kesenian/rekreasi/olahraga",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Dinas pemuda dan olaharaga",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84130",
        "judul": "Administrasi pelayanan pemerintah bidang lingkungan hidup",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Dinas Lingkungan Hidup",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84141",
        "judul": "Kegiatan lembaga pemerintahan bidang pertanian",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Dinas pertanian dan peternakan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84142",
        "judul": "Kegiatan lembaga pemerintahan bidang pertambangan dan penggalian, listrik, air, dan gas",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "PLTB",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84143",
        "judul": "Kegiatan lembaga pemerintahan bidang perindustrian",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Dinas perindustrian dan perdagangan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84144",
        "judul": "Kegiatan lembaga pemerintahan bidang komunikasi dan informatika",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Dinas komunikasi dan informasi",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84145",
        "judul": "Kegiatan lembaga pemerintahan bidang konstruksi",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Dinas PUPR",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84146",
        "judul": "Kegiatan lembaga pemerintahan bidang perdagangan dan pariwisata",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Dinas Pariwisata",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84147",
        "judul": "Kegiatan lembaga pemerintahan bidang ketenagakerjaan",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Dinas Perhubungan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84148",
        "judul": "Kegiatan lembaga pemerintahan bidanhg ketenagakerjaan",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Dinas ketenagakerjaan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84149",
        "judul": "Kegiatan lembaga pemerintahan untuk menciptakan efisiensi produksi dan bisnis lainnya",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Dinas Koperasi dan UMKM",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84221",
        "judul": "Lembaga pertahanan dan angkatan bersenjata",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Kodim, Koramil",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84222",
        "judul": "Angkatan darat",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Kodim, Koramil",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84231",
        "judul": "Kepolisian",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Polsek, Polres",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84233",
        "judul": "Aktivitas lembaga peradilan",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "Kejaksaan Negeri",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84234",
        "judul": "Kegiatan lembaga pemerintahan bidang penanggulangan bencana dan pemadam kebakaran",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "BNPB (Badan Nasional Penanggulangan Bencana), dan Pemadam kebakaran",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84300",
        "judul": "Aktivitas jaminan sosial wajib",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "BPJS Kesehatan",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "84114",
        "judul": "Lembaga eksekutif perencanaan",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "84129",
        "judul": "Administrasi pelayanan pemerintah bidang sosial lainnya bukan kesehatan, pendidikan, keagamaan, dan kebudayaan",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "84210",
        "judul": "Hubungan luar negeri",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "84223",
        "judul": "Angkatan udara",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "84224",
        "judul": "Angkatan laut",
        "kategori": "P",
        "kategoriNama": "Kategori P: Administrasi Pemerintahan & Pertahanan",
        "kategoriShort": "P - Administrasi Pemerintahan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "85101",
        "judul": "Pendidikan taman kanak-kanak umum pemerintah",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "TK N Pembina Jeneponto,",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85102",
        "judul": "Pendidikan taman kanak-kanak umum swasta",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "TK Kemala Bhayangkari Binamu, TK Pertiwi Binamu",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85103",
        "judul": "Pendidikan prasekolah agama islam",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "RA Aisyiyah Manjangloe",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85201",
        "judul": "Pendidikan dasar umum pemerintah",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "Sekolah Dasar Negeri (UPT SD Negeri 27 Binamu, dll)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85202",
        "judul": "Pendidikan dasar umum swasta",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "Madrasah Ibtidaiyah Swasta (MIS Taipa Tinggia, MIS Al Amanah, MI DDI Ar Rahim, MIS Kapita, SDS Muhammadiyah Binamu)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85203",
        "judul": "Pendidikan dasar keagamaan islam",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "Madrasah Ibtidaiyah Negeri (MIN 4 Jeneponto",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85311",
        "judul": "Pendidikan menengah pertama umum pemerintah",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "Sekolah Menengah Pertama Negeri (SMPN 1 Binamu dll)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85312",
        "judul": "Pendidikan menengah pertama umum swasta",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "Sekolah Menengah Pertama Swasta",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85313",
        "judul": "Pendidikan menengah pertama keagamaan islam",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "Madrasah Tsanawiyah (SMP Islam Ar-Rithah, MTS S Ar Rithah, SMP Islam Lantaka,   MTS Al-Falah Arungkeke, MTS Al Amanah, MTSN 1 Jeneponto)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85315",
        "judul": "Pendidikan menengah atas umum pemerintah",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "Sekolah Menengah Atas (SMAN 1 Jeneponto, dll)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85316",
        "judul": "Pendidikan menengah atas umum swasta",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "SMAS Sanur Kapasa",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85317",
        "judul": "Pendidikan menengah atas keagamaan islam",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "Madrasah Aliyah (MAN Jeneponto, MA Al Maprah Paitana, MAS Baburrahmag Bangkala Barat dll)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85321",
        "judul": "Pendidikan menengah kejuruan umum pemerintah",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "Sekolah Menengah Kejuruan Negeri (SMKN 1 Jeneponto, SMKN 8 Jeneponto)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85322",
        "judul": "Pendidikan menengah kejuruan umum swasta",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "SMK Persada Tamalatea",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85323",
        "judul": "Pendidikan menengah kejuruan keagamaan islam",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "SMK Al Amanah, SMK Islam Ar-Rithah",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85402",
        "judul": "Pendidikan tinggi umum swasta",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "INTI, Yapnas",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85404",
        "judul": "Pendidikan tinggi keagamaan swasta",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "Al-amanah, STAI DDI",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "85104",
        "judul": "Pendidikan prasekolah keagamaan protestan, katolik, hindu, buddha, atau konghucu",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "85204",
        "judul": "Pendidikan dasar keagamaan protestan, katolik, hindu, buddha, atau konghucu",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "85314",
        "judul": "Pendidikan menengah pertama keagamaan protestan, katolik, hindu, buddha, atau konghucu",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "85318",
        "judul": "Pendidikan menengah atas keagamaan protestan, katolik, hindu, buddha, atau konghucu",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "85324",
        "judul": "Pendidikan menengah kejuruan keagamaan protestan, katolik, hindu, buddha, atau konghucu",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "85330",
        "judul": "Pendidikan pascamenengah non tersier",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "85403",
        "judul": "Pendidikan tinggi keagamaan pemerintah",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "85401",
        "judul": "Pendidikan tinggi umum pemerintah",
        "kategori": "Q",
        "kategoriNama": "Kategori Q: Aktivitas Pendidikan",
        "kategoriShort": "Q - Pendidikan",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "86101",
        "judul": "Aktivitas RS pemerintah",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "RSUD Lanto dan RS Rumbia",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "86102",
        "judul": "Aktivitas puskesmas",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "Puskesmas binamu, arungkeke dll (21 puskesmas)",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "86105",
        "judul": "Aktivitas klinik swasta",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "Klinik dhani, alfatih dll",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "86201",
        "judul": "Aktivitas praktik dokter",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "Praktik dokter umum seperti dr Ilyas",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "86202",
        "judul": "Aktivitas praktik dokter spesialis",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "Praktik dokter spesialis seperti dr Pauzin Sp.A",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "86203",
        "judul": "Aktivitas praktir dokter gigi",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "Praktik dokter gigi seperti drg Malik",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "86991",
        "judul": "Aktvitas pelayanan kesehatan yang dilakukan oleh tenaga kesehatan selain dokter dan dokter gigi",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "Praktik non dokter seperti Bidan puji atau tukang gigi",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "86992",
        "judul": "Aktivitas pelayanan kesehatan tradisional",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "Pengobatan tradisional seperti pijat refleksi, bekam dll",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "86103",
        "judul": "Aktivitas RS swasta",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "86910",
        "judul": "Aktivitas jasa intermediasi untuk kesehatan medis, kedokteran gigi, dan pelayanan kesehatan manusia lainnya",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "86991",
        "judul": "Aktivitas pelayanan penunjang kesehatan",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "86994",
        "judul": "Aktivitas angkutan khusus pengangkutan orang sakit",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "87101",
        "judul": "Aktivitas perawatan dan pemulihan kesehatan berbasis residensial oleh pemerintah",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "87102",
        "judul": "Aktivitas perawatan dan pemulihan kesehatan berbasis residensial oleh swasta",
        "kategori": "R",
        "kategoriNama": "Kategori R: Kesehatan Manusia & Aktivitas Sosial",
        "kategoriShort": "R - Kesehatan & Aktivitas Sosial",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "92000",
        "judul": "Aktivitas perjudian dan pertaruhan",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "Kegiatan perjudian seperti togel, sio, sjsb dll",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "90111",
        "judul": "Aktivitas penciptaan karya sastra",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "90112",
        "judul": "Aktivitas penciptaan komposisi musik",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "90113",
        "judul": "Aktivitas jurnalis berita independen",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "90120",
        "judul": "Aktivitas penciptaan karya seni rupa",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "90130",
        "judul": "Aktivitas penciptaan karya seni lainnya",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "90200",
        "judul": "Aktivitas seni pertunjukan",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "90310",
        "judul": "Aktivitas operasional tempat dan fasilitas kesenian",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "90391",
        "judul": "Penyelenggaraan kegiatan kesenian dan kebudayaan",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91112",
        "judul": "Aktivitas perpustakaan swasta",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91121",
        "judul": "Aktivitas kearsipan pemerintah",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91122",
        "judul": "Aktivitas kearsipan swasta",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91211",
        "judul": "Museum yang dikelola pemerintah",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91212",
        "judul": "Museum yang dikelola swasta",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91221",
        "judul": "Aktivitas situs bersejarah dan monumen yang dikelola pemerintah",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91222",
        "judul": "Aktivitas situs bersejarah dan monumen yang dikelola swasta",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91300",
        "judul": "Konservasi, restorasi, dan aktivitas penunjang lainnya untuk warisan budaya",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91410",
        "judul": "Aktivitas taman botani dan kebun binatang",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91421",
        "judul": "Suaka margasatwa",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91422",
        "judul": "Taman nasional",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91423",
        "judul": "Hutan lindung",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91424",
        "judul": "Taman wisata alam",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91425",
        "judul": "Taman hutan raya",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91426",
        "judul": "Taman laut",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "91429",
        "judul": "Aktivitas cagar alam lainnya",
        "kategori": "S",
        "kategoriNama": "Kategori S: Kesenian, Olahraga, dan Rekreasi",
        "kategoriShort": "S - Kesenian & Rekreasi",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "94121",
        "judul": "Aktivitas organisasi ilmu pengetahuan sosial dan masyarakat",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Organisasi seperti IDI, PGRI, IBI dll",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "94200",
        "judul": "Aktivitas organisasi buruh",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Organisasi seperti KORPRI",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "94910",
        "judul": "Aktivitas organisasi keagamaan",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Organisasi keagamaan seperti wahdah, NU, muhamaddiyah",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "94920",
        "judul": "Aktivitas organisasi politik",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Termasuk partai politik seperti golkar, gerindra, demokrat",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "94990",
        "judul": "Aktivitas organisasi keanggotaan lainnya",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Organisasi seperti LSM, KNPI dll",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "95101",
        "judul": "Reparasi dan pemeliharaan kompoter dan peralatan lainnya",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Servive laptop, komputer dll",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "95102",
        "judul": "Reparasi dan pemeliharaan peralatan komunikasi",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Service HP, radio dll",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "95210",
        "judul": "Reparasi dan pemeliharaan alat alat eletronik konsumen",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Service TV, kamera",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "95220",
        "judul": "Reparasi dan pemeliharaan peralatan rumah tangga dan peralatan rumah dan kebun",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Service AC, kulkas, kompor, mesin cuci",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "95230",
        "judul": "Reparasi dan pemeliharaan alas kaki dan barang dari kulit",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Service sendal, sepatu, koper dan tas",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "95291",
        "judul": "Aktivitas vermak pakaian",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Vermak pakaian",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "95299",
        "judul": "Reparasi dan pemeliharaan barang keperluan pribadi dan perlengkapan rumah tangga lainnya",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Servive jam tangan, alat olahraga, alat musik dll",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "95311",
        "judul": "Reparasi mobil",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Reparasi dan perawatan mobil termasuk reparasi suku cadang mobil",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "95312",
        "judul": "Pencucian dan salon mobil",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Cuci mobil",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "95320",
        "judul": "Reparasi dan perawatan sepeda motor",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Service motor",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "96210",
        "judul": "Aktivitas penataan dan pangkas rambut",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Salon dan tempat cukur. Misalnya salon Meli dan pangkas rambut madura",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "96220",
        "judul": "Aktivitas perawatan kecantikan dan perawatan kecantikan lainnya",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Perawatan kecantikan yang dilakukan oleh bukan dokter seperti layanan rias seperti MUA",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "96900",
        "judul": "Aktivitas jasa perorangan lainnya ytdl",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "Penitipan hewan, semir sepatu, porter, henna dll",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "94110",
        "judul": "Aktivitas organisasi bisnis dan pengusaha",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "94122",
        "judul": "Aktivitas organisasi ilmu pengetahuan alam dan teknologi",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "95400",
        "judul": "Jasa intermediasi reparasi dan perawatan komputer, barang pribadi dan rumah tangga, mobil serta sepeda motor",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "96230",
        "judul": "Aktivitas sante par aqua (SPA) harian, sauna dan pemandian uap",
        "kategori": "T",
        "kategoriNama": "Kategori T: Aktivitas Jasa Lainnya",
        "kategoriShort": "T - Aktivitas Jasa Lainnya",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "98100",
        "judul": "Aktivitas produksi barang oleh rumah tangga untuk keperluan sendiri",
        "kategori": "U",
        "kategoriNama": "Kategori U: Aktivitas Rumah Tangga Pemberi Kerja",
        "kategoriShort": "U - Rumah Tangga Mandiri",
        "deskripsi": "-",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "98200",
        "judul": "Aktivitas produksi beragam jasa oleh rumah tangga untuk keperluan sendiri",
        "kategori": "U",
        "kategoriNama": "Kategori U: Aktivitas Rumah Tangga Pemberi Kerja",
        "kategoriShort": "U - Rumah Tangga Mandiri",
        "deskripsi": "-",
        "frekuensi": "Sering Dijumpai"
    },
    {
        "kode": "97000",
        "judul": "Aktivitas rumah tangga sebagai pemberi kerja bagi pekerja rumah tangga",
        "kategori": "U",
        "kategoriNama": "Kategori U: Aktivitas Rumah Tangga Pemberi Kerja",
        "kategoriShort": "U - Rumah Tangga Mandiri",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    },
    {
        "kode": "99000",
        "judul": "Aktivitas badan internasional dan badan ekstra internasional lainnya",
        "kategori": "V",
        "kategoriNama": "Kategori V: Badan Internasional & Ekstra Internasional",
        "kategoriShort": "V - Badan Internasional",
        "deskripsi": "-",
        "frekuensi": "Jarang Dijumpai"
    }
],

    // Contoh Daftar Usaha Bersumber dari Pusat (Kode 7 - Sesuai Spreadsheet Real)
    usahaPusatSample: [
        {
                "namaUsaha": "PT Adira Dinamika Multi Finance Tbk (Adira Finance)",
                "namaKomersil": "Adira Finance",
                "alamat": "Millennium Centennial Center Lt. 53-61, Jl. Jend. Sudirman Kav. 25, Karet Setiabudi, Jakarta Selatan 12920",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Pesta Pora Abadi (Mie Gacoan)",
                "namaKomersil": "Mie Gacoan",
                "alamat": "Jalan S. Supriadi No.74, Sukun, Kota Malang, Jawa Timur 65148",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Ruang Raya Indonesia (Ruang Guru)",
                "namaKomersil": "Ruang Guru",
                "alamat": "Gedung Sinarmas MSIG Tower Lantai 33, Jalan Jenderal Sudirman Kav. 21, Karet Kuningan, Setiabudi, Jakarta Selatan, 12920",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "NSS (Nusantara Sakti) Group (NSS Honda)",
                "namaKomersil": "NSS Honda",
                "alamat": "Jl. Letjen S. Parman No.Kav 77, RT.6/RW.3, Slipi, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11410",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Selahonje Jaya Abadi (Hisana Fried Chicken)",
                "namaKomersil": "Hisana Fried Chicken",
                "alamat": "Ruko Symphoni Blok HX 2 No. 1, Kelurahan Pusaka Rakyat, Kecamatan Tarumajaya, Kabupaten Bekasi, Jawa Barat 17214",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Bing Kreatif Mandiri (Bingxue)",
                "namaKomersil": "Bingxue",
                "alamat": "Soho Rodeo Drive, Nomor 5-6, Jalan Laksamana Yos Sudarso, Pantai Indah Kapuk (PIK), Penjaringan, Jakarta Utara, 14470",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Planet Selancar Mandiri (Planet Surf)",
                "namaKomersil": "Planet Surf",
                "alamat": "Jalan Mertasari No. 7, Banjar Pengubengan Kangin, Kerobokan, Kuta, Kabupaten Badung, Bali",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Junyi Jaya Indonesia/ PT Junyilife (Momoyo)",
                "namaKomersil": "Momoyo",
                "alamat": "Gedung Gold Coast Office Tower Eiffel Lantai 20, Pantai Indah Kapuk, Jakarta Utara, DKI Jakarta 14470",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Setya Kuliner Mandiri (Lazatto Chicken & Burger)",
                "namaKomersil": "Lazatto Chicken & Burger",
                "alamat": "Jalan Moh. Kahfi 1, Jalan Pembangunan No. 55, RT.2/RW.2, Cipedak, Kecamatan Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12630",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Yakult Indonesia Persada",
                "namaKomersil": "Yakult",
                "alamat": "Antam Office Park Tower B Lantai 16, Jalan T.B. Simatupang No. 1, Tanjung Barat, Jagakarsa, Jakarta Selatan 12530",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Furnimart Mebelindo Sakti (Offo Living)",
                "namaKomersil": "Offo Living",
                "alamat": "Jalan Kaum Sari No. 1, Kawasan OCBD, Cibuluh, Bogor Utara, Kota Bogor, Jawa Barat 16151",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Gratama Finance Indonesia",
                "namaKomersil": "Gratama Finance",
                "alamat": "Jl. Jend. Sudirman Kav.59, Senayan Kec. Kebayoran Baru, Jakarta Selatan",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Bussan Auto Finance (BAF)",
                "namaKomersil": "BAF",
                "alamat": "BAF Plaza, Jalan Raya Tanjung Barat Nomor 121, Jagakarsa, Jakarta Selatan 12530",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Sinar Mitra Sepadan (SMS) Finance (SMS Finance)",
                "namaKomersil": "SMS Finance",
                "alamat": "Agro Plaza Lantai 16, Jl. H.R. Rasuna Said Kav. X2-1, Kuningan Timur, Setiabudi, Jakarta Selatan 12950",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Bank Mega Tbk",
                "namaKomersil": "Bank Mega",
                "alamat": "Menara Bank Mega, Jl. Kapten P. Tendean No.12-14A, Jakarta 12790",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Indosat, Tbk (Indosat Ooredoo Hutchison)",
                "namaKomersil": "Indosat Ooredoo Hutchison",
                "alamat": "Jalan Medan Merdeka Barat No. 21, Jakarta Pusat 10110, Indonesia",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Miniso Lifestyle Trading Indonesia",
                "namaKomersil": "Miniso",
                "alamat": "Jalan M.H. Thamrin Kav. 8-10, Kebon Melati, Tanah Abang, Jakarta Pusat, DKI Jakarta 10230",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Astra Daihatsu Motor (ADM)",
                "namaKomersil": "Astra Daihatsu",
                "alamat": "Jl. Gaya Motor III No. 5, Sunter II, Jakarta Utara, 14330, Indonesia",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Indomobil Finance Indonesia (IMFI)",
                "namaKomersil": "Indomobil Finance",
                "alamat": "Jalan M.T. Haryono Kav. 11 (atau Kav. 8), Jatinegara, Jakarta Timur 13330",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Panin Dai-ichi Life (Panin Dai-ichi Life (Asuransi Panin))",
                "namaKomersil": "Panin Dai-ichi Life (Asuransi Panin)",
                "alamat": "Gedung Panin Life Center, Jl. Letjend. S. Parman Kav. 91, Jakarta Barat 11420.",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Astra Honda Motor (AHM)",
                "namaKomersil": "Astra Honda Motor (AHM)",
                "alamat": "Jl. Laksda Yos Sudarso - Sunter I, Jakarta 14350, DKI Jakarta, Indonesia",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Global Jet Express (J&T Ekspress)",
                "namaKomersil": "J&T Ekspress",
                "alamat": "Jl. Pluit Selatan Raya, Unit B1, JakartaUtara , DKI Jakarta 14450, ID",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT. Mayora Indah, Tbk",
                "namaKomersil": "Mayora",
                "alamat": "Gedung Mayora Jl. Tomang Raya Kav 21 – 23, Jakarta Barat",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Gadai MAS Nusantara",
                "namaKomersil": "Gadai Mas",
                "alamat": "Jl. Opu Daeng Risadju, Tamparang Keke, Kec. Mamajang, Kota Makassar, Sulawesi Selatan 90126",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Esteh Indonesia Makmur (Es Teh Indonesia)",
                "namaKomersil": "Es Teh Indonesia",
                "alamat": "Jalan Achmad Adnawijaya, Tegal Gundil Kec. Bogor Utara Kota Bogor  16152 Jawa Barat ID",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT SIMPATIK Elektronik & Furniture (Simpatik Elektronik dan Furniture)",
                "namaKomersil": "Simpatik Elektronik dan Furniture",
                "alamat": "Jl. Ir. PH. Moch. Noor, Pembataan, Kec. Murung Pudak, Kabupaten Tabalong, Kalimantan Selatan 71571",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Hanjaya Mandala Sampoerna Tbk (HM Sampoerna)",
                "namaKomersil": "HM Sampoerna",
                "alamat": "One Pacific Place Sudirman Central Business District (SCBD) Lantai 18 Jl. Jend. Sudirman Kav. 52-53 Jakarta - 12190 Indonesia",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Mandala Multifinance (Mandala Finance)",
                "namaKomersil": "Mandala Finance",
                "alamat": "Jl. Menteng Raya No. 24 A-B, Jakarta Pusat, DKI Jakarta 10340",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Toyota Astra Motor",
                "namaKomersil": "Toyota",
                "alamat": "Jl. Laks Yos Sudarso, Sunter II, Jakarta Utara, 14330",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Erafone Artha Retailindo",
                "namaKomersil": "Erafone",
                "alamat": "Erajaya Plaza, Jalan Bandengan Selatan No 19-20, Pekojan, Kecamatan Tambora, Jakarta Barat, DKI Jakarta 11240",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Mega Auto Finance (Mega Auto Finance (MAF))",
                "namaKomersil": "Mega Auto Finance (MAF)",
                "alamat": "Gedung Wisma 76, Lantai 12, Jl. Letjen S. Parman Kav. 76, Slipi, Kecamatan Palmerah, Kota Jakarta Barat, DKI Jakarta 11410",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Federal International Finance (FIFGROUP)",
                "namaKomersil": "FIFGROUP",
                "alamat": "Menara FIF, Jl. T.B. Simatupang kav. 15, Cilandak, Jakarta Selatan, DKI Jakarta 12440",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Indomarco Prismatama (Indomaret)",
                "namaKomersil": "Indomaret",
                "alamat": "Jl. Ancol Barat I No. 9-10, Ancol, Pademangan, Jakarta Utara",
                "keterangan": "Wajib Kode 7 (Pusat)"
        },
        {
                "namaUsaha": "PT Sumber Alfaria Trijaya Tbk (Alfamart)",
                "namaKomersil": "Alfamart",
                "alamat": "Alfa Tower, Jl. Jalur Sutera Barat Kav. 7-9, Alam Sutera, Tangerang",
                "keterangan": "Wajib Kode 7 (Pusat)"
        }
],

    // Panduan Penanganan Anomali
    panduanAnomali: [
        {
            judul: "Anomali 1: Pengeluaran Usaha > Pendapatan Usaha",
            jenis: "Usaha",
            indikasi: "Nilai pengeluaran operasional per bulan dilaporkan lebih tinggi dibanding omzet kotor tanpa alasan subsidi/investasi awal modal.",
            solusi: "Konfirmasi ulang ke responden apakah ada pembelian alat/aset modal yang dimasukkan ke biaya rutin bulanan, atau apakah omzet dicatat mingguan sementara pengeluaran dicatat bulanan. Lakukan perbaikan di kuesioner SE2026."
        },
        {
            judul: "Anomali 2: KBLI Tidak Sesuai Deskripsi Kegiatan Usaha",
            jenis: "Usaha",
            indikasi: "Kegiatan utama yang dideskripsikan adalah budidaya rumput laut tetapi kode KBLI tercatat perdagangan kelontong.",
            solusi: "Gunakan menu pencarian KBLI di portal PoSE untuk mencocokkan 5 digit KBLI yang paling presisi berdasarkan produk barang/jasa dominan yang dihasilkan."
        },
        {
            judul: "Anomali 3: Data Usaha Pusat Belum Berkode 7",
            jenis: "Usaha",
            indikasi: "Kantor cabang bank, BUMN (PLN/Telkom), atau minimarket waralaba dicatat dengan data omzet mandiri di tingkat unit lokal.",
            solusi: "Sesuai petunjuk BPS, unit usaha yang datanya dilaporkan oleh Kantor Pusat di tingkat nasional/provinsi harus diberi Kode 7 ('Data Diperoleh dari Kantor Pusat')."
        },
        {
            judul: "Anomali 4: Anggota Keluarga Khusus Terlewatkan",
            jenis: "Keluarga",
            indikasi: "Keluarga yang tinggal di kompleks khusus (pesantren, asrama, mess perkebunan/PLTB) belum terdata di daftar keluarga SLS setempat.",
            solusi: "Lakukan koordinasi dengan PML dan Ketua RT/Dusun untuk mencocokkan daftar keluarga khusus dan lakukan pendataan susulan."
        }
    ],

    // Daftar 10 Sampel Tempat Tinggal & Keluarga Khusus (Data Riil Spreadsheet)
    keluargaKhususList: [
        {
                "nama": "AL-FALAH ARUNG KEKE",
                "alamat": "JLN PENDIDIKAN NO.1 TAMANROYA",
                "desa": "TAMANROYA",
                "kec": "Arungkeke",
                "jenis": "Pondok Pesantren",
                "pic": "K.DRS. MAHADI GASSING",
                "kontak": "K.DRS. MAHADI GASSING (085299905602)"
        },
        {
                "nama": "PP MANNILINGI",
                "alamat": "JL. MANNILINGI NO.45 BULO-BULO",
                "desa": "BULO-BULO",
                "kec": "Arungkeke",
                "jenis": "Pondok Pesantren",
                "pic": "KM.HASYIM,S.Pd.I",
                "kontak": "KM.HASYIM,S.Pd.I (085240702176)"
        },
        {
                "nama": "MADANIYA GUNUNG SILANU",
                "alamat": "JL. PATRIOT, NO.12",
                "desa": "TOMBO-TOMBOLO",
                "kec": "Bangkala",
                "jenis": "Pondok Pesantren",
                "pic": "DRS.KM.AHMAD DAUD,MA",
                "kontak": "DRS.KM.AHMAD DAUD,MA (081355041556)"
        },
        {
                "nama": "LU Hidayah Rezki",
                "alamat": "Talajoko,Desa Tombo-tombolo,Kec.Bangkala,Jeneponto",
                "desa": "TOMBO-TOMBOLO",
                "kec": "Bangkala",
                "jenis": "Pembinaan Lanjut Usia",
                "pic": "Syamsuddin",
                "kontak": "Syamsuddin (08114126335)"
        },
        {
                "nama": "HIDAYATULLAH",
                "alamat": "DUSUN BULO-BULO",
                "desa": "PALLATIKANG",
                "kec": "Bangkala",
                "jenis": "Pondok Pesantren",
                "pic": "BASO SULFIKAR, SH",
                "kontak": "BASO SULFIKAR, SH (081264464323)"
        },
        {
                "nama": "Nur Rahmah",
                "alamat": "Jenetallasa,Bangkala,Jenepnto",
                "desa": "JENETALLASA",
                "kec": "Bangkala",
                "jenis": "Pembinaan Anak",
                "pic": "Pak Ridwan",
                "kontak": "Pak Ridwan (082347700611)"
        },
        {
                "nama": "Alief Nur",
                "alamat": "Jl.Monumen 45 DesaGunung silanu Kec.Bangkala,Jeneponto",
                "desa": "GUNUNG SILANU",
                "kec": "Bangkala",
                "jenis": "Pembinaan Lanjut Usia",
                "pic": "Muchtar Dian",
                "kontak": "Muchtar Dian (085256225222)"
        },
        {
                "nama": "LU Ummi Naharia",
                "alamat": "Dusun Masago,Desa.Kalimporo,jeneponto",
                "desa": "KALIMPORO",
                "kec": "Bangkala",
                "jenis": "Pembinaan Lanjut Usia",
                "pic": "Hakim",
                "kontak": "Hakim (087835274122)"
        },
        {
                "nama": "LKSA Madaniyah",
                "alamat": "Jl.Patriot, No.12 Tombo-tombolo",
                "desa": "TOMBO-TOMBOLO",
                "kec": "Bangkala",
                "jenis": "Pembinaan Anak",
                "pic": "Daud",
                "kontak": "Daud (081355041556)"
        },
        {
                "nama": "AL-FATAH",
                "alamat": "PASSEREANG",
                "desa": "PASSEREANG",
                "kec": "Bangkala Barat",
                "jenis": "Pondok Pesantren",
                "pic": "UST.YAKUP HARISANDI",
                "kontak": "UST.YAKUP HARISANDI (085299905602)"
        },
        {
                "nama": "BARAK MILITER KODIM 1452-02 BANGKALA",
                "alamat": "Benteng, Bangkala",
                "desa": "BULUJAYA",
                "kec": "Bangkala Barat",
                "jenis": "Barak Militer",
                "pic": "-",
                "kontak": "-"
        },
        {
                "nama": "AN-NURIYAH",
                "alamat": "BONTO CINI",
                "desa": "BONTO CINI",
                "kec": "Batang",
                "jenis": "Pondok Pesantren",
                "pic": "KH. AHMAD YAHYA,LC.M.Pd",
                "kontak": "KH. AHMAD YAHYA,LC.M.Pd (085255446285)"
        },
        {
                "nama": "ULUL ALBAB",
                "alamat": "AFRILIYAH RESIDENCE BTN ROMANGA TABA",
                "desa": "BALANG",
                "kec": "Binamu",
                "jenis": "Pondok Pesantren",
                "pic": "UST. KAMALUDDIN",
                "kontak": "UST. KAMALUDDIN (085288883663)"
        },
        {
                "nama": "RIDHA AL-AMANAH",
                "alamat": "JL.PROF.DR.H.ARAJAMUDDIN,SH.,MH",
                "desa": "EMPOAN SELATAN",
                "kec": "Binamu",
                "jenis": "Pondok Pesantren",
                "pic": "DR. KH.ABD.MAJID BADARUDDIN,M.Ag",
                "kontak": "DR. KH.ABD.MAJID BADARUDDIN,M.Ag (081356250900)"
        },
        {
                "nama": "ISLAM AR-RITHAH",
                "alamat": "BUNGUNG BADDO",
                "desa": "BUNGUNG BADDO",
                "kec": "Binamu",
                "jenis": "Pondok Pesantren",
                "pic": "ALI AKBAR KAMSAD",
                "kontak": "ALI AKBAR KAMSAD (081255359797)"
        },
        {
                "nama": "RUTAN KELAS IIB",
                "alamat": "Empoang Sel., Kec. Binamu",
                "desa": "EMPOANG SELATAN",
                "kec": "Binamu",
                "jenis": "Rutan/Lapas",
                "pic": "EKI",
                "kontak": "EKI (08114631152)"
        },
        {
                "nama": "PP DARUSSALAF",
                "alamat": "JL.ABDUL MUTHOLIB",
                "desa": "EMPOANG",
                "kec": "Binamu",
                "jenis": "Pondok Pesantren",
                "pic": "ASKARY",
                "kontak": "ASKARY (085242695831)"
        },
        {
                "nama": "LU Cahaya Putra Bangsa",
                "alamat": "Jl.Sapiri,Desa.Sapanang",
                "desa": "SAPANANG",
                "kec": "Binamu",
                "jenis": "Pembinaan Lanjut Usia",
                "pic": "Pak Irfan",
                "kontak": "Pak Irfan (081354465560)"
        },
        {
                "nama": "Lksa Aisyah",
                "alamat": "Monro-monro,Kec.Binamu",
                "desa": "MONRO-MONRO",
                "kec": "Binamu",
                "jenis": "Pembinan Anak",
                "pic": "Hasniati",
                "kontak": "Hasniati (0812455844212)"
        },
        {
                "nama": "NURUL HIDAYAHSAPANANG",
                "alamat": "DUSUN BANTAULU",
                "desa": "DESA SAPANANG",
                "kec": "Binamu",
                "jenis": "Pondok Pesantren",
                "pic": "UST. LUKMAN",
                "kontak": "UST. LUKMAN (081355045109)"
        },
        {
                "nama": "PONPES YUSRIL LATIFAH",
                "alamat": "LENGKE-LENGKESE",
                "desa": "LENGKE-LENGKESE",
                "kec": "Binamu",
                "jenis": "Pondok Pesantren",
                "pic": "ABD SYAHID,S.AG.,M.Pd.",
                "kontak": "ABD SYAHID,S.AG.,M.Pd."
        },
        {
                "nama": "TAHFIDHUL QUR'AN ROUDHOTUL HUFFADZ",
                "alamat": "JL. BAPERTARUM",
                "desa": "EMPOANG",
                "kec": "Binamu",
                "jenis": "Pondok Pesantren",
                "pic": "ABDURRAHMAN HAFIDZ",
                "kontak": "ABDURRAHMAN HAFIDZ (081355986222)"
        },
        {
                "nama": "BAITULLAH PARANG",
                "alamat": "BONTO PARANGA",
                "desa": "LENTU",
                "kec": "Bontoramba",
                "jenis": "Pondok Pesantren",
                "pic": "DRS. Nur Alam, M.Si",
                "kontak": "DRS. Nur Alam, M.Si (082321432481)"
        },
        {
                "nama": "PONDOK PESANTREN NURUL AZIS",
                "alamat": "JL.PESANTREN TA'BUNTULU",
                "desa": "BAROBBO",
                "kec": "Bontoramba",
                "jenis": "Pondok Pesantren",
                "pic": "RUSTANG HALIK,S.Ag.MA",
                "kontak": "RUSTANG HALIK,S.Ag.MA (081347419476)"
        },
        {
                "nama": "RAHMATULLAH",
                "alamat": "TOLO UTARA",
                "desa": "TOLO UTARA",
                "kec": "Kelara",
                "jenis": "Pondok Pesantren",
                "pic": "BAHARUDDIN,S.PdI",
                "kontak": "BAHARUDDIN,S.PdI (081356681581)"
        },
        {
                "nama": "NAHDATUL ULUM 2 BONTO PARANG",
                "alamat": "TOLO SELATAN",
                "desa": "TOLO SELATAN",
                "kec": "Kelara",
                "jenis": "Pondok Pesantren",
                "pic": "KH.HAYYONG",
                "kontak": "KH.HAYYONG (081354822712)"
        },
        {
                "nama": "BABAUSSALAM DDI KASSI",
                "alamat": "JL. LANTO DG PASEWANG NO 213 KASSI 92351",
                "desa": "KASSI",
                "kec": "Tamalatea",
                "jenis": "Pondok Pesantren",
                "pic": "H. MUSTAFA, LC.MA",
                "kontak": "H. MUSTAFA, LC.MA (081320053734)"
        },
        {
                "nama": "Lksa Al-Huda",
                "alamat": "Embo Kab.Jeneponto",
                "desa": "TURATEA",
                "kec": "Tamalatea",
                "jenis": "Pembinaan Anak",
                "pic": "Irfan",
                "kontak": "Irfan (08115236226)"
        },
        {
                "nama": "DARUL I'TISHAM EMBO",
                "alamat": "EMBO, DESA TURATEA",
                "desa": "TURATEA",
                "kec": "Tamalatea",
                "jenis": "Pondok Pesantren",
                "pic": "DRS.H. MUNAWWIR, KS,M.Ag",
                "kontak": "DRS.H. MUNAWWIR, KS,M.Ag (081342419426)"
        },
        {
                "nama": "LU Rahmat Azizah",
                "alamat": "Jln.Embo,Dusun Pattiroang Desa turatea,Kec.tamalatea,Jeneonto",
                "desa": "TURATEA",
                "kec": "Tamalatea",
                "jenis": "Pembinaan Lanjut Usia",
                "pic": "Rahmat Tompo",
                "kontak": "Rahmat Tompo (085217909797)"
        },
        {
                "nama": "BAHRUL ULUM TAROWANG",
                "alamat": "KAMPUNG BENDI",
                "desa": "PAO",
                "kec": "Tarowang",
                "jenis": "Pondok Pesantren",
                "pic": "BAHARUDDIN",
                "kontak": "BAHARUDDIN (082198333848)"
        },
        {
                "nama": "LKSLU Ruqayyah",
                "alamat": "Tarowang",
                "desa": "TAROWANG",
                "kec": "Tarowang",
                "jenis": "Pembinaan Anak/Lu",
                "pic": "Sri Hartina",
                "kontak": "Sri Hartina (082194334195)"
        },
        {
                "nama": "AL-HIKAM PITAPE",
                "alamat": "DUSUN PITAPE",
                "desa": "BUNGUNG LOE",
                "kec": "Turatea",
                "jenis": "Pondok Pesantren",
                "pic": "AHMAD SYAFRI,M.Ag",
                "kontak": "AHMAD SYAFRI,M.Ag (085240534796)"
        },
        {
                "nama": "DARUL I'TISHAN MUNTE",
                "alamat": "MUNTE",
                "desa": "MANGEPONG",
                "kec": "Turatea",
                "jenis": "Pondok Pesantren",
                "pic": "DRS.KH.KAMALUDDIN SUKKU",
                "kontak": "DRS.KH.KAMALUDDIN SUKKU (082336433801)"
        },
        {
                "nama": "PP BABURRAHMAN",
                "alamat": "JLN PABETA DG. NOMPO",
                "desa": "JOMBE",
                "kec": "Turatea",
                "jenis": "Pondok Pesantren",
                "pic": "DRS.H.ABD. RAHMAN",
                "kontak": "DRS.H.ABD. RAHMAN (085256283216)"
        },
        {
                "nama": "LU Al-Iqra",
                "alamat": "Bungung tongko Rt 01Rw01 No.08",
                "desa": "TANJONGA",
                "kec": "Turatea",
                "jenis": "Pembinaan Lanjut Usia",
                "pic": "Alimuddin",
                "kontak": "Alimuddin (082302087888)"
        },
        {
                "nama": "RUMAH QURAN",
                "alamat": "KAMPUNG BENDI",
                "desa": "PAO",
                "kec": "Tarowang",
                "jenis": "Pondok Pesantren",
                "pic": "-",
                "kontak": "-"
        },
        {
                "nama": "ASSA'DIYAH",
                "alamat": "KALONGKO",
                "desa": "BONTORAYA",
                "kec": "Batang",
                "jenis": "Pondok Pesantren",
                "pic": "-",
                "kontak": "-"
        }
]
};

if (typeof window !== 'undefined') {
    window.POSE_DATA = POSE_DATA;
}
if (typeof module !== 'undefined') {
    module.exports = POSE_DATA;
}
