"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Archive, Edit, Group, Users2, Users } from "lucide-react";
import CreateModalChallenge from "./create-modal-challenge";

const initialChallenges = [
  {
    id: 1,
    title: "Build a Landing Page with HTML & CSS",
    category: "Web Dev",
    level: "Beginner",
    duration: "3 Hari",
    status: "Active",
    participants: 120,
  },
  {
    id: 2,
    title: "REST API with Node.js",
    category: "Web Dev",
    level: "Intermediate",
    duration: "7 Hari",
    status: "Draft",
    participants: 85,
  },
  {
    id: 3,
    title: "AI Image Classifier with Python",
    category: "Data Science",
    level: "Expert",
    duration: "10 Hari",
    status: "Archived",
    participants: 45,
  },
];

export default function AdminChallengePage() {
  const [challenges, setChallenges] = useState(initialChallenges);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">Active</span>;
      case "Draft":
        return <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">Draft</span>;
      case "Archived":
        return <span className="px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-700 rounded-full">Archived</span>;
      default:
        return <span className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full">{status}</span>;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">Master Challenge</h1>
          <p className="text-muted-foreground text-sm">Kelola berbagai challenge seru untuk mengasah skill para peserta.</p>
        </div>
        <Button className="flex items-center gap-2" onClick={() => setOpenCreateModal(true)}>
          <PlusCircle className="h-5 w-5" /> Tambah Challenge
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">No.</TableHead>
            <TableHead>Nama Challenge</TableHead>
            <TableHead>Kategori</TableHead>
            <TableHead>Tingkat</TableHead>
            <TableHead>Durasi</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Peserta</TableHead>
            <TableHead className="text-center w-[120px]">Aksi</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {challenges.map((challenge, index) => (
            <TableRow key={challenge.id}>
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell className="font-medium">{challenge.title}</TableCell>
              <TableCell>{challenge.category}</TableCell>
              <TableCell>{challenge.level}</TableCell>
              <TableCell>{challenge.duration}</TableCell>
              <TableCell>{getStatusBadge(challenge.status)}</TableCell>
              <TableCell className="text-center">{challenge.participants}</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-3">
                  <Button size="xs" variant="outline" className="text-blue-600 hover:text-blue-700">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="xs" variant="outline" className="text-red-600 hover:text-red-700">
                    <Archive className="h-4 w-4" />
                  </Button>
                  <Button size="xs" variant="outline" className="text-green-600 hover:text-green-700">
                    <Users className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal */}
      <CreateModalChallenge open={openCreateModal} onOpenChange={setOpenCreateModal} />
    </div>
  );
}
