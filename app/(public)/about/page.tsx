"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, HeartHandshake, BookOpenCheck, Award, TrendingUp, Handshake, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, BarChart } from "recharts";
import Logo from "@/components/logo";

const visitorData = [
  { month: "Jan", visitors: 120 },
  { month: "Feb", visitors: 200 },
  { month: "Mar", visitors: 150 },
  { month: "Apr", visitors: 250 },
  { month: "Mei", visitors: 300 },
  { month: "Jun", visitors: 280 },
  { month: "Jul", visitors: 350 },
  { month: "Agu", visitors: 400 },
  { month: "Sep", visitors: 380 },
  { month: "Okt", visitors: 420 },
  { month: "Nov", visitors: 450 },
  { month: "Des", visitors: 500 },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-zinc-900 dark:text-white">Metricfy 2.0: To empower people through technology building bridges of innovation that spark positive change.</h2>

        <p className="text-md text-center leading-relaxed">
          Di Metricfy, kami membangun jembatan bagi generasi muda untuk belajar pemrograman, berpikir kritis, dan berinovasi sejak dini. Melalui pembelajaran yang interaktif dan relevan dengan dunia nyata, kami ingin menumbuhkan rasa ingin
          tahu, kreativitas, dan semangat untuk masa depan yang lebih cerdas.
        </p>

        {/* timeline */}
        <div className="max-w-4xl px-6 sm:px-12 py-8 relative">
          <div className="relative border-l-2 border-dashed border-zinc-300 dark:border-zinc-700 ml-6">
            <div className="mb-12 ml-6 relative">
              <span className="absolute -left-8 top-1.5 flex items-center w-4 h-4 rounded-full bg-zinc-400 dark:bg-zinc-600 ring-4 ring-zinc-200 dark:ring-zinc-800"></span>
              <div className="p-5">
                <h4 className="text-3xl font-medium mb-2"> 2025 </h4>
                <p className="text-md leading-relaxed">
                  Di versi ini, Metricfy berevolusi menjadi ekosistem pembelajaran berbasis proyek, menghubungkan siswa, mentor, dan dunia industri. Kami menghadirkan pendekatan baru yang lebih relevan, kolaboratif, dan berorientasi pada
                  pengembangan karier sejak dini.
                </p>
              </div>
            </div>
            <div className="ml-6 relative">
              <span className="absolute -left-8 top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-zinc-400 dark:bg-zinc-600 ring-4 ring-zinc-200 dark:ring-zinc-800"></span>
              <div className="mb-3 flex justify-center">
                <Image src="/img/metricfy-v1.jpg" alt="Metricfy V1" width={350} height={350} className="rounded-4xl shadow-md object-cover" />
              </div>
              <div className="p-5">
                <h4 className="text-3xl font-medium mb-1">2024</h4>
                <p className="text-md leading-relaxed">
                  Awal lahirnya Metricfy sebagai platform pembelajaran teknologi untuk pelajar. Fokus utama kami adalah membantu anak muda memahami dasar logika pemrograman dan berpikir komputasional melalui pembelajaran yang interaktif dan
                  menyenangkan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tujuan kami */}
      <div className="max-w-6xl mx-auto text-center px-6 sm:px-16 py-20">
        <h2 className="text-3xl font-bold mb-6">Tujuan Kami</h2>
        <p className="max-w-2xl mx-auto text-md leading-relaxed mb-10">Sebagai wujud nyata dari visi dan misi tersebut, kami menetapkan enam tujuan utama yang menjadi arah langkah kami dalam setiap inovasi dan kolaborasi.</p>

        <div className="grid sm:grid-cols-2 gap-8">
          {[
            {
              icon: <Lightbulb className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
              title: "Inovasi",
              desc: "Terus berinovasi dalam menciptakan solusi digital yang relevan dan adaptif terhadap perubahan zaman.",
            },
            {
              icon: <Handshake className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
              title: "Kolaborasi",
              desc: "Bekerja bersama berbagai pihak untuk menciptakan ekosistem teknologi yang saling menguatkan dan berkelanjutan.",
            },
            {
              icon: <HeartHandshake className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
              title: "Dampak",
              desc: "Memberikan kontribusi nyata bagi masyarakat melalui solusi yang meningkatkan efisiensi dan kualitas hidup.",
            },
            {
              icon: <BookOpenCheck className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
              title: "Metode Blended-Learning",
              desc: "Proses pembelajaran menggunakan metode online dan offline untuk hasil belajar yang lebih efektif.",
            },
            {
              icon: <Award className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
              title: "Sertifikasi",
              desc: "Dapatkan SkillBadge setiap kali menyelesaikan kelas — sebagai bukti kemampuan saat melamar kerja.",
            },
            {
              icon: <TrendingUp className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
              title: "Pengembangan Diri",
              desc: "Mendorong individu untuk terus tumbuh melalui pengalaman belajar yang bermakna dan proyek nyata.",
            },
          ].map((goal, i) => (
            <Card key={i} className="py-0 my-0 shadow-none border dark:border-zinc-700 transition bg-white dark:bg-zinc-800">
              <CardContent className="px-4 flex items-start gap-4 text-left py-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-indigo-100 dark:bg-zinc-700 shrink-0">{goal.icon}</div>
                <div>
                  <h3 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-1">{goal.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">{goal.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* visitor Chart */}
      <div className="max-w-5xl mx-auto px-6 sm:px-16 py-20">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Seberapa banyak Metricfy sudah diakses oleh para pelajar di Indonesia?</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={visitorData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip contentStyle={{ backgroundColor: "#111827", borderRadius: "8px", border: "none" }} itemStyle={{ color: "#E5E7EB" }} />
            <Bar dataKey="visitors" fill="#6366F1" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* testimonials */}
      <div className="py-20 px-6 sm:px-16 bg-zinc-100 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Apa Kata Mereka?</h2>
          <div className="flex items-center justify-center mb-8">
            <p className="text-lg font-medium mr-4">Testimonial Siswa</p>
            <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-700"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Rizky Putra",
                role: "Client - Metricfy",
                feedback: "Layanan profesional dan hasil akhir melebihi ekspektasi. Timnya responsif dan kreatif!",
                avatar: "/img/avatars/avatar-2.png",
              },
              {
                name: "Siti Nurhaliza",
                role: "Partner - Creative Studio",
                feedback: "Kolaborasi yang menyenangkan! Ide kami diterjemahkan menjadi sistem yang solid dan user-friendly.",
                avatar: "/img/avatars/avatar-3.png",
              },
              {
                name: "Ahmad Fauzi",
                role: "Founder - Digital Space",
                feedback: "Pendekatan mereka terhadap inovasi dan kualitas luar biasa. Sangat direkomendasikan!",
                avatar: "/img/avatars/avatar-4.png",
              },
              {
                name: "Nadia Hasanah",
                role: "Admin Support - Kompas Gramedia",
                feedback: "Metricfy bantu banget memahami sistem dan data. Penjelasannya cepat dan jelas!",
                avatar: "/img/avatars/avatar-5.png",
              },
            ].map((t, i) => (
              <Card key={i} className="bg-white border border-zinc-200 dark:border-none dark:bg-zinc-800 shadow-none transition text-left">
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={t.avatar} alt={t.name} width={60} height={60} className="rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold text-lg">{t.name}</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed line-clamp-3">{t.feedback}</p>
                  <button className="text-sm font-medium hover:underline mt-2">See More</button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-end mt-8">
            <Link href="#" className="flex items-center text-zinc-700 dark:text-zinc-100 font-medium">
              <span className="pr-2">Lihat semua testimonial</span> <ArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative bg-primary text-white pt-12 pb-0 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:items-end relative z-10">
          <div className="relative flex justify-center md:justify-start w-full md:w-1/3">
            <Image src="/img/about-tagline.png" alt="About Image" width={300} height={100} className="object-contain w-full h-auto md:h-80 md:absolute md:bottom-0" />
          </div>

          <div className="text-center md:text-left md:w-1/2 pb-10 md:pb-8">
            <h2 className="text-4xl sm:text-3xl font-bold mb-4 leading-snug">
              Wujudkan potensi terbaikmu dan jadilah <span className="text-yellow-300">talenta digital</span> yang siap masa depan!
            </h2>
            <p className="text-md sm:text-md mb-4 max-w-3xl mx-auto md:mx-0">
              Belajar di Metricfy berarti bukan cuma memahami teknologi, tapi juga mengasah kreativitas, logika, dan kemampuan berpikir kritis melalui pengalaman belajar yang seru dan relevan dengan dunia nyata.
            </p>
            <Link href="/courses" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 mb-6 rounded-xl hover:bg-indigo-50 transition">
              <BookOpen className="w-5 h-5" /> Mulai Belajar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
