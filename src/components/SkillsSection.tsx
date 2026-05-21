import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';

// Cycling accent colours for category labels
const LABEL_COLORS = [
  'text-purple-400',
  'text-pink-400',
  'text-orange-400',
  'text-violet-400',
  'text-fuchsia-400',
  'text-rose-400',
];

export default function SkillsSection() {
  const { skills } = usePortfolio();

  return (
    <section id="skills" className="py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 font-kanit text-xs font-medium tracking-[0.22em] text-white/40 uppercase mb-4"
        >
          <span className="w-6 h-px bg-gradient-to-r from-purple-500/60 to-transparent" />
          Skills
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-kanit font-bold text-4xl md:text-5xl text-white mb-14 leading-tight"
        >
          Tools of the trade.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ borderColor: 'rgba(168,85,247,0.22)' }}
              className="rounded-2xl border border-white/[0.09] bg-white/[0.03] p-6 transition-colors duration-300 group"
            >
              {/* Category label with cycling accent color */}
              <h3 className={`font-kanit font-semibold text-xs tracking-[0.18em] uppercase mb-4 ${LABEL_COLORS[i % LABEL_COLORS.length]}`}>
                {cat.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-kanit text-sm font-medium text-white/75 bg-white/[0.06] border border-white/[0.10] px-3 py-1.5 rounded-full group-hover:border-white/[0.15] transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
