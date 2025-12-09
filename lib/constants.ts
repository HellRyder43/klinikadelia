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
    title: "Consultation & Diagnostics",
    description:
      "Comprehensive health examinations, disease diagnosis, and rapid diagnostic tests including Covid, Dengue, FBC, and more. Walk-ins welcome.",
    iconName: "Stethoscope" as const,
    span: "col-span-2" as const,
    imageUrl: "/images/service-consult.webp",
    details: [
      "General health check-up and consultation",
      "Rapid diagnostic tests (Covid, Dengue, Influenza, H. Pylori)",
      "Full Blood Count and Urine Analysis",
      "Pregnancy Test and Urine Drug Test",
      "Medical certificates and reports",
      "Pre-employment and student health screening",
    ],
  },
  {
    title: "Immunization & Vaccination",
    description:
      "Complete vaccination services including Hajj/Umrah vaccines, baby immunization following KKM schedule, and preventive vaccines for all ages.",
    iconName: "Syringe" as const,
    span: "col-span-1" as const,
    imageUrl: "/images/service-ultrasound.webp",
    details: [
      "Hajj/Umrah vaccines (Meningococcal, Influenza, Pneumococcal)",
      "Baby immunization (KKM vaccination schedule)",
      "Food industry vaccination (Typhoid)",
      "Preventive vaccines (Tetanus, Chicken Pox, Dengue)",
      "Influenza vaccination",
    ],
  },
  {
    title: "Surgery & Procedures",
    description:
      "Minor surgical procedures, wound care, circumcision, and specialized medical treatments performed in a clean and safe environment.",
    iconName: "Scissors" as const,
    span: "col-span-1" as const,
    imageUrl: "/images/service-minor-surgery.webp",
    details: [
      "Minor surgery and circumcision",
      "Incision & drainage procedures",
      "Wound care (Gluestich & Suturing)",
      "Nail removal and foreign body removal",
      "Dressing and wound management",
      "Nebulizer treatment and IV Drip",
    ],
  },
  {
    title: "Mother, Child & Family",
    description:
      "Maternal and child healthcare including pregnancy monitoring, family planning, pediatric care, and women's health services.",
    iconName: "Baby" as const,
    span: "col-span-1" as const,
    imageUrl: "/images/service-consult.webp",
    details: [
      "Pregnancy test and antenatal check-up",
      "Family planning (IM Depo)",
      "PAP Smear test",
      "Infertility test",
      "Pediatric care and child development monitoring",
      "Women's health screening",
    ],
  },
];

// Complete service catalog organized by category
export const serviceCategories = {
  immunization: {
    title: "Immunization & Vaccination",
    icon: "Syringe" as const,
    description: "Comprehensive vaccination services for all age groups",
    services: [
      {
        category: "Hajj/Umrah Vaccination",
        items: [
          "Meningococcal Vaccine",
          "Influenza Vaccine",
          "Pneumococcal Vaccine",
        ],
      },
      {
        category: "Baby Immunization",
        items: ["According to KKM Vaccination Schedule"],
      },
      {
        category: "Food Industry",
        items: ["Typhoid Vaccine"],
      },
      {
        category: "Other Vaccines",
        items: [
          "Tetanus Vaccine",
          "Chicken Pox Vaccine",
          "Influenza Vaccine",
          "Dengue Vaccine",
        ],
      },
    ],
  },
  diagnostics: {
    title: "Tests & Screening",
    icon: "TestTube2" as const,
    description: "Rapid diagnostic tests and comprehensive health screening",
    services: [
      {
        category: "Rapid Diagnostic Tests",
        items: [
          "Covid Test",
          "Dengue Test",
          "Influenza Test",
          "H. Pylori Test",
          "Full Blood Count",
          "Urine Analysis",
          "Pregnancy Test",
          "Urine Drug Test",
        ],
      },
      {
        category: "Laboratory Tests",
        items: [
          "Laboratory Test",
          "Virology Screening",
          "Allergic Test",
          "Anemia Profile",
          "Thalassemia Screening",
          "Arthritis Profile",
        ],
      },
      {
        category: "Health Screening",
        items: [
          "Health Screening",
          "Student Checkup",
          "Pre-Employment Checkup",
          "PSV/GDL Checkup",
          "Pre-Marital Screen",
          "Medical Report",
        ],
      },
    ],
  },
  procedures: {
    title: "Treatments & Procedures",
    icon: "Stethoscope" as const,
    description: "Medical procedures and specialized treatments",
    services: [
      {
        category: "Emergency & Home Care",
        items: ["Accident/Emergency", "Home Care Service"],
      },
      {
        category: "Minor Surgery",
        items: [
          "Circumcision",
          "Incision & Drainage",
          "Nail Removal",
          "Foreign Body Removal",
          "Minor Surgery",
        ],
      },
      {
        category: "Wound Care",
        items: ["Gluestich & Suturing", "Dressing/Wound Care"],
      },
      {
        category: "Specialized Treatments",
        items: [
          "Nebulizer Treatment",
          "Intravenous Drip",
          "Ear Irrigation",
          "Eye Irrigation",
          "CBD/Ryles Tube Insertion",
          "ECG",
          "Spirometry",
          "Eczema Treatment",
        ],
      },
      {
        category: "Women's Health",
        items: [
          "PAP Smear Test",
          "STD Test",
          "Infertility Test",
          "Family Planning IM Depo",
        ],
      },
    ],
  },
};

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
