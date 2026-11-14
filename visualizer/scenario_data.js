/**
 * Smart Traffic Command Center — Scenario Data (Case 10: Pawai Obor Cianjur)
 * 20 Nodes & 32 Edges 100% Sesuai Matriks Konflik Pawai Obor Cianjur Kelompok 4
 */
window.SCENARIO_DATA = {
  "case_id": "case_10_pawai_obor",
  "title": "Pengaturan Arus Lalu Lintas: Pawai Obor & Istigasah Kubra Kota Cianjur",
  "description": "Skenario N=20 berbasis Graph Coloring / Conflict Scheduling di pusat Kota Cianjur. Rombongan pawai obor bergerak dari Taman Prawatasari (Node 0) menuju Pendopo Pemda Cianjur (Node 8) melintasi koridor Jl. Siliwangi dan Simpang Tugu Tauhid, menuntut alokasi slot waktu (color/time-slot) bebas konflik terhadap titik penutupan, jalan sirip, gang warga, dan area penonton.",
  "nodes": [
    {
      "id": 0,
      "label": "Taman Prawatasari (START)",
      "short_label": "S0 (Start Prawatasari)",
      "lat": -6.8247,
      "lng": 107.13336,
      "pos": [
        11.07,
        8.71
      ],
      "zone": "Rute Utama Pawai",
      "fishbone_category": "Volume Peserta",
      "fishbone_cause": "Volume Peserta: Massa padat di titik start pukul 18.30 WIB",
      "police_presence": "Sterilisasi Clear Area & Pelepasan",
      "description": "Start: Titik Kumpul & Pelepasan Pawai Obor di Taman Prawatasari (Joglo)."
    },
    {
      "id": 1,
      "label": "Depan Taman Prawatasari (Jalur Pawai)",
      "short_label": "S1 (Depan Prawatasari)",
      "lat": -6.82548,
      "lng": 107.13293,
      "pos": [
        10.32,
        7.49
      ],
      "zone": "Rute Utama Pawai",
      "fishbone_category": "Volume Peserta",
      "fishbone_cause": "Volume Peserta: Massa mulai memadati badan jalan pukul 18.00 WIB",
      "police_presence": "Pengawalan Pintu Keluar Pawai",
      "description": "Jalur Pawai: Pintu keluar massa dari Taman Prawatasari menuju jalan raya."
    },
    {
      "id": 2,
      "label": "Perempatan Surya Kencana (Jalur Pawai)",
      "short_label": "S2 (Surya Kencana)",
      "lat": -6.82604,
      "lng": 107.13283,
      "pos": [
        10.15,
        6.62
      ],
      "zone": "Rute Utama Pawai",
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Pengaturan Lalin: Area clear area mulai pukul 16.00 WIB",
      "police_presence": "Pos Sekat Clear Area Surya Kencana",
      "description": "Jalur Pawai: Simpang 4 Prawatasari berbelok ke timur menuju Jl. Pangeran Hidayatullah."
    },
    {
      "id": 3,
      "label": "Simpang Pangeran Hidayatullah - Siliwangi (Jalur Pawai)",
      "short_label": "S3 (Joglo Atas - Siliwangi)",
      "lat": -6.82678,
      "lng": 107.13645,
      "pos": [
        16.46,
        5.46
      ],
      "zone": "Rute Utama Pawai",
      "fishbone_category": "Jaringan Jalan",
      "fishbone_cause": "Jaringan Jalan: Simpang Joglo Atas diprediksi padat",
      "police_presence": "Personel Floating Simpang Joglo Atas",
      "description": "Jalur Pawai: Belokan masuk koridor utama satu arah Jl. Siliwangi (Simpang Joglo Atas)."
    },
    {
      "id": 4,
      "label": "Simpang Siliwangi - Adi Sucipta (Jalur Pawai)",
      "short_label": "S4 (Simpang Adi Sucipta)",
      "lat": -6.82484,
      "lng": 107.13742,
      "pos": [
        18.16,
        8.49
      ],
      "zone": "Rute Utama Pawai",
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Pengaturan Lalin: Akses Jl. Adi Sucipta ditutup petugas",
      "police_presence": "Penutupan Akses Jl. Adi Sucipta",
      "description": "Jalur Pawai: Persimpangan koridor tengah Jl. Siliwangi dengan Jl. Adi Sucipta."
    },
    {
      "id": 5,
      "label": "Simpang Siliwangi - Slamet Riyadi (Jalur Pawai)",
      "short_label": "S5 (Slamet Riyadi)",
      "lat": -6.82394,
      "lng": 107.13761,
      "pos": [
        18.49,
        9.9
      ],
      "zone": "Rute Utama Pawai",
      "fishbone_category": "Jaringan Jalan",
      "fishbone_cause": "Jaringan Jalan: Banyak persimpangan di sepanjang Jl. Siliwangi",
      "police_presence": "Pengawasan Mulut Jalan Sirip",
      "description": "Jalur Pawai: Simpang sirip pertokoan & pemukiman warga di Jl. Slamet Riyadi."
    },
    {
      "id": 6,
      "label": "Simpang Siliwangi - Gg. Mawar (Jalur Pawai)",
      "short_label": "S6 (Simpang Gg. Mawar)",
      "lat": -6.82315,
      "lng": 107.1381,
      "pos": [
        19.34,
        11.13
      ],
      "zone": "Rute Utama Pawai",
      "fishbone_category": "Jaringan Jalan",
      "fishbone_cause": "Jaringan Jalan: Keluar-masuk motor warga dari gang sempit",
      "police_presence": "Tanpa Pos Tetap (Rawan Terobosan)",
      "description": "Jalur Pawai: Pertemuan koridor Siliwangi dengan gang pemukiman padat Gg. Mawar."
    },
    {
      "id": 7,
      "label": "Simpang Siliwangi - Siti Jenab / Tugu Tauhid (Simpul Kritis)",
      "short_label": "S7 (Tugu Tauhid ⚠️)",
      "lat": -6.82131,
      "lng": 107.13874,
      "pos": [
        20.46,
        14
      ],
      "zone": "Rute Utama Pawai",
      "fishbone_category": "Rute Pawai & Jaringan Jalan",
      "fishbone_cause": "Rute Pawai & Jaringan Jalan: Pertemuan 5 arah di pusat kota (Simpul Kritis Utama)",
      "police_presence": "Pos Utama Satlantas Tugu Tauhid",
      "description": "Jalur Pawai (Simpul Kritis Utama): Pertemuan 5 arah di jantung kota menuju Pendopo & Masjid Agung."
    },
    {
      "id": 8,
      "label": "Pendopo Pemda Cianjur (FINISH)",
      "short_label": "S8 (Pendopo - Finish 🏁)",
      "lat": -6.82159,
      "lng": 107.13912,
      "pos": [
        21.13,
        13.57
      ],
      "zone": "Rute Utama Pawai",
      "fishbone_category": "Volume Peserta",
      "fishbone_cause": "Volume Peserta: Penumpukan akhir barisan pawai & jemaah Istigasah Kubra",
      "police_presence": "Pengamanan Terpadu Gerbang Pendopo",
      "description": "Finish: Titik akhir Pawai Obor & pusat pelaksanaan Istigasah Kubra di Pendopo Pemda Cianjur."
    },
    {
      "id": 9,
      "label": "Simpang KH. Abdullah - Pangeran Hidayatullah (Penutupan)",
      "short_label": "S9 (Simpang KH. Abdullah)",
      "lat": -6.82488,
      "lng": 107.12759,
      "pos": [
        1,
        8.43
      ],
      "zone": "Titik Penutupan Kepolisian",
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Pengaturan Lalin: Penutupan arus barat menuju lokasi pawai",
      "police_presence": "Barikade Penutupan Sektor Barat",
      "description": "Penutupan: Sekat barat arteri luar kota di Simpang KH. Abdullah Bin Nuh (BLK)."
    },
    {
      "id": 10,
      "label": "Simpang Adi Sucipta - Aria Cikondang (Penutupan)",
      "short_label": "S10 (Adi Sucipta - Cikondang)",
      "lat": -6.82563,
      "lng": 107.13893,
      "pos": [
        20.79,
        7.26
      ],
      "zone": "Titik Penutupan Kepolisian",
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Pengaturan Lalin: Penutupan Jl. Adi Sucipta & pengalihan arus",
      "police_presence": "Barikade Pengalihan Adi Sucipta",
      "description": "Penutupan: Sekat timur koridor Jl. Adi Sucipta dan buangan arus Jl. Aria Cikondang."
    },
    {
      "id": 11,
      "label": "Simpang Aria Cikondang - Siliwangi (Penutupan)",
      "short_label": "S11 (Cikondang - Siliwangi)",
      "lat": -6.82964,
      "lng": 107.13532,
      "pos": [
        14.49,
        1
      ],
      "zone": "Titik Penutupan Kepolisian",
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Pengaturan Lalin: Arus dari Makam Pahlawan diarahkan ke kiri",
      "police_presence": "Pos Pengalihan Sektor Selatan",
      "description": "Penutupan: Sekat selatan bawah Jl. Siliwangi, arus dari Makam Pahlawan dibelokkan."
    },
    {
      "id": 12,
      "label": "Simpang Mangunsarkoro - Siti Jenab (Penutupan)",
      "short_label": "S12 (Mangunsarkoro - Jenab)",
      "lat": -6.8222,
      "lng": 107.14134,
      "pos": [
        25,
        12.61
      ],
      "zone": "Titik Penutupan Kepolisian",
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Pengaturan Lalin: Jl. Mangunsarkoro ditutup situasional bila padat",
      "police_presence": "Penyekatan Situasional Mangunsarkoro",
      "description": "Penutupan: Sekat timur area Alun-Alun dan Pendopo di Simpang Mangunsarkoro - Siti Jenab."
    },
    {
      "id": 13,
      "label": "Simpang Siti Jenab - Oto Iskandardinata (Penutupan)",
      "short_label": "S13 (Jenab - Otista)",
      "lat": -6.82034,
      "lng": 107.1364,
      "pos": [
        16.38,
        15.52
      ],
      "zone": "Titik Penutupan Kepolisian",
      "fishbone_category": "Jaringan Jalan",
      "fishbone_cause": "Jaringan Jalan: Jl. Siti Jenab diprediksi padat, akses disekat",
      "police_presence": "Barikade Sekat Barat Laut Tugu Tauhid",
      "description": "Penutupan: Sekat barat laut Tugu Tauhid di Simpang Siti Jenab - Oto Iskandardinata."
    },
    {
      "id": 14,
      "label": "Jl. Imun Sulaiman (Jalan Sirip)",
      "short_label": "S14 (Jl. Imun Sulaiman)",
      "lat": -6.81875,
      "lng": 107.13998,
      "pos": [
        22.63,
        18
      ],
      "zone": "Jalan Sirip & Gang Warga",
      "fishbone_category": "Jaringan Jalan",
      "fishbone_cause": "Jaringan Jalan: Jalur alternatif terbatas & sempit",
      "police_presence": "Patroli Mobile (Tanpa Barikade Tetap)",
      "description": "Jalan Sirip: Akses lokal di utara Masjid Agung dengan lebar jalan terbatas."
    },
    {
      "id": 15,
      "label": "Simpang Oto Iskandardinata II - Ir. H. Djuanda (Penutupan)",
      "short_label": "S15 (Otista II - Djuanda)",
      "lat": -6.81811,
      "lng": 107.13728,
      "pos": [
        17.91,
        19
      ],
      "zone": "Titik Penutupan Kepolisian",
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Pengaturan Lalin: Penutupan berlapis sebelum masuk pusat kota",
      "police_presence": "Pos Penyekatan Lapis Luar Utara",
      "description": "Penutupan: Sekat utara lapis luar dari arah Salakopi (Jl. Ir. H. Djuanda)."
    },
    {
      "id": 16,
      "label": "Surya Kencana Atas Taman Prawatasari (Penutupan/Penyangga)",
      "short_label": "S16 (Surya Kencana Atas)",
      "lat": -6.82417,
      "lng": 107.13247,
      "pos": [
        9.52,
        9.54
      ],
      "zone": "Titik Penutupan Kepolisian",
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Pengaturan Lalin: Sterilisasi clear area sekitar Taman Prawatasari",
      "police_presence": "Barikade Sterilisasi Utara Prawatasari",
      "description": "Penutupan / Penyangga: Sterilisasi kendaraan dari arah utara Taman Prawatasari."
    },
    {
      "id": 17,
      "label": "Simpang Gg. Mawar - Mangunsarkoro (Gang)",
      "short_label": "S17 (Gg. Mawar - Mangunsarkoro)",
      "lat": -6.82472,
      "lng": 107.14043,
      "pos": [
        23.41,
        8.68
      ],
      "zone": "Jalan Sirip & Gang Warga",
      "fishbone_category": "Jaringan Jalan",
      "fishbone_cause": "Jaringan Jalan: Jalan tembus pemotor menghindari penyekatan utama",
      "police_presence": "Tanpa Penjagaan Tetap (Rawan Jalan Tikus)",
      "description": "Gang: Tembusan pemukiman warga dari Gg. Mawar dan Slamet Riyadi ke Jl. Mangunsarkoro."
    },
    {
      "id": 18,
      "label": "Gg. Al Ianah (Gang)",
      "short_label": "S18 (Gg. Al Ianah)",
      "lat": -6.81836,
      "lng": 107.13838,
      "pos": [
        19.83,
        18.61
      ],
      "zone": "Jalan Sirip & Gang Warga",
      "fishbone_category": "Jaringan Jalan",
      "fishbone_cause": "Jaringan Jalan: Gang sempit tanpa penjagaan langsung ke Tugu Tauhid",
      "police_presence": "Tanpa Penjagaan Tetap",
      "description": "Gang: Akses motor warga di utara Tugu Tauhid yang memotong langsung ke pusat keramaian."
    },
    {
      "id": 19,
      "label": "Masjid Agung Cianjur (Area Penonton)",
      "short_label": "S19 (Masjid Agung Cianjur)",
      "lat": -6.82092,
      "lng": 107.13926,
      "pos": [
        21.37,
        14.61
      ],
      "zone": "Area Konsentrasi Penonton",
      "fishbone_category": "Volume Peserta",
      "fishbone_cause": "Volume Peserta: Warga antusias memadati area alun-alun walau hujan",
      "police_presence": "Pengamanan Kerumunan Alun-Alun & Jemaah",
      "description": "Area Penonton: Konsentrasi warga & jemaah Istigasah Kubra di kawasan Masjid Agung Cianjur."
    }
  ],
  "edges": [
    {
      "from": 0,
      "to": 1,
      "weight": 8,
      "capacity": 25,
      "group": "parade_corridor",
      "description": "Volume Peserta: Massa tumpah ruah keluar dari titik kumpul start pukul 18.30",
      "path": [
        [
          -6.824562,
          107.132787
        ],
        [
          -6.824591,
          107.132769
        ],
        [
          -6.824607,
          107.132745
        ],
        [
          -6.824607,
          107.132597
        ],
        [
          -6.824671,
          107.132592
        ],
        [
          -6.824702,
          107.132595
        ],
        [
          -6.82482,
          107.132639
        ],
        [
          -6.825459,
          107.132903
        ],
        [
          -6.825486,
          107.132911
        ]
      ]
    },
    {
      "from": 1,
      "to": 2,
      "weight": 6,
      "capacity": 20,
      "group": "parade_corridor",
      "description": "Rute Pawai: Pergerakan awal barisan obor memasuki simpang jalan raya",
      "path": [
        [
          -6.825486,
          107.132911
        ],
        [
          -6.825568,
          107.132935
        ],
        [
          -6.82561,
          107.132943
        ],
        [
          -6.825674,
          107.132946
        ],
        [
          -6.825721,
          107.132941
        ],
        [
          -6.825834,
          107.132917
        ],
        [
          -6.825956,
          107.132883
        ],
        [
          -6.826046,
          107.132843
        ]
      ]
    },
    {
      "from": 2,
      "to": 3,
      "weight": 6,
      "capacity": 20,
      "group": "parade_corridor",
      "description": "Rute Pawai: Barisan melintasi jalan utama Pangeran Hidayatullah menuju Joglo Atas",
      "path": [
        [
          -6.826046,
          107.132843
        ],
        [
          -6.826061,
          107.132836
        ],
        [
          -6.826104,
          107.133237
        ],
        [
          -6.82614,
          107.133379
        ],
        [
          -6.826209,
          107.133604
        ],
        [
          -6.826282,
          107.133816
        ],
        [
          -6.82631,
          107.133931
        ],
        [
          -6.826364,
          107.13411
        ],
        [
          -6.826559,
          107.13462
        ],
        [
          -6.826577,
          107.134688
        ],
        [
          -6.826595,
          107.134795
        ],
        [
          -6.826659,
          107.135562
        ],
        [
          -6.826688,
          107.13584
        ],
        [
          -6.826762,
          107.136342
        ],
        [
          -6.826794,
          107.136446
        ]
      ]
    },
    {
      "from": 3,
      "to": 4,
      "weight": 6,
      "capacity": 20,
      "group": "parade_corridor",
      "description": "Jaringan Jalan: Titik belok Joglo Atas masuk koridor satu arah Jl. Siliwangi",
      "path": [
        [
          -6.826794,
          107.136446
        ],
        [
          -6.826801,
          107.13647
        ],
        [
          -6.826368,
          107.136649
        ],
        [
          -6.826136,
          107.136745
        ],
        [
          -6.825992,
          107.136806
        ],
        [
          -6.825848,
          107.136867
        ],
        [
          -6.825715,
          107.136926
        ],
        [
          -6.825278,
          107.137121
        ],
        [
          -6.825065,
          107.137207
        ],
        [
          -6.824804,
          107.137323
        ],
        [
          -6.824847,
          107.137417
        ]
      ]
    },
    {
      "from": 4,
      "to": 5,
      "weight": 5,
      "capacity": 18,
      "group": "parade_corridor",
      "description": "Rute Pawai: Arus pawai menyusuri koridor tengah Jl. Siliwangi",
      "path": [
        [
          -6.824847,
          107.137417
        ],
        [
          -6.824804,
          107.137323
        ],
        [
          -6.82452,
          107.137441
        ],
        [
          -6.824387,
          107.1375
        ],
        [
          -6.824005,
          107.137655
        ],
        [
          -6.82398,
          107.137593
        ]
      ]
    },
    {
      "from": 5,
      "to": 6,
      "weight": 5,
      "capacity": 18,
      "group": "parade_corridor",
      "description": "Jaringan Jalan: Rentetan persimpangan jalan sirip dan gang di Jl. Siliwangi",
      "path": [
        [
          -6.82398,
          107.137593
        ],
        [
          -6.824005,
          107.137655
        ],
        [
          -6.823902,
          107.137698
        ],
        [
          -6.823725,
          107.137766
        ],
        [
          -6.82359,
          107.13782
        ],
        [
          -6.823369,
          107.137908
        ],
        [
          -6.82334,
          107.137921
        ],
        [
          -6.823147,
          107.13801
        ],
        [
          -6.823089,
          107.138035
        ],
        [
          -6.823134,
          107.13811
        ]
      ]
    },
    {
      "from": 6,
      "to": 7,
      "weight": 8,
      "capacity": 20,
      "group": "parade_corridor",
      "description": "Jaringan Jalan: Mendekati botol leher (bottleneck) utama Tugu Tauhid",
      "path": [
        [
          -6.823134,
          107.13811
        ],
        [
          -6.823089,
          107.138035
        ],
        [
          -6.822509,
          107.138272
        ],
        [
          -6.822312,
          107.138354
        ],
        [
          -6.822069,
          107.138454
        ],
        [
          -6.821467,
          107.138704
        ],
        [
          -6.821398,
          107.138693
        ],
        [
          -6.821259,
          107.138678
        ],
        [
          -6.821286,
          107.138749
        ]
      ]
    },
    {
      "from": 7,
      "to": 8,
      "weight": 9,
      "capacity": 25,
      "group": "parade_corridor",
      "description": "Rute Pawai & Volume: Simpul kritis utama menuju titik akhir Istigasah Kubra",
      "path": [
        [
          -6.821286,
          107.138749
        ],
        [
          -6.821323,
          107.138847
        ],
        [
          -6.821349,
          107.138917
        ],
        [
          -6.821368,
          107.138967
        ],
        [
          -6.821401,
          107.139058
        ],
        [
          -6.821469,
          107.139031
        ],
        [
          -6.82149,
          107.139027
        ],
        [
          -6.821508,
          107.139031
        ],
        [
          -6.821556,
          107.139136
        ]
      ]
    },
    {
      "from": 16,
      "to": 0,
      "weight": 3,
      "capacity": 10,
      "group": "diversion_artery",
      "description": "Pengaturan Lalin: Sterilisasi clear area mulai 16.00 WIB, dijaga petugas",
      "path": [
        [
          -6.824153,
          107.132485
        ],
        [
          -6.824195,
          107.132533
        ],
        [
          -6.82425,
          107.13259
        ],
        [
          -6.824269,
          107.1326
        ],
        [
          -6.82443,
          107.132606
        ],
        [
          -6.824607,
          107.132597
        ],
        [
          -6.824607,
          107.132745
        ],
        [
          -6.824591,
          107.132769
        ],
        [
          -6.824562,
          107.132787
        ],
        [
          -6.824562,
          107.132787
        ]
      ]
    },
    {
      "from": 16,
      "to": 1,
      "weight": 3,
      "capacity": 10,
      "group": "diversion_artery",
      "description": "Pengaturan Lalin: Penyekatan arus kendaraan dari utara Taman Prawatasari",
      "path": [
        [
          -6.824153,
          107.132485
        ],
        [
          -6.824195,
          107.132533
        ],
        [
          -6.82425,
          107.13259
        ],
        [
          -6.824269,
          107.1326
        ],
        [
          -6.82443,
          107.132606
        ],
        [
          -6.824607,
          107.132597
        ],
        [
          -6.824671,
          107.132592
        ],
        [
          -6.824702,
          107.132595
        ],
        [
          -6.82482,
          107.132639
        ],
        [
          -6.825459,
          107.132903
        ],
        [
          -6.825486,
          107.132911
        ]
      ]
    },
    {
      "from": 9,
      "to": 2,
      "weight": 2,
      "capacity": 12,
      "group": "diversion_artery",
      "description": "Pengaturan Lalin: Penutupan penuh di simpang luar KH. Abdullah oleh Satlantas",
      "path": [
        [
          -6.824863,
          107.127593
        ],
        [
          -6.824938,
          107.127965
        ],
        [
          -6.824969,
          107.128216
        ],
        [
          -6.82499,
          107.1285
        ],
        [
          -6.825012,
          107.128762
        ],
        [
          -6.825031,
          107.128887
        ],
        [
          -6.825043,
          107.128967
        ],
        [
          -6.825107,
          107.129279
        ],
        [
          -6.825184,
          107.129589
        ],
        [
          -6.825261,
          107.130003
        ],
        [
          -6.825289,
          107.130151
        ],
        [
          -6.825312,
          107.130232
        ],
        [
          -6.825342,
          107.130367
        ],
        [
          -6.825389,
          107.130529
        ],
        [
          -6.825512,
          107.130939
        ],
        [
          -6.825618,
          107.131347
        ],
        [
          -6.825722,
          107.131687
        ],
        [
          -6.825776,
          107.131866
        ],
        [
          -6.825809,
          107.131974
        ],
        [
          -6.825912,
          107.132311
        ],
        [
          -6.826061,
          107.132836
        ],
        [
          -6.826046,
          107.132843
        ]
      ]
    },
    {
      "from": 9,
      "to": 16,
      "weight": 2,
      "capacity": 10,
      "group": "diversion_artery",
      "description": "Pengaturan Lalin: Arus pengalihan kendaraan di luar sabuk clear area barat",
      "path": [
        [
          -6.824863,
          107.127593
        ],
        [
          -6.824938,
          107.127965
        ],
        [
          -6.824969,
          107.128216
        ],
        [
          -6.82499,
          107.1285
        ],
        [
          -6.825012,
          107.128762
        ],
        [
          -6.825031,
          107.128887
        ],
        [
          -6.824956,
          107.128911
        ],
        [
          -6.824936,
          107.128963
        ],
        [
          -6.824862,
          107.129031
        ],
        [
          -6.82479,
          107.129103
        ],
        [
          -6.824777,
          107.12913
        ],
        [
          -6.824705,
          107.129221
        ],
        [
          -6.824611,
          107.129309
        ],
        [
          -6.824587,
          107.129333
        ],
        [
          -6.824557,
          107.129346
        ],
        [
          -6.824511,
          107.129353
        ],
        [
          -6.824456,
          107.129359
        ],
        [
          -6.824426,
          107.129357
        ],
        [
          -6.824373,
          107.129327
        ],
        [
          -6.824359,
          107.129324
        ],
        [
          -6.824342,
          107.129333
        ],
        [
          -6.824317,
          107.129384
        ],
        [
          -6.8242,
          107.129483
        ],
        [
          -6.824139,
          107.129566
        ],
        [
          -6.824055,
          107.129601
        ],
        [
          -6.824013,
          107.129608
        ],
        [
          -6.824,
          107.1296
        ],
        [
          -6.823894,
          107.129644
        ],
        [
          -6.823881,
          107.129599
        ],
        [
          -6.82383,
          107.12963
        ],
        [
          -6.823641,
          107.129726
        ],
        [
          -6.823525,
          107.129786
        ],
        [
          -6.823437,
          107.129829
        ],
        [
          -6.823169,
          107.12993
        ],
        [
          -6.823017,
          107.130002
        ],
        [
          -6.822901,
          107.130065
        ],
        [
          -6.822703,
          107.130178
        ],
        [
          -6.822599,
          107.130234
        ],
        [
          -6.822534,
          107.130275
        ],
        [
          -6.822498,
          107.130319
        ],
        [
          -6.822478,
          107.130343
        ],
        [
          -6.822485,
          107.130378
        ],
        [
          -6.82249,
          107.130398
        ],
        [
          -6.822526,
          107.130475
        ],
        [
          -6.82258,
          107.130586
        ],
        [
          -6.822598,
          107.130612
        ],
        [
          -6.822669,
          107.130767
        ],
        [
          -6.822672,
          107.130779
        ],
        [
          -6.822779,
          107.131146
        ],
        [
          -6.822804,
          107.131208
        ],
        [
          -6.82285,
          107.131304
        ],
        [
          -6.822872,
          107.131379
        ],
        [
          -6.822895,
          107.13149
        ],
        [
          -6.822922,
          107.131704
        ],
        [
          -6.822921,
          107.131757
        ],
        [
          -6.822919,
          107.131851
        ],
        [
          -6.822904,
          107.131908
        ],
        [
          -6.822866,
          107.131999
        ],
        [
          -6.822838,
          107.132052
        ],
        [
          -6.822781,
          107.132138
        ],
        [
          -6.822898,
          107.132114
        ],
        [
          -6.823123,
          107.132071
        ],
        [
          -6.823249,
          107.132194
        ],
        [
          -6.823275,
          107.132229
        ],
        [
          -6.823326,
          107.132339
        ],
        [
          -6.823482,
          107.132631
        ],
        [
          -6.823518,
          107.132707
        ],
        [
          -6.824127,
          107.132456
        ],
        [
          -6.824153,
          107.132485
        ]
      ]
    },
    {
      "from": 11,
      "to": 2,
      "weight": 3,
      "capacity": 12,
      "group": "diversion_artery",
      "description": "Pengaturan Lalin: Arus dari Makam Pahlawan dibelokkan ke kiri (Joglo)",
      "path": [
        [
          -6.82964,
          107.13532
        ],
        [
          -6.829526,
          107.135366
        ],
        [
          -6.829466,
          107.135389
        ],
        [
          -6.829401,
          107.135416
        ],
        [
          -6.829335,
          107.135443
        ],
        [
          -6.82915,
          107.135523
        ],
        [
          -6.829048,
          107.135567
        ],
        [
          -6.828968,
          107.135596
        ],
        [
          -6.828829,
          107.135657
        ],
        [
          -6.828555,
          107.135761
        ],
        [
          -6.828376,
          107.135835
        ],
        [
          -6.828263,
          107.13588
        ],
        [
          -6.828148,
          107.135929
        ],
        [
          -6.827738,
          107.136107
        ],
        [
          -6.827732,
          107.136111
        ],
        [
          -6.827314,
          107.136271
        ],
        [
          -6.827177,
          107.13632
        ],
        [
          -6.82706,
          107.136275
        ],
        [
          -6.826964,
          107.136277
        ],
        [
          -6.826869,
          107.136287
        ],
        [
          -6.826762,
          107.136342
        ],
        [
          -6.826688,
          107.13584
        ],
        [
          -6.826659,
          107.135562
        ],
        [
          -6.826595,
          107.134795
        ],
        [
          -6.826577,
          107.134688
        ],
        [
          -6.826559,
          107.13462
        ],
        [
          -6.826364,
          107.13411
        ],
        [
          -6.82631,
          107.133931
        ],
        [
          -6.826282,
          107.133816
        ],
        [
          -6.826209,
          107.133604
        ],
        [
          -6.82614,
          107.133379
        ],
        [
          -6.826104,
          107.133237
        ],
        [
          -6.826061,
          107.132836
        ],
        [
          -6.826046,
          107.132843
        ]
      ]
    },
    {
      "from": 11,
      "to": 3,
      "weight": 3,
      "capacity": 12,
      "group": "diversion_artery",
      "description": "Pengaturan Lalin: Penutupan akses selatan Siliwangi menuju Joglo Atas",
      "path": [
        [
          -6.82964,
          107.13532
        ],
        [
          -6.829526,
          107.135366
        ],
        [
          -6.829466,
          107.135389
        ],
        [
          -6.829401,
          107.135416
        ],
        [
          -6.829335,
          107.135443
        ],
        [
          -6.82915,
          107.135523
        ],
        [
          -6.829048,
          107.135567
        ],
        [
          -6.828968,
          107.135596
        ],
        [
          -6.828829,
          107.135657
        ],
        [
          -6.828555,
          107.135761
        ],
        [
          -6.828376,
          107.135835
        ],
        [
          -6.828263,
          107.13588
        ],
        [
          -6.828148,
          107.135929
        ],
        [
          -6.827738,
          107.136107
        ],
        [
          -6.827732,
          107.136111
        ],
        [
          -6.827314,
          107.136271
        ],
        [
          -6.827177,
          107.13632
        ],
        [
          -6.826939,
          107.136417
        ],
        [
          -6.826801,
          107.13647
        ],
        [
          -6.826794,
          107.136446
        ]
      ]
    },
    {
      "from": 11,
      "to": 10,
      "weight": 4,
      "capacity": 12,
      "group": "diversion_artery",
      "description": "Jaringan Jalan: Jalur pengalihan kendaraan memutar lewat koridor Cikondang",
      "path": [
        [
          -6.82964,
          107.13532
        ],
        [
          -6.829686,
          107.135301
        ],
        [
          -6.829658,
          107.135489
        ],
        [
          -6.829697,
          107.135788
        ],
        [
          -6.82972,
          107.13612
        ],
        [
          -6.829723,
          107.136245
        ],
        [
          -6.82971,
          107.136548
        ],
        [
          -6.82954,
          107.136654
        ],
        [
          -6.829492,
          107.13668
        ],
        [
          -6.829276,
          107.136813
        ],
        [
          -6.828841,
          107.13708
        ],
        [
          -6.828813,
          107.137122
        ],
        [
          -6.828781,
          107.137193
        ],
        [
          -6.828709,
          107.137438
        ],
        [
          -6.828634,
          107.137641
        ],
        [
          -6.828494,
          107.137696
        ],
        [
          -6.828243,
          107.137806
        ],
        [
          -6.827915,
          107.137932
        ],
        [
          -6.827535,
          107.138067
        ],
        [
          -6.827337,
          107.138104
        ],
        [
          -6.827001,
          107.138188
        ],
        [
          -6.826906,
          107.138217
        ],
        [
          -6.82684,
          107.138244
        ],
        [
          -6.826785,
          107.138274
        ],
        [
          -6.826632,
          107.138381
        ],
        [
          -6.826487,
          107.138486
        ],
        [
          -6.826351,
          107.138573
        ],
        [
          -6.826182,
          107.138672
        ],
        [
          -6.825928,
          107.138803
        ],
        [
          -6.825763,
          107.138889
        ],
        [
          -6.825726,
          107.138908
        ],
        [
          -6.825635,
          107.138878
        ],
        [
          -6.825579,
          107.138864
        ],
        [
          -6.825596,
          107.138907
        ],
        [
          -6.825602,
          107.138936
        ]
      ]
    },
    {
      "from": 10,
      "to": 3,
      "weight": 4,
      "capacity": 12,
      "group": "diversion_artery",
      "description": "Jaringan Jalan: Potensi tekanan arus buangan dari Cikondang ke simpang Siliwangi",
      "path": [
        [
          -6.825602,
          107.138936
        ],
        [
          -6.825596,
          107.138907
        ],
        [
          -6.825579,
          107.138864
        ],
        [
          -6.825635,
          107.138878
        ],
        [
          -6.825726,
          107.138908
        ],
        [
          -6.825763,
          107.138889
        ],
        [
          -6.825928,
          107.138803
        ],
        [
          -6.826182,
          107.138672
        ],
        [
          -6.826351,
          107.138573
        ],
        [
          -6.826487,
          107.138486
        ],
        [
          -6.826632,
          107.138381
        ],
        [
          -6.826785,
          107.138274
        ],
        [
          -6.82684,
          107.138244
        ],
        [
          -6.826906,
          107.138217
        ],
        [
          -6.827001,
          107.138188
        ],
        [
          -6.827337,
          107.138104
        ],
        [
          -6.827305,
          107.138017
        ],
        [
          -6.827284,
          107.137937
        ],
        [
          -6.82725,
          107.137789
        ],
        [
          -6.827225,
          107.137652
        ],
        [
          -6.827197,
          107.137544
        ],
        [
          -6.826942,
          107.136841
        ],
        [
          -6.826888,
          107.136681
        ],
        [
          -6.826849,
          107.136578
        ],
        [
          -6.826822,
          107.136511
        ],
        [
          -6.826801,
          107.13647
        ],
        [
          -6.826794,
          107.136446
        ]
      ]
    },
    {
      "from": 4,
      "to": 10,
      "weight": 3,
      "capacity": 12,
      "group": "diversion_artery",
      "description": "Pengaturan Lalin: Ruas Jl. Adi Sucipta ditutup dan dijaga personel polisi",
      "path": [
        [
          -6.824847,
          107.137417
        ],
        [
          -6.825137,
          107.138045
        ],
        [
          -6.825205,
          107.13818
        ],
        [
          -6.82528,
          107.138329
        ],
        [
          -6.82539,
          107.138536
        ],
        [
          -6.825501,
          107.138743
        ],
        [
          -6.825579,
          107.138864
        ],
        [
          -6.825596,
          107.138907
        ],
        [
          -6.825602,
          107.138936
        ]
      ]
    },
    {
      "from": 5,
      "to": 17,
      "weight": 7,
      "capacity": 8,
      "group": "gang_conflict",
      "description": "Jaringan Jalan: Akses jalan sempit tanpa lampu merah tembus ke wilayah timur",
      "path": [
        [
          -6.82398,
          107.137593
        ],
        [
          -6.824005,
          107.137655
        ],
        [
          -6.823902,
          107.137698
        ],
        [
          -6.823725,
          107.137766
        ],
        [
          -6.82359,
          107.13782
        ],
        [
          -6.823369,
          107.137908
        ],
        [
          -6.82334,
          107.137921
        ],
        [
          -6.823147,
          107.13801
        ],
        [
          -6.823089,
          107.138035
        ],
        [
          -6.823185,
          107.138193
        ],
        [
          -6.823257,
          107.1383
        ],
        [
          -6.823273,
          107.138331
        ],
        [
          -6.823361,
          107.138472
        ],
        [
          -6.823645,
          107.138943
        ],
        [
          -6.823661,
          107.138952
        ],
        [
          -6.823681,
          107.138958
        ],
        [
          -6.823801,
          107.138929
        ],
        [
          -6.823822,
          107.138937
        ],
        [
          -6.823844,
          107.138955
        ],
        [
          -6.824139,
          107.139479
        ],
        [
          -6.824237,
          107.139654
        ],
        [
          -6.824509,
          107.140061
        ],
        [
          -6.824711,
          107.140372
        ],
        [
          -6.82474,
          107.140417
        ]
      ]
    },
    {
      "from": 6,
      "to": 17,
      "weight": 8,
      "capacity": 6,
      "group": "gang_conflict",
      "description": "Jaringan Jalan: Gang sempit padat pemotor warga yang memotong langsung Siliwangi",
      "path": [
        [
          -6.823134,
          107.13811
        ],
        [
          -6.823185,
          107.138193
        ],
        [
          -6.823257,
          107.1383
        ],
        [
          -6.823273,
          107.138331
        ],
        [
          -6.823361,
          107.138472
        ],
        [
          -6.823645,
          107.138943
        ],
        [
          -6.823661,
          107.138952
        ],
        [
          -6.823681,
          107.138958
        ],
        [
          -6.823801,
          107.138929
        ],
        [
          -6.823822,
          107.138937
        ],
        [
          -6.823844,
          107.138955
        ],
        [
          -6.824139,
          107.139479
        ],
        [
          -6.824237,
          107.139654
        ],
        [
          -6.824509,
          107.140061
        ],
        [
          -6.824711,
          107.140372
        ],
        [
          -6.82474,
          107.140417
        ]
      ]
    },
    {
      "from": 10,
      "to": 17,
      "weight": 5,
      "capacity": 10,
      "group": "gang_conflict",
      "description": "Jaringan Jalan: Pergerakan kendaraan lokal mencari jalan tikus via Mangunsarkoro",
      "path": [
        [
          -6.825602,
          107.138936
        ],
        [
          -6.825605,
          107.138952
        ],
        [
          -6.825616,
          107.139044
        ],
        [
          -6.825494,
          107.139307
        ],
        [
          -6.825436,
          107.139495
        ],
        [
          -6.825418,
          107.139632
        ],
        [
          -6.825409,
          107.139741
        ],
        [
          -6.825393,
          107.139873
        ],
        [
          -6.825337,
          107.13999
        ],
        [
          -6.825252,
          107.140115
        ],
        [
          -6.825212,
          107.140178
        ],
        [
          -6.825135,
          107.140277
        ],
        [
          -6.824994,
          107.140392
        ],
        [
          -6.824934,
          107.140427
        ],
        [
          -6.824786,
          107.14049
        ],
        [
          -6.82474,
          107.140417
        ]
      ]
    },
    {
      "from": 17,
      "to": 12,
      "weight": 6,
      "capacity": 10,
      "group": "diversion_artery",
      "description": "Pengaturan Lalin: Koridor Mangunsarkoro padat dan ditutup situasional bila macet",
      "path": [
        [
          -6.82474,
          107.140417
        ],
        [
          -6.824786,
          107.14049
        ],
        [
          -6.824474,
          107.140609
        ],
        [
          -6.824077,
          107.140759
        ],
        [
          -6.824071,
          107.140762
        ],
        [
          -6.823928,
          107.140813
        ],
        [
          -6.823743,
          107.140886
        ],
        [
          -6.823058,
          107.141146
        ],
        [
          -6.822238,
          107.141449
        ],
        [
          -6.822202,
          107.141339
        ]
      ]
    },
    {
      "from": 12,
      "to": 8,
      "weight": 3,
      "capacity": 12,
      "group": "diversion_artery",
      "description": "Pengaturan Lalin: Penyekatan barikade polisi di timur gerbang Pendopo",
      "path": [
        [
          -6.822202,
          107.141339
        ],
        [
          -6.821963,
          107.140622
        ],
        [
          -6.821865,
          107.14033
        ],
        [
          -6.821835,
          107.14024
        ],
        [
          -6.82183,
          107.140221
        ],
        [
          -6.821801,
          107.140137
        ],
        [
          -6.821731,
          107.139928
        ],
        [
          -6.821568,
          107.139482
        ],
        [
          -6.821521,
          107.139357
        ],
        [
          -6.821494,
          107.139289
        ],
        [
          -6.821579,
          107.139245
        ],
        [
          -6.821588,
          107.139225
        ],
        [
          -6.821586,
          107.1392
        ],
        [
          -6.821556,
          107.139136
        ]
      ]
    },
    {
      "from": 7,
      "to": 19,
      "weight": 9,
      "capacity": 15,
      "group": "gang_conflict",
      "description": "Volume Peserta: Titik temu paling padat antara barisan obor & penonton alun-alun",
      "path": [
        [
          -6.821286,
          107.138749
        ],
        [
          -6.821323,
          107.138847
        ],
        [
          -6.821349,
          107.138917
        ],
        [
          -6.82098,
          107.139059
        ],
        [
          -6.820857,
          107.139112
        ]
      ]
    },
    {
      "from": 8,
      "to": 19,
      "weight": 8,
      "capacity": 15,
      "group": "gang_conflict",
      "description": "Volume Peserta: Pergerakan ribuan jemaah Istigasah Kubra antara Masjid & Pendopo",
      "path": [
        [
          -6.821556,
          107.139136
        ],
        [
          -6.821508,
          107.139031
        ],
        [
          -6.82149,
          107.139027
        ],
        [
          -6.821469,
          107.139031
        ],
        [
          -6.821401,
          107.139058
        ],
        [
          -6.821368,
          107.138967
        ],
        [
          -6.821349,
          107.138917
        ],
        [
          -6.82098,
          107.139059
        ],
        [
          -6.820857,
          107.139112
        ]
      ]
    },
    {
      "from": 12,
      "to": 19,
      "weight": 5,
      "capacity": 10,
      "group": "gang_conflict",
      "description": "Jaringan Jalan: Pertemuan arus Jl. Siti Jenab timur dengan area parkir jemaah",
      "path": [
        [
          -6.822202,
          107.141339
        ],
        [
          -6.821963,
          107.140622
        ],
        [
          -6.821865,
          107.14033
        ],
        [
          -6.821835,
          107.14024
        ],
        [
          -6.82183,
          107.140221
        ],
        [
          -6.821801,
          107.140137
        ],
        [
          -6.821731,
          107.139928
        ],
        [
          -6.821568,
          107.139482
        ],
        [
          -6.821521,
          107.139357
        ],
        [
          -6.821494,
          107.139289
        ],
        [
          -6.821401,
          107.139058
        ],
        [
          -6.821368,
          107.138967
        ],
        [
          -6.821349,
          107.138917
        ],
        [
          -6.82098,
          107.139059
        ],
        [
          -6.820857,
          107.139112
        ]
      ]
    },
    {
      "from": 13,
      "to": 7,
      "weight": 3,
      "capacity": 12,
      "group": "diversion_artery",
      "description": "Pengaturan Lalin: Penyekatan arus dari barat laut menuju Tugu Tauhid",
      "path": [
        [
          -6.820348,
          107.13639
        ],
        [
          -6.820381,
          107.136416
        ],
        [
          -6.820426,
          107.136479
        ],
        [
          -6.820487,
          107.136636
        ],
        [
          -6.820697,
          107.137182
        ],
        [
          -6.820836,
          107.137565
        ],
        [
          -6.820883,
          107.137689
        ],
        [
          -6.821028,
          107.138068
        ],
        [
          -6.821072,
          107.138183
        ],
        [
          -6.821113,
          107.138305
        ],
        [
          -6.821259,
          107.138678
        ],
        [
          -6.821286,
          107.138749
        ]
      ]
    },
    {
      "from": 15,
      "to": 13,
      "weight": 2,
      "capacity": 12,
      "group": "diversion_artery",
      "description": "Pengaturan Lalin: Penyekatan lapis luar di koridor Ir. H. Djuanda",
      "path": [
        [
          -6.818115,
          107.13729
        ],
        [
          -6.818768,
          107.136993
        ],
        [
          -6.818899,
          107.136933
        ],
        [
          -6.819025,
          107.136875
        ],
        [
          -6.819373,
          107.136737
        ],
        [
          -6.81952,
          107.136678
        ],
        [
          -6.819661,
          107.136619
        ],
        [
          -6.819958,
          107.136497
        ],
        [
          -6.819991,
          107.136484
        ],
        [
          -6.820217,
          107.136391
        ],
        [
          -6.820289,
          107.136377
        ],
        [
          -6.820334,
          107.136379
        ],
        [
          -6.820348,
          107.13639
        ]
      ]
    },
    {
      "from": 15,
      "to": 18,
      "weight": 6,
      "capacity": 8,
      "group": "gang_conflict",
      "description": "Jaringan Jalan: Pemotor menghindari penyekatan jalan utama masuk ke Gg. Al Ianah",
      "path": [
        [
          -6.818115,
          107.13729
        ],
        [
          -6.818027,
          107.13733
        ],
        [
          -6.818119,
          107.137658
        ],
        [
          -6.818152,
          107.13781
        ],
        [
          -6.818198,
          107.138021
        ],
        [
          -6.818243,
          107.138196
        ],
        [
          -6.818295,
          107.1384
        ],
        [
          -6.818361,
          107.138383
        ]
      ]
    },
    {
      "from": 18,
      "to": 7,
      "weight": 7,
      "capacity": 6,
      "group": "gang_conflict",
      "description": "Jaringan Jalan: Mulut gang sempit keluar tepat di dekat simpul kritis Tugu Tauhid",
      "path": [
        [
          -6.818361,
          107.138383
        ],
        [
          -6.818295,
          107.1384
        ],
        [
          -6.818316,
          107.138479
        ],
        [
          -6.818387,
          107.138797
        ],
        [
          -6.818409,
          107.138889
        ],
        [
          -6.818496,
          107.13887
        ],
        [
          -6.818783,
          107.138827
        ],
        [
          -6.818835,
          107.138828
        ],
        [
          -6.81889,
          107.138836
        ],
        [
          -6.818934,
          107.138868
        ],
        [
          -6.818951,
          107.138875
        ],
        [
          -6.818996,
          107.138882
        ],
        [
          -6.819014,
          107.138884
        ],
        [
          -6.819107,
          107.138868
        ],
        [
          -6.819127,
          107.138883
        ],
        [
          -6.819149,
          107.138947
        ],
        [
          -6.819169,
          107.139065
        ],
        [
          -6.819185,
          107.139168
        ],
        [
          -6.819237,
          107.139382
        ],
        [
          -6.819235,
          107.139424
        ],
        [
          -6.819241,
          107.13946
        ],
        [
          -6.819302,
          107.139635
        ],
        [
          -6.819364,
          107.139793
        ],
        [
          -6.819647,
          107.139681
        ],
        [
          -6.819866,
          107.139625
        ],
        [
          -6.819942,
          107.139606
        ],
        [
          -6.8205,
          107.13947
        ],
        [
          -6.82045,
          107.139286
        ],
        [
          -6.82098,
          107.139059
        ],
        [
          -6.821349,
          107.138917
        ],
        [
          -6.821323,
          107.138847
        ],
        [
          -6.821286,
          107.138749
        ]
      ]
    },
    {
      "from": 18,
      "to": 14,
      "weight": 5,
      "capacity": 8,
      "group": "gang_conflict",
      "description": "Jaringan Jalan: Konektivitas antar-gang dan jalan sirip di utara pusat kota",
      "path": [
        [
          -6.818361,
          107.138383
        ],
        [
          -6.818295,
          107.1384
        ],
        [
          -6.818316,
          107.138479
        ],
        [
          -6.818387,
          107.138797
        ],
        [
          -6.818409,
          107.138889
        ],
        [
          -6.818584,
          107.1396
        ],
        [
          -6.818688,
          107.140025
        ],
        [
          -6.818757,
          107.140001
        ]
      ]
    },
    {
      "from": 14,
      "to": 19,
      "weight": 7,
      "capacity": 10,
      "group": "gang_conflict",
      "description": "Jaringan Jalan: Jalan sirip tanpa penjagaan ketat langsung menuju kerumunan Masjid Agung",
      "path": [
        [
          -6.818757,
          107.140001
        ],
        [
          -6.819364,
          107.139793
        ],
        [
          -6.819647,
          107.139681
        ],
        [
          -6.819866,
          107.139625
        ],
        [
          -6.819942,
          107.139606
        ],
        [
          -6.8205,
          107.13947
        ],
        [
          -6.82045,
          107.139286
        ],
        [
          -6.820857,
          107.139112
        ]
      ]
    },
    {
      "from": 14,
      "to": 12,
      "weight": 4,
      "capacity": 10,
      "group": "gang_conflict",
      "description": "Jaringan Jalan: Jalur alternatif terbatas di sisi timur laut alun-alun",
      "path": [
        [
          -6.818757,
          107.140001
        ],
        [
          -6.819364,
          107.139793
        ],
        [
          -6.819647,
          107.139681
        ],
        [
          -6.819866,
          107.139625
        ],
        [
          -6.819942,
          107.139606
        ],
        [
          -6.8205,
          107.13947
        ],
        [
          -6.82045,
          107.139286
        ],
        [
          -6.82098,
          107.139059
        ],
        [
          -6.821349,
          107.138917
        ],
        [
          -6.821368,
          107.138967
        ],
        [
          -6.821401,
          107.139058
        ],
        [
          -6.821494,
          107.139289
        ],
        [
          -6.821521,
          107.139357
        ],
        [
          -6.821568,
          107.139482
        ],
        [
          -6.821731,
          107.139928
        ],
        [
          -6.821801,
          107.140137
        ],
        [
          -6.82183,
          107.140221
        ],
        [
          -6.821835,
          107.14024
        ],
        [
          -6.821865,
          107.14033
        ],
        [
          -6.821963,
          107.140622
        ],
        [
          -6.822202,
          107.141339
        ]
      ]
    }
  ],
  "execution_plan": {
    "start_node": 0,
    "goal_node": 8,
    "events": [
      {
        "step": 1,
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 1,
        "time_wib": "18.15 WIB",
        "title": "Pelepasan Pawai: Pintu Keluar Taman Prawatasari",
        "parade_nodes": [
          0,
          1
        ],
        "description": "Barisan Pawai Obor bergerak keluar dari titik kumpul Taman Prawatasari (Node 0) menuju Depan Taman Prawatasari (Node 1). Penyangga Surya Kencana Atas (Node 16) dikunci merah."
      },
      {
        "step": 2,
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 2,
        "time_wib": "18.25 WIB",
        "title": "Manuver Perempatan Surya Kencana",
        "parade_nodes": [
          0,
          1,
          2
        ],
        "description": "Rombongan memasuki Perempatan Surya Kencana (Node 2) ke arah timur. Sekat barat Simpang KH. Abdullah (Node 9) dan sekat selatan Aria Cikondang (Node 11) menahan arus kendaraan."
      },
      {
        "step": 3,
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 3,
        "time_wib": "18.35 WIB",
        "title": "Belokan Masuk Koridor Jl. Siliwangi (Joglo Atas)",
        "parade_nodes": [
          1,
          2,
          3
        ],
        "description": "Barisan obor tiba di Simpang Pangeran Hidayatullah - Siliwangi (Node 3). Arus dari Simpang Aria Cikondang (Node 11) dan Adi Sucipta (Node 10) diblokir penuh."
      },
      {
        "step": 4,
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 4,
        "time_wib": "18.45 WIB",
        "title": "Perlintasan Simpang Siliwangi - Adi Sucipta",
        "parade_nodes": [
          2,
          3,
          4
        ],
        "description": "Pawai melintasi Simpang Siliwangi - Adi Sucipta (Node 4). Petugas Satlantas menutup akses Jl. Adi Sucipta (Node 10) agar tidak memotong koridor pawai."
      },
      {
        "step": 5,
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 5,
        "time_wib": "18.55 WIB",
        "title": "Penanganan Simpang Siliwangi - Slamet Riyadi",
        "parade_nodes": [
          3,
          4,
          5
        ],
        "description": "Rombongan melewati Simpang Slamet Riyadi (Node 5). Akses kendaraan warga yang hendak menembus ke Simpang Gg. Mawar - Mangunsarkoro (Node 17) ditahan."
      },
      {
        "step": 6,
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 6,
        "time_wib": "19.05 WIB",
        "title": "Sterilisasi Mulut Gang Pemukiman Gg. Mawar",
        "parade_nodes": [
          4,
          5,
          6
        ],
        "description": "Meski hujan mulai turun pukul 19.05 WIB, barisan obor terus bergerak melewati Simpang Siliwangi - Gg. Mawar (Node 6). Motor warga dari Gg. Mawar (Node 17) dilarang menyebrang."
      },
      {
        "step": 7,
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 7,
        "time_wib": "19.15 WIB",
        "title": "Simpul Kritis Utama: Simpang Tugu Tauhid",
        "parade_nodes": [
          5,
          6,
          7
        ],
        "description": "Rombongan Pawai Obor tiba di Simpang Siliwangi - Siti Jenab / Tugu Tauhid (Node 7, derajat konflik tertinggi deg=5) yang berbatasan langsung dengan Masjid Agung (Node 19), Gg. Al Ianah (Node 18), dan Otista (Node 13)!"
      },
      {
        "step": 8,
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 8,
        "time_wib": "19.30 WIB",
        "title": "Ketibaan Finish: Pendopo Pemda & Istigasah Kubra",
        "parade_nodes": [
          6,
          7,
          8
        ],
        "description": "Barisan pawai obor memasuki Pendopo Pemda Cianjur (Node 8 - FINISH) untuk mengikuti Istigasah Kubra bersama ribuan jemaah di Masjid Agung (Node 19). Sekat Mangunsarkoro (Node 12) dijaga ketat."
      }
    ]
  }
};
