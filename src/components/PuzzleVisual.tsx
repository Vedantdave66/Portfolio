import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Code2, CreditCard, Building2, Zap } from 'lucide-react';

/**
 * Four tiles fly in from their respective corners, driven by scroll position.
 * Each piece has a slight rotation that unwinds as it locks into place.
 * The 2-px gap between tiles + overflow:hidden on the wrapper gives the
 * "puzzle pieces snapping together" illusion.
 */

const TILES = [
  {
    Icon: Code2,
    stat: '50+',
    sub: 'REST Endpoints',
    accent: '#c084fc',
    bg: 'rgba(139,92,246,0.18)',
    border: 'rgba(168,85,247,0.32)',
    fromX: -90,
    fromY: -90,
    rotDir: 1,
  },
  {
    Icon: CreditCard,
    stat: 'Stripe',
    sub: 'Connect',
    accent: '#f472b6',
    bg: 'rgba(219,39,119,0.16)',
    border: 'rgba(236,72,153,0.32)',
    fromX: 90,
    fromY: -90,
    rotDir: -1,
  },
  {
    Icon: Building2,
    stat: 'Plaid',
    sub: 'OAuth',
    accent: '#fb923c',
    bg: 'rgba(234,88,12,0.16)',
    border: 'rgba(249,115,22,0.32)',
    fromX: -90,
    fromY: 90,
    rotDir: -1,
  },
  {
    Icon: Zap,
    stat: '2026',
    sub: 'Solo Build',
    accent: '#facc15',
    bg: 'rgba(202,138,4,0.18)',
    border: 'rgba(234,179,8,0.38)',
    fromX: 90,
    fromY: 90,
    rotDir: 1,
  },
] as const;

export default function PuzzleVisual() {
  const ref = useRef<HTMLDivElement>(null);

  /* ── Scroll progress: starts when the top of the card hits 90% of viewport,
         ends when the center hits 55% — a comfortable reading range ── */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'center 0.55'],
  });

  /* Spring smoothing gives a satisfying elastic snap at the end */
  const s = useSpring(scrollYProgress, { stiffness: 60, damping: 14, restDelta: 0.001 });

  /* ── All hooks at top level (Rules of Hooks) ── */
  const x0 = useTransform(s, [0, 1], [TILES[0].fromX, 0]);
  const y0 = useTransform(s, [0, 1], [TILES[0].fromY, 0]);
  const x1 = useTransform(s, [0, 1], [TILES[1].fromX, 0]);
  const y1 = useTransform(s, [0, 1], [TILES[1].fromY, 0]);
  const x2 = useTransform(s, [0, 1], [TILES[2].fromX, 0]);
  const y2 = useTransform(s, [0, 1], [TILES[2].fromY, 0]);
  const x3 = useTransform(s, [0, 1], [TILES[3].fromX, 0]);
  const y3 = useTransform(s, [0, 1], [TILES[3].fromY, 0]);

  /* CW tiles overshoot slightly before settling — feels like a physical snap */
  const rotCW  = useTransform(s, [0, 0.78, 1], [ 11, -2.5, 0]);
  const rotCCW = useTransform(s, [0, 0.78, 1], [-11,  2.5, 0]);

  /* Fade in early so tiles are visible when they start moving */
  const fade = useTransform(s, [0, 0.2], [0, 1]);

  const motions = [
    { x: x0, y: y0, rotate: rotCW  },
    { x: x1, y: y1, rotate: rotCCW },
    { x: x2, y: y2, rotate: rotCCW },
    { x: x3, y: y3, rotate: rotCW  },
  ];

  return (
    <div
      ref={ref}
      className="w-full rounded-2xl overflow-hidden"
      style={{ aspectRatio: '4 / 3' }}
    >
      {/* The 2px gap + black bg between tiles = the seam line */}
      <div
        className="grid grid-cols-2 h-full"
        style={{ gap: '2px', background: '#000' }}
      >
        {TILES.map((tile, i) => {
          const { Icon } = tile;
          const mp = motions[i];
          return (
            <motion.div
              key={tile.stat}
              style={{
                x: mp.x,
                y: mp.y,
                rotate: mp.rotate,
                opacity: fade,
                background: tile.bg,
                border: `1px solid ${tile.border}`,
              }}
              className="flex flex-col items-center justify-center gap-2 p-5 cursor-default"
            >
              {/* Accent icon */}
              <Icon size={22} style={{ color: tile.accent }} strokeWidth={1.75} />

              {/* Big stat */}
              <span
                className="font-kanit font-black leading-none text-white"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
              >
                {tile.stat}
              </span>

              {/* Sub-label */}
              <span className="font-kanit text-[10px] tracking-[0.18em] text-white/45 uppercase">
                {tile.sub}
              </span>

              {/* Tiny accent dot */}
              <span
                className="mt-1 w-1 h-1 rounded-full"
                style={{ background: tile.accent, opacity: 0.6 }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
