import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
  return (
    <Card className={cn("w-fullbackdrop-blur-xl", className)}>
      <CardHeader className="text-center">
        <CardTitle className="text-xl text-zinc-900 dark:text-white">Login to your account</CardTitle>
        <CardDescription className="text-zinc-600 dark:text-zinc-400">Enter your email and password here</CardDescription>
      </CardHeader>

      <CardContent>
        <form className="flex flex-col gap-6" {...props}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </Field>

            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="password">Password</FieldLabel>
              </div>
              <Input id="password" type="password" required />
              <Link href="/forget-password" className="text-xs text-end my-2 hover:underline">
                Forgot password?
              </Link>
            </Field>

            <Field>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </Field>

            <Field>
              <FieldDescription className="text-center text-sm text-zinc-600 dark:text-zinc-400 pt-5">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-primary">
                  Sign up
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
