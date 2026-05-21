import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const { projects } = usePortfolio();

  // Exclude highlight:true — those already have a dedicated Featured Project section above.
  const sorted = projects.filter((p) => !p.highlight);

  return (
    <section id="projects" className="py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 font-kanit text-xs font-medium tracking-[0.2em] text-white/30 uppercase mb-4"
        >
          <span className="w-6 h-px bg-white/20" />
          Projects
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-kanit font-bold text-4xl md:text-5xl text-white/90 mb-14 leading-tight"
        >
          Things I've shipped.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
