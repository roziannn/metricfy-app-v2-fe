import { notFound } from "next/navigation";
import { ArticleDetail } from "./article-detail";
import { baseArticles } from "@/data/articles/articles";

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = baseArticles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return <ArticleDetail article={article} />;
}
