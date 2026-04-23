import React, { useEffect, useRef } from 'react';
import './Home.css';

/* ──────────────────────────────────────────
   EDIT YOUR DETAILS BELOW
────────────────────────────────────────── */
const PROFILE = {
  name: 'Arumalla Sreekar Reddy',
  tagline: 'Full Stack Developer & Problem Solver',
  phone: '+91 12345 67890',
  personalEmail: 'sreekarreddy@gmail.com',
  collegeEmail: 'se23umcs005@mahindrauniversity.edu.in',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',

  about: `Hi! I'm a passionate computer science student with a deep curiosity for
          building scalable web applications and exploring emerging technologies.
          I thrive on turning complex problems into elegant, user-friendly solutions.`,

  researchInterests: [
    'Artificial Intelligence & Machine Learning',
    'Private Equity',
    'Cloud Computing & Distributed Systems',
    'Quantum Finance',
  ],

  skills: [
    { label: 'JavaScript', level: 90 },
    { label: 'Python', level: 80 },
    { label: 'HTML & CSS', level: 92 },
    { label: 'SQL', level: 72 },
    { label: 'Java', level: 70 },
  ],
};
/* ────────────────────────────────────────── */

function SkillBar({ label, level, delay }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          setTimeout(() => {
            barRef.current.style.width = `${level}%`;
          }, delay);
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current.parentElement);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-label">{label}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" ref={barRef} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-glow" />
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">{PROFILE.name}</h1>
            <p className="hero-tagline">{PROFILE.tagline}</p>
            <div className="hero-cta">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn btn-primary">
                GitHub Profile
              </a>
              <a href={`mailto:${PROFILE.personalEmail}`} className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-avatar-wrap">
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">
                  {PROFILE.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
                <p className="avatar-hint">Replace with your photo</p>
              </div>
            </div>
            <div className="avatar-ring" />
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── ABOUT ME ── */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title"><span className="accent-num">01.</span> About Me</h2>
          <div className="about-grid">
            <p className="about-text">{PROFILE.about}</p>
            <div className="personal-card">
              <h3 className="card-label">Personal Details</h3>
              <ul className="details-list">
                <li>
                  <span className="detail-key">Name</span>
                  <span className="detail-val">{PROFILE.name}</span>
                </li>
                <li>
                  <span className="detail-key">Phone</span>
                  <span className="detail-val">{PROFILE.phone}</span>
                </li>
                <li>
                  <span className="detail-key">Personal Email</span>
                  <span className="detail-val">{PROFILE.personalEmail}</span>
                </li>
                <li>
                  <span className="detail-key">College Email</span>
                  <span className="detail-val">{PROFILE.collegeEmail}</span>
                </li>
                <li>
                  <span className="detail-key">GitHub</span>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer" className="detail-link">
                    {PROFILE.github.replace('https://', '')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH INTERESTS ── */}
      <section className="section section-alt" id="research">
        <div className="container">
          <h2 className="section-title"><span className="accent-num">02.</span> Research Interests</h2>
          <div className="interests-grid">
            {PROFILE.researchInterests.map((interest, i) => (
              <div className="interest-card" key={i}>
                <span className="interest-num">0{i + 1}</span>
                <p>{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section" id="skills">
        <div className="container">
          <h2 className="section-title"><span className="accent-num">03.</span> Skills</h2>
          <div className="skills-grid">
            {PROFILE.skills.map((s, i) => (
              <SkillBar key={s.label} label={s.label} level={s.level} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
