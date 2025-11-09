"use client";

import { LocateIcon, LucideInstagram, LucideYoutube, Mails, MessageCircleQuestion, X } from "lucide-react";
import Logo from "../logo";

// export default function Footer({ previousCourses }: { previousCourses: { id: number; title: string }[] }) {
//   return (
//     <footer className="px-24 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
//       <div className="py-10 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-24">
//         {/* Kiri - Branding */}
//         <div className="space-y-4">
//           <div className="flex items-center gap-4">
//             <Logo variant="md" />
//           </div>
//           <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">Platform belajar coding interaktif dengan kursus, artikel, dan event untuk meningkatkan skill digitalmu.</p>

//           <div className="space-y-2.5">
//             <div className="flex items-center gap-2.5 text-zinc-500 dark:text-zinc-400">
//               <LocateIcon size={20} />
//               <span>Bandung, Indonesia</span>
//             </div>

//             <div className="flex items-center gap-2.5 text-zinc-500 dark:text-zinc-400">
//               <Mails size={20} />
//               <span>info@metricfy.id</span>
//             </div>
//             <div className="flex items-center gap-2.5 text-zinc-500 dark:text-zinc-400">
//               <MessageCircleQuestion size={18} />
//               <span>+62812 0012 1111</span>
//             </div>
//           </div>
//         </div>

//         {/* Kanan - Fitur, Kelas, Aktivitas */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Library */}
//           <div className="space-y-3">
//             <h4 className="font-semibold text-lg">Library</h4>
//             <ul className="space-y-3 text-zinc-500 dark:text-zinc-400">
//               <li>
//                 <a href="#activities">Introduction</a>
//               </li>
//               <li>
//                 <a href="#courses">Panduan Belajar</a>
//               </li>
//               <li>
//                 <a href="#articles">Coding Path</a>
//               </li>
//               <li>
//                 <a href="#showcase">Handguide</a>
//               </li>
//             </ul>
//           </div>

//           {/* Fitur */}
//           <div className="space-y-3">
//             <h4 className="font-semibold text-lg">Fitur</h4>
//             <ul className="space-y-3 text-zinc-500 dark:text-zinc-400">
//               <li>
//                 <a href="#courses">Courses</a>
//               </li>
//               <li>
//                 <a href="#articles">Articles</a>
//               </li>
//               <li>
//                 <a href="#showcase">Showcase</a>
//               </li>
//               <li>
//                 <a href="#activities">Event</a>
//               </li>
//               <li>
//                 <a href="#activities">XP Rewards</a>
//               </li>
//               <li>
//                 <a href="#showcase">Challenge</a>
//               </li>
//             </ul>
//           </div>

//           {/* Aktivitas */}
//           <div className="space-y-3">
//             <h4 className="font-semibold text-lg">Aktivitas Lain</h4>
//             <ul className="space-y-3 text-zinc-500 dark:text-zinc-400">
//               <li>
//                 <a href="#courses">Webinar</a>
//               </li>
//               <li>
//                 <a href="#showcase">One Day Workshop</a>
//               </li>
//               <li>
//                 <a href="#activities">Forum/Community</a>
//               </li>
//               <li>
//                 <a href="#activities">Free Bootcamp</a>
//               </li>
//               <li>
//                 <a href="#activities">Collaboration</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-zinc-200 dark:border-zinc-700 py-10 flex flex-col sm:flex-row justify-between items-center text-zinc-500 dark:text-zinc-400 text-sm gap-4">
//         <span>&copy; 2024 - 2025 METRICFY LEARNING EDUCATION. All rights reserved.</span>

//         <div className="flex items-center gap-5">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//             <LucideYoutube size={24} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//             <LucideInstagram size={18} />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//             <X size={18} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="px-24 bg-zinc-50 dark:bg-zinc-900  dark:border-zinc-800">
      <div className="py-10 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-24">
        {/* Kiri - Branding */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Logo variant="md" />
          </div>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">Platform belajar coding interaktif dengan kursus, artikel, dan event untuk meningkatkan skill digitalmu.</p>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 text-zinc-500 dark:text-zinc-400">
              <LocateIcon size={20} />
              <span>Bandung, Indonesia</span>
            </div>

            <div className="flex items-center gap-2.5 text-zinc-500 dark:text-zinc-400">
              <Mails size={20} />
              <span>info@metricfy.id</span>
            </div>
            <div className="flex items-center gap-2.5 text-zinc-500 dark:text-zinc-400">
              <MessageCircleQuestion size={18} />
              <span>+62812 0012 1111</span>
            </div>
          </div>
        </div>

        {/* Kanan - Fitur, Kelas, Aktivitas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Library */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Library</h4>
            <ul className="space-y-3 text-zinc-500 dark:text-zinc-400">
              <li>
                <a href="#activities">Introduction</a>
              </li>
              <li>
                <a href="#courses">Panduan Belajar</a>
              </li>
              <li>
                <a href="#articles">Coding Path</a>
              </li>
              <li>
                <a href="#showcase">Handguide</a>
              </li>
            </ul>
          </div>

          {/* Fitur */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Fitur</h4>
            <ul className="space-y-3 text-zinc-500 dark:text-zinc-400">
              <li>
                <a href="#courses">Courses</a>
              </li>
              <li>
                <a href="#articles">Articles</a>
              </li>
              <li>
                <a href="#showcase">Showcase</a>
              </li>
              <li>
                <a href="#activities">Event</a>
              </li>
              <li>
                <a href="#activities">XP Rewards</a>
              </li>
              <li>
                <a href="#showcase">Challenge</a>
              </li>
            </ul>
          </div>

          {/* Aktivitas */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Aktivitas Lain</h4>
            <ul className="space-y-3 text-zinc-500 dark:text-zinc-400">
              <li>
                <a href="#courses">Webinar</a>
              </li>
              <li>
                <a href="#showcase">One Day Workshop</a>
              </li>
              <li>
                <a href="#activities">Forum/Community</a>
              </li>
              <li>
                <a href="#activities">Free Bootcamp</a>
              </li>
              <li>
                <a href="#activities">Collaboration</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-200 dark:border-zinc-700 py-10 flex flex-col sm:flex-row justify-between items-center text-zinc-500 dark:text-zinc-400 text-sm gap-4">
        <span>&copy; 2024 - 2025 METRICFY LEARNING EDUCATION. All rights reserved.</span>

        <div className="flex items-center gap-5">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <LucideYoutube size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <LucideInstagram size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <X size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
