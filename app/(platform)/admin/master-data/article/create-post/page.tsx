"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RichTextEditor } from "@/components/rich-text-editor/editor";
import { ArrowLeft, Save } from "lucide-react";

export default function CreatePostPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    imgUrl: "",
    content: "",
  });

  const handleChange = (field: string, value: string) => setForm({ ...form, [field]: value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit new post:", form);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between mb-4">
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft /> Kembali
        </Button>
        <Button variant="default" onClick={handleSubmit}>
          <Save /> Simpan
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create New Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="title">Post Title</Label>
              <Input id="title" value={form.title} onChange={(e) => handleChange("title", e.target.value)} placeholder="Enter post title" required />
            </div>

            <div>
              <Label htmlFor="author">Author</Label>
              <Input id="author" value={form.author} onChange={(e) => handleChange("author", e.target.value)} placeholder="Enter author name" required />
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Input id="category" value={form.category} onChange={(e) => handleChange("category", e.target.value)} placeholder="Enter post category" required />
            </div>

            <div>
              <Label htmlFor="imgUrl">Feature Image (URL)</Label>
              <Input id="imgUrl" value={form.imgUrl} onChange={(e) => handleChange("imgUrl", e.target.value)} placeholder="Enter image URL" />
            </div>

            <div>
              <Label>Post Content</Label>
              <RichTextEditor
                field={{
                  value: form.content,
                  onChange: (html: string) => handleChange("content", html),
                }}
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
