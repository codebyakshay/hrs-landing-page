"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

const fadeInUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const plans = [
  {
    name: "Starter",
    price: "0",
    desc: "Everything you need to run a small hotel. Forever free.",
    features: [
      { text: "Unlimited check-ins", included: true },
      { text: "Room management", included: true },
      { text: "Guest records", included: true },
      { text: "ID scanning (OCR)", included: true },
      { text: "Up to 5 floors", included: true },
      { text: "Multi-property", included: false },
    ],
    cta: "Get Started Free",
    featured: false,
  },
  {
    name: "Professional",
    price: "0",
    desc: "One-time ₹10 onboarding fee. Then free forever.",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Unlimited floors", included: true },
      { text: "Unlimited rooms", included: true },
      { text: "Priority support", included: true },
      { text: "Multi-guest check-in", included: true },
      { text: "Quick Check-in mode", included: true },
    ],
    cta: "Get Started — ₹10 Only",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Multiple properties, custom integrations, dedicated support.",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Multi-property", included: true },
      { text: "Custom onboarding", included: true },
      { text: "Dedicated support", included: true },
      { text: "SLA guarantee", included: true },
      { text: "API access", included: true },
    ],
    cta: "Contact Us",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div {...fadeInUp} className="inline-flex items-center gap-2 bg-brand-faded border border-brand-border px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-brand mb-4">
            Simple Pricing
          </motion.div>
          <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            One price. No surprises.
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-lg text-foreground-secondary max-w-lg mx-auto font-light">
            The app is free. You only pay a one-time ₹10 onboarding fee to get your credentials.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "bg-background-secondary rounded-3xl p-8 border border-white/5 relative transition-transform hover:-translate-y-1.5",
                plan.featured && "border-brand bg-gradient-to-br from-brand/10 to-background-secondary"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-[11px] font-bold py-1 px-4 rounded-full tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              <div className="text-xs font-bold tracking-widest uppercase text-foreground-secondary mb-5">
                {plan.name}
              </div>
              <div className="flex items-baseline gap-1.5 mb-2">
                {plan.price !== "Custom" && <span className="text-2xl font-semibold text-foreground-secondary">₹</span>}
                <span className={cn("font-display font-extrabold", plan.price === "Custom" ? "text-4xl" : "text-6xl")}>
                  {plan.price}
                </span>
                {plan.price !== "Custom" && <span className="text-sm text-foreground-secondary">/month</span>}
              </div>
              <p className="text-sm text-foreground-secondary leading-relaxed mb-8 h-10">
                {plan.desc}
              </p>
              
              <div className="h-px bg-white/10 mb-8" />
              
              <div className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <Check size={18} className="text-success shrink-0" />
                    ) : (
                      <X size={18} className="text-foreground-tertiary shrink-0" />
                    )}
                    <span className={feature.included ? "text-foreground-primary" : "text-foreground-tertiary"}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={cn(
                  "block w-full text-center py-4 rounded-xl font-semibold transition-all",
                  plan.featured 
                    ? "bg-brand text-white hover:opacity-90" 
                    : "border border-white/10 text-foreground-primary hover:bg-white/[0.04] hover:border-white/20"
                )}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
