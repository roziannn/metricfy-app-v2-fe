"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

export default function FinalQuizReviewPage() {
  const questions = [
    {
      id: 1,
      question: "Apa fungsi utama dari useState di React?",
      options: ["Untuk melakukan routing antar halaman", "Untuk mengatur state di dalam komponen", "Untuk menampilkan elemen secara kondisional", "Untuk mengatur gaya (style) elemen"],
      correct: "Untuk mengatur state di dalam komponen",
      explanation:
        "useState adalah hook React yang digunakan untuk menyimpan dan mengelola state lokal dalam suatu komponen. Dengan useState, kita bisa menyimpan nilai yang dapat berubah seiring waktu, seperti input dari user atau toggle status. Contohnya, jika kita ingin membuat tombol yang menghitung klik, useState memungkinkan kita menyimpan jumlah klik tersebut dan memperbarui UI setiap kali state berubah.",
    },
    {
      id: 2,
      question: "Bahasa apa yang digunakan untuk menulis style pada halaman web?",
      options: ["Python", "HTML", "CSS", "C#"],
      correct: "CSS",
      explanation:
        "CSS (Cascading Style Sheets) digunakan untuk mengatur tampilan halaman web, termasuk warna, layout, ukuran font, dan animasi. Tanpa CSS, halaman web akan tampil polos dan hanya mengikuti struktur HTML. Contohnya, kita bisa menggunakan CSS untuk membuat tombol berwarna biru dengan teks putih dan memberikan efek hover saat mouse diarahkan.",
    },
    {
      id: 3,
      question: "Framework apa yang digunakan untuk backend .NET?",
      options: ["Laravel", "Spring", "ASP.NET Core", "Django"],
      correct: "ASP.NET Core",
      explanation:
        "ASP.NET Core adalah framework backend open-source yang dikembangkan oleh Microsoft untuk membangun aplikasi web dan API. Framework ini mendukung cross-platform, performa tinggi, dan integrasi dengan database serta layanan cloud. Contohnya, kita bisa membuat API untuk aplikasi e-commerce yang menangani transaksi, autentikasi pengguna, dan manajemen produk menggunakan ASP.NET Core.",
    },
    {
      id: 4,
      question: "Apa kepanjangan dari HTML?",
      options: ["Hyper Text Markup Language", "Hyperlink Transfer Markup Language", "Hyper Tool Multi Language", "Home Tool Markup Language"],
      correct: "Hyper Text Markup Language",
      explanation:
        "HTML (Hyper Text Markup Language) adalah bahasa markup yang digunakan untuk membuat struktur halaman web. HTML terdiri dari elemen-elemen seperti heading, paragraf, gambar, dan link yang membentuk konten halaman. Contohnya, tag <a> digunakan untuk membuat hyperlink, tag <img> untuk menampilkan gambar, dan tag <p> untuk membuat paragraf teks.",
    },
    {
      id: 5,
      question: "Apa fungsi Entity Framework di .NET?",
      options: ["Untuk mengatur tampilan web", "Untuk menghubungkan aplikasi dengan database", "Untuk mengatur routing halaman", "Untuk enkripsi data user"],
      correct: "Untuk menghubungkan aplikasi dengan database",
      explanation:
        "Entity Framework (EF) adalah Object-Relational Mapping (ORM) untuk .NET yang memudahkan interaksi dengan database. Dengan EF, kita bisa bekerja dengan data menggunakan objek C# tanpa menulis query SQL secara manual. Contohnya, kita dapat mengambil daftar produk dari database, menambah produk baru, atau memperbarui data user dengan mudah menggunakan EF, yang otomatis menerjemahkan operasi tersebut menjadi query SQL.",
    },
  ];

  // simulasi jawaban user
  const [answers] = useState<{ [key: number]: string }>({
    1: "Untuk mengatur state di dalam komponen", // benar
    2: "HTML", // salah
    3: "ASP.NET Core", // benar
    4: "Hyperlink Transfer Markup Language", // salah
    5: "Untuk menghubungkan aplikasi dengan database", // benar
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Kiri - Soal & Pilihan */}
      <div className="flex-1">
        <Card className="shadow-sm h-full">
          <CardContent className="space-y-6">
            <h2 className="text-lg font-semibold">
              Soal {currentIndex + 1} dari {questions.length}
            </h2>
            <p className="text-gray-700">{currentQuestion.question}</p>

            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const userSelected = answers[currentQuestion.id] === option;
                const isCorrect = option === currentQuestion.correct;
                return (
                  <div
                    key={idx}
                    className={`w-full text-left border rounded-md px-4 py-2 flex items-center justify-between transition
                      ${userSelected ? "border-slate-500 bg-slate-100 text-slate-700" : "border-gray-200 hover:bg-gray-50"}
                    `}
                  >
                    <span>{option}</span>
                    {userSelected && (isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-500" />)}
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Pembahasan:</h3>
              <p className="text-gray-600">{currentQuestion.explanation}</p>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" disabled={currentIndex === 0} onClick={() => setCurrentIndex((prev) => prev - 1)}>
                Sebelumnya
              </Button>
              <Button disabled={currentIndex === questions.length - 1} onClick={() => setCurrentIndex((prev) => prev + 1)}>
                Selanjutnya
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kanan - Daftar Soal tanpa amber, hanya status jawaban */}
      <div className="w-full md:w-64">
        <Card className="shadow-lg sticky top-8">
          <CardContent className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 border-b pb-2">Daftar Soal</h3>
            <div className="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {questions.map((q) => {
                const userAnswer = answers[q.id];
                const isCorrect = userAnswer === q.correct;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(questions.findIndex((ques) => ques.id === q.id))}
                    className={`h-12 w-full rounded-lg border font-medium text-sm shadow-sm transition
                      ${userAnswer ? (isCorrect ? "bg-green-100 text-green-700 border-green-200" : "bg-red-100 text-red-700 border-red-500") : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}
                    `}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
