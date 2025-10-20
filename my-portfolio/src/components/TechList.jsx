import React from 'react'
import { listTech } from '../data'

export default function TechList() {
  return (
    <section className="tech-section">
      <h3 className="tech-heading">Tech used to build this</h3>
      <div className="tech-grid">
        {listTech.map(t => (
          <a key={t.id} className="tech-card" href={t.website} target="_blank" rel="noopener noreferrer">
            <img src={t.logo} alt={`${t.name} logo`} className="tech-logo" />
            <div className="tech-meta">
              <div className="tech-name">{t.name}</div>
              {t.version ? <div className="tech-version">{t.version}</div> : null}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
