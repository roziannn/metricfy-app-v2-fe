import { LoginForm } from "@/components/login-form";
import Logo from "@/components/logo";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div
        className="relative grid content-between gap-6 p-10 
                   bg-gradient-to-b from-indigo-100 via-white to-zinc-50 
                   dark:from-zinc-900 dark:via-zinc-950 dark:to-black
                   overflow-hidden"
      >
        {/* Decorative pattern (dots) */}
        <div
          className="absolute inset-0 [background-image:radial-gradient(rgba(0,0,0,0.06)_1.2px,transparent_1.5px)] 
                     [background-size:20px_20px] dark:[background-image:radial-gradient(rgba(255,255,255,0.07)_1.2px,transparent_1.5px)]"
        ></div>

        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-300/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-16 w-72 h-72 bg-purple-400/25 blur-3xl rounded-full"></div>

        <div className="relative flex justify-center md:justify-start z-10">
          <Logo variant="sm" />
        </div>

        <div className="relative flex items-center justify-center z-10">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>

        {/* Footer */}
        <div className="relative text-center text-xs text-zinc-500 dark:text-zinc-400 z-10">© {new Date().getFullYear()} Metricfy</div>
      </div>

      <div className="relative hidden lg:block bg-muted">
        <img src="/placeholder.svg" alt="Login Illustration" className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.25] dark:grayscale" />
      </div>
    </div>
  );
}
