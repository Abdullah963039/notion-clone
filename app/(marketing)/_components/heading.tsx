"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Heading() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl capitalize font-bold">
        Your ideas, documents & plans. Unified. welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      <Button>
        Enter Jotion <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
