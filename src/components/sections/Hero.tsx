"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeInUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden text-center">
      {/* Hero Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="container relative z-10">
        <motion.div
          {...fadeInUp}
          className="inline-flex items-center gap-2 bg-brand-faded border border-brand-border px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-brand mb-7"
        >
          <div className="w-1.5 h-1.5 bg-brand rounded-full" />
          Smart Hotel Operations
        </motion.div>

        <motion.h1
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-[900px] mx-auto mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
        >
          Manage your hotel <br />
          <span className="bg-gradient-to-r from-brand to-[#818cf8] bg-clip-text text-transparent">
            in under 40 seconds
          </span>
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground-secondary max-w-[560px] mx-auto mb-11 font-light leading-relaxed"
        >
          A fast, operational tool for small hotels. Check guests in, track
          rooms, and maintain clean records — all from one app.
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-18"
        >
          <a
            href="#contact"
            className="bg-brand hover:opacity-90 text-white px-8 py-3.5 rounded-xl font-medium transition-all transform hover:-translate-y-0.5"
          >
            Start Free Trial →
          </a>
          <a
            href="#how-it-works"
            className="border border-white/10 hover:border-white/20 hover:bg-white/[0.04] text-foreground-primary px-8 py-3.5 rounded-xl font-normal transition-all"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
          className="flex flex-col md:flex-row items-stretch justify-center max-w-[600px] mx-auto bg-background-secondary border border-white/10 rounded-2xl overflow-hidden mb-20"
        >
          {[
            { value: "40s", label: "Avg Check-in Time" },
            { value: "100%", label: "Room Accuracy" },
            { value: "0", label: "Training Needed" },
          ].map((stat, i) => (
            <div
              key={i}
              className={cn(
                "flex-1 py-6 px-5 border-white/10",
                i !== 2 && "border-b md:border-b-0 md:border-r",
              )}
            >
              <div className="font-display text-3xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-foreground-secondary uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.5 }}
          className="max-w-[320px] mx-auto relative group"
        >
          <div className="bg-background-secondary rounded-[40px] border border-white/10 p-3 shadow-2xl relative z-10">
            <div className="bg-background-primary rounded-[30px] overflow-hidden px-4 py-5 text-left">
              <div className="flex justify-between items-center mb-4 px-1">
                <span className="text-[13px] font-semibold">9:41</span>
                <span
                  className="text-[12px] text-foreground-secondary"
                  role="img"
                  aria-label="Signal and Battery"
                >
                  ● ● ▌
                </span>
              </div>
              <div className="mb-5">
                <div className="font-display text-xl font-bold">Dashboard</div>
              </div>

              <div className="text-[10px] font-semibold tracking-widest uppercase text-foreground-secondary mb-2.5">
                Room Status
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  { value: "24", label: "Available", color: "bg-success" },
                  { value: "12", label: "Occupied", color: "bg-danger" },
                  { value: "5", label: "Cleaning", color: "bg-warning" },
                  { value: "2", label: "Maintenance", color: "bg-info" },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-background-secondary rounded-xl p-3 border-l-3"
                    style={{
                      borderLeftColor: `var(--color-${card.label.toLowerCase()})`,
                    }}
                  >
                    <div className="font-display text-2xl font-bold">
                      {card.value}
                    </div>
                    <div className="text-[10px] text-foreground-secondary mt-0.5">
                      {card.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[10px] font-semibold tracking-widest uppercase text-foreground-secondary mb-2.5">
                Today&apos;s Activity
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    value: "18",
                    label: "Check-ins",
                    icon: "↓",
                    color: "text-success",
                  },
                  {
                    value: "14",
                    label: "Check-outs",
                    icon: "↑",
                    color: "text-danger",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-background-secondary rounded-xl p-3 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-display text-xl font-bold">
                        {item.value}
                      </div>
                      <div className="text-[10px] text-foreground-secondary">
                        {item.label}
                      </div>
                    </div>
                    <span className={cn("text-lg", item.color)}>
                      {item.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
