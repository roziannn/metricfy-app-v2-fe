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
    description: `
  <h2 class="text-xl font-semibold mb-3">Deskripsi Challenge</h2>
  <p>
    Challenge ini menantang kamu untuk membangun <strong>aplikasi Todo List interaktif</strong> 
    yang memiliki fitur lengkap seperti menambah, menghapus, mengedit, dan menandai tugas sebagai selesai.  
    Aplikasi juga harus mendukung <strong>filter tugas (All, Active, Completed)</strong> serta
    menyimpan data secara <strong>persistent menggunakan LocalStorage atau backend API</strong>.
  </p>

  <br/>

  <h2 class="text-xl font-semibold mb-3">Fitur Wajib</h2>
  <ul class="list-decimal pl-6 space-y-2">
    <li>Tambah, edit, dan hapus task (CRUD).</li>
    <li>Mark task sebagai Completed atau Active.</li>
    <li>Filter task berdasarkan status (All / Active / Completed).</li>
    <li>Persistensi data menggunakan LocalStorage atau REST API backend.</li>
    <li>UI responsif dan clean (boleh pakai Tailwind atau CSS biasa).</li>
  </ul>

  <br/>

  <h2 class="text-xl font-semibold mb-3">Tujuan Challenge</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Menerapkan konsep CRUD (Create, Read, Update, Delete).</li>
    <li>Melatih pengelolaan state dalam aplikasi frontend.</li>
    <li>Memahami konsep filter dan manajemen data.</li>
    <li>Membangun UI yang responsif dan user-friendly.</li>
    <li>Mengenal data persistence melalui LocalStorage atau API.</li>
  </ul>

  <br/>

  <h2 class="text-xl font-semibold mb-3">Kriteria Penilaian</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li><strong>Functionality:</strong> Semua fitur CRUD dan filter berjalan baik.</li>
    <li><strong>UX/UI:</strong> Tampilan rapi, nyaman digunakan, responsif.</li>
    <li><strong>Code Quality:</strong> Struktur bersih, modular, mudah dibaca.</li>
    <li><strong>Persistence:</strong> Data tetap ada setelah refresh.</li>
    <li><strong>Creativity:</strong> Fitur tambahan seperti kategori, deadline, drag & drop, dsb.</li>
  </ul>

  <br/>
  <p>Semangat membangun Todo List yang fungsional dan elegan! 🚀</p>
  `,
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
    description: `
  <h2 class="text-xl font-semibold mb-3">Deskripsi Challenge</h2>
  <p>
    Kamu akan membangun sebuah <strong>REST API CRUD</strong> menggunakan <strong>Express.js</strong> 
    dengan struktur folder yang rapi, dokumentasi API, dan implementasi error handling.  
    Fokus utama challenge ini adalah pada <strong>arsitektur backend yang clean, modular, dan scalable</strong>.
  </p>

  <br/>

  <h2 class="text-xl font-semibold mb-3">Fitur Wajib</h2>
  <ul class="list-decimal pl-6 space-y-2">
    <li>CRUD lengkap untuk data (misal: Users, Products, Books, etc).</li>
    <li>Routing terstruktur menggunakan Express Router.</li>
    <li>Data persistence menggunakan MongoDB / PostgreSQL / MySQL.</li>
    <li>Validasi input data (Joi atau validation middleware).</li>
    <li>Global error handling dan status code yang tepat.</li>
    <li>Swagger atau Postman Documentation.</li>
  </ul>

  <br/>

  <h2 class="text-xl font-semibold mb-3">Tujuan Utama</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Mengenal dan mengimplementasikan konsep REST API.</li>
    <li>Melatih struktur folder back-end yang scalable dan clean.</li>
    <li>Menggunakan middleware, validation, dan exception handler.</li>
    <li>Menulis dokumentasi API yang rapi dan siap digunakan.</li>
  </ul>

  <br/>

  <h2 class="text-xl font-semibold mb-3">Kriteria Penilaian</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li><strong>API Design:</strong> Clean, RESTful, resource-oriented.</li>
    <li><strong>Error Handling & Validation:</strong> Tidak ada crash, pesan error jelas.</li>
    <li><strong>Documentation:</strong> Swagger / Postman rapi, mudah dipahami.</li>
    <li><strong>Code Quality:</strong> Modular, SOLID principle, readable.</li>
  </ul>

  <br/>
  <p>Bangun REST API yang production-ready dan scalable! 🔥</p>
  `,
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
    description: `
  <h2 class="text-xl font-semibold mb-3">Deskripsi Challenge</h2>
  <p>
    Tantangan ini mengharuskan kamu untuk membuat <strong>Dashboard Visualisasi Data</strong> interaktif 
    menggunakan <strong>Recharts atau Chart.js</strong>. Fokus utama adalah pada kemampuan menampilkan 
    data secara informatif, interaktif, dan mudah dipahami oleh pengguna.
  </p>

  <br/>

  <h2 class="text-xl font-semibold mb-3">Fitur Minimal</h2>
  <ul class="list-decimal pl-6 space-y-2">
    <li>Menampilkan minimal 3 jenis chart (Line, Bar, Pie, Area, Radar, etc).</li>
    <li>Data dinamis diambil dari dummy JSON / API / file csv.</li>
    <li>Filter tanggal / kategori untuk update chart.</li>
    <li>Tampilan responsif (mobile & desktop).</li>
    <li>Tooltip, Legend, dan interaksi mouse hover.</li>
  </ul>

  <br/>

  <h2 class="text-xl font-semibold mb-3">Tujuan Challenge</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Memvisualisasikan data kompleks secara sederhana dan menarik.</li>
    <li>Menguasai integrasi chart library dalam aplikasi frontend.</li>
    <li>Mengenal penggunaan dataset dan dynamic filtering.</li>
    <li>Meningkatkan desain UI dengan pendekatan data-driven.</li>
  </ul>

  <br/>

  <h2 class="text-xl font-semibold mb-3">Kriteria Penilaian</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li><strong>Data Presentation:</strong> Visualisasi jelas dan informatif.</li>
    <li><strong>Interactivity:</strong> Filter, hover, dynamic update efektif.</li>
    <li><strong>UI/UX:</strong> Tata letak dashboard profesional dan rapi.</li>
    <li><strong>Code Quality:</strong> Modular, reusable components.</li>
  </ul>

  <br/>
  <p>Buktikan bahwa data tidak hanya bisa dibaca — tapi juga bisa dilihat dan dipahami 📊✨</p>
  `,
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
