"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <div className="relative inline-flex items-center">
      <input
        type="checkbox"
        className="peer h-4 w-4 shrink-0 opacity-0 absolute inset-0 cursor-pointer z-10"
        ref={ref}
        {...props}
      />
      <div className={cn(
        "flex h-4 w-4 items-center justify-center rounded-sm border border-primary ring-offset-background peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-checked:bg-blue-600 peer-checked:border-blue-600 text-white",
        className
      )}>
        <Check className="h-3 w-3 hidden peer-checked:block" />
      </div>
    </div>
  );
});
Checkbox.displayName = "Checkbox";

export { Checkbox };
