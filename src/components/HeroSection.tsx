import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
});

export default function HeroSection() {
  const { profile } = usePortfolio();
  const { shortName, role, specialization, tagline, social } = profile;

  const pills = [
    { label: 'GitHub',   href: social.github,   icon: <Github size={14} /> },
    { label: 'LinkedIn', href: social.linkedin,  icon: <Linkedin size={14} /> },
    { label: social.email, href: `mailto:${social.email}`, icon: <Mail size={14} /> },
  ].filter(p => p.href && !p.href.startsWith('['));

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Hero-local purple bloom — sits right behind the headline */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 48% 42%, rgba(168,85,247,0.20) 0%, rgba(139,92,246,0.06) 55%, transparent 75%)',
        }}
      />
      {/* Warm orange-pink accent — lower-right of hero */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 85% 75%, rgba(236,72,153,0.10) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">

        {/* Role pill */}
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <span className="inline-flex items-center gap-2.5 font-kanit text-xs font-medium tracking-[0.22em] text-white/55 uppercase">
            <span className="w-6 h-px bg-gradient-to-r from-purple-500/60 to-transparent" />
            {role} · Graduating 2027
          </span>
        </motion.div>

        {/* Chrome headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="hero-heading font-kanit font-black leading-[0.9] tracking-tight whitespace-nowrap"
          style={{ fontSize: 'clamp(3rem, 13vw, 14rem)' }}
        >
          Hi, I'm {shortName}
        </motion.h1>

        {/* Accent underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-4 h-px w-48 gradient-accent origin-left"
          style={{ borderRadius: 1 }}
        />

        {/* Specialization */}
        <motion.p
          {...fadeUp(0.38)}
          className="mt-5 font-kanit font-medium text-white/55 tracking-[0.18em] text-sm md:text-base uppercase"
        >
          {specialization}
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.48)}
          className="mt-3 font-kanit font-light text-white/70 text-lg md:text-2xl max-w-2xl"
        >
          {tagline}
        </motion.p>

        {/* Social pills + CTA */}
        {pills.length > 0 && (
          <motion.div {...fadeUp(0.58)} className="mt-10 flex flex-wrap gap-3">
            {pills.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.14] bg-white/[0.06] font-kanit text-xs font-medium tracking-wide text-white/75 hover:text-white hover:border-white/30 hover:bg-white/[0.10] transition-all duration-200"
              >
                {icon}
                {label}
              </a>
            ))}

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-kanit text-xs font-semibold tracking-wide text-white gradient-accent hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-purple-500/20"
            >
              View Projects →
            </a>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-kanit text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-purple-400/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
