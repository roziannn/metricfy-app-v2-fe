import { notFound } from "next/navigation";
import { EventDetail } from "./event-detail";
import { baseEvents } from "@/data/events/event";

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = baseEvents.find((e) => e.slug === slug);

  if (!event) return notFound();

  return <EventDetail event={event} />;
}
