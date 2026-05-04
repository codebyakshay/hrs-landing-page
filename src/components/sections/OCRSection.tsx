"use client";

import { motion, HTMLMotionProps } from "framer-motion";

const fadeInUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export function OCRSection() {
  return (
    <section id="ocr" className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:flex bg-black rounded-3xl p-8 border border-white/5 relative overflow-hidden aspect-[4/3] items-center justify-center group"
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            
            <div className="relative w-4/5 aspect-[1.58] z-20">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-3 border-l-3 border-brand rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-3 border-r-3 border-brand rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-3 border-l-3 border-brand rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-3 border-r-3 border-brand rounded-br-lg" />
              
              {/* Scan Line Animation */}
              <motion.div 
                animate={{ 
                  top: ["10%", "90%", "10%"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent shadow-[0_0_12px_var(--color-brand)]"
              />
            </div>
          </motion.div>

          <div>
            <motion.div {...fadeInUp} className="inline-flex items-center gap-2 bg-brand-faded border border-brand-border px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-brand mb-4">
              Smart ID Scanner
            </motion.div>
            <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight">
              Scan any Indian ID card instantly
            </motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-base md:text-lg text-foreground-secondary mb-8 font-light leading-relaxed">
              A custom-built native camera with on-device OCR. No internet
              required for scanning. Front and back capture. Auto-fills all
              guest fields in seconds.
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="flex flex-wrap gap-2.5">
              {["🪪 Aadhaar Card", "📕 Passport", "🚗 Driving License", "+ More"].map((badge, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-background-secondary border border-white/5 rounded-full text-sm text-foreground-secondary hover:text-foreground-primary hover:border-white/10 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
