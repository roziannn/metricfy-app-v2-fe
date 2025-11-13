"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, CalendarDays, CircleDashed, ClockFading, FunctionSquare, MapIcon, Quote, Tag, Tent, Code, Palette, Cpu, Globe, BarChart3, PenTool, Zap, Sword, CheckCircle2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/logo";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function LandingPage() {
  /* ----------------------------- Dummy Data ----------------------------- */
  const previousCourses = [
    {
      id: 1,
      title: "101 Logika Pemrograman Dasar",
      description: "Belajar logika dasar pemrograman",
      imageUrl: "/img/courses/courses-1.png",
      level: "Pemula",
    },
    {
      id: 2,
      title: "Pengenalan Coding",
      description: "Belajar ruang lingkup coding",
      imageUrl: "/img/courses/courses-2.png",
      level: "Menengah",
    },
    {
      id: 3,
      title: "Python untuk Data Analysis",
      description: "Analisis data dengan Python.",
      imageUrl: "/img/courses/courses-3.png",
      level: "Menengah",
    },
    {
      id: 4,
      title: "React Dasar",
      description: "Belajar dasar React.",
      imageUrl: "/img/courses/courses-1.png",
      level: "Pemula",
    },
    {
      id: 5,
      title: "JavaScript Lanjutan",
      description: "Meningkatkan skill JavaScript ke level lanjut.",
      imageUrl: "/bootcamp.png",

      level: "Lanjutan",
    },
    {
      id: 6,
      title: "Vue.js untuk Pemula",
      description: "Belajar membangun aplikasi dengan Vue.js.",
      imageUrl: "/bootcamp.png",

      level: "Pemula",
    },
    {
      id: 7,
      title: "Django Full Stack",
      description: "Membangun aplikasi web dengan Django.",
      imageUrl: "/bootcamp.png",

      level: "Menengah",
    },
    {
      id: 8,
      title: "TypeScript untuk Developer",
      description: "Memahami dan menggunakan TypeScript dalam proyek modern.",
      imageUrl: "/bootcamp.png",

      level: "Menengah",
    },
  ];

  const previousArticles = [
    {
      id: 1,
      title: "Bikin Website Mini-game Bareng Teman!",
      link: "#",
      shortDescription: "Bikin game interaktif sederhana yang bisa dimainkan bareng teman tanpa ribet",
      imageUrl: "/img/article-news/article-1.png",
    },
    {
      id: 2,
      title: "AI Bisa Bantu Nulis Kode? Coba ChatGPT Hack Ini!",
      link: "#",
      shortDescription: "Tips menggunakan AI untuk bantu nge-debug, bikin fungsi, atau ide coding",
      imageUrl: "/img/article-news/article-2.png",
    },
    {
      id: 3,
      title: "Buat Bot Chat Discord Sendiri dalam 1 Jam",
      link: "#",
      shortDescription: "Ikuti langkah cepat bikin bot Discord yang bisa kirim pesan otomatis dan fun",
      imageUrl: "/img/article-news/article-3.png",
    },
    {
      id: 4,
      title: "React + Anime.js: Animasi Epic Tanpa Ribet",
      link: "#",
      shortDescription: "Campur React dan Anime.js untuk bikin animasi keren, cocok buat portofolio atau projek mini.",
      imageUrl: "/img/article-news/article-4.png",
    },
  ];

  /* -------------------------- Event & Bootcamp -------------------------- */
  const [active, setActive] = useState<"weekly" | "bootcamp">("bootcamp");

  const weeklyEvents = [
    { title: "Coding Challenge Mingguan", desc: "Uji kemampuanmu dengan soal dan proyek kecil setiap minggu.", date: "Setiap Sabtu" },
    { title: "Sharing Session Komunitas", desc: "Diskusi santai bareng mentor dan teman sekomunitas.", date: "Setiap Rabu" },
  ];

  const bootcampEvents = [
    { title: "Frontend Web Bootcamp", desc: "Pelajari dasar HTML, CSS, dan React dalam 4 minggu.", date: "Batch November 2025" },
    { title: "Game Coding Bootcamp", desc: "Belajar bikin game sederhana dengan logika pemrograman visual.", date: "Batch Desember 2025" },
  ];

  const content = {
    weekly: {
      title: "Event Mingguan",
      desc: "Setiap minggu, Metricfy mengadakan event coding ringan dan interaktif yang bisa kamu ikuti secara online. Cocok untuk memperluas wawasan, bertemu teman baru, dan membangun portofolio kecil dari proyek mini!",
      cta: "Lihat Jadwal",
      events: weeklyEvents,
    },
    bootcamp: {
      title: "Mini Bootcamp",
      desc: "Program intensif berdurasi 4 minggu yang dirancang khusus untuk memperkuat keterampilanmu dalam waktu singkat. Peserta akan belajar melalui proyek nyata, mentoring, dan kolaborasi tim — cocok untuk kamu yang ingin naik level cepat.",
      cta: "Daftar Sekarang",
      events: bootcampEvents,
    },
  };

  const challenges = [
    {
      id: 1,
      title: "Build a Todo App",
      level: "Pemula",
      tag: "New",
      submissionDate: "31 Okt 2025",
      imageUrl: "/img/article-news/article-1.png",
    },
    {
      id: 2,
      title: "Weather App",
      level: "Menengah",
      tag: "Trending",
      submissionDate: "25 Okt 2025",
      imageUrl: "/img/article-news/article-3.png",
    },
  ];

  const current = content[active];

  /* ----------------------------- Main Layout ---------------------------- */
  return (
    <div className="flex flex-col min-h-screen font-sans bg-zinc-100 dark:bg-black">
      {/* ============================== NAVBAR ============================== */}
      <Navbar />
      {/* ============================== HERO =============================== */}
      <section
        className="relative flex flex-col items-center text-center py-32 px-6 sm:px-24 bg-white dark:bg-black overflow-hidden"
        style={{
          backgroundImage: `
      repeating-linear-gradient(0deg, rgba(99,102,241,0.05) 0px, rgba(99,102,241,0.05) 1px, transparent 1px, transparent 20px),
      repeating-linear-gradient(90deg, rgba(99,102,241,0.05) 0px, rgba(99,102,241,0.05) 1px, transparent 1px, transparent 20px)
    `,
        }}
      >
        <Badge
          variant="secondary"
          className="mb-6 px-6 py-2 font-semibold flex items-center gap-2 rounded-full
             bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200/40 dark:border-amber-700/40
             text-amber-700 dark:text-amber-300 backdrop-blur-sm"
        >
          <CircleDashed className="w-4 h-4 text-amber-500 dark:text-amber-400" />
          Platform Belajar Coding Interaktif
        </Badge>

        <h1 className="text-5xl font-bold mb-4">Tingkatkan Skillmu Hari Ini 🚀</h1>
        <p className="text-lg mb-8 max-w-lg">Pelajari berbagai topik dari coding, desain, hingga produktivitas dengan kursus interaktif dan artikel praktis yang siap dipakai.</p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold rounded-xl 
        bg-linear-to-r from-amber-400 via-yellow-400 to-amber-500 
        border border-amber-300/30 shadow-[0_0_20px_rgba(251,191,36,0.25)]
        hover:shadow-[0_0_30px_rgba(251,191,36,0.35)]
        hover:brightness-110 hover:scale-[1.02]
        text-white transition-all duration-300"
          >
            Mulai Belajar
          </Button>

          {/* Separator */}
          <span className="text-2xl text-zinc-300 select-none">|</span>

          {/* Avatar & Info */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex -space-x-3 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Avatar key={i} className="border-2 border-white w-10 h-10">
                  <AvatarImage src={`/img/avatars/avatar-${i}.png`} alt={`Avatar ${i}`} />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-sm  dark:text-zinc-300 font-medium">
              <span className="text-amber-500 font-semibold">100 Ribu+</span> Siswa Indonesia yang terus <br /> tumbuh setiap harinya!
            </p>
          </div>
        </div>
      </section>

      {/* =========================== POPULAR TAGS ========================== */}
      <section className="relative py-12 bg-linear-to-br from-indigo-50 via-white to-violet-100 dark:from-zinc-900 dark:via-indigo-950 dark:to-zinc-900 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-4 px-6">
          {[
            { name: "3D Design Blender", icon: Palette },
            { name: "Web Development", icon: Globe },
            { name: "UI/UX Design", icon: PenTool },
            { name: "Python Programming", icon: Code },
            { name: "Data Visualization", icon: BarChart3 },
            { name: "Javascript", icon: Cpu },
          ].map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base font-semibold rounded-full border border-indigo-200 dark:border-indigo-700 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md shadow-sm text-zinc-800 dark:text-zinc-200 hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:shadow-[0_0_12px_rgba(139,92,246,0.35)] dark:hover:shadow-[0_0_15px_rgba(139,92,246,0.35)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
            >
              <skill.icon className="w-4 h-4 md:w-5 md:h-5 text-indigo-500 dark:text-indigo-400" />
              {skill.name}
            </span>
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-300/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-violet-400/20 blur-3xl rounded-full"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-violet-100 dark:from-indigo-950 to-transparent pointer-events-none" />
      </section>

      {/* =========================== POPULAR COURSE ========================== */}
      <section className="px-24 py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-semibold mb-4">Kelas Terpopuler</h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">Temukan kelas-kelas seru dan bermanfaat yang akan membantu kamu belajar lebih efektif dan mengasah skill-mu.</p>
          </div>

          <Button variant="outline" className="text-primary flex items-center gap-2">
            Lihat Semua Kelas
            <ArrowRight />
          </Button>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="gap-4 py-2">
            {Array.from({ length: Math.ceil(previousCourses.length / 4) }).map((_, slideIndex) => (
              <CarouselItem key={slideIndex} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {previousCourses.slice(slideIndex * 4, slideIndex * 4 + 4).map((course) => (
                  <Card key={course.id} className="overflow-hidden my-0 py-0 transition-transform hover:-translate-y-2 flex flex-col gap-2">
                    {/* Image */}
                    <div className="relative w-full h-48">
                      <Image src={course.imageUrl || "/bootcamp.png"} alt={course.title} fill className="object-cover" />
                    </div>

                    {/* Content */}
                    <CardContent className="flex flex-col flex-1 p-4">
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 my-2 flex-1">{course.description}</p>

                      <div className="flex items-center justify-between mt-2">
                        <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          <BarChart className="w-3 h-3" /> {course.level}
                        </span>
                        <span className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                          <Tag className="w-3 h-3" /> GRATIS!
                        </span>
                      </div>

                      <Button
                        className="mt-5 relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg
                      bg-linear-to-r from-indigo-500 via-violet-500 to-blue-500 text-white
                      shadow-[0_0_10px_rgba(99,102,241,0.6)] hover:shadow-[0_0_20px_rgba(99,102,241,0.9)]
                      hover:from-violet-500 hover:to-indigo-500
                      transition-all duration-300 ease-out hover:-translate-y-0.5"
                      >
                        <span className="relative z-10">Klaim Sekarang</span>
                        <span className="absolute inset-0 bg-linear-to-r from-indigo-400 via-violet-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-lg"></span>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-yellow-400 hover:bg-yellow-500 text-white w-12 h-12 hover:text-white border-white border-3 rounded-full absolute top-1/2 -left-4 -translate-y-1/2 flex items-center justify-center shadow-lg" />
          <CarouselNext className="bg-yellow-500 hover:bg-yellow-500  text-white w-12 h-12 hover:text-white border-white border-3 rounded-full absolute top-1/2 -right-4 -translate-y-1/2 flex items-center justify-center shadow-lg" />
        </Carousel>
      </section>

      {/* =========================== SHOWCASE SECTION ========================== */}
      <section className="relative overflow-hidden px-6 sm:px-16 py-16 bg-linear-to-b from-white via-indigo-50/30 to-zinc-50 dark:from-zinc-900 dark:via-indigo-900/10 dark:to-black">
        {/* Background pattern halus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_50%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-semibold mb-6 dark:text-white">Kenapa Memilih Metricfy?</h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl">
              Kami percaya bahwa belajar bukan sekadar teori, tapi juga pengalaman nyata. Metricfy hadir untuk membangun kemampuan digital yang relevan dengan kebutuhan industri masa kini.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Mentor Berpengalaman",
                  desc: "Belajar langsung dari praktisi industri dengan pengalaman profesional nyata.",
                },
                {
                  title: "Pembelajaran Berbasis Proyek",
                  desc: "Bangun portofolio nyata lewat proyek yang mencerminkan kebutuhan dunia kerja.",
                },
                {
                  title: "Akses Materi Fleksibel",
                  desc: "Nikmati pembelajaran fleksibel dengan materi yang bisa diakses kapan saja.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold dark:text-white">{item.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1 max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
              <Button variant="thirdy" size="lg" className="shadow-xl text-white font-bold">
                Lihat Hasil Karya <ArrowRight />
              </Button>
            </div>
          </div>

          {/* Kanan: Circle stats + tombol */}
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-wrap justify-center gap-12">
              {/* Circle 1 */}
              <div className="relative group w-40 h-40 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="80" cy="80" r="70" stroke="#e5e7eb" strokeWidth="10" fill="none" />
                  <circle cx="80" cy="80" r="70" stroke="#6366f1" strokeWidth="10" fill="none" strokeDasharray="440" strokeDashoffset="100" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-[url(#grad1)]" />
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute text-center">
                  <h3 className="text-4xl font-bold dark:text-white">24</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Total Kelas</p>
                </div>
              </div>

              {/* Circle 2 */}
              <div className="relative group w-40 h-40 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="80" cy="80" r="70" stroke="#e5e7eb" strokeWidth="10" fill="none" />
                  <circle cx="80" cy="80" r="70" stroke="#22c55e" strokeWidth="10" fill="none" strokeDasharray="440" strokeDashoffset="130" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-[url(#grad2)]" />
                  <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4ade80" />
                      <stop offset="100%" stopColor="#16a34a" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute text-center">
                  <h3 className="text-4xl font-bold dark:text-white">12</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Event</p>
                </div>
              </div>

              {/* Circle 3 */}
              <div className="relative group w-40 h-40 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="80" cy="80" r="70" stroke="#e5e7eb" strokeWidth="10" fill="none" />
                  <circle cx="80" cy="80" r="70" stroke="#f59e0b" strokeWidth="10" fill="none" strokeDasharray="440" strokeDashoffset="160" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-[url(#grad3)]" />
                  <defs>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute text-center">
                  <h3 className="text-4xl font-bold dark:text-white">8</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Bootcamp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== CHALLENGE SECTION ========================== */}
      <section
        id="challenge"
        className="relative px-24 py-24 overflow-hidden 
       bg-zinc-50 
       [background-image:radial-gradient(rgba(99,102,241,0.15)_1.2px,transparent_1.8px)] 
       [background-size:22px_22px] dark:bg-zinc-900"
      >
        {/* Blur circles background */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-300/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-violet-400/20 blur-3xl rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* LEFT SIDE: TEXT & BUTTON */}
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold mb-4 flex items-center gap-2">
              Weekly Coding
              <span
                className="px-5 py-1 text-3xl font-semibold text-white 
                         bg-linear-to-r from-yellow-400 via-yellow-500 to-amber-500
                         backdrop-blur-xl rounded-full border border-white/70 shadow-lg"
              >
                Challenge
              </span>
            </h2>

            <p className="ttext-lg text-zinc-500 dark:text-zinc-400 max-w-lg">Uji kemampuan coding-mu setiap minggu dengan tantangan seru untuk menambah skill, pengalaman, dan portofolio.</p>

            <Button
              size="lg"
              className="px-6 py-3 mb-4 text-base font-semibold rounded-xl 
                   bg-linear-to-r from-zinc-700 to-zinc-900 text-white 
                   hover:scale-105 transition-all duration-300 shadow-lg 
                   hover:shadow-yellow-300/40 flex items-center gap-2 w-max"
            >
              <Sword /> Ikuti Challenge
            </Button>
          </div>

          {/* RIGHT SIDE: HORIZONTAL SCROLL CHALLENGE CARDS */}
          <div className="flex overflow-x-auto gap-6 py-2 scrollbar-none">
            {challenges.map((challenge) => (
              <Card
                key={challenge.id}
                className="relative w-72 shrink-0 gap-4
                     bg-linear-to-br from-indigo-500 via-indigo-400 to-indigo-600
                     backdrop-blur-xl border border-white rounded-2xl shadow-lg
                     hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden my-0 py-0"
              >
                <div className="relative w-full h-52">
                  <Image src={challenge.imageUrl} alt={challenge.title} fill className="object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-105" />
                  {/* Overlay glossy */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />
                  {/* Tag / badge */}
                  <Badge
                    className="absolute top-3 left-3 flex items-center gap-1 bg-white/20 backdrop-blur-md
                         text-black text-xs px-2 py-1 rounded-full border border-white/30 shadow-inner"
                  >
                    <Zap className="w-3 h-3" /> {challenge.tag}
                  </Badge>
                </div>

                <CardContent className="pb-4 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-white">{challenge.title}</h3>
                  <p className="text-white text-sm">Dapatkan point 300 XP untuk akses bootcamp premium</p>
                  <Badge className="my-1 text-xs bg-blue-100/90 border-blue-300 text-blue-600 flex items-center gap-1" variant="outline">
                    <ClockFading /> {challenge.submissionDate}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== ARTICLES ============================= */}
      <section id="articles" className="px-24 pb-24 pt-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4 ">Artikel, Berita dan Insight Terbaru</h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">Temukan berbagai artikel dan berita inspiratif yang akan menambah wawasan, memperluas pengetahuan, dan membantumu tetap up-to-date dunia teknologi.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {previousArticles.map((article) => (
            <div key={article.id} className="flex flex-col overflow-hidden transition-transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative w-full h-48">
                <Image src={article.imageUrl} alt={article.title} fill className="rounded-xl object-cover" />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-4">{article.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed flex-1">{article.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button Lihat Selengkapnya */}
        <div className="flex justify-center mt-6">
          <Button variant="outline" size="lg">
            Lihat Selengkapnya <ArrowRight />
          </Button>
        </div>
      </section>

      {/* ========================= ACTIVITIES SECTION ========================= */}
      <section id="activities" className="relative px-24 py-20 bg-primary dark:bg-zinc-900 overflow-hidden transition-colors">
        {/* Background grid kotak-kotak halus */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
      `,
            backgroundSize: "25px 25px", // makin kecil grid-nya
            opacity: 0.4, // lebih kelihatan
          }}
        ></div>

        {/* Fade putih dari atas ke bawah */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 40%, transparent 100%)",
          }}
        ></div>

        {/* Lapisan gradasi lembut keunguan (opsional untuk depth) */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom right, rgba(99,102,241,0.1), rgba(255,255,255,0.02))",
            mixBlendMode: "overlay",
          }}
        ></div>

        {/* Konten utama */}
        <div className="relative max-w-8xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-semibold text-white mb-4">Aktivitas Lainnya Bersama Metricfy</h2>
            <p className="text-lg max-w-2xl mx-auto text-zinc-100/80">Ikuti berbagai kegiatan seru dan edukatif untuk mengembangkan kemampuanmu lebih jauh bersama komunitas Metricfy.</p>
          </div>
          {/* Button Switcher */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              onClick={() => setActive("weekly")}
              className={`px-10 py-5 text-lg font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 ${
                active === "weekly"
                  ? "bg-yellow-400 text-white shadow-[0_8px_30px_-10px_rgba(250,204,21,0.45)] border border-yellow-400 focus:ring-yellow-300/40"
                  : "bg-zinc-600 text-white shadow-[0_6px_18px_-8px_rgba(255,255,255,0.15)] hover:bg-zinc-500 hover:shadow-[0_10px_30px_-12px_rgba(255,255,255,0.25)] focus:ring-zinc-400/40"
              }`}
            >
              <CalendarDays className="h-5 w-5" /> Event Mingguan
            </Button>

            <Button
              onClick={() => setActive("bootcamp")}
              className={`px-10 py-5 text-lg font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 ${
                active === "bootcamp"
                  ? "bg-yellow-400 text-white shadow-[0_8px_30px_-10px_rgba(250,204,21,0.45)] border border-yellow-400 focus:ring-yellow-300/40"
                  : "bg-zinc-600 text-white shadow-[0_6px_18px_-8px_rgba(255,255,255,0.15)] hover:bg-zinc-500 hover:shadow-[0_10px_30px_-12px_rgba(255,255,255,0.25)] focus:ring-zinc-400/40"
              }`}
            >
              <Tent className="h-5 w-5" /> Mini Bootcamp
            </Button>
          </div>

          {/* Dynamic Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all duration-500">
            {/* Deskripsi Kiri */}
            <div>
              <h1 className="text-4xl font-medium text-white mb-3">{current.title}</h1>
              <p className="text-lg mb-6 max-w-xl text-zinc-100/90">{current.desc}</p>
              <Button size="lg" variant="outline" className="text-md font-medium">
                {current.cta} <ArrowRight />
              </Button>
            </div>

            {/* Kartu Event */}
            <div className="max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.events.map((event, i) => (
                <Card key={i} className="transition-all gap-3.5 duration-300 p-0 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 hover:bg-zinc-50 dark:hover:bg-gray-700">
                  <CardHeader className="p-0">
                    {/* Container Image */}
                    <div className="relative w-full h-40 sm:h-48">
                      <Image className="rounded-t-xl" src="/bootcamp.png" alt="image" fill style={{ objectFit: "cover" }} />
                    </div>
                    <CardTitle className="px-4 py-2">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{event.desc}</p>
                    <span className="text-xs font-medium">Event Berlangsung</span> <br />
                    <Badge className="mt-2 text-xs bg-blue-100/90 border-blue-300 text-blue-600" variant="outline">
                      <ClockFading /> {event.date}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ========================= TESTIMONIALS ========================== */}
      <section id="testimonials" className="px-24 py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">Apa Tanggapan Mereka?</h2>
          <p className="text-lg max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
            Lebih dari <span className="font-semibold text-primary">100K+</span> pengguna Metricfy adalah siswa sekolah menengah yang belajar coding, desain, dan teknologi digital dengan cara yang seru dan mudah dipahami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              id: 1,
              name: "Nikita Ananda",
              role: "Siswa Web Development",
              avatar: "/img/avatars/avatar-2.png",
              message:
                "Awalnya saya kira belajar coding itu susah banget, tapi di sini penjelasannya step-by-step dan banyak contoh real project. Sekarang saya jadi ngerti dasar logika pemrograman dan bisa bikin mini game sendiri. Rasanya bangga banget bisa lihat hasil kerja sendiri!",
            },
            {
              id: 2,
              name: "Dewi Larasati",
              role: "Siswa UI/UX",
              avatar: "/img/avatars/avatar-1.png",
              message:
                "Sebagai siswa yang baru kenal dunia desain, saya senang banget bisa belajar UI/UX di sini. Materinya dijelaskan dengan cara yang ringan, tapi tetap profesional. Sekarang saya lebih peka terhadap tampilan dan pengalaman pengguna di setiap aplikasi.",
            },
            {
              id: 3,
              name: "Fajar Pratama",
              role: "Siswa Machine Learning",
              avatar: "/img/avatars/avatar-3.png",
              message:
                "Dulu saya cuma tahu coding itu ngetik-ngetik angka dan huruf aja, ternyata seru banget! Belajar Python di sini bikin saya ngerti logika pemrograman sambil latihan langsung. Sekarang saya bisa bikin program kecil buat bantu tugas sekolah sendiri.",
            },
          ].map((t) => (
            <div key={t.id} className="flex flex-col items-start">
              {/* Icon Kutip */}
              <Quote className="w-5 h-5 mb-4" />

              {/* Pesan */}
              <p className="mb-4 leading-relaxed w-full">“{t.message}”</p>

              {/* Avatar, Nama dan Role */}
              <div className="flex items-center gap-3 mt-2">
                <Image src={t.avatar} alt={t.name} width={52} height={52} className="rounded-full object-cover" />
                <div className="flex flex-col">
                  <h4 className="font-semibold">{t.name}</h4>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="download-roadmap" className="px-24 pt-4 pb-24 bg-zinc-50 dark:bg-zinc-900">
        <div
          className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-12 pt-2 rounded-xl relative
               bg-linear-to-l from-yellow-500/50 via-amber-400/80 to-yellow-300
               before:absolute before:inset-0 before:bg-[url('/img/grid.jpg')] before:bg-repeat before:opacity-20"
        >
          <div className="sm:w-3/5 text-left flex flex-col justify-center gap-4 animate-fadeInLeft relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 relative inline-block">
              Mulai Langkah Pertamamu!
              <span className="absolute left-0 -bottom-2 w-20 h-1.5 bg-white rotate-2 rounded-sm"></span>
            </h2>

            <p className="w-xl mb-2 leading-relaxed text-lg">
              Unduh <span className="font-semibold">roadmap pembelajaran coding</span> khusus untuk <span className="font-semibold">siswa sekolah menengah pertama</span>. Panduan singkat dan interaktif untuk mengenal logika pemrograman
              sejak dini.
            </p>

            <Button
              size="lg"
              className="px-6 py-3 mb-4 text-base font-semibold rounded-xl bg-linear-to-r from-zinc-600 to-zinc-900 text-white 
               hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-300/50 whitespace-nowrap flex items-center gap-2 w-max"
            >
              <MapIcon /> Unduh Roadmap
            </Button>
          </div>

          <div className="sm:w-2/5 flex justify-center sm:justify-end relative z-10">
            <Image src="/img/section-roadmap.png" alt="section-roadmap img" width={300} height={300} className="object-contain" />
          </div>
        </div>
      </section>
      {/* ============================== FOOTER ============================== */}
      <Footer />
    </div>
  );
}
