
import { motion } from 'framer-motion';

const visions = [
  {
    icon: 'lightbulb',
    title: 'Invigorating & Independent Leaders',
    description: 'Make the Leaders who think independently with confidence, energizing others and creating a vibrant path to success.',
    iconBg: 'bg-brand-blue/10',
    iconColor: 'text-brand-blue'
  },
  {
    icon: 'diversity_3',
    title: 'Indigenous & Inclusive Clubs',
    description: 'Clubs that stands strong on its own, celebrating every voice, honoring every member, Focusing on Moments of Truth to ensure club excellence and sustainable growth',
    iconBg: 'bg-brand-maroon/10',
    iconColor: 'text-brand-maroon'
  },
  {
    icon: 'rocket_launch',
    title: 'Inspiring & Innovative Members',
    description: 'Encourage the Members who lead with integrity and think beyond boundaries to inspire growth and innovation.',
    iconBg: 'bg-tertiary-container/30',
    iconColor: 'text-tertiary'
  }
];

export default function VisionSection() {
  return (
    <section className="py-24 bg-surface relative z-10" id="vision">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-h2 text-4xl text-brand-blue mb-4 font-bold">My Vision for Division T</h2>
          <p className="font-body-lg text-2xl text-on-surface-variant max-w-2xl mx-auto">
            Empowering independent leaders and inclusive clubs to ignite innovative growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {visions.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-xl ${v.iconBg} flex items-center justify-center ${v.iconColor} mb-6 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-4xl" data-weight="fill">{v.icon}</span>
              </div>
              <h3 className={`font-h3 text-2xl ${i === 1 ? 'text-brand-maroon' : 'text-brand-blue'} mb-4 font-semibold`}>
                {v.title}
              </h3>
              <p className="font-body-md text-xl text-on-surface-variant">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
