"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RichTextEditor } from "@/components/rich-text-editor/editor";
import { ArrowLeft, Save } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function CreateSoalPage({ params }: { params: { courseId: string } }) {
  const router = useRouter();
  const [form, setForm] = useState({
    question: "",
    options: { a: "", b: "", c: "", d: "" },
    correctAnswer: "",
    explanation: "",
    xp: "",
  });

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleOptionChange = (key: "a" | "b" | "c" | "d", value: string) => {
    setForm((prev) => ({
      ...prev,
      options: { ...prev.options, [key]: value },
    }));
  };

  const handleCorrectAnswer = (key: "a" | "b" | "c" | "d") => {
    setForm((prev) => ({
      ...prev,
      correctAnswer: prev.correctAnswer === key ? "" : key, // toggle
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit Soal untuk courseId:", params.courseId, form);
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

      {/* Card */}
      <Card>
        <CardHeader>
          <CardTitle>Buat Soal Baru</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            {/* Pertanyaan */}
            <div>
              <Label>Pertanyaan</Label>
              <RichTextEditor
                field={{
                  value: form.question,
                  onChange: (html: string) => handleChange("question", html),
                }}
              />
            </div>

            {/* Pilihan Jawaban */}
            <div>
              <Label>Pilihan Jawaban</Label>
              <div className="grid grid-cols-1 gap-3 mt-2">
                {(["a", "b", "c", "d"] as const).map((key) => (
                  <div key={key} className="flex items-center gap-3">
                    <Checkbox checked={form.correctAnswer === key} onCheckedChange={() => handleCorrectAnswer(key)} id={`checkbox-${key}`} />
                    <Label htmlFor={`checkbox-${key}`} className="w-5 font-medium uppercase">
                      {key}.
                    </Label>
                    <Input placeholder={`Masukkan opsi ${key.toUpperCase()}`} value={form.options[key]} onChange={(e) => handleOptionChange(key, e.target.value)} />
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">Centang salah satu untuk jawaban benar</p>
            </div>

            {/* XP Point */}
            <div>
              <Label htmlFor="xp">Poin (XP)</Label>
              <Input id="xp" type="number" min="0" placeholder="Masukkan jumlah XP untuk soal ini" value={form.xp} onChange={(e) => handleChange("xp", e.target.value)} />
            </div>

            {/* Pembahasan */}
            <div>
              <Label>Pembahasan / Kunci Jawaban</Label>
              <RichTextEditor
                field={{
                  value: form.explanation,
                  onChange: (html: string) => handleChange("explanation", html),
                }}
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
