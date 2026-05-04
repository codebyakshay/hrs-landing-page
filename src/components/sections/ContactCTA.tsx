export const ContactCTA = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="bg-gradient-to-br from-brand/10 to-brand/5 border border-brand/20 rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/20 blur-[100px] pointer-events-none rounded-full group-hover:bg-brand/30 transition-colors duration-700" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand-faded border border-brand-border px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-brand mb-6">
              Get Started Today
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight max-w-2xl mx-auto">
              Replace your paper register <br /> starting today
            </h2>
            <p className="text-lg md:text-xl text-foreground-secondary mb-10 font-light max-w-lg mx-auto">
              One-time ₹10 setup. Free forever after.{" "}
              <br className="hidden sm:block" /> No training required.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@hotelroomservice.app"
                className="bg-brand hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-xl shadow-brand/10"
              >
                Contact Us to Onboard →
              </a>
              <a
                href="#features"
                className="border border-white/10 hover:border-white/20 hover:bg-white/[0.04] text-foreground-primary px-8 py-4 rounded-xl font-medium transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
