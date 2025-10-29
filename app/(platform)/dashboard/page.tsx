"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Trophy, Star, CalendarDays, Sword } from "lucide-react";
import { Button } from "@/components/ui/button";

// Data Dummy
const userStats = [
  { title: "Total Kursus Diambil", value: 12 },
  { title: "Kursus Selesai", value: 8 },
  { title: "Jam Belajar Total", value: "45 Jam" },
];

const latestProgress = {
  courseName: "Pengembangan Aplikasi Next.js Lanjut",
  progress: 75,
  module: "Modul 5: State Management Global",
};

const completedCourses = [
  { name: "Dasar-dasar HTML & CSS", status: "Selesai", date: "Jan 2024" },
  { name: "Pengantar JavaScript Modern", status: "Selesai", date: "Feb 2024" },
  { name: "Membuat Komponen dengan React", status: "Selesai", date: "Mar 2024" },
  { name: "Desain UI/UX dengan Figma", status: "Selesai", date: "Apr 2024" },
];

const userPoints = {
  points: 1260,
  badge: "Bronze",
};

const upcomingEvents = [
  { title: "Webinar: Meningkatkan Skill React Dengan Industri Terkini", date: "5 Nov 2025" },
  { title: "Hackathon Front-End Challenge", date: "12 Nov 2025" },
  { title: "Workshop: Next.js Performance Tips", date: "25 Nov 2025" },
];

export default function DashboardPage() {
  return (
    <div className="grid md:grid-cols-[2fr_0.6fr] gap-6 text-base">
      {/* MAIN CONTENT */}
      <div className="border-r pr-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mb-8 text-sm">Ikhtisar singkat mengenai perkembangan belajar Anda.</p>

        {/* Statistik */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4 tracking-tight">Statistik Kursus Anda</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {userStats.map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">{stat.title}</CardTitle>
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">Pencapaian sejauh ini</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Progress */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4 tracking-tight">Progress Belajar Terakhir</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">{latestProgress.courseName}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{latestProgress.module}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Progress value={latestProgress.progress} className="h-2 flex-1" />
                <span className="text-sm font-medium">{latestProgress.progress}%</span>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">Lanjutkan belajar untuk mencapai 100%.</p>
            </CardFooter>
          </Card>
        </section>

        {/* Riwayat Kursus */}
        <section>
          <h2 className="text-lg font-semibold mb-4 tracking-tight">Kursus yang Sudah Anda Ambil</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">Riwayat Kursus</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">Daftar kursus yang telah Anda mulai atau selesaikan.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {completedCourses.map((course, index) => (
                <div key={course.name}>
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-sm">{course.name}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-500 hover:bg-green-600 text-white text-xs">
                        {course.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{course.date}</span>
                    </div>
                  </div>
                  {index < completedCourses.length - 1 && <Separator className="my-2" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>

      {/* ASIDE */}
      <aside className="space-y-6">
        {/* Poin */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base font-semibold">Poin Saya</CardTitle>
            <Star className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center space-y-2">
            <div className="text-3xl font-bold">{userPoints.points}</div>
            <Badge variant="secondary" className="bg-amber-700 text-white text-xs px-3 flex items-center gap-1">
              <Sword className="h-3 w-3" /> {userPoints.badge}
            </Badge>
            <p className="text-xs text-muted-foreground pt-1">
              Kumpulkan lebih banyak poin <br /> untuk naik level!
            </p>
          </CardContent>
        </Card>

        {/* Event */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base font-semibold">Event Saya</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index}>
                <div className="flex flex-col">
                  <p className="text-sm font-medium truncate max-w-[200px]">{event.title}</p>

                  <span className="text-xs text-muted-foreground">{event.date}</span>
                </div>
                {index < upcomingEvents.length - 1 && <Separator className="my-2" />}
              </div>
            ))}
            <div className="pt-4 text-center">
              <Button variant="outline" size="sm">
                Explore Lainnya
              </Button>
            </div>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
