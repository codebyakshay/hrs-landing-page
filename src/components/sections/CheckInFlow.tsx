"use client";

import { motion, HTMLMotionProps } from "framer-motion";



const checkinFeatures = [
  {
    icon: "📷",
    title: "Scan ID Card",
    description: "OCR auto-fills all guest details from Aadhaar, Passport, or Driving License in seconds.",
  },
  {
    icon: "✏️",
    title: "Manual Entry",
    description: "Type guest details directly. All fields editable, no locked inputs.",
  },
  {
    icon: "⚡",
    title: "Quick Check-in",
    description: "Name and phone only. Assign room immediately. Full details filled later.",
  },
];

export function CheckInFlow() {
  return (
    <section id="checkin" className="py-24">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-background-secondary to-brand/5 rounded-[32px] p-8 md:p-16 border border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-faded border border-brand-border px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-brand mb-4">
                3-Step Check-in
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight">
                Guest checked in before they sit down
              </h2>
              <p className="text-base md:text-lg text-foreground-secondary mb-10 font-light leading-relaxed">
                The fastest check-in flow designed for front desk receptionists.
                Three paths, one goal: get the guest their room.
              </p>

              <div className="space-y-6">
                {checkinFeatures.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-faded border border-brand-border flex items-center justify-center shrink-0 mt-1">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{f.title}</h4>
                      <p className="text-sm text-foreground-secondary leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="bg-background-secondary rounded-[40px] border border-white/10 p-3 shadow-2xl w-full max-w-[280px]">
                <div className="bg-background-primary rounded-[30px] overflow-hidden px-4 py-5 text-left h-[440px] flex flex-col">
                  <div className="mb-6">
                    <div className="text-[11px] text-foreground-secondary mb-2">Check-in</div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-7 h-7 bg-success rounded-full flex items-center justify-center text-[11px] text-white">✓</div>
                      <div className="flex-1 h-px bg-success" />
                      <div className="w-7 h-7 bg-brand rounded-full flex items-center justify-center text-[11px] text-white">2</div>
                      <div className="flex-1 h-px bg-white/10" />
                      <div className="w-7 h-7 bg-background-tertiary rounded-full flex items-center justify-center text-[11px] text-foreground-tertiary">3</div>
                    </div>
                    <div className="flex justify-between mt-1.5">
                      <div className="text-[9px] uppercase tracking-wider text-success">Method</div>
                      <div className="text-[9px] uppercase tracking-wider text-brand">Details</div>
                      <div className="text-[9px] uppercase tracking-wider text-foreground-tertiary">Confirm</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="font-display text-base font-bold mb-1">Guest Information</div>
                    <div className="text-[11px] text-foreground-secondary">Fill in all required fields</div>
                  </div>

                  <div className="space-y-3.5 flex-1">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-foreground-secondary mb-1.5 block">Full Name</label>
                      <div className="w-full bg-background-tertiary border border-white/5 rounded-xl p-3 text-xs text-foreground-primary">Rahul Sharma</div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-foreground-secondary mb-1.5 block">Phone Number</label>
                      <div className="w-full bg-background-tertiary border border-white/5 rounded-xl p-3 text-xs text-foreground-primary">+91 98765 43210</div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-foreground-secondary mb-1.5 block">Gender</label>
                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="bg-brand text-white text-[11px] font-medium p-2 rounded-lg text-center">Male</div>
                        <div className="bg-background-tertiary text-foreground-secondary text-[11px] font-medium p-2 rounded-lg text-center">Female</div>
                        <div className="bg-background-tertiary text-foreground-secondary text-[11px] font-medium p-2 rounded-lg text-center">Other</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 bg-brand rounded-xl p-3 text-center text-[13px] font-semibold text-white">
                    Continue →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
