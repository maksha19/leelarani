
import { motion } from 'framer-motion';

export default function HonorsSection() {
  return (
    <section className="py-24 bg-surface-container-low relative" id="honors">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-outline-variant/30 pb-6"
        >
          <div>
            <h2 className="font-h2 text-4xl text-brand-blue mb-2 font-bold">Honors & Recognition</h2>
            <p className="font-body-lg text-lg text-on-surface-variant">A legacy of distinguished achievement.</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Honor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:row-span-2 glass-panel p-8 rounded-2xl flex flex-col justify-center bg-gradient-to-br from-white to-brand-yellow/10"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-yellow/30 text-brand-blue mb-6">
              <span className="material-symbols-outlined">emoji_events</span>
            </div>
            <h3 className="font-h3 text-2xl text-brand-blue mb-2 font-semibold">Triple Membership Awards</h3>
            <p className="font-label-caps text-sm font-semibold tracking-wider text-brand-maroon mb-6 uppercase">Chozhan Tamil Toastmaster Club (2021-2022)</p>
            <p className="font-body-md text-xl text-on-surface-variant mb-6">
              Achieved three prestigious membership awards in a single year: Smedley, Talk up Toastmaster, and Beat the Clock.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-surface-container-high rounded-full font-label-caps text-xs text-on-surface uppercase font-semibold">Smedley</span>
              <span className="px-3 py-1 bg-surface-container-high rounded-full font-label-caps text-xs text-on-surface uppercase font-semibold">Talk up Toastmaster</span>
              <span className="px-3 py-1 bg-surface-container-high rounded-full font-label-caps text-xs text-on-surface uppercase font-semibold">Beat the Clock</span>
            </div>
          </motion.div>

          {/* Other Honors */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-6 rounded-2xl flex gap-4 items-start"
          >
            <div className="p-3 rounded-lg bg-surface-container text-brand-blue">
              <span className="material-symbols-outlined">star</span>
            </div>
            <div>
              <h3 className="font-h3 text-2xl text-brand-blue mb-2 font-semibold">Club Sponsor / Chartered President</h3>
              <p className="font-body-md text-xl text-on-surface-variant mb-6">
                Batok Tamil Toastmaster Club (2025-2026)
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-6 rounded-2xl flex gap-4 items-start"
          >
            <div className="p-3 rounded-lg bg-surface-container text-brand-blue">
              <span className="material-symbols-outlined">public</span>
            </div>
            <div>
              <h3 className="font-h3 text-2xl text-brand-blue mb-2 font-semibold">President's Distinguished Area</h3>
              <p className="font-body-md text-xl text-on-surface-variant">Area T1 (2023-2024)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-6 rounded-2xl flex gap-4 items-start lg:col-span-1"
          >
            <div className="p-3 rounded-lg bg-surface-container text-brand-blue">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <div>
              <h3 className="font-h3 text-2xl text-brand-blue mb-2 font-semibold">President's Distinguished Clubs</h3>
              <li className="ml-4 font-body-md text-xl text-on-surface-variant">Cheran Tamil Toastmaster Club (2019-2020)</li>
              <li className="ml-4 font-body-md text-xl text-on-surface-variant">Chozhan Tamil Toastmaster Club (2021-2022)</li>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
