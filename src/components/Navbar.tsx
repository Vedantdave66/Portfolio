import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'HOME',     href: '#hero' },
  { label: 'ABOUT',    href: '#about' },
  { label: 'SKILLS',   href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT',  href: '#contact' },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0C0C0C]/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, '#hero')}
          className="font-kanit font-bold text-lg tracking-widest text-white/90 hover:text-white transition-colors"
        >
          V.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className="font-kanit text-xs font-medium tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-white/50 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-current transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden bg-[#0C0C0C]/95 backdrop-blur-md border-b border-white/5 px-6 pb-6 flex flex-col gap-5"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className="font-kanit text-sm font-medium tracking-[0.2em] text-white/60 hover:text-white transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
