export const services = [
  {
    id: 'sewa-lapangan',
    title: 'Sewa Lapangan',
    description: 'Lapangan padel indoor & outdoor standar internasional. Cocok buat main santai atau kompetisi.',
    price: '150.000',
    unit: '/jam',
    icon: 'court',
    features: ['Lantai sintetis premium', 'Penerangan LED standar turnamen', 'AC pendingin (indoor)', 'Area istirahat & toilet'],
    popular: true
  },
  {
    id: 'sewa-alat',
    title: 'Sewa Alat',
    description: 'Raket, bola, dan aksesoris padel berkualitas. Gak perlu bawa barang, cuma bawa badan.',
    price: '35.000',
    unit: '/paket',
    icon: 'equipment',
    features: ['Raket الكربون fiber', 'Bola padel resmi (3 pcs)', 'Grip tambahan', 'Tas raket'],
    popular: false
  },
  {
    id: 'coaching',
    title: 'Coaching Pribadi',
    description: 'Pelatih bersertifikat internasional. Dari pemula sampai level kompetisi. Progres terjamin.',
    price: '300.000',
    unit: '/sesi (90 menit)',
    icon: 'coaching',
    features: ['Analisis teknik video', 'Program latihan personal', 'Tracking progres bulanan', 'Akses grup komunitas'],
    popular: true
  },
  {
    id: 'event',
    title: 'Event & Turnamen',
    description: 'Adakan turnamen kantor, ulang tahun, atau kompetisi komunitas. Kami urus semuanya.',
    price: '5.000.000',
    unit: '/event',
    icon: 'trophy',
    features: ['Panitia & MC profesional', 'Sistem bracket & live score', 'Hadiah & trophy kustom', 'Dokumentasi foto/video'],
    popular: false
  },
  {
    id: 'fnb',
    title: 'Food & Beverage',
    description: 'Minuman segar, snack sehat, dan heavy meal. Pesan lewat aplikasi, antar ke sisi lapangan.',
    price: '25.000',
    unit: '/item',
    icon: 'coffee',
    features: ['Minuman elektrolit', 'Protein bar & buah', 'Nasi box & pasta', 'Kopi & smoothies'],
    popular: false
  }
];

export const venues = [
  {
    id: 'venue-1',
    name: 'Padel Arena Senayan',
    address: 'Jl. Pintu Satu Senayan, Gelora, Tanah Abang, Jakarta Pusat',
    image: '/images/padel-1.jpeg',
    courts: 4,
    type: 'Indoor',
    hours: '06:00 - 23:00',
    price: '200.000',
    rating: 4.8,
    reviews: 124,
    features: ['AC Central', 'Parkir Luas', 'Cafe & Lounge', 'Pro Shop']
  },
  {
    id: 'venue-2',
    name: 'Green Padel BSD',
    address: 'Green Office Park 6, BSD City, Tangerang Selatan',
    image: '/images/padel-2.jpeg',
    courts: 6,
    type: 'Outdoor',
    hours: '06:00 - 22:00',
    price: '150.000',
    rating: 4.6,
    reviews: 89,
    features: ['View Green Area', 'Area BBQ', 'Musholla', 'Gazebo Istirahat']
  },
  {
    id: 'venue-3',
    name: 'Urban Padel PIK',
    address: 'Jl. Pantai Indah Kapuk, Penjaringan, Jakarta Utara',
    image: '/images/padel-3.webp',
    courts: 3,
    type: 'Indoor',
    hours: '07:00 - 23:00',
    price: '250.000',
    rating: 4.9,
    reviews: 67,
    features: ['Premium Lighting', 'VIP Lounge', 'Personal Trainer', 'Locker Premium']
  },
  {
    id: 'venue-4',
    name: 'Ciputra Padel Club',
    address: 'Ciputra World 1, Jl. Prof. Dr. Satrio, Jakarta Selatan',
    image: '/images/padel-1.jpeg',
    courts: 5,
    type: 'Indoor + Outdoor',
    hours: '06:00 - 23:00',
    price: '180.000',
    rating: 4.7,
    reviews: 156,
    features: ['Rooftop Court', 'Swimming Pool Access', 'Spa & Massage', 'Restaurant']
  }
];

