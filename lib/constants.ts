export const doctorProfile = {
  name: "Dr. Adelia Alamsari",
  role: "General Practitioner",
  apcNumber: "APC12345",
  bio: `Dengan pengalaman lebih 15 tahun dalam bidang perubatan keluarga, Dr. Adelia komited untuk memberikan rawatan yang mesra dan profesional kepada setiap pesakit.

Beliau percaya bahawa penjagaan kesihatan yang berkualiti harus mudah diakses oleh semua, dan berdedikasi untuk menyediakan perkhidmatan yang komprehensif untuk seluruh keluarga.

Dr. Adelia juga aktif dalam pendidikan kesihatan komuniti dan sering mengadakan sesi kesedaran kesihatan untuk penduduk setempat.`,
  imageUrl: "/images/doctor-profile.webp",
  certifications: ["MBBS", "MMC Registered", "15+ Years Experience"],
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
  whatsappNumber: "+60123456789",
  whatsappLink: "https://wa.me/60123456789",
  whatsappMessage:
    "Helo Klinik Adelia, saya ingin membuat temujanji untuk [PERKHIDMATAN]. Nama: ___",
  phone: "+60123456789",
  email: "info@klinikadelia.com",
  address: "No. 123, Jalan Alamsari 1, Taman Alamsari, 43650 Bangi, Selangor",
  landmark: "Bertentangan Giant Alamsari",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d101.7!3d2.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDAnMDAuMCJOIDEwMcKwNDInMDAuMCJF!5e0!3m2!1sen!2smy!4v1234567890",
  wazeLink: "https://waze.com/ul/hw227u1234",
  operatingHours: {
    weekday: "9:00 AM - 9:00 PM",
    weekend: "9:00 AM - 5:00 PM",
    publicHoliday: "Tutup (kecuali notis khas)",
  },
};

export const reviews = [
  {
    name: "Puan Sarah Ahmad",
    rating: 5,
    text: "Perkhidmatan yang sangat baik dan doktor yang mesra. Dr. Adelia sangat penyabar dan mengambil masa untuk menjelaskan kondisi kesihatan saya. Klinik yang bersih dan selesa. Highly recommended!",
    date: "2 minggu lalu",
    platform: "Google" as const,
    verified: true,
  },
  {
    name: "Encik Hafiz Rahman",
    rating: 5,
    text: "Klinik panel yang terbaik di Bangi. Masa menunggu sangat singkat walaupun walk-in. Harga berpatutan dan staff yang ramah. Tempat parking juga mencukupi.",
    date: "1 bulan lalu",
    platform: "Google" as const,
    verified: true,
  },
  {
    name: "Puan Nurul Ain",
    rating: 5,
    text: "Dr. Adelia sangat teliti dalam pemeriksaan ultrasound kehamilan saya. Beliau mengambil masa untuk menunjukkan baby dan menjawab semua soalan. Terima kasih Dr!",
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
    text: "Anak saya demam panas dan Dr. Adelia rawat dengan sangat baik. Klinik sangat bersih dan mesra kanak-kanak. Akan datang lagi!",
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
