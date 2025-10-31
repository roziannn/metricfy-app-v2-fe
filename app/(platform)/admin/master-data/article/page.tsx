"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Pencil, Trash2, Eye, Archive, Edit } from "lucide-react";
// import CreateModalBlog from "./create-modal-blog";

const initialPosts = [
  {
    id: 1,
    title: "Understanding React Basics",
    category: "Web Development",
    author: "Firda Rosiana",
    published: "2025-10-20",
    status: "Published",
  },
  {
    id: 2,
    title: "Next.js for Full Stack Developers",
    category: "Web Development",
    author: "John Doe",
    published: "2025-10-18",
    status: "Draft",
  },
  {
    id: 3,
    title: "Machine Learning Overview",
    category: "Data Science",
    author: "Jane Smith",
    published: "2025-10-15",
    status: "Published",
  },
];

export default function AdminBlogPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Article Posts</h1>
          <p className="text-muted-foreground text-sm">Manage your article content efficiently and keep it updated.</p>
        </div>
        <Button className="flex items-center gap-2" onClick={() => setOpenCreateModal(true)}>
          <PlusCircle className="h-5 w-5" /> Tambah Post
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">No.</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Published</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center w-[150px]">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {posts.map((post, index) => (
            <TableRow key={post.id}>
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell>{post.published}</TableCell>
              <TableCell className="text-center">{post.status}</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-3">
                  <Button size="xs" variant="outline" className="text-blue-600 hover:text-blue-700">
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

      {/* <CreateModalBlog open={openCreateModal} onOpenChange={setOpenCreateModal} /> */}
    </div>
  );
}
