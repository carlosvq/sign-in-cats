import { Navbar } from "@/components/own/navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiesStore = cookies();

  if (!cookiesStore.get("session")) {
    return redirect("/sign-in");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
