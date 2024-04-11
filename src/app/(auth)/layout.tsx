import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiesStore = cookies();

  if (cookiesStore.get("session")) {
    redirect("/cats");
  }

  return (
    <div
      className={cn(["h-screen w-80 flex justify-center items-center mx-auto"])}
    >
      {children}
    </div>
  );
}
