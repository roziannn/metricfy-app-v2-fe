"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface Challenge {
  id: number;
  title: string;
  description: string;
  status: "Completed" | "In Progress" | "Pending";
  points: number;
}

export default function ChallengePage() {
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 1,
      title: "Build a Todo App",
      description: "Membuat aplikasi todo sederhana menggunakan React dan Tailwind CSS.",
      status: "Completed",
      points: 100,
    },
    {
      id: 2,
      title: "API Integration Challenge",
      description: "Integrasi REST API ke aplikasi web dan menampilkan data dinamis.",
      status: "In Progress",
      points: 50,
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Membuat dashboard visualisasi data penjualan menggunakan chart library.",
      status: "Pending",
      points: 70,
    },
  ]);

  const handleAddChallenge = () => {
    const newChallenge: Challenge = {
      id: challenges.length + 1,
      title: "Challenge Baru",
      description: "Deskripsi challenge baru.",
      status: "Pending",
      points: 0,
    };
    setChallenges([...challenges, newChallenge]);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Challenges</h1>
          <p className="text-muted-foreground text-sm">Lihat semua challenge yang sudah kamu ambil.</p>
        </div>
        <Button variant="outline">
          <Search className="w-4 h-4" /> Lihat Challenge Lainnya
        </Button>
      </div>

      {/* Challenge Grid */}
      {challenges.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="overflow-hidden hover:shadow-lg transition-shadow rounded-xl">
              <CardContent className="p-4">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-lg font-semibold">{challenge.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{challenge.description}</CardDescription>
                </CardHeader>
                <div className="flex justify-between items-center mt-2 text-sm font-medium">
                  <span className={`px-2 py-1 rounded-full text-white text-xs ${challenge.status === "Completed" ? "bg-green-500" : challenge.status === "In Progress" ? "bg-yellow-500" : "bg-gray-400"}`}>{challenge.status}</span>
                  <span className="text-gray-700">{challenge.points} Points</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-10">Belum ada challenge yang diambil 😅</p>
      )}
    </div>
  );
}
