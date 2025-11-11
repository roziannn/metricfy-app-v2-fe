"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, Tag } from "lucide-react";
import { baseEvents } from "@/data/events/event";

export type Event = (typeof baseEvents)[0];

export function EventDetail({ event }: { event: Event }) {
  const relatedEvents = baseEvents.filter((e) => e.id !== event.id);

  return (
    <section className="bg-zinc-100 dark:bg-zinc-900 py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mb-20">
        <div className="relative w-full h-64 lg:h-[360px] rounded-lg overflow-hidden">
          <Image src={event.imageUrl} alt={event.title} fill className="object-cover" />
          <div className="absolute top-4 right-4 bg-indigo-600/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
            <Tag className="h-3.5 w-3.5" />
            {event.category}
          </div>
        </div>
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">{event.title}</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-md">{event.description}</p>

          <div className="flex justify-center lg:justify-start items-center gap-4">
            <Link href="#register" className="bg-indigo-500 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition">
              Daftar Sekarang
            </Link>
            <h1 className="font-semibold text-lg text-primary">GRATIS!</h1>
          </div>
        </div>
      </div>

      {/* DETAIL SECTION */}
      <div id="details" className="max-w-7xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* deskripsi */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-800 rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 border-b pb-5">Deskripsi</h2>

          <article className="prose prose-zinc dark:prose-invert max-w-none leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: event.content }} />
        </div>

        {/* detail event */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-8 h-fit">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 border-b pb-5">Detail Event</h2>
          <div className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300">
            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Tanggal</p>
              <div className="flex items-center gap-2 font-medium text-zinc-600 dark:text-zinc-400">
                <Calendar className="w-4 h-4" />
                {new Date(event.date).toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </div>

            {event.time && (
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Waktu</p>
                <div className="flex items-center gap-2 font-medium text-zinc-600 dark:text-zinc-400">
                  <Clock className="w-4 h-4" />
                  {event.time} WIB
                </div>
              </div>
            )}

            {event.location && (
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Lokasi</p>
                <div className="flex items-center gap-2 font-medium text-zinc-600 dark:text-zinc-400">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* related events section */}
      {relatedEvents.length > 0 && (
        <div className="max-w-7xl mx-auto dark:border-zinc-800">
          <div className="flex items-center border-b border-zinc-200 dark:border-zinc-700 pb-4 mb-6">
            <span className="uppercase text-sm text-zinc-700 dark:text-zinc-300">Lihat Event Lainnya</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {relatedEvents.slice(0, 4).map((event) => (
              <div key={event.id} className="overflow-hidden flex flex-col bg-white dark:bg-zinc-800 rounded-xl transition-all hover:shadow-md">
                <div className="relative w-full h-44">
                  <Image src={event.imageUrl || "/img/default.jpg"} alt={event.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-indigo-600/90 text-white text-[10px] px-2 py-1 rounded-full font-medium flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {event.category}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <Link href={`/activity/events/${event.slug}`}>
                    <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors leading-snug">{event.title}</h3>
                  </Link>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 mb-3 flex-1 leading-relaxed">{event.description.length > 110 ? event.description.slice(0, 110) + "..." : event.description}</p>

                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mt-auto">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(event.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
