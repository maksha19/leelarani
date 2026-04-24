
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VisionSection from './components/VisionSection';
import HonorsSection from './components/HonorsSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <SEO />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <VisionSection />
        <HonorsSection />
        <ExperienceSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
