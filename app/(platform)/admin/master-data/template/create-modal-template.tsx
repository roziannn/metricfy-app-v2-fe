"use client";

import { useState, ChangeEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TemplateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (data: TemplateFormData) => void;
  initialData?: TemplateFormData | null;
}

export interface TemplateFormData {
  title: string;
  image: File | null;
}

export default function CreateTemplateModal({ open, onOpenChange, onSubmit, initialData }: TemplateModalProps) {
  const [formData, setFormData] = useState<TemplateFormData>(
    initialData || {
      title: "",
      image: null,
    }
  );

  const handleChange = (key: keyof TemplateFormData, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleChange("image", e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{initialData ? "Edit Template" : "Tambah Template Baru"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="grid">
            <Label htmlFor="title">Judul Template</Label>
            <Input id="title" placeholder="Masukkan judul template..." value={formData.title} onChange={(e) => handleChange("title", e.target.value)} />
          </div>

          <div className="grid">
            <Label htmlFor="image">Gambar Template</Label>
            <Input type="file" id="image" accept="image/*" onChange={handleFileChange} />
            {formData.image && <p className="text-sm mt-1">{formData.image.name}</p>}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Batal
          </Button>
          <Button onClick={handleSubmit}>{initialData ? "Simpan" : "Tambah"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
