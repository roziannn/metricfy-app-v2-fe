"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { challengeItems } from "@/data/challenges/challenges";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Flame, Users, BarChart } from "lucide-react";

export type Challenge = (typeof challengeItems)[0];

export default function ChallengeDetail({ challenge }: { challenge: Challenge }) {
  const [openModal, setOpenModal] = useState(false);
  const relatedChallenges = challengeItems.filter((c) => c.id !== challenge.id);

  return (
    <section className="bg-zinc-100 dark:bg-zinc-900 py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow-md">
          <Image src={challenge.imageUrl} alt={challenge.title} fill className="object-cover" />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-2">{challenge.title}</h1>

          <p className="text-md text-zinc-600 dark:text-zinc-400">
            Diselenggarakan oleh <span className="font-semibold text-zinc-900 dark:text-zinc-200">{challenge.organizer}</span>
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">{challenge.shortDesc}</p>

          {challenge.status === "Open" && (
            <Link href={`/activity/challenges/${challenge.slug}/join`}>
              <Button size="lg">Gabung Challenge</Button>
            </Link>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* TABS - span 2 */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-800 rounded-xl p-8">
          <Tabs defaultValue="deskripsi">
            <TabsList className="mb-10">
              <TabsTrigger value="deskripsi">Deskripsi</TabsTrigger>
              <TabsTrigger value="submission">Submission</TabsTrigger>
              <TabsTrigger value="announcement">Announcement</TabsTrigger>
            </TabsList>

            {/* TAB DESKRIPSI */}
            <TabsContent value="deskripsi">
              <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: challenge.description }}></div>
            </TabsContent>

            {/* TAB SUBMISSION */}
            <TabsContent value="submission">
              {!challenge.submissions || challenge.submissions.length === 0 ? (
                <div className="text-center">
                  <p className="bg-secondary border border-secondary/50 py-3 mb-5 px-4 rounded-md text-zinc-700 dark:text-zinc-300">Anda sudah melakukan submission pada challenge ini.</p>

                  <Dialog open={openModal} onOpenChange={setOpenModal}>
                    <DialogTrigger asChild>
                      <Button>Submit aplikasi disini</Button>
                    </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Submission Aplikasi</DialogTitle>
                      </DialogHeader>

                      <div className="space-y-4 mt-2">
                        <div>
                          <label className="block mb-1 text-sm">Nama Aplikasi</label>
                          <Input placeholder="Masukkan nama aplikasi" />
                        </div>

                        <div>
                          <label className="block mb-1 text-sm">Link Aplikasi (opsional)</label>
                          <Input placeholder="https://example.com" />
                        </div>

                        <div>
                          <label className="block mb-1 text-sm">Link Dokumentasi</label>
                          <Input placeholder="https://docs.com" />
                        </div>

                        <div>
                          <label className="block mb-1 text-sm">Catatan</label>
                          <Textarea placeholder="Tambahkan catatan tambahan..." />
                        </div>
                      </div>

                      <DialogFooter>
                        <Button onClick={() => setOpenModal(false)}>Submit</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-zinc-700 dark:text-zinc-300">Anda sudah melakukan submission pada challenge ini.</p>
                  {/* tampilkan ringkasan submission pertama (jika ada) */}
                  {/* {challenge.submissions && challenge.submissions[0] && (
                    <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-md">
                      <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">Nama Aplikasi: {(challenge.submissions[0] as any).appName || (challenge.submissions[0] as any).repoUrl || "—"}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Link: {(challenge.submissions[0] as any).liveUrl || (challenge.submissions[0] as any).repoUrl || "—"}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Status: {(challenge.submissions[0] as any).status || "pending"}</p>
                    </div>
                  )} */}
                </div>
              )}
            </TabsContent>

            {/* TAB ANNOUNCEMENT */}
            <TabsContent value="announcement">
              {!challenge.announcement || challenge.announcement.length === 0 ? (
                <p className="text-zinc-600 dark:text-zinc-400">Belum ada pengumuman saat ini.</p>
              ) : (
                <ul className="list-disc pl-6 space-y-2">
                  {challenge.announcement.map((item, i) => (
                    <li key={i} className="text-zinc-700 dark:text-zinc-300">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* SIDEBAR DETAIL - span 1 */}
        <aside className="bg-white dark:bg-zinc-800 rounded-xl p-8 h-fit">
          <h2 className="text-xl font-semibold mb-6 border-b pb-4">Detail Challenge</h2>

          <div className="space-y-5 text-sm text-zinc-700 dark:text-zinc-300">
            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">XP</p>
              <div className="flex items-center gap-2 font-medium text-zinc-600 dark:text-zinc-400">
                <Flame className="w-4 h-4" /> {challenge.xp} XP
              </div>
            </div>

            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Peserta</p>
              <div className="flex items-center gap-2 font-medium text-zinc-600 dark:text-zinc-400">
                <Users className="w-4 h-4" /> {challenge.participants}/{challenge.quota}
              </div>
            </div>

            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Level</p>
              <div className="flex items-center gap-2 font-medium text-zinc-600 dark:text-zinc-400">
                <BarChart className="w-4 h-4" /> {challenge.level}
              </div>
            </div>

            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Status</p>
              <div
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${challenge.status === "Open" ? "bg-indigo-600 text-white" : challenge.status === "In Progress" ? "bg-yellow-500 text-white" : "bg-zinc-500 text-white"}`}
              >
                {challenge.status === "Open" ? "Pendaftaran Dibuka" : challenge.status === "In Progress" ? "Sedang Berlangsung" : "Selesai"}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* RELATED CHALLENGES */}
      {relatedChallenges.length > 0 && (
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center border-b border-zinc-200 dark:border-zinc-700 pb-4 mb-6">
            <span className="uppercase text-sm text-zinc-700 dark:text-zinc-300">Lihat Challenge Lainnya</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {relatedChallenges.slice(0, 4).map((c) => (
              <Link key={c.id} href={`/activity/challenges/${c.slug}`} className="overflow-hidden flex flex-col bg-white dark:bg-zinc-800 rounded-xl transition-all hover:shadow-md">
                <div className="relative w-full h-44">
                  <Image src={c.imageUrl || "/img/default.jpg"} alt={c.title} fill className="object-cover" />
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-base font-semibold leading-snug hover:text-indigo-600 dark:hover:text-indigo-400">{c.title}</h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 mb-3 flex-1 leading-relaxed">{c.description.length > 110 ? c.description.slice(0, 110) + "..." : c.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
