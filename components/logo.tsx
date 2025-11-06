"use client";

import { FunctionSquare } from "lucide-react";
import React from "react";

interface LogoProps {
  variant?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ variant = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { icon: 20, text: "text-lg", gap: "gap-1" },
    md: { icon: 28, text: "text-2xl", gap: "gap-2" },
    lg: { icon: 40, text: "text-4xl", gap: "gap-3" },
  }[variant];

  return (
    <div className={`flex items-center font-bold ${sizes.text} ${sizes.gap} ${className}`}>
      <FunctionSquare size={sizes.icon} strokeWidth={2.5} className="text-primary drop-shadow-sm" />
      <span className="bg-linear-to-r text-zinc-700 dark:text-zinc-300 bg-clip-text tracking-tight">Metricfy</span>
    </div>
  );
}
