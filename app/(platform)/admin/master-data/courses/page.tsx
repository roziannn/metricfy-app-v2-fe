"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Pencil, Trash2, Eye, Archive, Edit } from "lucide-react";
import CreateModalCourse from "./create-modal-course";

const initialCourses = [
  {
    id: 1,
    title: "101 Logika Pemrograman Dasar",
    category: "Web Dev",
    level: "Beginner",
    duration: "12 Jam",
    modules: 5,
  },
  {
    id: 2,
    title: "Next.js Full Stack Mastery",
    category: "Web Dev",
    level: "Intermediate",
    duration: "40 Jam",
    modules: 12,
  },
  {
    id: 3,
    title: "Machine Learning 101",
    category: "Data Science",
    level: "Expert",
    duration: "30 Jam",
    modules: 10,
  },
];

export default function AdminCoursePage() {
  const [courses, setCourses] = useState(initialCourses);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Master Courses</h1>
          <p className="text-muted-foreground text-sm">Upgrade terus ilmu dan pengalaman terbaru kamu.</p>
        </div>
        <Button className="flex items-center gap-2" onClick={() => setOpenCreateModal(true)}>
          <PlusCircle className="h-5 w-5" /> Tambah Course
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">No.</TableHead>
            <TableHead>Nama Course</TableHead>
            <TableHead>Kategori</TableHead>
            <TableHead>Tingkat</TableHead>
            <TableHead>Durasi</TableHead>
            <TableHead className="text-center">Modules</TableHead>
            <TableHead className="text-center w-[150px]">Aksi</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {courses.map((course, index) => (
            <TableRow key={course.id}>
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell className="font-medium">{course.title}</TableCell>
              <TableCell>{course.category}</TableCell>
              <TableCell>{course.level}</TableCell>
              <TableCell>{course.duration}</TableCell>
              <TableCell className="text-center">{course.modules}</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-3">
                  <Button size="xs" variant="outline" className="text-blue-600 hover:text-eye-700">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="xs" variant="outline" className="text-green-600 hover:text-eye-700">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="xs" variant="outline" className="text-red-600 hover:text-red-700">
                    <Archive className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CreateModalCourse open={openCreateModal} onOpenChange={setOpenCreateModal} />
    </div>
  );
}
