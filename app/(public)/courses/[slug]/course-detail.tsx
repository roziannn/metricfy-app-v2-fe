"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BarChart, Globe, RefreshCw, Users, Lock, X, Code2, GitBranch, Figma, Chrome, Boxes, Cpu } from "lucide-react";

type Course = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  level: string;
  category: string;
  rating: number;
  released: string;
  updated: string;
  enrolled: number;
  content: string;
  lessons: string[];
};

export function CourseDetail({ course }: { course: Course }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const firstFiveLessons = course.lessons.slice(0, 5);

  const tools = [
    { name: "Visual Studio Code", icon: <Code2 className="w-5 h-5 text-indigo-500" /> },
    { name: "Git", icon: <GitBranch className="w-5 h-5 text-indigo-500" /> },
    { name: "Postman", icon: <Boxes className="w-5 h-5 text-indigo-500" /> },
    { name: "Figma", icon: <Figma className="w-5 h-5 text-indigo-500" /> },
    { name: "Node.js", icon: <Cpu className="w-5 h-5 text-indigo-500" /> },
    { name: "Chrome DevTools", icon: <Chrome className="w-5 h-5 text-indigo-500" /> },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-16 px-8 sm:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
          {/* IMAGE */}
          <div className="relative w-full lg:w-1/2 h-72 lg:h-[350px] rounded-2xl overflow-hidden shadow-lg">
            <Image src={course.imageUrl} alt={course.title} fill priority={false} loading="lazy" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute bottom-5 left-6 text-white">
              <h1 className="text-2xl lg:text-3xl font-bold drop-shadow-md">{course.title}</h1>
              <p className="text-sm mt-2 text-zinc-200">
                {course.category} | Level {course.level}
              </p>
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex-1">
            <p className="text-zinc-700 dark:text-zinc-300 mb-6 text-base lg:text-lg leading-relaxed">{course.description}</p>

            <div className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-300 text-sm">
              <div className="flex items-center gap-2">
                <Globe className="text-indigo-500 w-4 h-4" />
                <span>
                  Released date: <span className="font-medium text-zinc-900 dark:text-zinc-100">{course.released}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="text-indigo-500 w-4 h-4" />
                <span>
                  Last updated: <span className="font-medium text-zinc-900 dark:text-zinc-100">{course.updated}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-indigo-500 w-4 h-4" />
                <span>
                  Member enrolled: <span className="font-medium text-zinc-900 dark:text-zinc-100">{course.enrolled}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="text-indigo-500 w-4 h-4" />
                <span>
                  Level: <span className="font-medium text-zinc-900 dark:text-zinc-100">{course.level}</span>
                </span>
              </div>

              <div className="pt-4">
                <Button className="bg-linear-to-r from-indigo-500 via-violet-500 to-blue-500 text-white font-semibold hover:opacity-90">Mulai Belajar Sekarang</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="pb-16 px-8 sm:px-16 lg:px-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <article className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Deskripsi Kursus</h2>
              <div className="prose prose-zinc dark:prose-invert max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: course.content }} />
            </div>

            {/* TOOLS */}
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Tools Pendukung</h3>
              <p className="pb-4">Lengkapi semua pendukung di bawah sebelum belajar</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4
                   bg-zinc-100 dark:bg-zinc-600/40
                   rounded-lg text-sm font-medium text-zinc-900 dark:text-zinc-100
                   transition-all duration-200
                   hover:bg-indigo-100 dark:hover:bg-indigo-800/30
                   hover:border-indigo-400/60"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-50 dark:bg-indigo-800/50 shrink-0">{tool.icon}</div>
                    <span className="text-left">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* LESSONS SIDEBAR */}
          <aside className="lg:col-span-1 relative p-6 bg-zinc-100 dark:bg-zinc-800/60 rounded-xl h-fit">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Daftar Lesson</h3>
            <ul className="space-y-3 text-sm max-h-[300px] overflow-hidden">
              {firstFiveLessons.map((lesson, i) => (
                <li key={i} className="p-3 bg-white dark:bg-zinc-700/60 rounded-lg flex items-center justify-between cursor-not-allowed">
                  <span>
                    <strong>{i + 1}.</strong> {lesson}
                  </span>
                  <Button size="sm" variant="outline" disabled>
                    <Lock className="w-4 h-4 text-zinc-500" />
                  </Button>
                </li>
              ))}
            </ul>
            <Button variant="outline" onClick={() => setIsModalOpen(true)} className="mt-4 w-full">
              Lihat Semua Lesson
            </Button>
          </aside>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-xl w-full max-w-md p-6 relative">
            <button className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100" onClick={() => setIsModalOpen(false)}>
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Semua Lesson</h3>
            <ul className="space-y-3 text-sm max-h-96 overflow-y-auto">
              {course.lessons.map((lesson, i) => (
                <li key={i} className="px-2 py-4 bg-zinc-100 dark:bg-zinc-800/50 rounded flex items-center justify-between">
                  <span>
                    <strong>{i + 1}.</strong> {lesson}
                  </span>
                  <Lock className="w-4 h-4 text-zinc-500" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
