"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AuthCard from "../components/auth-card";
import { signup } from "@/lib/auth";
import { FormEvent } from "react";

export default function SignUp() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    ("use server");
    signup(formData);
  }

  return (
    <AuthCard
      title="Create an account"
      description="Enter your email below to create your account"
    >
      <div className="p-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Already have a account?
            </span>
          </div>
        </div>

        <Link href="./sign-in" className="grid grid-cols-1 gap-6 mt-4">
          <Button variant="outline">Sign in</Button>
        </Link>
      </div>
    </AuthCard>
  );
}
