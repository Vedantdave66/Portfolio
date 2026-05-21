import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import PuzzleVisual from './PuzzleVisual';

export default function FeaturedProject() {
  const { projects, profile } = usePortfolio();
  const featured = projects.find((p) => p.highlight);
  if (!featured) return null;

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          /* Gradient-border wrapper */
          className="card-gradient-border"
        >
          <div className="rounded-[calc(1.5rem-1px)] bg-[#0e0e0e] overflow-hidden">

            {/* Top label */}
            <div className="px-8 pt-8 pb-0">
              <span className="inline-flex items-center gap-2.5 font-kanit text-xs font-medium tracking-[0.22em] text-white/40 uppercase">
                <span className="w-6 h-px bg-gradient-to-r from-purple-500/60 to-transparent" />
                Featured Project
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: content */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="font-kanit font-black text-4xl md:text-5xl text-white leading-tight mb-2">
                    {featured.title}
                  </h2>
                  <p className="gradient-accent-text font-kanit font-semibold text-base mb-6">
                    {featured.subtitle}
                  </p>
                  <p className="font-kanit font-light text-white/60 text-base leading-relaxed mb-8 max-w-lg">
                    {featured.description}
                  </p>

                  {featured.highlights.length > 0 && (
                    <ul className="flex flex-col gap-3 mb-8">
                      {featured.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 font-kanit text-sm text-white/65">
                          <CheckCircle2 size={15} className="text-purple-400 mt-0.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  {featured.link && (
                    <a
                      href={featured.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-accent font-kanit text-sm font-semibold text-white hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
                    >
                      <ExternalLink size={14} />
                      Visit {new URL(featured.link).hostname.replace('www.', '')}
                    </a>
                  )}
                  <a
                    href={`${profile.social.github.replace(/\/$/, '')}/${featured.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 font-kanit text-sm font-medium text-white/65 hover:text-white hover:border-purple-400/40 transition-all"
                  >
                    <Github size={14} />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Right: stack + placeholder */}
              <div className="flex flex-col p-8 lg:p-12 lg:border-l border-t lg:border-t-0 border-white/[0.07] gap-8">
                {featured.stack.length > 0 && (
                  <div>
                    <p className="font-kanit text-xs tracking-[0.18em] text-white/35 uppercase mb-3">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {featured.stack.map((s) => (
                        <span
                          key={s}
                          className="font-kanit text-xs font-medium text-white/70 bg-purple-500/[0.08] border border-purple-500/[0.18] px-3 py-1.5 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3-D puzzle visual — scroll-driven assembly */}
                <div className="flex-1 min-h-52">
                  <PuzzleVisual />
                </div>

                <div className="flex gap-4 text-xs font-kanit text-white/30">
                  <span>{featured.role}</span>
                  <span>·</span>
                  <span>{featured.year}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
