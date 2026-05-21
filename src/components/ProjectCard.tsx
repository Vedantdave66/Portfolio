import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ borderColor: 'rgba(168,85,247,0.25)' }}
      className="group sticky rounded-2xl border border-white/[0.09] bg-white/[0.03] overflow-hidden transition-colors duration-300"
      style={{ top: `${96 + index * 16}px` }}
    >
      {/* Image / placeholder */}
      <div className="h-48 border-b border-white/[0.06] flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
        {/* Subtle glow inside the placeholder */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(168,85,247,0.10) 0%, transparent 70%)',
          }}
        />

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span
            className="relative font-kanit font-black text-white/[0.10] group-hover:text-white/[0.15] tracking-tight text-center px-6 transition-colors duration-300"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
          >
            {project.title}
          </span>
        )}

        <span className="absolute top-3 left-3 font-kanit text-xs font-medium text-white/30 bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* "In Development" badge — top-right, only when status === 'in-development' */}
        {project.status === 'in-development' && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 font-kanit text-[10px] font-semibold tracking-[0.12em] uppercase text-yellow-300/80 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/70 animate-pulse" />
            In Development
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-kanit font-bold text-xl text-white mb-1">{project.title}</h3>
        <p className="font-kanit text-sm gradient-accent-text mb-4">{project.subtitle}</p>
        <p className="font-kanit font-light text-sm text-white/55 leading-relaxed mb-5">
          {project.description}
        </p>

        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-kanit text-xs text-white/60 bg-purple-500/[0.07] border border-purple-500/[0.15] px-2.5 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="font-kanit text-xs text-white/30">{project.year}</span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-kanit text-xs font-medium text-white/55 hover:text-white transition-colors"
            >
              <ExternalLink size={12} />
              Live Project
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
