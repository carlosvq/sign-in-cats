"use client";

import AuthCard from "../components/auth-card";
import { Button } from "@/components/ui/button";
import { login } from "@/lib/auth";
import Link from "next/link";
import { FormEvent } from "react";

export default function SignIn() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    ("use server");
    login(formData);
  }

  return (
    <form onSubmit={onSubmit}>
      <AuthCard
        title="Sign In"
        description="Enter your email below to sign-in into your account"
      >
        <div className="p-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Don&apos;t have a account
              </span>
            </div>
          </div>

          <Link href="/sign-up" className="grid grid-cols-1 gap-6 my-2">
            <Button variant="outline">Sign up</Button>
          </Link>
        </div>
      </AuthCard>
    </form>
  );
}
