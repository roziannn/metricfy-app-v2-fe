import { SignupForm } from "@/components/signup-form";
import Logo from "@/components/logo";

export default function SignupPage() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen p-6
                 bg-gradient-to-b from-indigo-100 via-white to-zinc-50
                 dark:from-zinc-900 dark:via-zinc-950 dark:to-black overflow-hidden"
    >
      {/* Decorative dots */}
      <div
        className="absolute inset-0 [background-image:radial-gradient(rgba(0,0,0,0.06)_1.5px,transparent_2px)] 
                   [background-size:24px_24px] dark:[background-image:radial-gradient(rgba(255,255,255,0.07)_1.5px,transparent_2px)]"
      ></div>

      {/* Soft glows */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-16 w-72 h-72 bg-purple-400/25 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center z-10 w-full max-w-md gap-6">
        <Logo variant="sm" />
        <SignupForm />
      </div>
    </div>
  );
}
