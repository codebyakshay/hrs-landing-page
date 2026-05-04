"use client";

import { motion, HTMLMotionProps } from "framer-motion";

const fadeInUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const features = [
  {
    icon: "📊",
    title: "Live Dashboard",
    description: "See your entire hotel at a glance. Available rooms, occupied rooms, cleaning status — all updated in real time.",
  },
  {
    icon: "🚪",
    title: "Room Management",
    description: "Track every room across every floor. Color-coded status cards with urgency alerts for cleaning rooms overdue 45+ minutes.",
  },
  {
    icon: "⚡",
    title: "Fast Check-in",
    description: "Complete a full guest check-in in under 40 seconds. Three paths: scan ID, manual entry, or Quick Check-in mode.",
  },
  {
    icon: "📷",
    title: "Smart ID Scanner",
    description: "Custom camera with OCR auto-fills guest details from Aadhaar, Passport, or Driving License. Front and back capture.",
  },
  {
    icon: "📋",
    title: "Guest Records",
    description: "Every guest permanently on record. Search by name or ID number. Filter by date range or ID type. Instant retrieval.",
  },
  {
    icon: "🔧",
    title: "Hotel Settings",
    description: "Configure your hotel structure — add floors, add rooms, set maintenance mode. Full control over your property.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div {...fadeInUp} className="inline-flex items-center gap-2 bg-brand-faded border border-brand-border px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-brand mb-4">
            Everything You Need
          </motion.div>
          <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Built for real hotel operations
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-lg text-foreground-secondary max-w-lg mx-auto font-light">
            No bloat. No complexity. Just the tools that matter for running a small hotel.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden"
        >
          {features.map((feature, i) => (
            <div key={i} className="bg-background-secondary p-9 hover:bg-background-tertiary transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-brand-faded border border-brand-border flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2.5">{feature.title}</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
