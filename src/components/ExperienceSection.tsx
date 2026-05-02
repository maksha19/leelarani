
import { motion } from 'framer-motion';

// Achievement Photos
import ach1 from '../assets/achivements/photo_1.jpeg'
import ach2 from '../assets/achivements/photo_2.jpeg';
import ach3 from '../assets/achivements/photo_3.jpeg';
import ach4 from '../assets/achivements/photo_4.jpeg';
import ach5 from '../assets/achivements/photo_5.jpeg';
import ach6 from '../assets/achivements/photo_6.jpeg';
import ach7 from '../assets/achivements/photo_7.jpeg';
import ach8 from '../assets/achivements/photo_8.jpeg';
import ach9 from '../assets/achivements/photo_9.jpeg';
import ach10 from '../assets/achivements/photo_10.jpeg';

const achievementPhotos = [
  ach1, ach2, ach3, ach4, ach5, ach6, ach8, ach7, ach9, ach10,
];

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
            <h4 className="font-h3 text-xl text-brand-blue mb-2 font-bold">Asst. Division Director PQ</h4>
            <p className="font-body-md text-xl text-brand-maroon font-medium">Division C (2025-2026)</p>
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
            <p className="font-body-md text-xl text-brand-maroon font-medium">Area T1 (2023-2024)</p>
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
            <p className="font-body-md text-xl text-brand-maroon font-medium">Batok Tamil Toastmaster Club (2025-2026)</p>
          </motion.div>

          {/* Role Card 4 (Combined VP Roles) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="glass-panel p-6 rounded-2xl border-l-4 border-l-brand-maroon lg:col-span-2 hover:shadow-xl transition-shadow"
          >
            <p className="font-label-caps text-xs text-on-surface-variant font-semibold uppercase tracking-wider mb-1">Executive Committee</p>
            <h4 className="font-h3 text-xl text-brand-blue mb-3 font-bold">Vice President Roles</h4>
            <ul className="space-y-2 font-body-md text-xl">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-maroon"></span> VP Education, Cheran Tamil Toastmaster Club (2019-2020)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-maroon"></span> VP Education, Toa Payoh East Toastmasters Club (July - Dec 2022)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-maroon"></span> VP Membership, Chozhan Tamil Toastmaster Club (March - June 2022)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-maroon"></span> VP PR, Cheran Tamil Toastmaster Club (2022-2023)</li>
            </ul>
          </motion.div>

          {/* Role Card 5 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass-panel p-6 rounded-2xl border-l-4 border-l-brand-blue  hover:shadow-xl transition-shadow"
          >
            <p className="font-label-caps text-xs text-on-surface-variant font-semibold uppercase tracking-wider mb-1">Club Level</p>
            <h4 className="font-h3 text-xl text-brand-blue mb-2 font-bold">Club President</h4>
            <ul className="space-y-2 font-body-md text-xl">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-maroon"></span> Singapore Meynigar Tamil Toastmaster Club (2025-2026)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-maroon"></span> Toa Payoh East Toastmasters Club (2024-2025)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-maroon"></span> Chozhan Tamil Toastmaster Club (2021-2022)</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="flex mt-5 overflow-hidden group">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: [0, -7752] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {[...achievementPhotos, ...achievementPhotos].map((photo, index) => (
            <div key={index} className="w-80 h-60 md:w-96 md:h-72 shrink-0 rounded-2xl shadow-lg border-4 border-white overflow-hidden">
              <img src={photo} alt="" className={`w-full h-full ${[0, 1, 8, 10, 11, 17].includes(index) ? "object-contain" : "object-cover"} hover:scale-110 transition-transform duration-500`} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
