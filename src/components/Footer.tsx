
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
      {/* Mission Quote Section */}
      <section className="py-32 relative overflow-hidden bg-brand-blue flex items-center justify-center">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F2DF74 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <span className="material-symbols-outlined text-6xl text-brand-yellow/50 mb-6 block">format_quote</span>
          <h2 className="font-h2 text-3xl md:text-5xl text-white leading-tight mb-8 font-bold">
            "Together, we build leaders who are independent in thought, inclusive in action, and innovative in spirit."
          </h2>
          <p className="font-label-caps text-brand-yellow tracking-widest font-semibold uppercase">Leela Rani Eagappan</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#004165] dark:bg-slate-950 w-full py-12 mt-auto border-t border-white/10" id="contact">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-6 max-w-[1200px] mx-auto">
          <div className="text-lg font-bold text-white flex flex-col items-center md:items-start gap-2">
            <span>Leela Rani Eagappan</span>
            <a className="text-[#F2DF74] font-body-md text-sm hover:underline flex items-center gap-2" href="mailto:Sanlee02@gmail.com">
              <span className="material-symbols-outlined text-sm">mail</span> Sanlee02@gmail.com
            </a>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <a className="font-h3 text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-[#F2DF74] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a>
            <a className="font-h3 text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-[#F2DF74] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-opacity" href="#">Toastmasters International</a>
            <a className="font-h3 text-xs font-semibold uppercase tracking-widest text-[#F2DF74] hover:text-[#F2DF74] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-opacity" target="_blank" rel="noopener noreferrer" href="https://wa.me/6591348785?text=Hi%20Leela%20Rani,%20wishing%20you%20all%20the%20best%20for%20your%20campaign!">Contact</a>
          </div>
          <div className="font-h3 text-xs font-semibold uppercase tracking-widest text-slate-300 text-center md:text-right">
            © District-80, Division-T Nominated Candidate 2026-27. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
