"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 py-5",
        scrolled
          ? "bg-background-primary/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-bold">
          <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center text-lg" role="img" aria-label="Hotel Logo">
            🏨
          </div>
          Hotel Room Service
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground-secondary hover:text-foreground-primary text-sm transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden md:inline-block bg-brand hover:opacity-90 text-white px-5.5 py-2.5 rounded-xl text-sm font-medium transition-opacity"
        >
          Get Started →
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-1 text-foreground-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background-primary z-[99] flex flex-col items-center justify-center gap-8 transition-all duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button
          className="absolute top-6 right-6 text-foreground-primary"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-display font-bold text-foreground-primary"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="bg-brand text-white px-8 py-4 rounded-xl text-lg font-medium"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
