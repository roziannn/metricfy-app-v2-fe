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
];

const allArticles = Array.from({ length: 8 }, (_, i) => {
  const article = baseArticles[i % baseArticles.length];
  return { ...article, id: i + 1 };
});

const allCategories = Array.from(new Set(allArticles.map((a) => a.category)));

export default function ArticlesPage() {
  return (
    <section className="min-h-screen bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300">
      {/* Header */}
      <div className="relative w-full bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-500 py-16 px-6 sm:px-16 text-center text-white shadow-xl overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "25px 25px",
            opacity: 0.8,
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight drop-shadow-lg">Artikel & Insight</h1>
          <p className="text-base sm:text-lg text-indigo-100/90 mb-8 leading-relaxed">Kumpulan tulisan singkat seputar teknologi, pemrograman, dan tips karier yang dikurasi untuk membantu kamu berkembang di dunia digital.</p>
        </div>
      </div>

      {/* Articles per Category */}
      <div className="px-6 sm:px-16 py-14 space-y-12">
        {allCategories.map((category) => {
          const articlesByCategory = allArticles.filter((a) => a.category === category);
          if (articlesByCategory.length === 0) return null;

          return (
            <div key={category}>
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

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {articlesByCategory.map((article) => (
                  <Card key={article.id} className="overflow-hidden flex flex-col gap-2 py-0 my-0 bg-white dark:bg-zinc-800 border-0 shadow-none transition-all">
                    <div className="relative w-full h-48">
                      <Image src={article.imageUrl || "/img/default.jpg"} alt={article.title} fill className="object-cover" />
                    </div>
                    <CardContent className="flex flex-col flex-1 p-5">
                      <Link href={`/articles/${article.slug}`}>
                        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors leading-snug">{article.title}</h3>
                      </Link>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 mb-3 flex-1 leading-relaxed">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mt-auto">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" /> {new Date(article.publishedAt).toLocaleDateString("id-ID")}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" /> {article.author}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
