"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative flex items-center justify-center">
          <Sun className={`h-5 w-5 transition-all duration-300 ${theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} />
          <Moon className={`absolute h-5 w-5 transition-all duration-300 ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center gap-2">
          <Sun className="h-4 w-4 mr-2" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center gap-2">
          <Moon className="h-4 w-4 mr-2" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="flex items-center gap-2">
          <Laptop className="h-4 w-4 mr-2" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
