"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, ArrowRight, Users, BarChart } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { challengeItems } from "@/data/challenges/challenges";

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

      {/* challenge cards */}
      <div className="flex justify-center py-14 px-6 sm:px-16">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden transition-transform hover:-translate-y-2 flex flex-col gap-2 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 shadow-sm my-0 py-0 hover:shadow-lg">
                  <div className="relative w-full h-72 sm:h-[280px] overflow-hidden">
                    <Image src={item.imageUrl || "/img/default.png"} alt={item.title} fill className="object-cover" />
                  </div>

                  <CardContent className="flex flex-col flex-1 p-4">
                    <div className="flex justify-start items-center mb-2">
                      <Link href={`/activity/challenges/${item.slug}`} className="block">
                        <h3 className="text-lg font-semibold hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-200">{item.title}</h3>
                      </Link>
                    </div>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 my-2 flex-1">{item.shortDesc}</p>

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

                      {item.status === "Open" ? (
                        <Link href={`/activity/challenges/${item.slug}`} className="inline-flex items-center text-sm font-medium hover:underline">
                          Ikuti Challenge <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      ) : item.status === "In Progress" ? (
                        <span className="inline-flex items-center gap-1 text-sm text-yellow-600 dark:text-yellow-300">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">Sedang berlangsung</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">Challenge Selesai</span>
                        </span>
                      )}
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
