"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Features",
      links: [
        { name: "Room Management", href: "#" },
        { name: "Guest Check-in", href: "#" },
        { name: "ID Scanner", href: "#" },
        { name: "Guest Records", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Refund Policy", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/5 pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 font-display text-lg font-bold mb-6">
              <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center text-lg">
                🏨
              </div>
              Hotel Room Service
            </Link>
            <p className="text-sm text-foreground-secondary leading-relaxed max-w-sm">
              A fast, operational hotel management system built for small hotels
              and motels across India.
            </p>
          </div>
          
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-6">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-secondary hover:text-foreground-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-foreground-tertiary">
            © {currentYear} Hotel Room Service. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Terms", "Privacy", "Refund"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-foreground-tertiary hover:text-foreground-secondary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
