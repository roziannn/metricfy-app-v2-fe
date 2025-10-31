"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RichTextEditor } from "@/components/rich-text-editor/editor";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateCasePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit Case:", { title, description, image });
    // nanti bisa diganti jadi API POST
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header Buttons */}
      <div className="flex justify-between mb-4">
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft /> Kembali
        </Button>
        <Button variant="default" onClick={handleSubmit}>
          <Save /> Simpan
        </Button>
      </div>

      {/* Card Form */}
      <Card>
        <CardHeader>
          <CardTitle>Buat Case Showcase Baru</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            {/* Judul Project */}
            <div>
              <Label htmlFor="title">Judul Project</Label>
              <Input id="title" placeholder="Masukkan judul project" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            {/* Upload Gambar */}
            <div>
              <Label htmlFor="image">Upload Gambar</Label>
              <Input id="title" type="file" placeholder="Masukkan judul project" value={title} onChange={(e) => setTitle(e.target.value)} />

              {image && <p className="text-sm text-gray-600 mt-1">File terpilih: {image.name}</p>}
            </div>

            {/* Deskripsi */}
            <div>
              <Label htmlFor="description">Deskripsi Project</Label>
              <RichTextEditor
                field={{
                  value: description,
                  onChange: (html: string) => setDescription(html),
                }}
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
