"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function ShowcasePage() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Website Company Profile",
      description: "Membuat website company profile untuk startup lokal dengan responsive design.",
      imageUrl: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Aplikasi ToDo List",
      description: "Aplikasi todo list interaktif dengan fitur CRUD menggunakan React dan Tailwind.",
      imageUrl: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Dashboard Analisis Data",
      description: "Dashboard interaktif menampilkan visualisasi data penjualan menggunakan ApexCharts.",
      imageUrl: "/images/project3.jpg",
    },
  ]);

  const handleAddProject = () => {
    // nanti bisa ganti ini jadi modal input form
    const newProject: Project = {
      id: projects.length + 1,
      title: "Project Baru",
      description: "Deskripsi project baru.",
      imageUrl: "/images/project-placeholder.jpg",
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Showcase</h1>
          <p className="text-muted-foreground text-sm">Tampilkan project yang sudah kamu kerjakan.</p>
        </div>
        <Button onClick={handleAddProject} className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Tambah Case
        </Button>
      </div>

      {/* Project Grid */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow rounded-xl">
              <div className="h-48 w-full overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <CardContent className="p-4">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{project.description}</CardDescription>
                </CardHeader>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-10">Belum ada project yang ditambahkan 😅</p>
      )}
    </div>
  );
}
