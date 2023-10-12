"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ToggleMode } from "@/components/ui/toggle-mode";

import { Logo } from "./logo";

export function Navbar() {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 dark:bg-[#161616]",
        scrolled && "border-b shadow-sm dark:border-gray-800"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        Login
        <ToggleMode />
      </div>
    </div>
  );
}
