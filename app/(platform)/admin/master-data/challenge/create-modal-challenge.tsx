"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ChallengeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (data: ChallengeFormData) => void;
  initialData?: ChallengeFormData | null;
}

export interface ChallengeFormData {
  name: string;
  category: string;
  level: string;
  duration: string;
  participants: string;
  description: string;
}

export default function CreateModalChallenge({ open, onOpenChange, onSubmit, initialData }: ChallengeModalProps) {
  const [formData, setFormData] = useState<ChallengeFormData>(
    initialData || {
      name: "",
      category: "",
      level: "",
      duration: "",
      participants: "",
      description: "",
    }
  );

  const handleChange = (key: keyof ChallengeFormData, value: string) => {
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
          <DialogTitle>{initialData ? "Edit Challenge" : "Tambah Challenge Baru"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Nama */}
          <div className="grid">
            <Label htmlFor="name">Nama Challenge</Label>
            <Input id="name" placeholder="Masukkan nama challenge..." value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
          </div>

          {/* Kategori */}
          <div className="grid">
            <Label htmlFor="category">Kategori</Label>
            <Input id="category" placeholder="Contoh: Web Dev, Data Science..." value={formData.category} onChange={(e) => handleChange("category", e.target.value)} />
          </div>

          {/* Tingkat dan Durasi */}
          <div className="grid grid-cols-2 gap-4">
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
              <Input id="duration" placeholder="Contoh: 20 Jam / 3 Hari" value={formData.duration} onChange={(e) => handleChange("duration", e.target.value)} />
            </div>
          </div>

          {/* Peserta */}
          <div className="grid">
            <Label htmlFor="participants">Peserta</Label>
            <Input id="participants" placeholder="Jumlah peserta (misal: 50)" value={formData.participants} onChange={(e) => handleChange("participants", e.target.value)} />
          </div>

          {/* Deskripsi */}
          <div className="grid">
            <Label htmlFor="description">Deskripsi</Label>
            <Textarea id="description" placeholder="Tuliskan deskripsi singkat tentang challenge ini..." value={formData.description} onChange={(e) => handleChange("description", e.target.value)} className="min-h-[100px]" />
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
