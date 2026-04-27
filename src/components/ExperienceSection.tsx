
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section className="py-24 bg-surface" id="experience">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-h2 text-4xl text-center text-brand-blue mb-16 font-bold"
        >
          Served in Toastmasters
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Role Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-6 rounded-2xl border-l-4 border-l-brand-yellow hover:shadow-xl transition-shadow"
          >
            <p className="font-label-caps text-xs text-on-surface-variant font-semibold uppercase tracking-wider mb-1">Division Level</p>
            <h4 className="font-h3 text-xl text-brand-blue mb-2 font-bold">Asst. Division Director PQD</h4>
            <p className="font-body-md text-xl text-brand-maroon font-medium">Division C</p>
          </motion.div>

          {/* Role Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-panel p-6 rounded-2xl border-l-4 border-l-brand-yellow hover:shadow-xl transition-shadow"
          >
            <p className="font-label-caps text-xs text-on-surface-variant font-semibold uppercase tracking-wider mb-1">Area Level</p>
            <h4 className="font-h3 text-xl text-brand-blue mb-2 font-bold">Area Director</h4>
            <p className="font-body-md text-xl text-brand-maroon font-medium">Area T1</p>
          </motion.div>

          {/* Role Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-panel p-6 rounded-2xl border-l-4 border-l-brand-blue hover:shadow-xl transition-shadow"
          >
            <p className="font-label-caps text-xs text-on-surface-variant font-semibold uppercase tracking-wider mb-1">Club Level</p>
            <h4 className="font-h3 text-xl text-brand-blue mb-2 font-bold">Charter President</h4>
            <p className="font-body-md text-xl text-brand-maroon font-medium">Batok Tamil Toastmaster Club</p>
          </motion.div>

          {/* Role Card 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass-panel p-6 rounded-2xl border-l-4 border-l-brand-blue lg:col-span-2 hover:shadow-xl transition-shadow"
          >
            <p className="font-label-caps text-xs text-on-surface-variant font-semibold uppercase tracking-wider mb-1">Club Level</p>
            <h4 className="font-h3 text-xl text-brand-blue mb-2 font-bold">Club President</h4>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-surface-container rounded-md font-body-md text-xl">Sin. Meynigar TTMC</span>
              <span className="px-3 py-1 bg-surface-container rounded-md font-body-md text-xl">TPE TMC</span>
              <span className="px-3 py-1 bg-surface-container rounded-md font-body-md text-xl">Chozhan TTMC</span>
            </div>
          </motion.div>

          {/* Role Card 5 (Combined VP Roles) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="glass-panel p-6 rounded-2xl border-l-4 border-l-brand-maroon hover:shadow-xl transition-shadow"
          >
            <p className="font-label-caps text-xs text-on-surface-variant font-semibold uppercase tracking-wider mb-1">Executive Committee</p>
            <h4 className="font-h3 text-xl text-brand-blue mb-3 font-bold">Vice President Roles</h4>
            <ul className="space-y-2 font-body-md text-xl">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-maroon"></span> VP Education (Cheran TTMC)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-maroon"></span> VP Membership (Chozhan TTMC)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-maroon"></span> VP PR (Cheran TTMC)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
