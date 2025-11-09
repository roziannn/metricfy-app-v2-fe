import { notFound } from "next/navigation";
import { ShowcaseDetail } from "./showcase-detail";
import { showcaseItems } from "@/data/showcases/showcase";

export default async function ShowcasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const showcase = showcaseItems.find((s) => s.slug === slug);

  if (!showcase) return notFound();

  return <ShowcaseDetail showcase={showcase} />;
}
