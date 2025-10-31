"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Edit, Archive } from "lucide-react";
import CreateTemplateModal from "./create-modal-template";

const initialTemplates = [
  {
    id: 1,
    title: "Template Untuk Blog",
    createdBy: "Administrator",
    createdDate: "2025-10-30",
  },
  {
    id: 2,
    title: "Template Untuk Course",
    createdBy: "Administrator",
    createdDate: "2025-10-28",
  },
  {
    id: 3,
    title: "Hero Section",
    createdBy: "Administrator",
    createdDate: "2025-10-25",
  },
];

export default function AdminTemplatePage() {
  const [templates, setTemplates] = useState(initialTemplates);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Master Template</h1>
          <p className="text-muted-foreground text-sm">Daftar template untuk konsistensi konten website.</p>
        </div>
        <Button className="flex items-center gap-2" onClick={() => setOpenCreateModal(true)}>
          <PlusCircle className="h-5 w-5" /> Tambah Template
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">No.</TableHead>
            <TableHead>Judul Template</TableHead>
            <TableHead>Dibuat Oleh</TableHead>
            <TableHead>Tanggal Dibuat</TableHead>
            <TableHead className="text-center w-[150px]">Aksi</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {templates.map((template, index) => (
            <TableRow key={template.id}>
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell className="font-medium">{template.title}</TableCell>
              <TableCell>{template.createdBy}</TableCell>
              <TableCell>{template.createdDate}</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-3">
                  <Button size="xs" variant="outline" className="text-blue-600 hover:text-eye-700">
                    <Edit className="h-4 w-4" />
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

      <CreateTemplateModal open={openCreateModal} onOpenChange={setOpenCreateModal} />
    </div>
  );
}
