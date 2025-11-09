"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Share2, User, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";

// Dummy related articles
const dummyArticles = [
  {
    id: 2,
    title: "Tips Belajar JavaScript untuk Pemula",
    slug: "tips-belajar-javascript",
    content: "<p>Konten artikel tentang belajar JS...</p>",
    excerpt: "Belajar JavaScript dengan mudah dan cepat untuk pemula.",
    imageUrl: "/img/article-news/article-2.png",
    category: "Pemrograman",
    author: "Firda Rosiana",
    publishedAt: "2025-09-25",
  },
  {
    id: 3,
    title: "Mengenal CSS Grid dan Flexbox",
    slug: "mengenal-css-grid-flexbox",
    content: "<p>Konten artikel tentang CSS...</p>",
    excerpt: "Pelajari cara menggunakan CSS Grid dan Flexbox untuk layout modern.",
    imageUrl: "/img/article-news/article-3.png",
    category: "Desain Web",
    author: "Firda Rosiana",
    publishedAt: "2025-08-15",
  },
  {
    id: 4,
    title: "Panduan Membuat Website Responsive",
    slug: "panduan-website-responsive",
    content: "<p>Konten artikel tentang responsive...</p>",
    excerpt: "Cara membuat website yang tampil baik di semua perangkat.",
    imageUrl: "/img/article-news/article-4.png",
    category: "Web Development",
    author: "Firda Rosiana",
    publishedAt: "2025-07-30",
  },
  {
    id: 5,
    title: "Belajar React: Dasar hingga Lanjut",
    slug: "belajar-react-dasar-lanjut",
    content: "<p>Konten artikel tentang React...</p>",
    excerpt: "Panduan lengkap belajar React untuk pemula hingga mahir.",
    imageUrl: "/img/article-news/article-1.png",
    category: "Framework",
    author: "Firda Rosiana",
    publishedAt: "2025-07-10",
  },
];

export type Article = {
  id: number;
  title: string;
  slug: string;
  content: string;
  imageUrl: string; // thumbnail
  category: string;
  author: string;
  publishedAt: string;
  excerpt?: string;
};

export function ArticleDetail({ article }: { article: Article }) {
  // Filter dummy articles supaya tidak menampilkan artikel yang sama dengan yang sedang dibaca
  const relatedArticles = dummyArticles.filter((a) => a.id !== article.id);

  return (
    <section className="bg-zinc-100 dark:bg-zinc-900 py-16 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto mb-20">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{article.title}</h1>

        {/* Author + Date + Share */}
        <div className="flex justify-between items-center text-zinc-600 dark:text-zinc-400 text-sm mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <UserCircle className="w-4 h-4 text-zinc-500" />
              <span>{article.author}</span>
            </div>
            <span className="text-zinc-400">—</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-zinc-500" />
              <span>{new Date(article.publishedAt).toLocaleDateString("id-ID")}</span>
            </div>
          </div>

          {/* Share Button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Bagikan Artikel</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Thumbnail + Category */}
        <div className="relative w-full h-72 sm:h-[420px] overflow-hidden mb-8 rounded-lg">
          <Image src={article.imageUrl} alt={article.title} fill priority={false} loading="lazy" className="object-cover" />
          <div className="absolute top-3 right-0 bg-indigo-600/80 text-white text-xs font-semibold uppercase px-3 py-2">{article.category}</div>
        </div>

        {/* Content */}
        <article className="prose prose-zinc dark:prose-invert max-w-none leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <div className="max-w-7xl mx-auto dark:border-zinc-800">
          <div className="flex items-center border-b border-zinc-200 pb-4 mb-6">
            <span className="uppercase text-sm">Read More</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {relatedArticles.slice(0, 4).map((article) => (
              <Card key={article.id} className="overflow-hidden flex flex-col gap-2 bg-white dark:bg-zinc-800 border-0 py-0 my-0 shadow-none transition-all">
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
        </div>
      )}
    </section>
  );
}
