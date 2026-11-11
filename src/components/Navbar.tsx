import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile, sections } from '../data/content.ts';
import { useActiveSection } from '../hooks/useActiveSection.ts';
import { sectionIds } from '../data/content.ts';

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-nav${solid || open ? ' is-solid' : ''}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <strong>{profile.shortName}</strong>
          <span>{profile.studio}</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={active === section.id ? 'true' : undefined}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>
      <nav id="mobile-nav" className="nav-panel" hidden={!open} aria-label="Mobile">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={active === section.id ? 'true' : undefined}
            onClick={() => setOpen(false)}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
