export const doctorProfile = {
  name: "Dr. Zahhar Anwar Bin Zainudin",
  role: "General Practitioner",
  apcNumber: "17273", // MMC Annual Practicing Certificate 2026
  fullRegistrationNumber: "65411", // MMC Full Registration Number
  qualification: "Bachelor of Medicine and Bachelor of Surgery",
  university: "Universiti Kuala Lumpur",
  bio: `Dr. Zahhar Anwar Bin Zainudin merupakan doktor perubatan am yang berdaftar sepenuhnya dengan Majlis Perubatan Malaysia (MMC). Beliau telah menamatkan pengajian Bachelor of Medicine and Bachelor of Surgery di Universiti Kuala Lumpur dan telah berpraktik sejak tahun 2015.

Dengan pengalaman luas dalam pelbagai bidang perubatan, Dr. Zahhar komited untuk memberikan penjagaan kesihatan yang mesra, profesional, dan mudah diakses kepada setiap pesakit dan keluarga mereka di Klinik Adelia Alamsari. Beliau percaya bahawa komunikasi yang baik antara doktor dan pesakit adalah kunci kepada rawatan yang berkesan.

Dr. Zahhar berdedikasi dalam pendidikan kesihatan komuniti, memastikan setiap pesakit memahami kondisi kesihatan mereka dan langkah-langkah preventif yang boleh diambil untuk kesejahteraan jangka panjang.`,
  imageUrl: "/images/doctor-profile.webp",
  certifications: [
    "MBBS (Universiti Kuala Lumpur)",
    "MMC Full Registration No: 65411",
    "APC 2026 No: 17273",
  ],
};

export const services = [
  {
    title: "Perundingan Am",
    description:
      "Pemeriksaan kesihatan am, diagnosis penyakit, dan rawatan untuk semua peringkat umur. Perkhidmatan walk-in tersedia tanpa temujanji.",
    iconName: "Stethoscope" as const,
    priceRange: "RM30 - RM50",
    span: "col-span-1" as const,
    imageUrl: "/images/service-consult.webp",
    details: [
      "Pemeriksaan fizikal lengkap",
      "Diagnosis penyakit kronik dan akut",
      "Preskripsi ubat",
      "Perundingan kesihatan preventif",
      "Sijil sakit dan laporan perubatan",
    ],
  },
  {
    title: "Imbasan Ultrasound",
    description:
      "Perkhidmatan ultrasound 2D dan 4D untuk pemeriksaan kehamilan, organ perut, dan kes-kes perubatan lain. Peralatan moden dan doktor berpengalaman.",
    iconName: "Activity" as const,
    priceRange: "RM80 - RM150",
    span: "col-span-2" as const,
    imageUrl: "/images/service-ultrasound.webp",
    badge: "Popular",
    details: [
      "Ultrasound kehamilan (2D & 4D)",
      "Imbasan organ abdomen",
      "Pemeriksaan pelvis",
      "Imbasan thyroid dan payudara",
      "Laporan segera dengan gambar",
    ],
  },
  {
    title: "Pembedahan Kecil",
    description:
      "Prosedur pembedahan kecil seperti pembuangan ketuat, jahitan luka, dan rawatan abses. Dilakukan dalam persekitaran yang bersih dan selamat.",
    iconName: "Scissors" as const,
    priceRange: "Harga berdasarkan prosedur",
    span: "col-span-1" as const,
    imageUrl: "/images/service-minor-surgery.webp",
    details: [
      "Pembuangan ketuat dan cyst",
      "Jahitan luka dan rawatan trauma",
      "Rawatan abses dan drainase",
      "Biopsi kulit",
      "Pembuangan benda asing",
    ],
  },
  {
    title: "Ibu & Anak",
    description:
      "Penjagaan kesihatan untuk ibu mengandung, bayi, dan kanak-kanak. Termasuk pemeriksaan antenatal, imunisasi, dan pemantauan perkembangan.",
    iconName: "Baby" as const,
    priceRange: "RM60 - RM120",
    span: "col-span-1" as const,
    imageUrl: "/images/service-consult.webp",
    details: [
      "Pemeriksaan antenatal lengkap",
      "Imunisasi bayi dan kanak-kanak",
      "Pemantauan perkembangan kanak-kanak",
      "Nasihat penyusuan dan pemakanan",
      "Rawatan penyakit kanak-kanak",
    ],
  },
];

