import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import FeaturedProject from './components/FeaturedProject';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0C0C0C]">

      {/* ── Global ambient light blobs (fixed, behind all content) ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Purple — top-center, bleeds into hero */}
        <div
          className="absolute -top-[15vh] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse, rgba(168,85,247,0.22) 0%, rgba(168,85,247,0.06) 45%, transparent 70%)',
            filter: 'blur(72px)',
          }}
        />
        {/* Magenta-orange — mid-right, gives warmth to lower sections */}
        <div
          className="absolute top-[55vh] -right-[180px] w-[640px] h-[640px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse, rgba(236,72,153,0.14) 0%, rgba(249,115,22,0.07) 50%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
        {/* Indigo — bottom-left, subtle depth */}
        <div
          className="absolute bottom-[5vh] -left-[160px] w-[540px] h-[540px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse, rgba(99,102,241,0.10) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
        {/* Gold — mid-page, bleeds into featured project section */}
        <div
          className="absolute top-[140vh] left-[10%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse, rgba(234,179,8,0.09) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* ── All page content sits above the glows ── */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <FeaturedProject />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
