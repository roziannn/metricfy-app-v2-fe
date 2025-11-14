// ==============================
//      FULL TYPES DEFINITIONS
// ==============================

export interface ChallengeAnnouncement {
  id: string;
  title: string;
  content: string;
  createdAt: string; // ISO
}

export interface ChallengeSubmission {
  id: string;
  userId: string;
  challengeId: number;
  submittedAt: string; // ISO
  repoUrl?: string;
  liveUrl?: string;
  notes?: string;
  status: "pending" | "approved" | "rejected";
}

export interface Challenge {
  id: number;
  title: string;
  shortDesc: string;
  organizer: string;
  description: string;
  imageUrl: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  xp: number;
  participants: number;
  quota: number;
  slug: string;
  status: "Open" | "In Progress" | "Close";

  announcement: string[]; // versi simple
  submissions: ChallengeSubmission[];
}

// ==============================
//         STATIC DATA
// ==============================

export const challengeItems: Challenge[] = [
  {
    id: 1,
    title: "Buat Website Portfolio Pribadi",
    shortDesc: "Bangun website portfolio profesional dengan Next.js dan Tailwind untuk menampilkan karya dan profilmu.",
    organizer: "Learn2Tech Community",
    description: `
    <h2 class="text-xl font-semibold mb-3">Tentang Challenge</h2>
    <p>
      Dalam challenge ini, kamu diminta untuk membangun sebuah 
      <strong>Website Portfolio Pribadi</strong> yang profesional, modern, dan responsif. 
      Website ini harus mampu menampilkan identitas diri, pengalaman, keahlian, serta 
      proyek-proyek yang pernah kamu kerjakan. Fokus utama challenge ini adalah 
      <strong>konsistensi desain, struktur yang rapi, dan pengalaman pengguna yang baik</strong>.
    </p>

    <br />

    <h2 class="text-xl font-semibold mb-3">Tujuan Challenge</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Membangun portfolio developer yang layak ditampilkan kepada recruiter atau klien.</li>
      <li>Meningkatkan pemahaman tentang Next.js, Tailwind CSS, dan komponen UI modern.</li>
      <li>Melatih kemampuan membuat layout responsif dan komponen yang reusable.</li>
      <li>Mengimplementasikan best practice penulisan code frontend.</li>
    </ul>

    <br />

    <h2 class="text-xl font-semibold mb-3">Fitur yang Harus Ada</h2>
    <ul class="list-decimal pl-6 space-y-3">
      <li>
        <strong>Hero Section</strong>  
        <br />
        Bagian utama halaman yang menampilkan foto, nama, dan deskripsi singkat tentang dirimu.  
        Contoh: "Hi, I'm Rafi — a Web Developer based in Jakarta".
      </li>

      <li>
        <strong>About Me</strong>  
        <br />
        Ceritakan siapa dirimu, apa keahlianmu, bagaimana perjalananmu, dan apa yang membuatmu unik.
        Gunakan bahasa yang sopan dan profesional.
      </li>

      <li>
        <strong>Skills Section</strong>
        <br />
        Menampilkan daftar keahlianmu seperti:
        <em>JavaScript, TypeScript, React, Next.js, Tailwind, Node.js</em>, dan lainnya.
        Boleh pakai card, bar, atau bahkan icon skill.
      </li>

      <li>
        <strong>Projects Section</strong>  
        <br />
        Bagian ini wajib berisi minimal 3 project dengan:
        <ul class="list-disc pl-6 mt-2">
          <li>Judul proyek</li>
          <li>Deskripsi singkat</li>
          <li>Teknologi yang digunakan</li>
          <li>Link demo / GitHub</li>
          <li>Gambar / preview UI (opsional tapi direkomendasikan)</li>
        </ul>
      </li>

      <li>
        <strong>Contact Section</strong>  
        <br />
        Sediakan beberapa cara untuk menghubungi kamu, misalnya:
        email, LinkedIn, GitHub, Instagram, atau formulir kontak sederhana.
      </li>
    </ul>

    <br />

    <h2 class="text-xl font-semibold mb-3">Teknologi yang Direkomendasikan</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Next.js 14 (App Router)</li>
      <li>Tailwind CSS</li>
      <li>Shadcn UI (untuk komponen modern)</li>
      <li>Vercel (untuk deploy)</li>
    </ul>

    <br />

    <h2 class="text-xl font-semibold mb-3">Kriteria Penilaian</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li><strong>UI/UX:</strong> Tata letak rapi, spacing bagus, warna serasi.</li>
      <li><strong>Kualitas kode:</strong> Struktur folder jelas, komponen terpisah rapi.</li>
      <li><strong>Mobile-friendly:</strong> Responsif di semua ukuran device.</li>
      <li><strong>Interaktivitas:</strong> Animasi smooth, tombol berfungsi.</li>
      <li><strong>Kelengkapan konten:</strong> Semua bagian portfolio terisi dengan baik.</li>
    </ul>

    <br />

    <h2 class="text-xl font-semibold mb-3">Hasil Akhir yang Diharapkan</h2>
    <p>
      Di akhir challenge, kamu akan memiliki sebuah <strong>portfolio profesional</strong> 
      yang siap kamu gunakan untuk melamar kerja, mengikuti bootcamp, atau menunjukkan 
      kemampuanmu kepada calon klien. Challenge ini juga akan meningkatkan skill dan 
      pemahamanmu terhadap pengembangan web modern.
    </p>
    
    <br />

    <p>
      Selamat mengerjakan — buat portfolio yang bisa banggain kamu 🚀🔥
    </p>
  `,
    imageUrl: "/img/article-news/article-1.png",
    category: "Web Development",
    level: "Beginner",
    xp: 120,
    participants: 42,
    quota: 100,
    slug: "portfolio-challenge",
    status: "Open",

    announcement: ["📢 Challenge resmi dibuka! Mulai bangun portfolio kamu hari ini.", "⚡ Tips: Gunakan Tailwind components untuk mempercepat styling."],

    submissions: [],
  },

  {
    id: 2,
    title: "Todo App Challenge",
    shortDesc: "Buat aplikasi Todo List interaktif dengan fitur CRUD, filter, dan penyimpanan lokal.",
    organizer: "Metricfy Labs",
    description: `...HTML CONTENT...`,
    imageUrl: "/img/article-news/article-2.png",
    category: "Frontend",
    level: "Intermediate",
    xp: 200,
    participants: 87,
    quota: 120,
    slug: "todo-app-challenge",
    status: "In Progress",

    announcement: ["🚀 Sekarang challenge memasuki fase In Progress!", "🎯 Reminder: Pastikan fitur filter berjalan dengan baik."],

    submissions: [],
  },

  {
    id: 3,
    title: "REST API Challenge",
    shortDesc: "Bangun REST API CRUD menggunakan Express.js dengan dokumentasi lengkap dan error handling.",
    organizer: "DevAPI Indonesia",
    description: `...HTML CONTENT...`,
    imageUrl: "/img/article-news/article-3.png",
    category: "Backend",
    level: "Intermediate",
    xp: 250,
    participants: 65,
    quota: 100,
    slug: "rest-api-challenge",
    status: "Close",

    announcement: ["⛔ Challenge telah ditutup.", "📌 Terima kasih kepada seluruh peserta yang berpartisipasi!"],

    submissions: [],
  },

  {
    id: 4,
    title: "Data Visualization Dashboard",
    shortDesc: "Buat dashboard interaktif dengan berbagai chart menggunakan Recharts dan dataset kompleks.",
    organizer: "VizTech Academy",
    description: `...HTML CONTENT...`,
    imageUrl: "/img/article-news/article-4.png",
    category: "Data Visualization",
    level: "Advanced",
    xp: 350,
    participants: 30,
    quota: 50,
    slug: "data-viz-challenge",
    status: "Open",

    announcement: ["✨ Dashboard challenge resmi dibuka!", "📊 Jangan lupa sertakan minimal 3 tipe chart Recharts."],

    submissions: [],
  },
];
