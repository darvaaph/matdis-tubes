window.SCENARIO_DATA = {
  "case_id": "case_10_pawai_obor",
  "title": "Traffic Conflict Scheduling: Rekayasa Arus Pawai Obor 1 Muharam & Istigasah Kubra Cianjur",
  "group_info": {
    "course": "Matematika Diskrit Lanjut 2026",
    "group": "Kelompok 4 — Kelas 2A-D4 Teknik Informatika",
    "members": ["NIM 005", "NIM 007", "NIM 014", "NIM 030"],
    "lecturer": "Trisna Gelar A.",
    "location": "Koridor Lapangan Prawatasari (Joglo) -> Jl. Siliwangi -> Tugu Tauhid -> Pendopo Pemkab Cianjur (~1,5 km)"
  },
  "fishbone_categories": [
    {
      "id": "volume_peserta",
      "name": "Volume Peserta",
      "causes": [
        "Jumlah peserta pawai membludak & memadati jalan protokol (18.00-18.30 WIB)",
        "Konsentrasi massa menumpuk padat di lokasi start (Lapangan Prawatasari, Joglo)",
        "Pergerakan rombongan pawai di badan jalan menyita lajur kendaraan",
        "Hujan mengguyur pukul 19.05 WIB, antusiasme peserta tetap memadati lokasi"
      ]
    },
    {
      "id": "jaringan_jalan",
      "name": "Jaringan Jalan",
      "causes": [
        "Banyak persimpangan titik rawan kemacetan (Pertigaan Joglo Atas, Tugu Tauhid, Siti Jenab)",
        "Pusat kepadatan kendaraan di kawasan Joglo, Jl. Siliwangi & Siti Jenab",
        "Kapasitas jalan sirip alternatif (Jl. Mangunsarkoro, Adi Sucipta, Cikondang) sangat sempit",
        "Pertemuan arus kritis di Perempatan BLK dan Simpang Empat Prawatasari"
      ]
    },
    {
      "id": "rute_pawai",
      "name": "Rute Pawai",
      "causes": [
        "Rute memotong arteri urat nadi satu arah pusat kota (P. Hidayatullah - Siliwangi)",
        "Simpang Tugu Tauhid menjadi simpul temu rawan macet antara pawai & kendaraan umum",
        "Jalur pawai melintasi sentra pertokoan, perbankan, hingga Pendopo Pemda Cianjur",
        "Pelaksanaan pawai obor menuntut pengalihan arus kendaraan demi keselamatan peserta"
      ]
    },
    {
      "id": "pengaturan_lalin",
      "name": "Pengaturan Lalu Lintas",
      "causes": [
        "Arus kendaraan dari kawasan BLK dialihkan & arus Makam Pahlawan diarahkan ke kiri",
        "Penutupan jalur di Jl. Adi Sucipta & opsi penutupan Jl. Mangunsarkoro bila arus padat",
        "Pemberlakuan clear area sejak 16.00 WIB di Prawatasari & Siliwangi membatasi ruang",
        "Rekayasa situasional bertahap membutuhkan pemodelan fase sinyal bebas konflik"
      ]
    }
  ],
  "nodes": [
    {
      "id": 0,
      "label": "Taman Kreatif Joglo / Lapangan Prawatasari",
      "short_label": "Taman Joglo (Start)",
      "zone": "Rute Utama Pawai",
      "role": "Start: Titik Kumpul & Pelepasan Pawai",
      "lat": -6.82721,
      "lng": 107.13724,
      "pos": [2.0, 1.0],
      "fishbone_category": "Volume Peserta",
      "fishbone_cause": "Konsentrasi massa menumpuk padat di lokasi start (Lapangan Prawatasari, Joglo) sejak clear area 16.00 WIB.",
      "police_presence": "Sterilisasi Penuh Satlantas & Dishub"
    },
    {
      "id": 1,
      "label": "Simpang Perintis Kemerdekaan - P. Hidayatullah",
      "short_label": "Simpang Perintis",
      "zone": "Rute Utama Pawai",
      "role": "Gerbang Keluar Pawai Menuju Jalan Protokol",
      "lat": -6.82802,
      "lng": 107.13681,
      "pos": [3.5, 2.0],
      "fishbone_category": "Rute Pawai",
      "fishbone_cause": "Pertemuan arus keluar barisan obor dengan kendaraan dari lingkar selatan Pasirhayam.",
      "police_presence": "Barikade Petugas Floating"
    },
    {
      "id": 2,
      "label": "Perempatan BLK (Balai Latihan Kerja)",
      "short_label": "Perempatan BLK",
      "zone": "Rute Utama Pawai",
      "role": "Titik Penyekatan Arus Masuk dari Pasirhayam",
      "lat": -6.82855,
      "lng": 107.13620,
      "pos": [5.0, 3.0],
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Pertemuan arus kritis di Perempatan BLK; kendaraan dari Pasirhayam wajib dialihkan memutar.",
      "police_presence": "Pos Penyekatan Utama Satlantas"
    },
    {
      "id": 3,
      "label": "Pertigaan Joglo Atas (Masuk Jl. Siliwangi)",
      "short_label": "Pertigaan Joglo Atas",
      "zone": "Rute Utama Pawai",
      "role": "Titik Belok Utama Masuk Koridor Siliwangi",
      "lat": -6.82650,
      "lng": 107.13702,
      "pos": [7.0, 4.5],
      "fishbone_category": "Jaringan Jalan",
      "fishbone_cause": "Bottleneck tikungan tajam saat rombongan pawai masuk ke jalan satu arah Siliwangi.",
      "police_presence": "Petugas Pengatur Belokan"
    },
    {
      "id": 4,
      "label": "Simpang TMP Cikaret (Makam Pahlawan)",
      "short_label": "Simpang TMP Cikaret",
      "zone": "Rute Utama Pawai",
      "role": "Titik Rekayasa Arus Kendaraan Warga ke Kiri",
      "lat": -6.82580,
      "lng": 107.13740,
      "pos": [9.0, 5.5],
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Arus kendaraan dari kawasan Makam Pahlawan diarahkan wajib belok kiri menuju Siliwangi Atas.",
      "police_presence": "Rambu & Petugas Pengarah"
    },
    {
      "id": 5,
      "label": "Simpang Siliwangi - Gang Laksana",
      "short_label": "Gang Laksana",
      "zone": "Rute Utama Pawai",
      "role": "Pertemuan Arus Motor Pemukiman Padat Joglo",
      "lat": -6.82500,
      "lng": 107.13780,
      "pos": [11.0, 6.5],
      "fishbone_category": "Jaringan Jalan",
      "fishbone_cause": "Gang pemukiman sangat sempit tanpa rambu; motor warga rawan menerobos barisan obor api.",
      "police_presence": "Tanpa Pos Tetap (Rawan Konflik)"
    },
    {
      "id": 6,
      "label": "Simpang Siliwangi - Gang Barisan Banteng",
      "short_label": "Gang Barisan Banteng",
      "zone": "Rute Utama Pawai",
      "role": "Arus Pemotor Warga Menyeberang ke Pertokoan",
      "lat": -6.82450,
      "lng": 107.13800,
      "pos": [13.0, 7.5],
      "fishbone_category": "Rute Pawai",
      "fishbone_cause": "Jalur pawai melintasi deretan pertokoan; pemotor warga menyeberang memotong badan jalan.",
      "police_presence": "Tanpa Pos Tetap (Rawan Konflik)"
    },
    {
      "id": 7,
      "label": "Simpang Siliwangi - Jl. Adi Sucipta (SMPN 1)",
      "short_label": "Simpang Adi Sucipta",
      "zone": "Rute Utama Pawai",
      "role": "Penutupan Akses Koridor Pendidikan / Warga",
      "lat": -6.82419,
      "lng": 107.13825,
      "pos": [15.0, 8.5],
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Penutupan jalur di Jl. Adi Sucipta memaksa kendaraan warga memutar ke Jl. Mangunsarkoro.",
      "police_presence": "Portal Barikade Polisi"
    },
    {
      "id": 8,
      "label": "Simpang 4 Tugu Tauhid (Sentral Kota)",
      "short_label": "Simpang Tugu Tauhid",
      "zone": "Rute Utama Pawai",
      "role": "Simpul Kritis Utama Rute Pawai vs Arteri Kota",
      "lat": -6.82220,
      "lng": 107.13900,
      "pos": [17.5, 10.0],
      "fishbone_category": "Rute Pawai",
      "fishbone_cause": "Simpang Tugu Tauhid menjadi simpul temu 4 arah paling rawan macet antara pawai & arteri kota.",
      "police_presence": "Pos Komando Utama Satlantas"
    },
    {
      "id": 9,
      "label": "Jl. Siti Jenab - Depan Masjid Agung Cianjur",
      "short_label": "Depan Masjid Agung",
      "zone": "Rute Utama Pawai",
      "role": "Area Konsentrasi Penonton & Penjemput",
      "lat": -6.82095,
      "lng": 107.13938,
      "pos": [19.5, 11.2],
      "fishbone_category": "Volume Peserta",
      "fishbone_cause": "Meluapnya penonton warga di trotoar Alun-Alun dan Masjid Agung menyempitkan ruang jalan.",
      "police_presence": "Pagar Betis Gabungan"
    },
    {
      "id": 10,
      "label": "Gerbang Utama Pendopo Pemkab Cianjur",
      "short_label": "Gerbang Pendopo (Finish)",
      "zone": "Rute Utama Pawai",
      "role": "Goal/Finish: Lokasi Akhir & Istigasah Kubra",
      "lat": -6.81980,
      "lng": 107.13980,
      "pos": [21.5, 12.5],
      "fishbone_category": "Volume Peserta",
      "fishbone_cause": "Titik akhir penyatuan seluruh gelombang peserta pawai untuk Istigasah Kubra.",
      "police_presence": "Sterilisasi VVIP & Pengamanan Dalam"
    },
    {
      "id": 11,
      "label": "Simpang Adi Sucipta - Mangunsarkoro Barat",
      "short_label": "Mangunsarkoro Barat",
      "zone": "Jalur Sirip & Pengalihan",
      "role": "Jalur Buangan Kendaraan dari Arah Siliwangi",
      "lat": -6.82400,
      "lng": 107.13980,
      "pos": [15.0, 6.0],
      "fishbone_category": "Jaringan Jalan",
      "fishbone_cause": "Kapasitas jalan sirip alternatif Mangunsarkoro sempit namun menerima limpahan motor dari Siliwangi.",
      "police_presence": "Petugas Pengatur Buangan"
    },
    {
      "id": 12,
      "label": "Simpang Mangunsarkoro - Ir. H. Djuanda",
      "short_label": "Simpang Mangunsarkoro-Djuanda",
      "zone": "Jalur Sirip & Pengalihan",
      "role": "Koridor Arteri Alternatif Menuju Wilayah Utara",
      "lat": -6.82230,
      "lng": 107.14143,
      "pos": [18.0, 7.5],
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Opsi buka-tutup Jl. Mangunsarkoro saat arus buangan Tugu Tauhid mengalami kepadatan.",
      "police_presence": "Pos Pantau Dishub"
    },
    {
      "id": 13,
      "label": "Pertigaan Pasar Muka - Jl. Yulius Usman",
      "short_label": "Pertigaan Pasar Muka",
      "zone": "Jalur Sirip & Pengalihan",
      "role": "Titik Kemacetan Angkutan Kota & Niaga",
      "lat": -6.82459,
      "lng": 107.14264,
      "pos": [15.0, 3.5],
      "fishbone_category": "Jaringan Jalan",
      "fishbone_cause": "Sentra pasar tradisional dengan aktivitas motor pedagang dan angkot yang menghambat arus pengalihan.",
      "police_presence": "Patroli Roda Dua"
    },
    {
      "id": 14,
      "label": "Simpang Aria Wiratanudatar (Cikondang)",
      "short_label": "Simpang Cikondang",
      "zone": "Jalur Sirip & Pengalihan",
      "role": "Jalur Pengalihan Arus Menuju Wilayah Selatan",
      "lat": -6.83000,
      "lng": 107.13500,
      "pos": [4.0, 5.5],
      "fishbone_category": "Jaringan Jalan",
      "fishbone_cause": "Rute alternatif sempit bagi pengendara yang menghindari penutupan kawasan Joglo.",
      "police_presence": "Rambu Pengalihan"
    },
    {
      "id": 15,
      "label": "Simpang Salakopi (Jl. Ir. H. Djuanda Atas)",
      "short_label": "Simpang Salakopi",
      "zone": "Jalur Sirip & Pengalihan",
      "role": "Jalur Arteri Masuk dari Arah Sukabumi",
      "lat": -6.82150,
      "lng": 107.13780,
      "pos": [18.0, 12.5],
      "fishbone_category": "Rute Pawai",
      "fishbone_cause": "Arus antarkota dari arah Sukabumi tertahan sebelum memotong Simpang Tugu Tauhid.",
      "police_presence": "Penyekatan Arteri Barat"
    },
    {
      "id": 16,
      "label": "Simpang Bojongherang - Jl. Taifur Yusuf",
      "short_label": "Simpang Bojongherang",
      "zone": "Jalur Sirip & Pengalihan",
      "role": "Akses Sirip Pemukiman di Utara Alun-Alun",
      "lat": -6.81900,
      "lng": 107.14050,
      "pos": [22.0, 10.0],
      "fishbone_category": "Jaringan Jalan",
      "fishbone_cause": "Jalan lingkungan warga di belakang Pendopo yang padat oleh pemotor pencari jalan pintas.",
      "police_presence": "Pengamanan Lingkar Dalam"
    },
    {
      "id": 17,
      "label": "Simpang Siti Jenab - Jl. Pamoyanan",
      "short_label": "Simpang Pamoyanan",
      "zone": "Jalur Sirip & Pengalihan",
      "role": "Sirip Penyelamat Evakuasi Samping Pendopo",
      "lat": -6.82050,
      "lng": 107.14120,
      "pos": [20.5, 13.5],
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Jalur darurat ambulans dan tamu VVIP yang wajib steril dari limpahan penonton Masjid Agung.",
      "police_presence": "Jalur Steril Medis & VVIP"
    },
    {
      "id": 18,
      "label": "Simpang P. Hidayatullah - Pasirhayam",
      "short_label": "Simpang Pasirhayam",
      "zone": "Jalur Sirip & Pengalihan",
      "role": "Titik Penyekatan Kendaraan Berat & Bus",
      "lat": -6.83200,
      "lng": 107.13400,
      "pos": [2.0, 4.0],
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Penyekatan terluar selatan untuk memblokir bus dan truk agar tidak masuk ke koridor Joglo.",
      "police_presence": "Pos Sekat Terluar Satlantas"
    },
    {
      "id": 19,
      "label": "Simpang Siliwangi Atas (Dekat RSUD Lama)",
      "short_label": "Simpang Siliwangi Atas",
      "zone": "Jalur Sirip & Pengalihan",
      "role": "Penyekatan Arus Kendaraan dari Barat Kota",
      "lat": -6.82350,
      "lng": 107.13550,
      "pos": [13.0, 10.5],
      "fishbone_category": "Pengaturan Lalu Lintas",
      "fishbone_cause": "Penyekatan penyangga barat untuk menampung kendaraan yang dibelokkan dari TMP Cikaret.",
      "police_presence": "Pos Sekat Barat"
    }
  ],
  "edges": [
    { "from": 0, "to": 1, "weight": 2.0, "capacity": 20.0, "group": "parade_corridor", "description": "Pelepasan rombongan pawai dari Joglo memasuki Jl. Perintis Kemerdekaan" },
    { "from": 1, "to": 3, "weight": 3.0, "capacity": 15.0, "group": "parade_corridor", "description": "Rombongan bergerak di Jl. Pangeran Hidayatullah menuju belokan Joglo Atas" },
    { "from": 3, "to": 4, "weight": 4.0, "capacity": 14.0, "group": "parade_corridor", "description": "Masuk koridor satu arah Jl. Siliwangi melewati Simpang TMP Cikaret" },
    { "from": 4, "to": 5, "weight": 8.5, "capacity": 4.0, "group": "parade_corridor", "description": "Koridor Siliwangi segmen 1: Konflik kritis motor keluar dari Gang Laksana" },
    { "from": 5, "to": 6, "weight": 8.0, "capacity": 4.0, "group": "parade_corridor", "description": "Koridor Siliwangi segmen 2: Pergerakan menyusup pemotor antargang sempit" },
    { "from": 6, "to": 7, "weight": 8.5, "capacity": 4.5, "group": "parade_corridor", "description": "Koridor Siliwangi segmen 3: Motor Gang Barisan Banteng memotong ke Adi Sucipta" },
    { "from": 7, "to": 8, "weight": 4.5, "capacity": 14.0, "group": "parade_corridor", "description": "Koridor Siliwangi segmen 4: Mendekati simpul sentral Tugu Tauhid" },
    { "from": 8, "to": 9, "weight": 3.5, "capacity": 18.0, "group": "parade_corridor", "description": "Perlintasan dari Tugu Tauhid memasuki Jl. Siti Jenab di depan Masjid Agung" },
    { "from": 9, "to": 10, "weight": 2.0, "capacity": 25.0, "group": "parade_corridor", "description": "Segmen akhir Jl. Siti Jenab menuju Gerbang Pendopo Pemkab Cianjur" },

    { "from": 0, "to": 2, "weight": 6.5, "capacity": 8.0, "group": "gang_conflict", "description": "Arus massa di gerbang Joglo berkonflik dengan luapan kendaraan dari BLK" },
    { "from": 1, "to": 2, "weight": 7.0, "capacity": 8.0, "group": "gang_conflict", "description": "Arus pemotor dari kawasan BLK memotong rombongan di Simpang Perintis" },
    { "from": 2, "to": 3, "weight": 7.5, "capacity": 7.0, "group": "gang_conflict", "description": "Kendaraan dari BLK mencoba menerobos masuk sebelum Pertigaan Joglo Atas" },
    { "from": 3, "to": 14, "weight": 7.0, "capacity": 6.0, "group": "gang_conflict", "description": "Kendaraan tertahan di Pertigaan Joglo Atas memotong ke jalur Cikondang" },
    { "from": 5, "to": 11, "weight": 8.0, "capacity": 4.0, "group": "gang_conflict", "description": "Pemotor dari Gang Laksana menembus ke koridor buangan Mangunsarkoro Barat" },
    { "from": 6, "to": 11, "weight": 8.5, "capacity": 4.5, "group": "gang_conflict", "description": "Motor warga Gang Barisan Banteng menyeberang menuju buangan Mangunsarkoro" },
    { "from": 7, "to": 11, "weight": 6.0, "capacity": 6.0, "group": "gang_conflict", "description": "Penutupan Jl. Adi Sucipta memicu benturan dengan arus buangan Mangunsarkoro" },
    { "from": 8, "to": 12, "weight": 6.5, "capacity": 8.0, "group": "gang_conflict", "description": "Arus buangan simpang Tugu Tauhid dialihkan ke Mangunsarkoro Timur / Djuanda" },
    { "from": 8, "to": 15, "weight": 7.5, "capacity": 10.0, "group": "gang_conflict", "description": "Konflik sentral: Arus kendaraan dari Sukabumi (Salakopi) memotong Tugu Tauhid" },
    { "from": 9, "to": 16, "weight": 7.0, "capacity": 5.0, "group": "gang_conflict", "description": "Arus warga pemukiman Bojongherang memotong Jl. Siti Jenab dekat Masjid Agung" },
    { "from": 9, "to": 17, "weight": 6.5, "capacity": 6.0, "group": "gang_conflict", "description": "Jalur ambulans Pamoyanan bersinggungan dengan luapan penonton Masjid Agung" },

    { "from": 4, "to": 19, "weight": 5.5, "capacity": 7.0, "group": "diversion_buffer", "description": "Penyekatan di TMP Cikaret membuang arus kendaraan warga ke Siliwangi Atas" },
    { "from": 5, "to": 19, "weight": 6.0, "capacity": 5.0, "group": "diversion_buffer", "description": "Akses tembusan gang pemukiman warga ke arah barat penyangga kota" },
    { "from": 7, "to": 19, "weight": 5.0, "capacity": 6.0, "group": "diversion_buffer", "description": "Penutupan simpang Adi Sucipta mengalirkan arus alternatif ke Siliwangi Atas" },
    { "from": 10, "to": 16, "weight": 4.0, "capacity": 8.0, "group": "diversion_buffer", "description": "Sirip belakang kompleks Pendopo menuju Bojongherang untuk mobilisasi panitia" },
    { "from": 10, "to": 17, "weight": 3.5, "capacity": 10.0, "group": "diversion_buffer", "description": "Akses evakuasi resmi Forkopimda dan ambulans di gerbang samping Pamoyanan" },
    { "from": 11, "to": 12, "weight": 5.0, "capacity": 8.0, "group": "diversion_buffer", "description": "Koridor buangan kendaraan di Jl. Mangunsarkoro dari barat menuju timur" },
    { "from": 11, "to": 13, "weight": 6.0, "capacity": 6.0, "group": "diversion_buffer", "description": "Pertemuan arus pengalihan Mangunsarkoro dengan kepadatan Pasar Muka" },
    { "from": 12, "to": 15, "weight": 5.5, "capacity": 8.0, "group": "diversion_buffer", "description": "Arus dari Mangunsarkoro tersambung ke lingkar utara Ir. H. Djuanda / Salakopi" },
    { "from": 13, "to": 14, "weight": 5.0, "capacity": 10.0, "group": "diversion_buffer", "description": "Rute lingkar selatan menghubungkan Pasar Muka ke Simpang Cikondang" },
    { "from": 14, "to": 2, "weight": 6.5, "capacity": 8.0, "group": "diversion_buffer", "description": "Arus kendaraan dari Cikondang tertahan di titik filter penyekatan BLK" },
    { "from": 14, "to": 18, "weight": 4.0, "capacity": 12.0, "group": "diversion_buffer", "description": "Jalur buangan lingkar luar mengarahkan kendaraan berat Pasirhayam ke Cikondang" },
    { "from": 15, "to": 19, "weight": 6.0, "capacity": 8.0, "group": "diversion_buffer", "description": "Kanalisasi arus lingkar barat antara Salakopi dan Siliwangi Atas" },
    { "from": 16, "to": 17, "weight": 4.5, "capacity": 7.0, "group": "diversion_buffer", "description": "Jalan lingkungan yang menghubungkan Bojongherang dan Pamoyanan di utara Pendopo" },
    { "from": 18, "to": 1, "weight": 6.0, "capacity": 12.0, "group": "diversion_buffer", "description": "Penyekatan terluar Pasirhayam menahan bus/truk agar tidak masuk Simpang Perintis" },
    { "from": 18, "to": 2, "weight": 5.5, "capacity": 10.0, "group": "diversion_buffer", "description": "Aliran kendaraan dari Pasirhayam difilter bertahap menuju Perempatan BLK" }
  ],
  "execution_plan": {
    "start_node": 0,
    "goal_node": 10,
    "events": [
      {
        "step": 1,
        "time_wib": "18.00 WIB",
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 1,
        "parade_nodes": [0, 1],
        "title": "Fase Pelepasan: Gerbang Keluar Taman Joglo",
        "description": "Barisan Pawai Obor 1 Muharam keluar dari Taman Kreatif Joglo (Node 0) memasuki Simpang Perintis Kemerdekaan (Node 1). Fase hijau diberikan untuk pawai; arus dari BLK (Node 2) dan Pasirhayam (Node 18) otomatis disetop (Merah)."
      },
      {
        "step": 2,
        "time_wib": "18.10 WIB",
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 2,
        "parade_nodes": [0, 1, 2],
        "title": "Penyekatan Arus Masuk Perempatan BLK",
        "description": "Perempatan BLK (Node 2) mengaktifkan filter pengalihan penuh. Kendaraan roda 4 dari Pasirhayam (Node 18) dan Cikondang (Node 14) dialihkan memutar agar tidak memotong barisan obor."
      },
      {
        "step": 3,
        "time_wib": "18.20 WIB",
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 3,
        "parade_nodes": [0, 1, 3],
        "title": "Bottleneck Belokan Pertigaan Joglo Atas",
        "description": "Rombongan pawai berbelok di Pertigaan Joglo Atas (Node 3) memasuki koridor satu arah Jl. Siliwangi. Akses potong dari BLK (Node 2) dan Cikondang (Node 14) dikunci merah."
      },
      {
        "step": 4,
        "time_wib": "18.30 WIB",
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 4,
        "parade_nodes": [0, 1, 3, 4],
        "title": "Rekayasa Belok Kiri Simpang TMP Cikaret",
        "description": "Barisan melintasi depan Makam Pahlawan / TMP Cikaret (Node 4). Kendaraan warga lokal wajib belok kiri menuju Siliwangi Atas / RSUD Lama (Node 19)."
      },
      {
        "step": 5,
        "time_wib": "18.40 WIB",
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 5,
        "parade_nodes": [0, 1, 3, 4, 5],
        "title": "Isolasi Konflik Kritis: Mulut Gang Laksana",
        "description": "Barisan obor tiba di titik rawan Gang Laksana (Node 5, Bobot 8.5). Alokasi slot waktu menutup keluar-masuk motor gang sempit menuju Siliwangi & Mangunsarkoro Barat (Node 11)."
      },
      {
        "step": 6,
        "time_wib": "18.50 WIB",
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 6,
        "parade_nodes": [0, 1, 3, 4, 5, 6],
        "title": "Penanganan Sirip Gang Barisan Banteng",
        "description": "Defile obor melewati kawasan pertokoan & Gang Barisan Banteng (Node 6, Bobot 8.5). Penyeberangan motor warga ke arah Adi Sucipta (Node 7) dan Mangunsarkoro (Node 11) ditahan penuh."
      },
      {
        "step": 7,
        "time_wib": "19.00 WIB",
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 7,
        "parade_nodes": [0, 1, 3, 4, 5, 6, 7],
        "title": "Penutupan Portal Simpang Adi Sucipta (SMPN 1)",
        "description": "Rombongan melintasi Simpang Adi Sucipta (Node 7). Portal polisi menutup akses tembus, mengalirkan seluruh kendaraan warga ke koridor buangan Mangunsarkoro Barat (Node 11)."
      },
      {
        "step": 8,
        "time_wib": "19.10 WIB",
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 8,
        "parade_nodes": [0, 1, 3, 4, 5, 6, 7, 8],
        "title": "Simpul Kritis Sentral: Perempatan Tugu Tauhid",
        "description": "Rombongan pawai menyeberangi sentral Simpang 4 Tugu Tauhid (Node 8). Arus arteri antarkota dari Salakopi/Sukabumi (Node 15) dihentikan total (Merah) dan dibuang ke Jl. Djuanda (Node 12)."
      },
      {
        "step": 9,
        "time_wib": "19.20 WIB",
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 9,
        "parade_nodes": [0, 1, 3, 4, 5, 6, 7, 8, 9],
        "title": "Konsentrasi Penonton Depan Masjid Agung",
        "description": "Pawai memasuki Jl. Siti Jenab (Node 9) di depan Masjid Agung & Alun-Alun Cianjur. Sirip utara Bojongherang (Node 16) dan jalur medis Pamoyanan (Node 17) disterilkan."
      },
      {
        "step": 10,
        "time_wib": "19.30 WIB",
        "type": "CONFLICT_NODE_TRIGGER",
        "target_node": 10,
        "parade_nodes": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10],
        "title": "Puncak & Finish: Gerbang Utama Pendopo Cianjur",
        "description": "Seluruh rombongan pawai obor tiba dengan selamat di Gerbang Pendopo Pemkab Cianjur (Node 10) untuk Istigasah Kubra. Subgraf K4 (Node 9, 10, 16, 17) terjadwal dalam 4 fase bebas konflik."
      }
    ]
  }
};
