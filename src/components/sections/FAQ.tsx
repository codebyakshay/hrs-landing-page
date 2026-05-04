"use client";

import { useState } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeInUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const faqs = [
  {
    question: "Is the app really free?",
    answer: "Yes. The app is completely free to use. You only pay a one-time ₹10 onboarding fee when you first register your hotel. This generates your Hotel ID and Password. After that, there are no monthly fees, no subscriptions, no hidden charges.",
  },
  {
    question: "How does the ID scanner work?",
    answer: "The scanner uses a custom native camera built directly into the app. It captures a photo of the ID card (front and back), extracts text using on-device OCR (Apple Vision on iOS, Google ML Kit on Android), and auto-fills all guest fields. No internet connection is needed for scanning — it all happens on the device.",
  },
  {
    question: "What ID types does the scanner support?",
    answer: "The scanner currently supports Aadhaar Card, Indian Passport, and Driving License. Each has a dedicated parser that handles the specific format and field layout of that document type.",
  },
  {
    question: "How many rooms and floors can I add?",
    answer: "There is no hard limit on rooms or floors. The app is designed to handle properties of any size — from a 10-room guesthouse to a 200-room hotel.",
  },
  {
    question: "Is my guest data secure?",
    answer: "Yes. All data is stored securely on our servers with encryption. OCR processing happens on-device — ID images are never sent to external servers. Your hotel data is isolated and only accessible with your credentials.",
  },
  {
    question: "Does it work offline?",
    answer: "The ID scanner works fully offline. Core app functionality requires an internet connection to sync room status and guest records across devices in real time.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div {...fadeInUp} className="inline-flex items-center gap-2 bg-brand-faded border border-brand-border px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-brand mb-4">
            FAQ
          </motion.div>
          <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Common questions
          </motion.h2>
        </div>

        <div className="max-w-[720px] mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background-secondary rounded-2xl border border-white/5 overflow-hidden"
            >
              <button
                className="w-full text-left p-6 flex items-center justify-between group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={cn(
                  "font-medium transition-colors",
                  openIndex === i ? "text-brand" : "text-foreground-primary group-hover:text-brand"
                )}>
                  {faq.question}
                </span>
                <Plus 
                  size={20} 
                  className={cn(
                    "text-foreground-tertiary transition-transform duration-300",
                    openIndex === i && "rotate-45 text-brand"
                  )} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-sm text-foreground-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
