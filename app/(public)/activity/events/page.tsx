"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar1, CalendarDays, Clock, Laptop2, Presentation, Sparkles } from "lucide-react"; //

const eventItems = [
  {
    id: 1,
    title: "Perempuan yang Membangun Data: Inovasi, Empati, dan Tujuan",
    description: "Bersama Dita, seorang Data Product Manager yang memulai kariernya sebagai Full Stack Developer, kita akan belajar bagaimana teknologi, data, dan kemanusiaan bisa berpadu untuk menciptakan solusi berdampak.",
    imageUrl: "/img/article-news/article-2.png",
    category: "Webinar",
    slug: "perempuan-yang-membangun-data",
    date: "2025-11-12T19:00:00",
    time: "19:00 - 20:00",
  },
  {
    id: 2,
    title: "Next.js Mastery: Bangun Aplikasi Modern Inventory Barang",
    description: "Pelatihan intensif membangun aplikasi modern menggunakan Next.js dan Tailwind CSS, lengkap dengan integrasi API dan deployment ke platform cloud.",
    imageUrl: "/img/article-news/article-2.png",
    category: "Workshop",
    slug: "nextjs-mastery-2025",
    date: "2025-11-25T09:00:00",
    time: "09:00 - 15:00",
  },
  {
    id: 3,
    title: "Tech Meetup Indonesia: Kolaborasi, Growth, dan Tren Digital 2026",
    description: "Acara meetup interaktif untuk berbagi insight seputar inovasi digital, teknologi masa depan, dan networking bersama para developer serta startup founder.",
    imageUrl: "/img/article-news/article-3.png",
    category: "Meetup",
    slug: "tech-meetup-indonesia",
    date: "2025-12-12T10:00:00",
    time: "10:00 - 12:00",
  },
];

const categories = Array.from(new Set(eventItems.map((item) => item.category)));

function getRemainingTime(dateString: string) {
  const eventDate = new Date(dateString);
  const now = new Date();
  const diffMs = eventDate.getTime() - now.getTime();

  if (diffMs <= 0) return "Berlangsung sekarang 🎉";

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);

  return `${days} hari ${hours} jam lagi`;
}

export default function EventPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const filteredItems = selectedCategory ? eventItems.filter((item) => item.category === selectedCategory) : eventItems;

  return (
    <section className="min-h-screen bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300">
      {/* Header */}
      <div className="relative w-full bg-linear-to-r from-indigo-400 via-violet-500 to-blue-500 py-16 px-6 sm:px-16 text-center text-white shadow-xl overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "25px 25px",
            opacity: 0.4,
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight drop-shadow-lg">Jelajahi Event Seru 🚀</h1>
          <p className="text-base sm:text-lg text-indigo-100/90 mb-8 leading-relaxed">Ikuti berbagai event menarik mulai dari workshop, webinar, hingga meetup untuk menambah ilmu dan koneksi baru!</p>

          <div className="flex flex-wrap gap-3 mb-6 justify-center">
            {[
              { label: "Semua", icon: <Sparkles className="w-4 h-4" /> },
              { label: "Event", icon: <CalendarDays className="w-4 h-4" /> },
              { label: "Workshop", icon: <Presentation className="w-4 h-4" /> },
              { label: "Webinar", icon: <Laptop2 className="w-4 h-4" /> },
            ].map((cat) => {
              const value = cat.label.toLowerCase() === "semua" ? undefined : cat.label.toLowerCase();
              const isActive = selectedCategory === value || (!selectedCategory && value === undefined);

              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategory(value)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-xl font-medium text-sm transition-all shadow-sm
          ${isActive ? "bg-yellow-500 text-white shadow-yellow-300 dark:shadow-yellow-900" : "bg-white/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-indigo-100 dark:hover:bg-zinc-700"}`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Event Grid */}
      <div className="flex justify-center py-14 px-6 sm:px-16">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Link key={item.id} href={`/activity/events/${item.slug}`} className="hover:opacity-90 transition-opacity">
                  <Card className="overflow-hidden transition-transform hover:-translate-y-2 my-0 py-0 flex flex-col bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700">
                    <div className="relative w-full h-72 sm:h-[280px] overflow-hidden">
                      <Image src={item.imageUrl || "/img/default.png"} alt={item.title} fill className="object-cover" />
                    </div>

                    <CardContent className="flex flex-col flex-1 p-4 pt-0">
                      <span className="w-fit flex items-center gap-1 bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800 text-sm font-semibold px-3 py-1.5 mb-4 rounded-2xl">
                        <Clock className="w-4 h-4" /> {getRemainingTime(item.date)}
                      </span>

                      <h3 className="text-lg font-semibold hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-200 line-clamp-2">{item.title}</h3>

                      <div className="flex justify-start gap-8 my-4">
                        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                          <CalendarDays className="w-4 h-4" />
                          <span>
                            {new Date(item.date).toLocaleDateString("id-ID", {
                              weekday: "long",
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                          <Clock className="w-4 h-4" />
                          <span>{item.time}</span>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400  line-clamp-2 leading-relaxed">{item.description}</p>
                    </CardContent>

                    <CardFooter className="font-semibold text-indigo-700 dark:text-indigo-300 bg-zinc-100 dark:bg-zinc-700 py-4 pl-2 lg:pl-6">GRATIS!</CardFooter>
                  </Card>
                </Link>
              ))
            ) : (
              <p className="text-zinc-500 dark:text-zinc-400 text-center col-span-full py-10 text-lg">Tidak ada event yang cocok dengan kategori ini 😢</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
