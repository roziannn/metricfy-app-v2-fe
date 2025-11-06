"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { ToggleDarkMode } from "../toggle-darkmode";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between 
                 px-8 md:px-24 py-4 
                 bg-white/60 dark:bg-black/80 backdrop-blur-md 
                 border-b border-white/10 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <Logo variant="md" />
      </div>

      <div className="hidden md:flex items-center gap-10 text-[15px] font-medium">
        {["Courses", "Articles", "Showcase", "Event", "Contact"].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-zinc-700 dark:text-zinc-200 hover:text-primary transition-colors duration-200">
            {link}
          </a>
        ))}

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
