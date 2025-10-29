"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface CourseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (data: CourseFormData) => void;
  initialData?: CourseFormData | null;
}

export interface CourseFormData {
  title: string;
  category: string;
  level: string;
  duration: string;
}

export default function CreateModalCourse({ open, onOpenChange, onSubmit, initialData }: CourseModalProps) {
  const [formData, setFormData] = useState<CourseFormData>(
    initialData || {
      title: "",
      category: "",
      level: "",
      duration: "",
    }
  );

  const handleChange = (key: keyof CourseFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{initialData ? "Edit Course" : "Tambah Course Baru"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="grid">
            <Label htmlFor="title">Nama Course</Label>
            <Input id="title" placeholder="Masukkan nama course..." value={formData.title} onChange={(e) => handleChange("title", e.target.value)} />
          </div>

          <div className="grid">
            <Label htmlFor="category">Kategori</Label>
            <Input id="category" placeholder="Contoh: Web Dev, Data Science..." value={formData.category} onChange={(e) => handleChange("category", e.target.value)} />
          </div>

          <div className="grid">
            <Label htmlFor="level">Tingkat</Label>
            <Select onValueChange={(value) => handleChange("level", value)} value={formData.level}>
              <SelectTrigger id="level">
                <SelectValue placeholder="Pilih tingkat..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Expert">Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid">
            <Label htmlFor="duration">Durasi</Label>
            <Input id="duration" placeholder="Contoh: 20 Jam" value={formData.duration} onChange={(e) => handleChange("duration", e.target.value)} />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Batal
          </Button>
          <Button onClick={handleSubmit}>{initialData ? "Simpan Perubahan" : "Tambah"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
