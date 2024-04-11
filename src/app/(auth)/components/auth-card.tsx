"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
Button;
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";

interface AuthCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function AuthCard({
  title,
  description,
  children,
}: AuthCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit">
          Go!
        </Button>
      </CardFooter>
      {children}
    </Card>
  );
}
