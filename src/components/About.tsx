import { profile, timeline } from '../data/content.ts';

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="section-head">
          <p className="section-index">03 — Biography</p>
          <h2 className="section-title" id="about-title">
            A counter, a circuit, and a season.
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I build software against a business that already has customers, stock, and a monsoon.
            </p>
            <p>
              I studied electrical and electronic engineering at Sonargaon University. That training
              is the base layer: systems, and the habit of tracing a failure back to a cause. The
              work now sits further up the stack — TypeScript interfaces, offline data, and language
              models used on documents a counter already produces.
            </p>
            <p>
              {profile.dealership} was established in 1995. I operate it today in Gobindopur Bazar,
              Bhuapur, Tangail, as a BCIC and BADC fertilizer and pesticide dealership. Since 2023 I
              have been recording land profiles, crop yields, and credit-failure patterns across the
              Jamuna floodplain. Those notes are why SmartChar exists as a pre-launch framework.
            </p>
            <p>
              I would rather a system print a cash memo when the connection drops than a diagram
              that only works in a pitch. {profile.studio} is the studio name for that practice.
              MIRA and GIII are the next systems I intend to build. KrishiPOS is the one I can show.
            </p>
          </div>
          <div>
            <figure className="field-photo">
              <img
                src={`${import.meta.env.BASE_URL}portrait-field.jpg`}
                width="1024"
                height="1024"
                alt="Md. Mobaeid Mollah Abir standing outdoors in a grey check suit, one hand resting on his head."
                loading="lazy"
              />
              <figcaption>Between the desk and the field.</figcaption>
            </figure>
            <ol className="timeline">
              {timeline.map((item) => (
                <li key={item.when}>
                  <span className="when">{item.when}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
