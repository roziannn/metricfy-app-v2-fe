"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, BarChart3, CalendarDays, CircleDashed, ClockFading, MapIcon, Quote, Tag, Tent } from "lucide-react";
import Footer from "@/components/layout/footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function LandingPage() {
  /* ----------------------------- Dummy Data ----------------------------- */
  const previousCourses = [
    {
      id: 1,
      title: "101 Logika Pemrograman Dasar",
      description: "Belajar logika dasar pemrograman.",
      imageUrl: "/bootcamp.png",
      level: "Pemula",
    },
    {
      id: 2,
      title: "Next.js Full Stack",
      description: "Belajar full stack development dengan Next.js.",
      imageUrl: "/bootcamp.png",

      level: "Menengah",
    },
    {
      id: 3,
      title: "Python untuk Data Analysis",
      description: "Analisis data dengan Python.",
      imageUrl: "/bootcamp.png",

      level: "Menengah",
    },
    {
      id: 4,
      title: "React Dasar",
      description: "Belajar dasar React.",
      imageUrl: "/bootcamp.png",

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
      title: "7 Cara Belajar Coding dengan Cepat dan Efektif",
      link: "#",
      shortDescription: "Pelajari cara efisien untuk memahami konsep coding dengan cepat dan praktis.",
    },
    {
      id: 2,
      title: "10 Best Practices yang Harus Diketahui Developer React",
      link: "#",
      shortDescription: "Tips dan trik menulis kode React yang lebih bersih, efisien, dan mudah dipelihara.",
    },
    {
      id: 3,
      title: "Panduan Lengkap Dasar-dasar Next.js 15 untuk Pemula",
      link: "#",
      shortDescription: "Panduan pemula untuk memahami fitur terbaru Next.js 14 dan penggunaannya dalam proyek.",
    },
    {
      id: 4,
      title: "Cara Meningkatkan Skill JavaScript dengan cepat",
      link: "#",
      shortDescription: "Strategi dan latihan untuk meningkatkan kemampuan JavaScript kamu secara signifikan.",
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

  const current = content[active];

  /* ----------------------------- Main Layout ---------------------------- */
  return (
    <div className="flex flex-col min-h-screen font-sans bg-zinc-100 dark:bg-black">
      {/* ============================== NAVBAR ============================== */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-24 py-6 bg-white/50 dark:bg-black/80 backdrop-blur-sm border-b border-slate-200">
        <div className="flex items-center gap-4">
          <Image src="/next.svg" alt="Logo" width={100} height={20} className="dark:invert" />
        </div>
        <div className="flex items-center gap-12 text-sm font-medium">
          {["Courses", "Articles", "Showcase", "Event", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:underline">
              {link}
            </a>
          ))}
          <div className="flex gap-4">
            <Button size="sm">Sign In</Button>
            <Button variant="outline" size="sm">
              Register
            </Button>
          </div>
        </div>
      </nav>

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
        <Badge variant="secondary" className="mb-6 px-6 py-1 font-semibold flex items-center gap-2">
          <CircleDashed /> Platform Belajar Coding Interaktif
        </Badge>

        <h1 className="text-5xl font-bold  mb-4">Tingkatkan Skillmu Hari Ini 🚀</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg">Pelajari berbagai topik dari coding, desain, hingga produktivitas dengan kursus interaktif dan artikel praktis yang siap dipakai.</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="shadow-2xl">
            Mulai Belajar
          </Button>
          <Button variant="outline" size="lg">
            Lihat Artikel
          </Button>
        </div>
      </section>

      {/* =========================== POPULAR TAGS ========================== */}
      <section className="py-12 bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {["Digital Marketing", "Web Development", "UI/UX Design", "Data Analysis", "Python Programming", "Next.js", "React.js"].map((skill, index) => (
            <Badge key={index} variant="outline" className="px-6 py-4 text-sm font-semibold rounded-4xl shadow-sm cursor-pointer hover:scale-110 transition-transform">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex gap-6 animate-marquee whitespace-nowrap absolute top-0 left-full">
          {["Digital Marketing", "Web Development", "UI/UX Design", "Data Analysis", "Python Programming", "Next.js", "React.js"].map((skill, index) => (
            <Badge key={index} variant="outline" className="px-6 py-4 text-md font-bold rounded-4xl cursor-pointer hover:scale-110 transition-transform">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

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

                      <Button variant="default" className="mt-5">
                        Klaim Sekarang
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

      {/* =========================== ARTICLES ============================= */}
      <section id="articles" className="px-24 pb-24 pt-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4 ">Artikel, Berita dan Insight Terbaru</h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">Temukan berbagai artikel dan berita inspiratif yang akan menambah wawasan, memperluas pengetahuan, dan membantumu tetap up-to-date dunia teknologi.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {previousArticles.map((article) => (
            <div key={article.id} className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative w-full h-48">
                <Image src={article.imageUrl || "/bootcamp.png"} alt={article.title} fill className="object-cover" />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-4">{article.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed flex-1">{article.shortDescription}</p>
              </div>
            </div>
          ))}
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

      <section id="download-roadmap" className="px-24 pt-4 pb-24 bg-zinc-50">
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
      <Footer previousCourses={previousCourses} />
    </div>
  );
}
