"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RichTextEditor } from "@/components/rich-text-editor/editor";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateSectionPage({ params }: { params: { courseId: string } }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    videoUrl: "",
    imgUrl: "",
    content: "",
  });

  const handleChange = (field: string, value: string) => setForm({ ...form, [field]: value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit Section for courseId:", params.courseId, form);
  };

  return (
    <div className="w-5xl mx-auto">
      <div className="flex justify-between mb-4">
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft /> Kembali
        </Button>
        <Button variant="default" onClick={() => router.back()}>
          <Save /> Simpan
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Buat Section Baru</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="title">Judul Section</Label>
              <Input id="title" value={form.title} onChange={(e) => handleChange("title", e.target.value)} placeholder="Masukkan judul section" required />
            </div>
            <div>
              <Label htmlFor="videoUrl">Video Materi (URL)</Label>
              <Input id="videoUrl" value={form.videoUrl} onChange={(e) => handleChange("videoUrl", e.target.value)} placeholder="Masukkan link video" required />
            </div>
            <div>
              <Label htmlFor="imgUrl">Gambar (URL)</Label>
              <Input id="imgUrl" value={form.imgUrl} onChange={(e) => handleChange("imgUrl", e.target.value)} placeholder="Masukkan link gambar" />
            </div>
            <div>
              <Label>Konten Materi</Label>
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
