import { skillGroups } from '../data/content.ts';

export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <div className="section-head">
          <p className="section-index">04 — Capability</p>
          <h2 className="section-title" id="skills-title">
            Tools in the work, without a score.
          </h2>
          <p className="section-intro">
            These are the technologies in the projects above. The project shows the level. A
            percentage would pretend a measurement I have not made.
          </p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <header>
                <h3>{group.title}</h3>
                <span>{group.index}</span>
              </header>
              <p>{group.text}</p>
              <ul className="badges" aria-label={`${group.title} tools`}>
                {group.tools.map((tool) => (
                  <li className="badge" key={tool}>
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
