import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Layers, ArrowLeft, CheckCircle2, Circle, MessageSquareCode } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "101 Logika Pemrograman Dasar",
    description: "Pelajari dasar-dasar logika pemrograman agar kamu memahami cara berpikir komputasional sebelum menulis kode. Cocok untuk pemula!",
    category: "Programming",
    level: "Beginner",
    duration: "40 Jam",
    progress: 45,
    content: "Kursus ini membimbing kamu dari nol untuk memahami konsep logika, algoritma, dan problem solving dalam pemrograman. Kamu akan belajar membuat pseudocode, flowchart, serta memahami bagaimana komputer berpikir.",
    modules: [
      { title: "1. Pengantar Logika dan Algoritma", completed: true },
      { title: "2. Konsep Dasar Pemrograman", completed: true },
      { title: "3. Variabel dan Tipe Data", completed: true },
      { title: "4. Operator dan Ekspresi", completed: false },
      { title: "5. Struktur Percabangan (If-Else)", completed: false },
      { title: "6. Struktur Perulangan (Loop)", completed: false },
      { title: "7. Array dan Struktur Data Sederhana", completed: false },
      { title: "8. Fungsi dan Modularisasi", completed: false },
      { title: "9. Flowchart & Pseudocode Lanjut", completed: false },
      { title: "10. Studi Kasus Mini: Kalkulator Logika", completed: false },
      { title: "11. Rangkuman Materi", completed: false },
      { title: "12. Latihan Akhir & Evaluasi", completed: false },
    ],
  },
];

export default async function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const { courseId } = await params;
  const course = courses.find((c) => c.id === Number(courseId));
  if (!course) return notFound();

  const totalModules = course.modules.length;
  const completedModules = course.modules.filter((m) => m.completed).length;
  const progressPercentage = Math.round((completedModules / totalModules) * 100);

  return (
    <div className="flex flex-col md:flex-row gap-8 px-6">
      {/* Main Content */}
      <main className="flex-1 space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link href="/learning/courses">
            <Button variant="outline">
              <ArrowLeft /> Kembali
            </Button>
          </Link>
          {/* <Badge variant="outline" className="text-xs px-3 py-1 bg-amber-50 text-amber-700 border-amber-200">
            {progressPercentage}% Selesai
          </Badge> */}
        </div>

        <div>
          <Image src="/test.png" alt={course.title} width={900} height={250} className="rounded-xl shadow-sm mx-auto" />
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{course.title}</h1>
          <p className="text-muted-foreground leading-relaxed text-justify">{course.description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
              <Layers className="h-3 w-3 mr-1" /> {course.category}
            </Badge>
            <Badge className="text-xs bg-gray-100 text-gray-700">
              <TrendingUp className="h-3 w-3 mr-1" /> {course.level}
            </Badge>
            <Badge className="text-xs bg-primary/10 text-primary">
              <Clock className="h-3 w-3 mr-1" /> {course.duration}
            </Badge>
          </div>

          <section className="pt-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Tentang Kursus</h2>
            <p className="leading-relaxed text-justify text-gray-600">{course.content}</p>
          </section>
        </div>
      </main>

      {/* Sidebar */}
      <aside className="md:w-80 shrink-0 bg-white dark:bg-gray-900 rounded-lg shadow-sm md:shadow-none border md:border-l border-gray-200 dark:border-gray-700 md:sticky md:top-0 md:h-screen flex flex-col overflow-y-auto px-4 py-4">
        {/* Diskusi Kelas */}
        <div className="mb-6 bg-secondary/40 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquareCode className="h-4 w-4" />
            <span className="text-sm font-medium">Diskusi Kelas</span>
          </div>
          <Link href={`/learning/courses/${courseId}/discussion`}>
            <Button variant="outline" size="sm" className="text-xs">
              Buka
            </Button>
          </Link>
        </div>

        {/* Sidebar Header */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 border-b pb-2 mb-2">Daftar Modul</h3>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {completedModules}/{totalModules} modul selesai ({progressPercentage}%)
          </span>
        </div>

        {/* List Modul */}
        <ul className="space-y-1 flex-1">
          {course.modules.map((modul, index) => (
            <Link key={index} href={`/learning/courses/${courseId}/${index + 1}`} className="block">
              <li className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                {modul.completed ? <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" /> : <Circle className="h-4 w-4 text-gray-300 dark:text-gray-500 shrink-0" />}
                <span className={`text-sm ${modul.completed ? "text-gray-800 dark:text-gray-200" : "text-gray-500 dark:text-gray-400"}`}>{modul.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </aside>
    </div>
  );
}
