"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Info, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Notification {
  id: number;
  type: "success" | "info" | "point";
  title: string;
  message?: string;
  createdAt: string;
  isNew?: boolean;
}

const sampleNotifications: Notification[] = [
  {
    id: 1,
    type: "success",
    title: "Berhasil enrol course: 101 Logika Pemrograman Dasar",
    message: "Kamu sekarang resmi terdaftar di course ini. Selamat belajar!",
    createdAt: "2025-10-30",
    isNew: true,
  },
  {
    id: 2,
    type: "point",
    title: "Mendapat 50 point dari pengerjaan soal",
    message: "Point akan otomatis ditambahkan ke akunmu untuk leaderboard.",
    createdAt: "2025-10-29",
    isNew: true,
  },
  {
    id: 3,
    type: "info",
    title: "Sistem akan maintenance besok pukul 02:00 WIB",
    message:
      "Selama maintenance, akses ke platform akan dibatasi sementara. Semua fitur seperti pengerjaan soal, pengiriman tugas, dan pembelian course mungkin tidak dapat digunakan. Mohon simpan semua progresmu sebelum maintenance dimulai, dan pastikan untuk login kembali setelah maintenance selesai untuk memastikan semua data tersimpan dengan aman.",

    createdAt: "2025-10-28",
  },
];

export default function NotificationPage() {
  const [notifications] = useState<Notification[]>(sampleNotifications);
  const [selectedNotif, setSelectedNotif] = useState<Notification | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "point":
        return <Star className="w-5 h-5 text-yellow-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getBadge = (type: string) => {
    switch (type) {
      case "success":
        return (
          <Badge variant="outline" className="text-xs">
            Success
          </Badge>
        );
      case "point":
        return (
          <Badge variant="secondary" className="text-xs">
            Point
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" className="text-xs">
            Info
          </Badge>
        );
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
        <p className="text-muted-foreground text-sm">Notifiksi terbarumu.</p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Notifikasi</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {notifications.map((notif) => (
            <TableRow key={notif.id} className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition" onClick={() => setSelectedNotif(notif)}>
              <TableCell>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    {getIcon(notif.type)}
                    <span className="font-medium">{notif.title}</span>
                    {notif.isNew && <span className="ml-2 h-2 w-2 rounded-full bg-red-500" />}
                  </div>
                  {notif.message && (
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-7 mt-1 truncate" style={{ maxWidth: "400px" }} title={notif.message}>
                      {notif.message}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-center">{getBadge(notif.type)}</TableCell>
              <TableCell className="text-center">{notif.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal ShadCN UI */}
      <Dialog open={!!selectedNotif} onOpenChange={() => setSelectedNotif(null)}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{selectedNotif?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">{selectedNotif?.message}</p>
            <p className="text-xs text-gray-400 mt-2">{selectedNotif?.createdAt}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
