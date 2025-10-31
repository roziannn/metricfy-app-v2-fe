"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Pencil, Trash2, Puzzle, ChartBarIncreasing, Clock10, Calendar, BookOpen, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function CourseDetailPage() {
  const [course] = useState({
    id: 1,
    title: "101 Logika Pemrograman Dasar",
    category: "Web Development",
    level: "Intermediate",
    duration: "40 Jam",
    createdAt: "2025-10-29",
  });

  const [sections, setSections] = useState([
    { id: 1, title: "Pengenalan Next.js", duration: "2 Jam", createdAt: "2025-10-29", createdBy: "administrator" },
    { id: 2, title: "Routing & Pages", duration: "4 Jam", createdAt: "2025-10-29", createdBy: "administrator" },
    { id: 3, title: "API Routes & Database", duration: "6 Jam", createdAt: "2025-10-29", createdBy: "administrator" },
  ]);

  const [finalQuestions, setFinalQuestions] = useState([
    { id: 1, question: "Apa itu variabel dalam pemrograman?", xp: 10, createdAt: "2025-10-29", createdBy: "administrator" },
    { id: 2, question: "Jelaskan perbedaan antara let dan const di JavaScript.", xp: 15, createdAt: "2025-10-29", createdBy: "administrator" },
  ]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Course Info */}
      <div className="flex justify-between mb-4">
        <Button variant="outline">
          <ArrowLeft /> Kembali
        </Button>
      </div>

      <Card>
        <CardContent className="px-6">
          <CardTitle className="flex items-center gap-2 mb-6">
            <BookOpen /> {course.title}
          </CardTitle>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="flex flex-col">
              <span className="flex gap-1 text-gray-500 pb-2 items-center">
                <Puzzle className="w-3.5 h-3.5" /> Kategori
              </span>
              <span>{course.category}</span>
            </div>
            <div className="flex flex-col">
              <span className="flex gap-1 text-gray-500 pb-2 items-center">
                <ChartBarIncreasing className="w-3.5 h-3.5" /> Tingkat
              </span>
              <span>{course.level}</span>
            </div>
            <div className="flex flex-col">
              <span className="flex gap-1 text-gray-500 pb-2 items-center">
                <Clock10 className="w-3.5 h-3.5" />
                Durasi
              </span>
              <span>{course.duration}</span>
            </div>
            <div className="flex flex-col">
              <span className="flex gap-1 text-gray-500 pb-2 items-center">
                <Calendar className="w-3.5 h-3.5" />
                Created At
              </span>
              <span>{course.createdAt}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sections Card */}
      <Card>
        <CardHeader className="flex items-center justify-between px-6">
          <CardTitle>Daftar Section</CardTitle>
          <Button size="sm" variant="default">
            <PlusCircle className="h-5 w-5 mr-1" /> Tambah Section
          </Button>
        </CardHeader>

        <CardContent className="px-6 pt-0">
          <TooltipProvider>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Nama Section</TableHead>
                  <TableHead>Durasi</TableHead>
                  <TableHead>Dibuat Oleh</TableHead>
                  <TableHead>Dibuat Pada</TableHead>
                  <TableHead className="text-center w-[150px]">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sections.map((section) => (
                  <TableRow key={section.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <TableCell>{section.title}</TableCell>
                    <TableCell>{section.duration}</TableCell>
                    <TableCell>{section.createdBy}</TableCell>
                    <TableCell>{section.createdAt}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="sm" variant="outline" className="text-blue-600 hover:text-blue-700">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Edit Section</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Hapus Section</TooltipContent>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TooltipProvider>
        </CardContent>
      </Card>

      {/* Final Exercise Card */}
      <Card>
        <CardHeader className="flex items-center justify-between px-6">
          <CardTitle>Latihan Akhir</CardTitle>
          <Button size="sm" variant="default">
            <PlusCircle className="h-5 w-5 mr-1" /> Tambah Soal
          </Button>
        </CardHeader>

        <CardContent className="px-6 pt-0">
          <TooltipProvider>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Pertanyaan</TableHead>
                  <TableHead>XP (Poin)</TableHead>
                  <TableHead>Dibuat Oleh</TableHead>
                  <TableHead>Dibuat Pada</TableHead>
                  <TableHead className="text-center w-[150px]">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {finalQuestions.map((q) => (
                  <TableRow key={q.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <TableCell>{q.question}</TableCell>
                    <TableCell>{q.xp} XP</TableCell>
                    <TableCell>{q.createdBy}</TableCell>
                    <TableCell>{q.createdAt}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="sm" variant="outline" className="text-blue-600 hover:text-blue-700">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Edit Soal</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Hapus Soal</TooltipContent>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TooltipProvider>
        </CardContent>
      </Card>
    </div>
  );
}
