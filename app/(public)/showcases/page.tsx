"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Tag } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const showcaseItems = [
  {
    id: 1,
    title: "Website Company Profile",
    description: "Desain dan implementasi website company profile modern menggunakan Next.js.",
    imageUrl: "/img/article-news/article-4.png",
    category: "Web Development",
    uploader: { name: "Firda Rosiana", avatar: "/img/avatars/avatar-1.png" },
    slug: "firdarosiana-website-company-profile",
  },
  {
    id: 2,
    title: "Aplikasi Mobile Todo List",
    description: "Membangun aplikasi mobile untuk manajemen tugas dengan React Native.",
    imageUrl: "/img/article-news/article-2.png",
    category: "Mobile App",
    uploader: { name: "Rizky Putra", avatar: "/img/avatars/avatar-2.png" },
    slug: "rizkyputra-aplikasi-mobile-todo-list",
  },
  {
    id: 3,
    title: "Dashboard Monitoring",
    description: "Membuat dashboard interaktif untuk monitoring data real-time.",
    imageUrl: "/img/article-news/article-3.png",
    category: "Data Visualization",
    uploader: { name: "Siti Nurhaliza", avatar: "/img/avatars/avatar-3.png" },
    slug: "sitinurhaliza-dashboard-monitoring",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Platform e-commerce dengan fitur keranjang, checkout, dan pembayaran online.",
    imageUrl: "/img/article-news/article-4.png",
    category: "Web Development",
    uploader: { name: "Ahmad Fauzi", avatar: "/img/avatars/avatar-4.png" },
    slug: "ahmadfauzi-e-commerce-platform",
  },
];

const categories = Array.from(new Set(showcaseItems.map((item) => item.category)));

export default function ShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const filteredItems = selectedCategory ? showcaseItems.filter((item) => item.category === selectedCategory) : showcaseItems;

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
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight drop-shadow-lg">Showcase Karya Terbaik</h1>
          <p className="text-base sm:text-lg text-indigo-100/90 mb-8 leading-relaxed">Temukan beberapa proyek dan karya yang telah dibuat, dikurasi untuk menunjukkan kreativitas dan kemampuan teknis.</p>

          {/* Category Dropdown */}
          <div className="w-full flex justify-center">
            <Select value={selectedCategory || "all"} onValueChange={(val) => setSelectedCategory(val === "all" ? undefined : val)}>
              <SelectTrigger className="w-64 bg-white/95 dark:bg-zinc-800 border-none text-zinc-800 dark:text-zinc-100 h-12 shadow-md focus:ring-2 focus:ring-indigo-400 transition">
                <SelectValue placeholder="Pilih kategori..." />
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

      {/* Showcase Grid */}
      <div className="flex justify-center py-14 px-6 sm:px-16">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Link key={item.id} href={`/showcases/${item.slug}`} className="hover:opacity-90 transition-opacity">
                  <Card className="overflow-hidden transition-transform hover:-translate-y-2 flex flex-col gap-2 my-0 py-0 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700">
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

                      {item.uploader && (
                        <div className="mt-4 flex items-center gap-3 border-t border-zinc-200 dark:border-zinc-700 pt-3">
                          <Image src={item.uploader.avatar} alt={item.uploader.name} width={32} height={32} className="rounded-full object-cover" />
                          <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">{item.uploader.name}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <p className="text-zinc-500 dark:text-zinc-400 text-center col-span-full py-10 text-lg">Tidak ada showcase yang cocok dengan kategori ini 😢</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
