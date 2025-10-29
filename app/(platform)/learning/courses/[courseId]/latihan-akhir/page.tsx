"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FinalQuizPage() {
  const questions = [
    {
      id: 1,
      question: "Apa fungsi utama dari useState di React?",
      options: ["Untuk melakukan routing antar halaman", "Untuk mengatur state di dalam komponen", "Untuk menampilkan elemen secara kondisional", "Untuk mengatur gaya (style) elemen"],
    },
    {
      id: 2,
      question: "Bahasa apa yang digunakan untuk menulis style pada halaman web?",
      options: ["Python", "HTML", "CSS", "C#"],
    },
    {
      id: 3,
      question: "Framework apa yang digunakan untuk backend .NET?",
      options: ["Laravel", "Spring", "ASP.NET Core", "Django"],
    },
    {
      id: 4,
      question: "Apa kepanjangan dari HTML?",
      options: ["Hyper Text Markup Language", "Hyperlink Transfer Markup Language", "Hyper Tool Multi Language", "Home Tool Markup Language"],
    },
    {
      id: 5,
      question: "Apa fungsi Entity Framework di .NET?",
      options: ["Untuk mengatur tampilan web", "Untuk menghubungkan aplikasi dengan database", "Untuk mengatur routing halaman", "Untuk enkripsi data user"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 menit dalam detik

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleAnswer = (option: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: option });
  };

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
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className={`w-full text-left border rounded-md px-4 py-2 transition ${answers[currentQuestion.id] === option ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 hover:bg-gray-50"}`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" disabled={currentIndex === 0} onClick={() => setCurrentIndex((prev) => prev - 1)}>
                Sebelumnya
              </Button>
              {currentIndex < questions.length - 1 ? <Button onClick={() => setCurrentIndex((prev) => prev + 1)}>Selanjutnya</Button> : <Button className="bg-green-600 hover:bg-green-700 text-white">Selesai</Button>}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kanan - Timer & Daftar Soal */}
      <div className="w-full md:w-64">
        <Card className="shadow-lg sticky top-8">
          <CardContent className="space-y-2">
            {/* Timer */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 mb-1">Waktu Tersisa</span>
              <div className="text-xl font-semibold text-gray-800">{formatTime(timeLeft)}</div>
            </div>

            {/* Daftar Soal */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3 border-b pb-2">Daftar Soal</h3>
              <div className="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {questions.map((q, index) => {
                  const isCurrent = currentIndex === index;
                  const isAnswered = !!answers[q.id];

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-12 w-full rounded-lg border font-medium text-sm shadow-sm transition 
                  ${isCurrent ? "bg-amber-500 text-white border-amber-400" : isAnswered ? "bg-green-100 text-green-700 border-green-200" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
