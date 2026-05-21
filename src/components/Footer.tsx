import { useState } from 'react';
import { Copy, Check, Linkedin } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

const NAV_LINKS = [
  { label: 'Home',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Footer() {
  const { profile } = usePortfolio();
  const [copied, setCopied] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyEmail = async () => {
    if (!profile.social.email || profile.social.email.startsWith('[')) return;
    await navigator.clipboard.writeText(profile.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="border-t border-white/[0.06] bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
          {/* Col 1: identity */}
          <div>
            <h3
              className="hero-heading font-kanit font-black leading-none mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              {profile.shortName}
            </h3>
            <p className="font-kanit text-sm text-white/40 mb-1">{profile.role}</p>
            <p className="font-kanit text-xs text-white/25">{profile.location}</p>
          </div>

          {/* Col 2: nav */}
          <div>
            <p className="font-kanit text-xs tracking-[0.18em] text-white/25 uppercase mb-5">Navigate</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => scrollTo(e, href)}
                    className="font-kanit text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: contact */}
          <div>
            <p className="font-kanit text-xs tracking-[0.18em] text-white/25 uppercase mb-5">Get in touch</p>

            {profile.social.email && !profile.social.email.startsWith('[') && (
              <div className="flex items-center gap-2 mb-4">
                <span className="font-kanit text-sm text-white/55">{profile.social.email}</span>
                <button
                  onClick={copyEmail}
                  className="text-white/30 hover:text-white transition-colors p-1 rounded"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
                </button>
              </div>
            )}

            {profile.social.linkedin && !profile.social.linkedin.startsWith('[') && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-kanit text-sm text-white/45 hover:text-white transition-colors"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-kanit text-xs text-white/20">
            © {new Date().getFullYear()} {profile.shortName}. All rights reserved.
          </p>
          <p className="font-kanit text-xs text-white/20">
            Built with React &amp; FastAPI
          </p>
        </div>
      </div>
    </footer>
  );
}
