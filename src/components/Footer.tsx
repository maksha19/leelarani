import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#1f3d58] w-full pt-20 pb-8 mt-auto" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16 items-center">

          {/* Left Column */}
          <div className="text-white space-y-8">
            <h2 className="font-h1 text-4xl md:text-5xl font-bold leading-tight">
              "Empowering independent leaders and inclusive clubs to ignite innovative growth"
            </h2>
            <p className="font-body-md text-white/80 max-w-md text-lg leading-relaxed">
              If you have any ideas or feedback, please feel free to reach out. I look forward to seeing you at DCM 2 on 2 May 2026.
            </p>

            <div className="space-y-6 pt-4">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white">call</span>
                </div>
                <div>
                  <p className="font-label-caps text-xs text-white/60 tracking-widest mb-1 uppercase">Phone</p>
                  <a href="https://wa.me/6591348785?text=Hi%20Leela%20Rani,%20wishing%20you%20all%20the%20best%20!" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-brand-yellow transition-colors">
                    +65 9134 8785
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#af7c54] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white">mail</span>
                </div>
                <div>
                  <p className="font-label-caps text-xs text-white/60 tracking-widest mb-1 uppercase">Email</p>
                  <a href="mailto:Sanlee02@gmail.com" className="font-bold text-lg hover:text-brand-yellow transition-colors text-wrap break-all">
                    Sanlee02@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#294b68] rounded-3xl p-10 md:p-14 text-center shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
          >
            <h3 className="font-h2 text-2xl md:text-3xl text-white font-bold mb-4">
              Vote for Leela Rani
            </h3>
            <p className="font-body-md text-white/80 mb-8 max-w-sm mx-auto text-center leading-relaxed text-lg">
              "Together, we build leaders who are independent in thought, inclusive in action, and innovative in spirit."
            </p>
            <a
              href="https://www.d80toastmasters.org/dlc-nominations/leela-rani"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-[#ac8159] text-white font-button text-lg font-bold px-8 py-4 rounded-xl hover:bg-[#966844] hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              View All Nominees
              <span className="material-symbols-outlined ml-2 text-xl">open_in_new</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 font-body-md text-sm pb-4">
          <p>© 2026 Leela Rani Eagappan. All rights reserved.</p>
          <p className="text-center md:text-right">
            District-80, Division-T Nominated Candidate 2026-27
          </p>
        </div>

      </div>
    </footer>
  );
}
