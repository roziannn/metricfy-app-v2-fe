import { notFound } from "next/navigation";
import { challengeItems } from "@/data/challenges/challenges";
import ChallengeDetail from "./challenge-detail";

export default async function ChallengeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const challenge = challengeItems.find((c) => c.slug === slug);

  if (!challenge) return notFound();

  return <ChallengeDetail challenge={challenge} />;
}
