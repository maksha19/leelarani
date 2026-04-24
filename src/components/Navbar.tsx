

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-white/20 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_30px_30px_-5px_rgba(0,65,101,0.08)]">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1200px] mx-auto">
        <div className="text-2xl font-black text-brand-blue tracking-tighter">
          Toastmasters Portfolio
        </div>
        <div className="hidden md:flex space-x-8">
          <a className="font-h3 text-sm tracking-tight text-brand-blue font-bold border-b-2 border-brand-yellow pb-1" href="#vision">Vision</a>
          <a className="font-h3 text-sm tracking-tight text-slate-600 transition-colors duration-200 hover:text-brand-blue" href="#honors">Honors</a>
          <a className="font-h3 text-sm tracking-tight text-slate-600 transition-colors duration-200 hover:text-brand-blue" href="#experience">Experience</a>
          <a className="font-h3 text-sm tracking-tight text-slate-600 transition-colors duration-200 hover:text-brand-blue" href="#contact">Resources</a>
        </div>
        <div className="hidden md:block">
          <a className="inline-block bg-brand-yellow text-brand-blue font-button text-button px-6 py-3 rounded-xl shadow-[0_10px_20px_-5px_rgba(0,65,101,0.15)] hover:shadow-[0_15px_25px_-5px_rgba(0,65,101,0.25)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95" href="#contact">
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
