import { useState, useEffect } from 'react';

const navItems = [
  { id: 'vision', label: 'Vision' },
  { id: 'honors', label: 'Honors' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Resources' },
];

export default function Navbar() {
  const [active, setActive] = useState('vision');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      let currentActive = null;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adding a threshold (e.g., 150) so it highlights before hitting the exact top
          if (rect.top <= 150) { 
            currentActive = navItems[i].id;
            break;
          }
        }
      }
      
      if (currentActive && currentActive !== active) {
        setActive(currentActive);
      }
      
      // If we are at the very top, set it back to the first item (e.g., hero section)
      if (window.scrollY < 100) {
        setActive('vision');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  return (
    <nav className="hidden md:block fixed top-0 w-full border-b border-white/20 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_30px_30px_-5px_rgba(0,65,101,0.08)]">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1200px] mx-auto">
        <div className="text-2xl font-black text-brand-blue tracking-tighter">
          Toastmasters Portfolio
        </div>
        <div className="hidden md:flex space-x-8 items-center h-full">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`font-h3 text-xl tracking-tight transition-colors duration-200 mt-2 ${
                active === item.id 
                  ? 'text-brand-blue font-bold border-b-2 border-brand-yellow pb-1' 
                  : 'text-slate-600 hover:text-brand-blue pb-[6px]'
              }`}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a className="inline-block bg-brand-yellow text-brand-blue font-button text-button px-6 py-3 rounded-xl shadow-[0_10px_20px_-5px_rgba(0,65,101,0.15)] hover:shadow-[0_15px_25px_-5px_rgba(0,65,101,0.25)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95" target="_blank" rel="noopener noreferrer" href="https://wa.me/6591348785?text=Hi%20Leela%20Rani,%20wishing%20you%20all%20the%20best%20for%20your%20campaign!">
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
