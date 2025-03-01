"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { theme, setTheme } = useTheme();
  console.log("theme", theme);

  const handleThemeChange = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <header className=" py-6 border-b border-gray-200 dark:border-gray-700">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="font-primary font-bold text-5xl">OneXReferral</h1>
          <div>
            <Button variant="outline" onClick={handleThemeChange}>
              {theme === "light" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100  dark:-rotate-90 dark:scale-0 transition-all delay-500 ease-in-out" />
              ) : (
                <Moon className=" h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all delay-500 ease-in-out" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
