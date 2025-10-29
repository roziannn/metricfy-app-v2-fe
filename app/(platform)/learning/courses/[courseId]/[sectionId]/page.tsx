import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "101 Logika Pemrograman Dasar",
    modules: [
      { title: "1. Pengantar Logika dan Algoritma", content: "Penjelasan tentang logika dan algoritma." },
      { title: "2. Konsep Dasar Pemrograman", content: "Mengenal dasar-dasar pemrograman." },
      { title: "3. Variabel dan Tipe Data", content: "Belajar variabel dan tipe data dalam pemrograman." },
    ],
  },
];

export default function SectionDetailPage({ params }: { params: { courseId: string; sectionId: string } }) {
  const { courseId, sectionId } = params;
  const course = courses.find((c) => c.id === Number(courseId));
  if (!course) return notFound();

  const sectionIndex = Number(sectionId) - 1;
  const section = course.modules[sectionIndex];
  if (!section) return notFound();

  const prev = sectionIndex > 0 ? sectionIndex : null;
  const next = sectionIndex < course.modules.length - 1 ? sectionIndex + 2 : null;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Link href={`/learning/courses/${courseId}`}>
        <Button variant="ghost" className="flex items-center gap-2 text-sm mb-4">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Kursus
        </Button>
      </Link>

      <h1 className="text-2xl font-bold text-gray-800">{section.title}</h1>
      <p className="text-gray-600 leading-relaxed">{section.content}</p>

      <div className="flex justify-between pt-6 border-t mt-8">
        {prev ? (
          <Link href={`/learning/courses/${courseId}/${prev}`}>
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Sebelumnya
            </Button>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={`/learning/courses/${courseId}/${next}`}>
            <Button className="flex items-center gap-2">
              Selanjutnya <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
