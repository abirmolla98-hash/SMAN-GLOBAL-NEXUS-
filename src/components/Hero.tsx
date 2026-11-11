import { profile } from '../data/content.ts';

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <p className="kicker">Bangladesh · {profile.studio}</p>
          <h1 className="display" id="hero-title">
            Md. Mobaeid
            <em>Mollah Abir</em>
          </h1>
          <p className="headline">
            Engineering AI and automation from a working agricultural business.
          </p>
          <p className="lede">
            I design full-stack tools for a fertilizer counter in Bhuapur, Tangail, and I keep
            agentic ideas in their place: named clearly, and shipped when they can be tested.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">
              Explore My Work
            </a>
            <a className="btn btn-ghost" href="#contact">
              Let&apos;s Collaborate
            </a>
          </div>
          <ul className="fact-row">
            <li>
              <span>Base</span>
              Bhuapur, Tangail
            </li>
            <li>
              <span>Practice</span>
              Full-stack and applied AI
            </li>
            <li>
              <span>Studio</span>
              {profile.studio}
            </li>
          </ul>
        </div>
        <figure className="portrait">
          <span className="portrait-mark tl" aria-hidden="true" />
          <span className="portrait-mark tr" aria-hidden="true" />
          <span className="portrait-mark bl" aria-hidden="true" />
          <span className="portrait-mark br" aria-hidden="true" />
          <img
            src="/portrait-studio.jpg"
            width="682"
            height="1024"
            alt="Studio portrait of Md. Mobaeid Mollah Abir in a navy suit and white shirt."
            fetchPriority="high"
          />
          <figcaption>
            <span>Portrait</span>
            <span>Bangladesh</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
