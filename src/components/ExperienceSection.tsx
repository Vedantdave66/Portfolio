import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function ExperienceSection() {
  const { experience } = usePortfolio();

  return (
    <section id="experience" className="py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.span
          {...fadeUp}
          className="inline-flex items-center gap-2.5 font-kanit text-xs font-medium tracking-[0.22em] text-white/40 uppercase mb-4"
        >
          <span className="w-6 h-px bg-gradient-to-r from-purple-500/60 to-transparent" />
          Experience
        </motion.span>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-kanit font-bold text-4xl md:text-5xl text-white mb-16 leading-tight"
        >
          Where I've worked.
        </motion.h2>

        <div className="flex flex-col">
          {experience.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {i > 0 && (
                <div className="h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />
              )}

              <div className="py-10 grid md:grid-cols-[88px_1fr] gap-6 md:gap-10">
                {/* Gradient number */}
                <div
                  className="font-kanit font-black text-5xl leading-none select-none pt-1 gradient-accent-text opacity-40"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-kanit font-bold text-xl text-white">
                        {exp.company}
                      </h3>
                      <p className="font-kanit font-medium text-sm gradient-accent-text mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 shrink-0">
                      <span className="font-mono text-xs text-purple-300/70 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                      <span className="font-kanit text-xs text-white/40 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="font-kanit font-light text-white/60 text-base mb-5">
                    {exp.summary}
                  </p>

                  {/* Highlights */}
                  {exp.highlights.slice(0, 3).length > 0 && (
                    <ul className="flex flex-col gap-2.5">
                      {exp.highlights.slice(0, 3).map((h, j) => (
                        <li key={j} className="flex items-start gap-3 font-kanit font-light text-sm text-white/55">
                          <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-purple-400/70" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
