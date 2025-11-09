"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const baseArticles = [
  {
    id: 1,
    title: "Mengenal Dasar Pemrograman untuk Pemula",
    slug: "mengenal-dasar-pemrograman",
    excerpt: "Artikel ini membahas logika dasar pemrograman dan bagaimana memulai perjalanan coding dengan mudah.",
    imageUrl: "/img/article-news/article-1.png",
    category: "Pemrograman",
    author: "Firda Rosiana",
    publishedAt: "2025-10-12",
  },
  {
    id: 2,
    title: "Panduan Membuat Website Interaktif Menggunakan JavaScript",
    slug: "panduan-website-interaktif",
    excerpt: "Pelajari langkah demi langkah membangun website interaktif menggunakan JavaScript modern.",
    imageUrl: "/img/article-news/article-2.png",
    category: "Web Development",
    author: "Andi Pratama",
    publishedAt: "2025-10-20",
  },
  {
    id: 3,
    title: "Optimasi Algoritma: Cara Berpikir Seperti Programmer Handal",
    slug: "optimasi-algoritma",
    excerpt: "Pelajari cara mengoptimalkan algoritma agar lebih efisien dan cepat dalam pemrosesan data.",
    imageUrl: "/img/article-news/article-1.png",
    category: "Computer Science",
    author: "Nadia Kusuma",
    publishedAt: "2025-11-02",
  },
];

const allArticles = Array.from({ length: 24 }, (_, i) => {
  const article = baseArticles[i % baseArticles.length];
  return {
    ...article,
    id: i + 1,
    // title: `${article.title} (${i})`,
    // slug: `${article.slug}-${i}`,
  };
});

const allCategories = ["Pemrograman", "Web Development", "Computer Science"];

export default function ArticlesPage() {
  return (
    <section className="min-h-screen bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300 py-16">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <header className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold">Artikel & Insight</h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Kumpulan tulisan singkat seputar teknologi, pemrograman, dan tips karier yang dikurasi untuk membantu kamu berkembang di dunia digital.
          </p>
        </header>

        {/* Category Sections */}
        <div className="space-y-20">
          {allCategories.map((category) => {
            const articles = allArticles.filter((a) => a.category === category).slice(0, 4);

            return (
              <section key={category}>
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                    Terbaru di <span className="px-3 py-1 text-xs rounded-full border border-indigo-400 bg-indigo-50 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 font-medium">{category}</span>
                  </h2>

                  <Link href={`/articles?category=${encodeURIComponent(category)}`}>
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm w-full sm:w-auto font-medium">
                      Lihat Semua
                    </Button>
                  </Link>
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                  {articles.map((article) => (
                    <Card key={article.id} className="overflow-hidden flex flex-col gap-2 bg-white dark:bg-zinc-800 border-0 py-0 my-0 shadow-none transition-all">
                      {/* Image */}
                      <div className="relative w-full h-48">
                        <Image src={article.imageUrl || "/img/default.jpg"} alt={article.title} fill className="object-cover" />
                      </div>

                      {/* Content */}
                      <CardContent className="flex flex-col flex-1 p-5">
                        <Link href={`/articles/${article.slug}`}>
                          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors leading-snug">{article.title}</h3>
                        </Link>

                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 mb-3 flex-1 leading-relaxed">{article.excerpt}</p>

                        <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mt-auto">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(article.publishedAt).toLocaleDateString("id-ID")}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" /> {article.author}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
