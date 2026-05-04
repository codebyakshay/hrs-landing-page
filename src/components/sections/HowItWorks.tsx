"use client";

import { motion, HTMLMotionProps } from "framer-motion";

const fadeInUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const steps = [
  {
    num: "1",
    title: "Get Onboarded",
    description: "Pay a one-time ₹10 setup fee. Receive your Hotel ID and password instantly.",
  },
  {
    num: "2",
    title: "Configure Hotel",
    description: "Add your floors and rooms in Settings. Takes less than 5 minutes.",
  },
  {
    num: "3",
    title: "Start Checking In",
    description: "Reception starts checking in guests immediately. No training needed.",
  },
  {
    num: "4",
    title: "Operate Effortlessly",
    description: "Rooms update in real time. Records are always accurate. Everything just works.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container">
        <div className="text-center mb-20">
          <motion.div {...fadeInUp} className="inline-flex items-center gap-2 bg-brand-faded border border-brand-border px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-brand mb-4">
            Simple Process
          </motion.div>
          <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Up and running in minutes
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-lg text-foreground-secondary max-w-lg mx-auto font-light">
            From first setup to first check-in — no training required.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center relative z-10"
            >
              <div className="w-14 h-14 rounded-full bg-background-secondary border border-white/10 flex items-center justify-center font-display text-xl font-bold text-brand mx-auto mb-6 shadow-xl">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
