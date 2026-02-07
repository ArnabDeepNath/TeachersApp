"use client";

import {
  PlusCircle,
  Users,
  ClipboardList,
  IndianRupee,
  Home,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();

  const links = [
    { href: "/add", icon: PlusCircle, label: "Add" },
    { href: "/attendance", icon: Users, label: "Attendance" },
    { href: "/tests", icon: ClipboardList, label: "Tests" },
    { href: "/fees", icon: IndianRupee, label: "Fees" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-blue-700 text-white shadow-lg">
      {links.map(({ href, icon: Icon, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-col items-center justify-center p-2 text-xs font-medium transition-colors hover:bg-blue-600",
              isActive ? "text-yellow-300" : "text-white/80",
            )}
          >
            <Icon className="h-6 w-6 mb-1" />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
