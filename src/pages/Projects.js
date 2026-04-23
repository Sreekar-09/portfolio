import React from 'react';
import './Projects.css';

/* ──────────────────────────────────────────
   ADD / EDIT YOUR PROJECTS BELOW
   Minimum 2 projects required by assignment
────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: 'Recession Probability Forecasting ',
    description:
      ' Implementing Wassestein gradient flows to take missing imputation in a matrix correlation of the U.S govt treasury bonds .',
    tech: ['Python', 'Machine Learning'],
    live: '',           // add live URL if deployed, else leave empty
    featured: true,
  },
  {
    id: 2,
    title: 'Anomaly Packet Detection',
    description:
      'Using isolation forest Model in machine learning to detect anomaly in a specific Network using wireshark ',
    tech: ['Python', 'Machine Learning', 'Wireshark'],
    live: '',
    featured: true,
  },
  {
    id: 3,
    title: 'Image Caption Detection',
    description:
      'Trained the model on a dataset of [8,000+] images (e.g., Flickr8k), achieving a BLEU score of [0.65] (or relevant metric), validating high linguistic accuracy. ',
    tech: ['Python', 'Machine Learning', 'NLP'],
    featured: true,
  },
];
/* ────────────────────────────────────────── */

const ICONS = {
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4 11.5 11.5 0 0 1 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  external: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
};

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="container">

        <div className="page-header">
          <p className="page-label">my work</p>
          <h1 className="page-title">Projects</h1>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((proj, i) => (
            <ProjectCard key={proj.id} project={proj} index={i} />
          ))}
        </div>

      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      className={`proj-card ${project.featured ? 'featured' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {project.featured && <span className="featured-badge">Featured</span>}

      <div className="proj-top">
        <div className="proj-folder">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <div className="proj-links">
          <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="View on GitHub">
            {ICONS.github}
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo" title="Live demo">
              {ICONS.external}
            </a>
          )}
        </div>
      </div>

      <h3 className="proj-title">
        <a href={project.github} target="_blank" rel="noreferrer">
          {project.title}
        </a>
      </h3>
      <p className="proj-desc">{project.description}</p>

      <div className="proj-tech">
        {project.tech.map(t => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}
