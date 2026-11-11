import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { filters, projects, statusLegend, type Filter, type Project } from '../data/content.ts';
import { ProjectVisual } from './ProjectVisual.tsx';

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  );

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="section-head">
          <p className="section-index">02 — Selected work</p>
          <h2 className="section-title" id="projects-title">
            Projects, with their status attached.
          </h2>
          <p className="section-intro">
            Five pieces of work. The labels say which ones you can open in a repository, and which
            ones are still a direction.
          </p>
        </div>
        <ul className="legend">
          {statusLegend.map((item) => (
            <li key={item.status}>
              <strong>{item.status}</strong>
              {item.text}
            </li>
          ))}
        </ul>
        <div className="chips" role="toolbar" aria-label="Filter projects by category">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className="chip"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="result-count" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          {filter === 'All' ? '.' : ` in ${filter}.`}
        </p>
        {visible.length === 0 ? (
          <p className="empty-state">No projects in this category.</p>
        ) : (
          <div className={`project-grid${filter === 'All' ? '' : ' is-filtered'}`}>
            {visible.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const [open, setOpen] = useState(false);
  const statusClass = project.status.toLowerCase().replace(' ', '-');

  return (
    <article
      className={`project-card ${project.layout}`}
      style={{ animationDelay: `${delay * 60}ms` }}
    >
      <div className={`project-media${open ? ' is-open' : ''}`}>
        <ProjectVisual id={project.visual} title={project.title} />
        <button
          type="button"
          className="details-btn"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Hide note' : 'Read note'}
        </button>
        <div className="project-overlay">
          <p>{project.summary}</p>
        </div>
      </div>
      <div className="project-meta">
        <p className="project-kicker">
          <span>{project.index}</span>
          <span>{project.categories.join(' · ')}</span>
        </p>
        <h3>{project.title}</h3>
        <p className={`status ${statusClass}`}>
          <i aria-hidden="true" />
          {project.status}
        </p>
        <ul className="stack" aria-label="Technology stack">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {project.href && (
          <a className="text-link" href={project.href.url} target="_blank" rel="noreferrer">
            {project.href.label}
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}
