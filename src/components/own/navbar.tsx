import { cn } from "@/lib/utils";
import Link from "next/link";

export const Navbar = () => {
  const navbarItemList: { href: string; name: string }[] = [
    {
      href: "./cats",
      name: "Cats",
    },
    {
      href: "./add-cat",
      name: "Add Cat",
    },
  ];

  return (
    <nav className={cn(["bg-gray-800 py-4"])}>
      <div
        className={cn(["container mx-auto flex justify-between items-center"])}
      >
        <Link href="./" className={cn(["text-white text-2xl font-bold"])}>
          My Site
        </Link>

        <ul className={cn(["flex space-x-4"])}>
          {navbarItemList.map((navbarItem, index) => (
            <li key={index}>
              <Link
                href={navbarItem.href}
                className={cn(["text-white hover:text-gray-300"])}
              >
                {navbarItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
