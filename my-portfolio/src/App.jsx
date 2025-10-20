
import React from 'react'
import './App.css'
import TechList from './components/TechList'

const projects = [
	{
		id: 1,
		title: 'Design System for E‑Commerce',
		desc: 'A component library and design system built with accessibility and performance in mind.',
		tags: ['React', 'TypeScript', 'Figma'],
		link: '#'
	},
	{
		id: 2,
		title: 'Real-time Dashboard',
		desc: 'Live metrics dashboard with charts, push updates and role-based views.',
		tags: ['Node.js', 'Socket.IO', 'D3'],
		link: '#'
	},
	{
		id: 3,
		title: 'Mobile Banking App',
		desc: 'End-to-end mobile app with secure auth and payments (UX case study).',
		tags: ['React Native', 'Auth0'],
		link: '#'
	}
]

export default function App(){
	const [open, setOpen] = React.useState(false)
	return (
		<div className="app-root">
			<header className="site-header">
				<div className="container header-inner">
					<div className="brand">
						<img src="/vite.svg" alt="Site logo" className="brand-logo" />
					</div>
					<button
						aria-label={open ? 'Close menu' : 'Open menu'}
						className={`nav-toggle ${open ? 'open' : ''}`}
						onClick={() => setOpen(v => !v)}
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
						</svg>
					</button>
					<nav className={`nav ${open ? 'open' : ''}`}>
						<a href="#about" onClick={() => setOpen(false)}>About</a>
						<a href="#projects" onClick={() => setOpen(false)}>Projects</a>
						<a href="#skills" onClick={() => setOpen(false)}>Skills</a>
						<a href="#contact" className="btn-outline" onClick={() => setOpen(false)}>Contact</a>
					</nav>
				</div>
			</header>

			<main>
				<section id="main" className="hero section">
					<div className="container hero-grid">
						<div className="hero-copy">
							<h1>Hi, I’m Akmaludin — Product-focused Developer</h1>
							<p className="lead">I build delightful, high-performance web and mobile experiences. Currently open for collaboration and freelance projects.</p>
							<div className="hero-cta">
								<a className="btn-primary" href="#contact">Hire me</a>
								<a className="btn-ghost" href="#projects">View projects</a>
							</div>
						</div>
						<div className="hero-card">
							<div className="profile">
								<img src="/image.jpg" alt="Akmaludin" className="avatar-img avatar" />
								<h3>Akmaludin</h3>
								<p className="muted">Frontend Engineer • Product Designer • Accessibility</p>
								<div className="contact-inline">
									<a href="mailto:akmale2076@gmail.com" aria-label="Email" className="social-link">
										<svg className="social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M3 6l8.5 6L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
										<span className="social-text">Email</span>
									</a>
									<a href="https://github.com/akmalqusoyhaidar1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
										<svg className="social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.93 3.19 9.11 7.62 10.59.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.1.67-3.76-1.5-3.76-1.5-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.07-.67.07-.67 1.1.08 1.68 1.12 1.68 1.12.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.12 1.15a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.45 3.12-1.15 3.12-1.15.61 1.52.23 2.64.11 2.92.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.25-5.11 5.53.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.93 0 .3.21.65.78.54C19.06 20.86 22.25 16.68 22.25 11.75 22.25 5.48 17.27.5 12 .5z" fill="currentColor"/>
										</svg>
										<span className="social-text">GitHub</span>
									</a>
									<a href="https://www.linkedin.com/in/akmal-udin-2b470532b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
										<svg className="social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.5H4.76V24H.24zM8.5 8.5h4.3v2.1h.06c.6-1.1 2.06-2.28 4.24-2.28C22.82 8.32 24 11.02 24 15.14V24h-4.52v-7.56c0-1.8-.04-4.12-2.52-4.12-2.52 0-2.9 1.96-2.9 3.98V24H8.5V8.5z" fill="currentColor"/>
										</svg>
										<span className="social-text">LinkedIn</span>
									</a>
									<a href="https://www.instagram.com/akmallzh?igsh=bHhhdjJla3R1emVn" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
										<svg className="social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zm5.5-3a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" fill="currentColor"/>
										</svg>
										<span className="social-text">Instagram</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="about" className="section about">
					<div className="container">
						<div className="card about-grid">
							<div>
								<h2>About me</h2>
								<p>I’m a product-focused engineer who cares deeply about performance, accessibility and shipping delightful experiences. I have worked with startups and established teams to deliver impactful projects.</p>
								<p className="muted">Details: remote-friendly, available for contract, based in your city.</p>
							</div>
							<div>
								<h3>Selected achievements</h3>
								<ul className="achievements">
									<li>Reduced bundle size by 40% for a major product</li>
									<li>Built a design system adopted by multiple teams</li>
									<li>Delivered high-traffic dashboard with 99.9% uptime</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section id="projects" className="section">
					<div className="container">
						<h2>Projects</h2>
						<div className="projects-grid">
							{projects.map(p => (
								<article key={p.id} className="project card">
									<div className="project-body">
										<h3>{p.title}</h3>
										<p className="muted">{p.desc}</p>
										<div className="tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
									</div>
									<div className="project-actions">
										<a className="btn-link" href={p.link}>Case study</a>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				<section id="skills" className="section">
					<div className="container">
						<h2>Skills</h2>
						<div className="skills-list card">
							<div className="skill-col">
								<h4>Frontend</h4>
								<p className="muted">React, Next.js, TypeScript, CSS-in-JS, Performance</p>
							</div>
							<div className="skill-col">
								<h4>Design & UX</h4>
								<p className="muted">Figma, Accessibility, Design systems</p>
							</div>
							<div className="skill-col">
								<h4>Backend</h4>
								<p className="muted">Node.js, Express, Postgres, Serverless</p>
							</div>
						</div>
						{/* TechList shows technologies used (logos + versions) */}
						<TechList />
					</div>
				</section>

				<section id="contact" className="section">
					<div className="container">
						<div className="card contact-grid">
							<div>
								<h2>Let’s work together</h2>
								<p className="muted">Interested in working together? Send an email or fill the form.</p>
								<p><strong>Email:</strong> <a href="mailto:akmale2076@gmail.com">akmale2076@gmail.com</a></p>
							</div>
							<form className="contact-form" onSubmit={(e)=>{e.preventDefault();alert('Thanks — form submission is a demo in this template')}}>
								<label>
									<span className="sr-only">Name</span>
									<input name="name" type="text" placeholder="Akmaludin" required />
								</label>
								<label>
									<span className="sr-only">Email</span>
									<input name="email" type="email" placeholder="you@example.com" required />
								</label>
								<label>
									<span className="sr-only">Message</span>
									<textarea name="message" placeholder="Tell me about the project" rows={4} required />
								</label>
								<div className="form-actions">
									<button className="btn-primary" type="submit">Send message</button>
								</div>
							</form>
						</div>
					</div>
				</section>
			</main>

			<footer className="site-footer">
				<div className="container footer-inner">
					<div>© {new Date().getFullYear()} Akmaludin. Built with care.</div>
					<div className="muted">Designed for clarity — available for hire.</div>
				</div>
			</footer>
		</div>
	)
}
