"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  breed: z.string().min(2).max(50),
});

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      breed: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className={cn(["w-80 m-2 p-2 border rounded-sm mx-auto"])}>
      <h2
        className={cn([
          "scroll-m-20 tracking-tight",
          "mb-2 text-2xl font-semibold",
        ])}
      >
        Create a Cat
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cat Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="breed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cat Breed</FormLabel>
                <FormControl>
                  <Input placeholder="Breed" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className={cn(["w-full"])}>
            Add Cat 🐱
          </Button>
        </form>
      </Form>
    </div>
  );
}
