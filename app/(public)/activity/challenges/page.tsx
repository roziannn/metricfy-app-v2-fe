"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Tag, ArrowRight, Users, BarChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const challengeItems = [
  {
    id: 1,
    title: "Buat Website Portfolio Pribadi",
    description: "Bangun website portfolio menggunakan Next.js dan Tailwind CSS untuk menunjukkan karya dan profilmu.",
    imageUrl: "/img/article-news/article-1.png",
    category: "Web Development",
    level: "Beginner",
    xp: 120,
    participants: 42,
    quota: 100,
    slug: "portfolio-challenge",
  },
  {
    id: 2,
    title: "Todo App Challenge",
    description: "Kembangkan aplikasi Todo List dengan fitur filter, edit, dan penyimpanan lokal.",
    imageUrl: "/img/article-news/article-2.png",
    category: "Frontend",
    level: "Intermediate",
    xp: 200,
    participants: 87,
    quota: 120,
    slug: "todo-app-challenge",
  },
  {
    id: 3,
    title: "REST API Challenge",
    description: "Buat REST API sederhana menggunakan Express.js untuk manajemen data produk.",
    imageUrl: "/img/article-news/article-3.png",
    category: "Backend",
    level: "Intermediate",
    xp: 250,
    participants: 65,
    quota: 100,
    slug: "rest-api-challenge",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "Buat dashboard interaktif menggunakan Recharts untuk menampilkan data pengguna secara real-time.",
    imageUrl: "/img/article-news/article-4.png",
    category: "Data Visualization",
    level: "Advanced",
    xp: 350,
    participants: 30,
    quota: 50,
    slug: "data-viz-challenge",
  },
];

const categories = Array.from(new Set(challengeItems.map((item) => item.category)));

export default function ChallengePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const filteredItems = selectedCategory ? challengeItems.filter((item) => item.category === selectedCategory) : challengeItems;

  return (
    <section className="min-h-screen bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300">
      <div className="relative w-full bg-linear-to-r from-indigo-500 via-violet-600 to-blue-600 py-16 px-6 sm:px-16 text-center text-white shadow-xl overflow-hidden">
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight drop-shadow-lg">Ikuti Tantangan Coding</h1>
          <p className="text-base sm:text-lg text-indigo-100/90 mb-8 leading-relaxed">Uji kemampuanmu lewat berbagai challenge seru! Selesaikan misi, kumpulkan XP, dan tunjukkan kreativitasmu lewat proyek nyata.</p>
          <div className="w-full flex justify-center">
            <Select value={selectedCategory || "all"} onValueChange={(val) => setSelectedCategory(val === "all" ? undefined : val)}>
              <SelectTrigger className="w-64 bg-white/95 dark:bg-zinc-800 border-none text-zinc-800 dark:text-zinc-100 h-12 shadow-md focus:ring-2 focus:ring-indigo-400 transition">
                <SelectValue placeholder="Pilih kategori challenge..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* challenge */}
      <div className="flex justify-center py-14 px-6 sm:px-16">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden transition-transform hover:-translate-y-2 flex flex-col gap-2 my-0 py-0 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 shadow-sm hover:shadow-lg">
                  <div className="relative w-full h-72 sm:h-[280px] overflow-hidden">
                    <Image src={item.imageUrl || "/img/default.png"} alt={item.title} fill className="object-cover" />
                    <span className="absolute top-3 right-0 bg-indigo-600/80 dark:bg-indigo-900/80 text-white text-xs font-semibold uppercase px-3 py-2 flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {item.category}
                    </span>
                  </div>

                  <CardContent className="flex flex-col flex-1 p-4">
                    <h3 className="text-lg font-semibold hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-200">{item.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 my-2 flex-1">{item.description}</p>

                    <div className="flex justify-between items-center text-sm mb-3">
                      <Badge variant="outline" className="flex items-center gap-1 px-2 py-1 text-orange-500 dark:text-orange-400 border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/30">
                        <Flame className="w-3 h-3" /> {item.xp} XP
                      </Badge>

                      <span className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                        <Users className="w-4 h-4" /> {item.participants}/{item.quota}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-zinc-200 dark:border-zinc-700 pt-3">
                      <span
                        className={`flex items-center gap-1 px-2 py-1 text-xs rounded-full ${
                          item.level === "Beginner"
                            ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                            : item.level === "Intermediate"
                            ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                            : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                        }`}
                      >
                        <BarChart className="w-3 h-3" /> {item.level}
                      </span>

                      <Link href={`/challenges/${item.slug}`} className="inline-flex items-center text-sm font-medium hover:underline">
                        Ikuti Challenge <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-zinc-500 dark:text-zinc-400 text-center col-span-full py-10 text-lg">Tidak ada challenge untuk kategori ini 😢</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
