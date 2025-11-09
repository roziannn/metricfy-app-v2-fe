"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tag, Copy, EyeIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export type Showcase = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  category: string;
  uploader: { name: string; avatar: string };
  content?: string;
  livePreviewUrl?: string;
  tools?: string[];
};

export function ShowcaseDetail({ showcase }: { showcase: Showcase }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (showcase.livePreviewUrl) {
      navigator.clipboard.writeText(showcase.livePreviewUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="bg-zinc-100 dark:bg-zinc-900 py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8">{showcase.title}</h1>

          <div className="relative w-full h-72 sm:h-[420px] overflow-hidden mb-6 rounded-lg">
            <Image src={showcase.imageUrl} alt={showcase.title} fill className="object-cover" />
            <div className="absolute top-3 right-0 bg-indigo-600/80 text-white text-xs font-semibold uppercase px-3 py-2 flex items-center gap-1">
              <Tag className="h-3.5 w-3.5" />
              {showcase.category}
            </div>
          </div>

          <p className="text-zinc-700 dark:text-zinc-300 mb-6 text-base lg:text-lg leading-relaxed">{showcase.description}</p>
          {showcase.content && <article className="prose prose-zinc dark:prose-invert max-w-none leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: showcase.content }} />}
        </div>

        {/* aside */}
        <aside className="lg:col-span-1 flex flex-col gap-6 mt-4 lg:mt-16">
          <Card className="flex flex-col gap-6 p-6 shadow-none">
            {/* uploader */}
            <div className="flex flex-col items-center text-center gap-3">
              <Image src={showcase.uploader.avatar} alt={showcase.uploader.name} width={80} height={80} className="rounded-full object-cover" />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{showcase.uploader.name}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Uploader</p>
            </div>

            {showcase.livePreviewUrl && (
              <Link href={showcase.livePreviewUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full h-12 bg-indigo-500 hover:bg-indigo-700 font-semibold">
                  <EyeIcon /> Live Preview
                </Button>
              </Link>
            )}

            {showcase.livePreviewUrl && (
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 flex items-center justify-between gap-2">
                <span className="text-sm text-zinc-700 dark:text-zinc-200 truncate">{showcase.livePreviewUrl}</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" onClick={handleCopy}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{copied ? "Copied!" : "Copy Link"}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            )}

            {showcase.tools && showcase.tools.length > 0 && (
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Tools / Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {showcase.tools.map((tool, idx) => (
                    <span key={idx} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </aside>
      </div>
    </section>
  );
}
