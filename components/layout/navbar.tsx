"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { ToggleDarkMode } from "../toggle-darkmode";
import { Award, CalendarRange, ChevronDown, ChevronUp, Tent } from "lucide-react";

export default function Navbar() {
  const [isActivityOpen, setIsActivityOpen] = useState(false);

  const toggleActivity = () => setIsActivityOpen(!isActivityOpen);

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between 
                 px-8 md:px-24 py-4 
                 bg-white/60 dark:bg-black/80 backdrop-blur-md 
                 border-b border-white/10 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <Link href="/">
          <Logo variant="md" />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-10 text-[15px] font-medium relative">
        {["Courses", "Articles", "Showcases"].map((link) => (
          <Link key={link} href={`/${link.toLowerCase()}`} className="text-zinc-700 dark:text-zinc-200 hover:text-primary transition-colors duration-200">
            {link}
          </Link>
        ))}

        <div className="relative">
          <button onClick={toggleActivity} className="flex items-center gap-1 text-zinc-700 dark:text-zinc-200 hover:text-primary transition-colors duration-200 font-medium">
            Activity
            {isActivityOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {isActivityOpen && (
            <div className="absolute top-full left-0 mt-3.5 w-60 bg-white dark:bg-zinc-800 rounded-lg shadow-xl border border-zinc-200 dark:border-zinc-700 py-3 z-50">
              <Link href="/activity/recent" className="block px-4 py-3 mx-2 rounded-lg dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-zinc-700" onClick={() => setIsActivityOpen(false)}>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-7 h-7 rounded-md bg-indigo-50 dark:bg-indigo-700">
                    <CalendarRange className="w-4 h-4 text-indigo-700 dark:text-indigo-100" />
                  </div>
                  <span>Event</span>
                </div>
              </Link>

              <Link href="/activity/bootcamp" className="block px-4 py-3 mx-2 rounded-lg dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-zinc-700" onClick={() => setIsActivityOpen(false)}>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-7 h-7 rounded-md bg-indigo-50 dark:bg-indigo-700">
                    <Tent className="w-4 h-4 text-indigo-700 dark:text-indigo-100" />
                  </div>
                  <span>Bootcamp</span>
                </div>
              </Link>

              <Link href="/activity/challenge" className="block px-4 py-3 mx-2 rounded-lg dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-zinc-700" onClick={() => setIsActivityOpen(false)}>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-7 h-7 rounded-md bg-indigo-50 dark:bg-indigo-700">
                    <Award className="w-4 h-4 text-indigo-700 dark:text-indigo-100" />
                  </div>
                  <span>Challenge</span>
                </div>
              </Link>
            </div>
          )}
        </div>
        <Link href="/about" className="text-zinc-700 dark:text-zinc-200 hover:text-primary transition-colors duration-200">
          About
        </Link>

        <div className="flex flex-row items-center gap-4">
          <Link href="/login">
            <Button variant="outline" className="border-zinc-300 dark:border-zinc-700 hover:border-primary hover:text-primary">
              Masuk
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-linear-to-r from-primary to-indigo-500 text-white hover:from-indigo-600 hover:to-indigo-700 shadow-md">Sign Up</Button>
          </Link>
          <div className="pl-5">
            <ToggleDarkMode />
          </div>
        </div>
      </div>
    </nav>
  );
}