export const events = [
  {
    id: 'event-1',
    title: 'Demo Padel Open 2025',
    date: '2025-10-15',
    endDate: '2025-10-17',
    venue: 'Padel Arena Senayan',
    category: 'Turnamen',
    level: 'Semua Level',
    price: '500.000',
    image: '/images/padel-2.jpeg',
    description: 'Turnamen padel terbuka terbesar di Jakarta. Total hadiah 100 juta. Kategori: Men\'s Double, Women\'s Double, Mixed Double.',
    status: 'Daftar Sekarang'
  },
  {
    id: 'event-2',
    title: 'Corporate Padel Cup',
    date: '2025-11-08',
    endDate: '2025-11-09',
    venue: 'Green Padel BSD',
    category: 'Corporate Event',
    level: 'Beginner - Intermediate',
    price: '3.500.000',
    image: '/images/padel-3.webp',
    description: 'Turnamen khusus perusahaan. Team building sambil main padel. Minimal 8 tim, maksimal 16 tim. Termasuk F&B & dokumentasi.',
    status: 'Daftar Tim'
  },
  {
    id: 'event-3',
    title: 'Padel Clinic Weekend',
    date: '2025-09-28',
    endDate: '2025-09-28',
    venue: 'Urban Padel PIK',
    category: 'Coaching Clinic',
    level: 'Beginner',
    price: '750.000',
    image: '/images/padel-1.jpeg',
    description: 'Clinic intensif 4 jam dengan coach berlisensi ITF. Teknik dasar, strategi permainan, dan latihan sparring. Termasuk sewa raket & bola.',
    status: 'Slot Tersisa 12'
  },
  {
    id: 'event-4',
    title: 'Ladies Padel Morning',
    date: '2025-10-05',
    endDate: '2025-10-05',
    venue: 'Ciputra Padel Club',
    category: 'Komunitas',
    level: 'Semua Level',
    price: '150.000',
    image: '/images/padel-2.jpeg',
    description: 'Event rutin mingguan khusus wanita. Main santai, ngobrol, networking. Termasuk welcome drink & snack sehat.',
    status: 'Buka Pendaftaran'
  }
];

export const testimonials = [
  {
    id: 'test-1',
    name: 'Rizki Pratama',
    role: 'Pengusaha, 32 th',
    avatar: '/images/padel-1.jpeg',
    rating: 5,
    text: 'Booking paling gampang yang pernah gue coba. Pilih venue, pilih jam, bayar, selesai. Gak perlu ribet telepon ke lapangan satu-satu. Udah 5x booking di sini, lancar terus.',
    venue: 'Padel Arena Senayan'
  },
  {
    id: 'test-2',
    name: 'Dinda Kirana',
    role: 'Marketing Manager, 28 th',
    avatar: '/images/padel-2.jpeg',
    rating: 5,
    text: 'Coach-nya asik banget, sabar ngajarin orang awam kaya gue. Bulan kedua main udah bisa rally 10+ bola. Harga coaching juga bersahabat dibanding klub lain.',
    venue: 'Urban Padel PIK'
  },
  {
    id: 'test-3',
    name: 'Bambang Sutrisno',
    role: 'HR Director, 45 th',
    avatar: '/images/padel-3.webp',
    rating: 5,
    text: 'Adain corporate event buat 50 orang karyawan di Green Padel BSD. Panitianya profesional, MC-nya seru, dokumentasinya bagus. Karyawan seneng banget, request event lagi tahun depan.',
    venue: 'Green Padel BSD'
  },
  {
    id: 'test-4',
    name: 'Siti Nurhaliza',
    role: 'Dokter, 35 th',
    avatar: '/images/padel-1.jpeg',
    rating: 4,
    text: 'Lapangan di Ciputra Padel Club bersih banget, AC-nya dingin, pencahayaannya pas. Fasilitas lengkap: locker, shower, cafe. Cocok buat main sore setelah kerja.',
    venue: 'Ciputra Padel Club'
  }
];

export const faqs = [
  {
    question: 'Bagaimana cara booking lapangan?',
    answer: 'Pilih venue dan tanggal di halaman Booking, pilih slot jam yang tersedia, isi data diri, lalu bayar via transfer/QRIS. Konfirmasi akan dikirim ke WhatsApp otomatis.'
  },
  {
    question: 'Apakah bisa batalkan atau pindah jadwal?',
    answer: 'Bisa, minimal 4 jam sebelum jam main. Batalkan lewat link di konfirmasi WhatsApp. Dana akan dikembalikan ke saldo Demo Padel untuk booking berikutnya.'
  },
  {
    question: 'Apakah raket dan bola disediakan?',
    answer: 'Bisa sewa paket alat (raket + 3 bola) cuma Rp 35.000. Atau bawa alat sendiri juga gak masalah.'
  },
  {
    question: 'Bagaimana cara bayar?',
    answer: 'Transfer bank ke rekening Demo Padel atau scan QRIS. Upload bukti bayar di halaman konfirmasi. Sistem akan verifikasi otomatis (demo: verifikasi manual oleh admin).'
  },
  {
    question: 'Apakah ada minimal booking?',
    answer: 'Minimal 1 jam. Untuk jam sibuk (18:00-21:00) minimal 2 jam di beberapa venue.'
  },
  {
    question: 'Bisa main sendirian?',
    answer: 'Padel mainnya 2 lawan 2 (double). Kalo sendiri, bisa join grup "Cari Partner" di komunitas WhatsApp kami, atau ikut clinic/event.'
  }
];