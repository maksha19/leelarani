
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

import english_video from '../assets/videos/english_speach.mp4';
import tamil_video from "../assets/videos/tamil_speach.mp4"

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
  const [activeTab, setActiveTab] = useState<'english' | 'tamil'>('english');

  // Refs updated synchronously so IntersectionObserver callbacks always see latest values
  const activeTabRef = useRef<'english' | 'tamil'>('english');
  const isVisible = useRef(false);
  const pendingAutoPlay = useRef(false);
  const autoPlayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const englishRef = useRef<HTMLVideoElement>(null);
  const tamilRef = useRef<HTMLVideoElement>(null);

  const getVideoRef = (tab: 'english' | 'tamil') =>
    tab === 'english' ? englishRef : tamilRef;

  // Play/pause based on viewport visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          const isActiveVideo = video === getVideoRef(activeTabRef.current).current;

          if (!isActiveVideo) return;

          if (entry.isIntersecting) {
            isVisible.current = true;
            // Only auto-play immediately if no tab-switch timer is pending
            if (!pendingAutoPlay.current) {
              video.play().catch(() => { });
            }
          } else {
            isVisible.current = false;
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (englishRef.current) observer.observe(englishRef.current);
    if (tamilRef.current) observer.observe(tamilRef.current);

    return () => observer.disconnect();
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimer.current) clearTimeout(autoPlayTimer.current);
    };
  }, []);

  const handleTabSwitch = (tab: 'english' | 'tamil') => {
    if (tab === activeTab) return;

    // Pause the currently active video
    const currentVideo = getVideoRef(activeTabRef.current).current;
    if (currentVideo) currentVideo.pause();

    // Cancel any existing auto-play timer
    if (autoPlayTimer.current) clearTimeout(autoPlayTimer.current);

    // Update ref immediately so IntersectionObserver sees the new active tab
    // before React re-renders
    activeTabRef.current = tab;
    pendingAutoPlay.current = true;
    setActiveTab(tab);

    // Auto-play after 1 seconds, but only if still visible
    autoPlayTimer.current = setTimeout(() => {
      pendingAutoPlay.current = false;
      if (isVisible.current) {
        const newVideo = getVideoRef(tab).current;
        if (newVideo) newVideo.play().catch(() => { });
      }
    }, 1000);
  };

  return (
    <section className="py-12 md:py-24 bg-surface relative z-10" id="vision">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className='flex-row py-10'>
          <p className="font-body-lg font-bold text-lg md:text-2xl text-on-surface-variant justify-center items-center mx-auto">உள்ளுவதெல்லாம் உயர்வுள்ளல்(குறள் 596)</p>
          <p className="font-body-lg font-bold text-lg md:text-2xl text-on-surface-variant justify-center items-center mx-auto">Let your thoughts always be lofty/high </p>
        </div>
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex justify-center mb-4 gap-2">
            <button
              onClick={() => handleTabSwitch('english')}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === 'english'
                ? 'bg-brand-blue text-white shadow-md'
                : 'bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20'
                }`}
            >
              English
            </button>
            <button
              onClick={() => handleTabSwitch('tamil')}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === 'tamil'
                ? 'bg-brand-maroon text-white shadow-md'
                : 'bg-brand-maroon/10 text-brand-maroon hover:bg-brand-maroon/20'
                }`}
            >
              தமிழ்
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-3xl mx-auto">
            <video
              ref={englishRef}
              controls
              className={`w-full${activeTab !== 'english' ? ' hidden' : ''}`}
              src={english_video}
            />
            <video
              ref={tamilRef}
              controls
              className={`w-full${activeTab !== 'tamil' ? ' hidden' : ''}`}
              src={tamil_video}
            />
          </div>
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
        {/* proposed Div-T 2026-2027 calender*/}

      </div>
    </section>
  );
}
