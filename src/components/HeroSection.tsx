
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] md:min-h-[921px] flex items-center overflow-hidden pt-10 md:pt-20 pb-24 md:pb-0">
      <div className="absolute inset-0 hero-gradient opacity-90 z-0"></div>

      {/* Abstract background shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      // className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
      // className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-brand-maroon/30 rounded-full blur-3xl z-0"
      />

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-label-caps text-sm text-brand-yellow mb-4">
            District-80, Division-T Nominated Candidate 2026-27
          </div>
          <h1 className="font-h1 text-3xl md:text-5xl lg:text-7xl text-white drop-shadow-lg font-bold leading-tight">
            Leela Rani <br />Eagappan
          </h1>
          <p className="font-h3 text-lg md:text-2xl text-white/90 max-w-lg leading-relaxed">
            My journey in Toastmasters has been defined by a commitment to service, continuous learning, and empowering others to reach their full potential. Over the years, I have witnessed the incredible transformative power of our community, and it is this very power that inspires me to step forward as your Nominated Candidate for <strong>Division T Director 2026-2027</strong>.
          </p>
          <div className="md:pt-6">
            <a
              className="inline-flex items-center justify-center bg-brand-yellow text-brand-blue font-button text-lg font-semibold px-10 py-4 rounded-xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 group"
              href="#contact"
            >
              2nd May, Vote for Me
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </motion.div>

        {/* Right Photo Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="glass-panel p-4 rounded-[2rem] max-w-sm w-full transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl group">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container relative w-full max-w-[280px] md:max-w-none mx-auto">
              <img
                alt="Professional portrait of Leela Rani Eagappan"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                src={`${import.meta.env.BASE_URL}leelarani.jpeg`}
              />
            </div>
            <div className="absolute -bottom-6 -left-3 md:-left-6 bg-white p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-2 md:gap-3">
              <div className="bg-brand-maroon/10 p-2 rounded-lg text-brand-maroon">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <div>
                <p className="font-label-caps text-xs text-on-surface-variant font-semibold uppercase tracking-wider">Charter President</p>
                <p className="font-bold text-on-background">Batok TTMC</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
