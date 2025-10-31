"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Star } from "lucide-react";

export default function StudentBadgePage() {
  const badgesData = [
    { id: 1, courseTitle: "101 Logika Pemrograman Dasar", completionDate: "2025-09-15", badgeName: "Logic Novice", points: 50 },
    { id: 2, courseTitle: "Next.js Full Stack Mastery", completionDate: "2025-10-01", badgeName: "Full Stack Hero", points: 120 },
    { id: 3, courseTitle: "Machine Learning 101", completionDate: "2025-10-20", badgeName: "ML Expert", points: 150 },
    { id: 4, courseTitle: "React Advanced Concepts", completionDate: "2025-10-25", badgeName: "React Pro", points: 100 },
    { id: 5, courseTitle: "Data Analysis with Python", completionDate: "2025-10-28", badgeName: "Data Analyst", points: 80 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Badges</h1>
        <p className="text-muted-foreground text-sm">Lihat semua badge dan poin yang kamu dapatkan setelah menyelesaikan kursus.</p>
      </div>

      {/* Badge Grid */}
      {badgesData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badgesData.map((badge) => (
            <Card key={badge.id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex justify-center">
                <div className="bg-green-100 rounded-full p-3 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-green-600" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center text-center gap-2">
                <CardTitle className="text-lg font-semibold">{badge.badgeName}</CardTitle>
                <span className="text-sm font-medium text-gray-900">{badge.courseTitle}</span>

                <Badge variant="outline" className="flex items-center gap-1 mt-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{badge.points} Points</span>
                </Badge>

                <p className="text-sm text-gray-500 mt-2">Completion Date: {badge.completionDate}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-10">Belum ada badge yang didapatkan 😅</p>
      )}
    </div>
  );
}
