import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { profile } from '../data/content.ts';

export function Footer() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <p className="footer-brand">
              Md. Mobaeid
              <br />
              <em>Mollah Abir</em>
            </p>
          </div>
          <div>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${profile.email}`}>Email</a>
              </li>
              {profile.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="legal">
              <p>© {year} {profile.name}.</p>
              <p>{profile.studio} · {profile.location}</p>
            </div>
          </div>
        </div>
      </footer>
      <button
        className="to-top"
        type="button"
        data-show={showTop ? 'true' : 'false'}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={18} aria-hidden="true" />
      </button>
    </>
  );
}
