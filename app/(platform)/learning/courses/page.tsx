"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, TrendingUp, Layers, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "101 Logika Pemrograman Dasar",
    description: "Belajar cara berpikir seperti programmer dengan latihan logika sederhana dan permainan angka.",
    category: "Programming",
    level: "Beginner",
    duration: "12 Jam",
    progress: 80,
  },
  {
    id: 2,
    title: "Membuat Website Pertamamu dengan HTML & CSS",
    description: "Pelajari dasar HTML dan CSS untuk membangun halaman web sederhana dan menarik.",
    category: "Web Development",
    level: "Beginner",
    duration: "15 Jam",
    progress: 30,
  },
  {
    id: 3,
    title: "Belajar Interaktif dengan JavaScript",
    description: "Mengenal bahasa pemrograman yang bisa membuat website kamu jadi hidup dan interaktif!",
    category: "Web Development",
    level: "Intermediate",
    duration: "20 Jam",
    progress: 10,
  },
  {
    id: 4,
    title: "Dasar-Dasar Python untuk Pemula",
    description: "Bahasa paling populer di dunia! Cocok buat kamu yang ingin belajar AI atau analisis data nantinya.",
    category: "Programming",
    level: "Beginner",
    duration: "18 Jam",
    progress: 0,
  },
  {
    id: 5,
    title: "Membuat Game Sederhana dengan Scratch",
    description: "Gunakan blok-blok kode berwarna untuk membuat game seru tanpa perlu menulis kode panjang.",
    category: "Game Development",
    level: "Beginner",
    duration: "10 Jam",
    progress: 100,
  },
];

const getLevelVariant = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-100 text-green-700 hover:bg-green-200";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-700 hover:bg-yellow-200";
    case "Expert":
      return "bg-red-100 text-red-700 hover:bg-red-200";
    default:
      return "bg-gray-100 text-gray-700 hover:bg-gray-200";
  }
};

function CourseCard({ course }: { course: (typeof courses)[0] }) {
  const isCompleted = course.progress === 100;

  return (
    <Card className="flex flex-col justify-between h-full border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-xl p-4 bg-white dark:bg-gray-900">
      <CardHeader className="space-y-1 p-0">
        <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100 leading-snug">{course.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{course.description}</CardDescription>
      </CardHeader>

      <CardContent className="mt-1 flex flex-col gap-3 p-0">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200">
            <Layers className="h-3 w-3 mr-1" />
            {course.category}
          </Badge>
          <Badge className={`text-xs ${getLevelVariant(course.level)}`}>
            <TrendingUp className="h-3 w-3 mr-1" />
            {course.level}
          </Badge>
        </div>

        <div className="flex items-center text-xs text-muted-foreground font-medium mt-1">
          <Clock className="h-3.5 w-3.5 mr-1.5 text-primary" />
          {course.duration}
        </div>

        <div className="mt-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">{isCompleted ? "Selesai 🎉" : "Progress"}</span>
            <span className="text-xs font-bold text-primary">{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2" />
        </div>
      </CardContent>

      <CardFooter className="p-0 mt-2">
        <Link href={`/learning/courses/${course.id}`} className="w-full">
          <Button variant={isCompleted ? "secondary" : "outline"} size="sm" className="w-full font-medium tracking-wide">
            {isCompleted ? "Lihat Course" : "Lanjutkan Belajar"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const categories = ["All", ...new Set(courses.map((c) => c.category))];
  const levels = ["All", ...new Set(courses.map((c) => c.level))];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchCategory = selectedCategory === "All" || course.category === selectedCategory;
      const matchLevel = selectedLevel === "All" || course.level === selectedLevel;
      return matchCategory && matchLevel;
    });
  }, [selectedCategory, selectedLevel]);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
          <p className="text-muted-foreground text-sm">Upgrade terus ilmu dan pengalaman terbaru kamu.</p>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <Select onValueChange={setSelectedCategory} value={selectedCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Select onValueChange={setSelectedLevel} value={selectedLevel}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Pilih Level" />
            </SelectTrigger>
            <SelectContent>
              {levels.map((lvl) => (
                <SelectItem key={lvl} value={lvl}>
                  {lvl}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-10">Tidak ada kursus yang cocok dengan filter kamu 😅</p>
      )}
    </div>
  );
}
