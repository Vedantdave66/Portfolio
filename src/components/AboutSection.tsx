import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function AboutSection() {
  const { profile, certifications } = usePortfolio();

  return (
    <section id="about" className="py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.span
          {...fadeUp}
          className="inline-flex items-center gap-2.5 font-kanit text-xs font-medium tracking-[0.22em] text-white/40 uppercase mb-4"
        >
          <span className="w-6 h-px bg-gradient-to-r from-purple-500/60 to-transparent" />
          About
        </motion.span>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-kanit font-bold text-4xl md:text-5xl text-white mb-8 leading-tight"
        >
          Building end-to-end,<br className="hidden md:block" /> from schema to screen.
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-kanit font-light text-white/65 text-lg md:text-xl leading-relaxed max-w-3xl"
          style={{ overflowWrap: 'normal', wordBreak: 'normal' }}
        >
          {profile.bio}
        </motion.p>

        {certifications.length > 0 && (
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {certifications.map((cert) => (
              <span
                key={cert.code}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-purple-500/25 bg-purple-500/[0.08] font-kanit text-sm font-medium text-white/80"
              >
                <ShieldCheck size={14} className="text-purple-400 shrink-0" />
                {cert.name}
                <span className="text-purple-300/50 text-xs ml-1">{cert.code} · {cert.year}</span>
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
