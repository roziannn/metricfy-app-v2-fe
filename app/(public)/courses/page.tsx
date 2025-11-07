"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { X, BarChart, Tag, ChevronLeft, ChevronRight } from "lucide-react";

const baseCourses = [
  {
    id: 1,
    title: "Belajar Dasar Pemrograman",
    slug: "belajar-dasar-pemrograman",
    description: "Pelajari logika dasar coding dengan cara menyenangkan untuk pemula.",
    imageUrl: "/img/courses/courses-1.png",
    level: "Beginner",
    category: "Pemrograman",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Pemrograman Web Interaktif",
    slug: "pemrograman-web-interaktif",
    description: "Bangun situs web dinamis menggunakan HTML, CSS, dan JavaScript.",
    imageUrl: "/img/courses/courses-2.png",
    level: "Intermediate",
    category: "Web Development",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Algoritma dan Logika Lanjutan",
    slug: "algoritma-dan-logika-lanjutan",
    description: "Kuasai logika dan algoritma untuk memecahkan masalah kompleks.",
    imageUrl: "/img/courses/courses-3.png",
    level: "Advanced",
    category: "Computer Science",
    rating: 5.0,
  },
];

const allCourses = Array.from({ length: 12 }, (_, i) => {
  const course = baseCourses[i % baseCourses.length];
  return {
    ...course,
    id: i + 1,
  };
});

const allCategories = ["Pemrograman", "Web Development", "Computer Science"];
const allLevels = ["Beginner", "Intermediate", "Advanced"];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(allCourses.length / itemsPerPage);

  const toggleSelection = (value: string, list: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedLevels([]);
  };

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level);
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const paginatedCourses = filteredCourses.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <section className="min-h-screen bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300">
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight drop-shadow-lg">Akses Kelas Gratis!</h1>
          <p className="text-base sm:text-lg text-indigo-100/90 mb-8 leading-relaxed">
            Mulai perjalanan belajarmu hari ini! Pilih kursus sesuai minat dan tingkat kemampuanmu semuanya <span className="font-semibold text-white">gratis</span> dan bisa kamu akses kapan saja.
          </p>

          <div className="w-full flex justify-center">
            <div className="relative w-full sm:w-96">
              <Input
                placeholder="Cari nama kursus..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/95 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 border-none h-12 shadow-md focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 px-6 sm:px-16 py-14">
        {/* sticky aside filter */}
        <aside
          className="lg:w-1/4 bg-white dark:bg-zinc-800 rounded-2xl shadow-md border border-zinc-100 dark:border-zinc-700 
          p-6 h-fit sticky top-24 self-start"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-zinc-700 dark:text-zinc-200">Filter</h3>
            <Button variant="ghost" size="sm" onClick={resetFilters} className="text-xs text-zinc-500 hover:text-red-500 flex items-center gap-1">
              <X className="w-4 h-4" /> Reset
            </Button>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-3 text-zinc-700 dark:text-zinc-300 border-b border-zinc-200 dark:border-zinc-700 pb-1">Kategori</h4>
            <div className="space-y-3">
              {allCategories.map((category) => (
                <label key={category} className="flex items-center space-x-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <Checkbox checked={selectedCategories.includes(category)} onCheckedChange={() => toggleSelection(category, selectedCategories, setSelectedCategories)} />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-zinc-700 dark:text-zinc-300 border-b border-zinc-200 dark:border-zinc-700 pb-1">Level</h4>
            <div className="space-y-3">
              {allLevels.map((level) => (
                <label key={level} className="flex items-center space-x-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <Checkbox checked={selectedLevels.includes(level)} onCheckedChange={() => toggleSelection(level, selectedLevels, setSelectedLevels)} />
                  <span>{level}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* course list */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium text-zinc-800 dark:text-zinc-100">
              Menampilkan {paginatedCourses.length} dari {filteredCourses.length} kursus
            </h2>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="rounded-full w-10 h-10 border-zinc-300 dark:border-zinc-700 hover:bg-indigo-100 dark:hover:bg-zinc-700">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                disabled={page === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-full w-10 h-10 border-zinc-300 dark:border-zinc-700 hover:bg-indigo-100 dark:hover:bg-zinc-700"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {paginatedCourses.length > 0 ? (
              paginatedCourses.map((course) => (
                <Card
                  key={course.id}
                  className="overflow-hidden my-0 py-0 transition-transform hover:-translate-y-2 flex flex-col gap-2 
                  bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700"
                >
                  <div className="relative w-full h-48">
                    <Image src={course.imageUrl || "/bootcamp.png"} alt={course.title} fill className="object-cover" />
                  </div>

                  <CardContent className="flex flex-col flex-1 p-4">
                    <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{course.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 my-2 flex-1">{course.description}</p>

                    <div className="flex items-center justify-between mt-2">
                      <span className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                        <BarChart className="w-3 h-3" /> {course.level}
                      </span>
                      <span className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full">
                        <Tag className="w-3 h-3" /> GRATIS!
                      </span>
                    </div>

                    <Link href={`/courses/${course.slug}`}>
                      <Button
                        className="mt-5 relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg
                        bg-linear-to-r from-indigo-500 via-violet-500 to-blue-500 text-white
                        shadow-[0_0_10px_rgba(99,102,241,0.6)] hover:shadow-[0_0_20px_rgba(99,102,241,0.9)]
                        hover:from-violet-500 hover:to-indigo-500
                        transition-all duration-300 ease-out hover:-translate-y-0.5"
                      >
                        <span className="relative z-10">Detail Kelas</span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-zinc-500 dark:text-zinc-400 text-center col-span-full py-10 text-lg">Tidak ada kursus yang cocok dengan pencarianmu 😢</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