export const clinicInfo = {
  whatsappNumber: "+60174820090",
  whatsappLink: "https://wa.me/60174820090",
  whatsappMessage:
    "Helo Klinik Adelia Alamsari, saya ingin membuat temujanji untuk [PERKHIDMATAN]. Nama: ___",
  phone: "+60135253503",
  email: "adeliamedic@gmail.com",
  address: "7-1, Jalan Sari Niaga, 43000 Kajang, Selangor",
  landmark: "Berhadapan Masjid Baiturrahman Alam Sari",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5!2d101.7762!3d2.9762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWQGW%2BCF%20Kajang!5e0!3m2!1sen!2smy!4v1733846400000",
  wazeLink: "https://www.waze.com/ul?ll=2.9762,101.7762&navigate=yes",
  operatingHours: {
    weekday: "8:00 AM - 12:00 AM",
    weekend: "8:00 AM - 12:00 AM",
    publicHoliday: "8:00 AM - 12:00 AM",
  },
};

export const reviews = [
  {
    name: "Puan Sarah Ahmad",
    rating: 5,
    text: "Perkhidmatan yang sangat baik dan doktor yang mesra. Dr. Zahhar Anwar sangat penyabar dan mengambil masa untuk menjelaskan kondisi kesihatan saya. Klinik yang bersih dan selesa. Highly recommended!",
    date: "2 minggu lalu",
    platform: "Google" as const,
    verified: true,
  },
  {
    name: "Encik Hafiz Rahman",
    rating: 5,
    text: "Klinik panel yang terbaik di Kajang. Masa menunggu sangat singkat walaupun walk-in. Harga berpatutan dan staff yang ramah. Tempat parking juga mencukupi.",
    date: "1 bulan lalu",
    platform: "Google" as const,
    verified: true,
  },
  {
    name: "Puan Nurul Ain",
    rating: 5,
    text: "Dr. Zahhar Anwar sangat teliti dalam pemeriksaan ultrasound kehamilan saya. Beliau mengambil masa untuk menunjukkan baby dan menjawab semua soalan. Terima kasih Dr!",
    date: "3 minggu lalu",
    platform: "Facebook" as const,
    verified: true,
  },
  {
    name: "Encik Ahmad Faiz",
    rating: 5,
    text: "Sangat berpuas hati dengan perkhidmatan di sini. Klinik buka lewat malam memudahkan saya yang bekerja. Doktor sangat profesional dan prihatin.",
    date: "1 minggu lalu",
    platform: "Google" as const,
    verified: true,
  },
  {
    name: "Puan Siti Hajar",
    rating: 5,
    text: "Anak saya demam panas dan Dr. Zahhar Anwar rawat dengan sangat baik. Klinik sangat bersih dan mesra kanak-kanak. Akan datang lagi!",
    date: "2 bulan lalu",
    platform: "Google" as const,
    verified: true,
  },
];

export const insurancePanels = [
  { name: "AIA", logoUrl: "/insurance/aia.png" },
  { name: "Prudential", logoUrl: "/insurance/prudential.png" },
  { name: "Allianz", logoUrl: "/insurance/allianz.png" },
  { name: "PMCare", logoUrl: "/insurance/pmcare.png" },
  { name: "Takaful", logoUrl: "/insurance/takaful.png" },
  { name: "Great Eastern", logoUrl: "/insurance/great-eastern.png" },
  { name: "Zurich", logoUrl: "/insurance/zurich.png" },
  { name: "AXA", logoUrl: "/insurance/axa.png" },
  { name: "HSBC Insurance", logoUrl: "/insurance/hsbc.png" },
  { name: "Manulife", logoUrl: "/insurance/manulife.png" },
  { name: "Tokio Marine", logoUrl: "/insurance/tokio-marine.png" },
  { name: "Etiqa", logoUrl: "/insurance/etiqa.png" },
];

export const trustBadges = [
  {
    icon: "Shield" as const,
    text: "MOH Registered",
  },
  {
    icon: "Users" as const,
    text: "10,000+ Patients",
  },
  {
    icon: "Clock" as const,
    text: "15-min Wait Time",
  },
  {
    icon: "Calendar" as const,
    text: "Buka 7 Hari",
  },
];
