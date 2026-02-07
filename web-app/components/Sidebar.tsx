"use client";

import {
  X,
  Home,
  User,
  Share2,
  Star,
  LogOut,
  CreditCard,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: CreditCard, label: "Buy License", href: "/pricing" },
    { icon: MessageCircle, label: "SMS Packs", href: "/sms" },
    { icon: Share2, label: "Share App", href: "#" },
    { icon: Star, label: "Rate Us", href: "#" },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 transform bg-white shadow-xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-32 flex-col justify-end bg-blue-700 p-6 text-white">
            <h2 className="text-2xl font-bold">Teachers App</h2>
            <p className="text-blue-100">Manage your institute</p>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 text-white/80 hover:bg-blue-600 hover:text-white"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-4 px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    onClick={onClose}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="border-t p-4">
            <Button
              variant="ghost"
              className="w-full justify-start gap-4 text-red-600 hover:bg-red-50 hover:text-red-700"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Logout</span>
            </Button>
            <p className="mt-4 text-center text-xs text-gray-400">
              Version 2.0.1
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
