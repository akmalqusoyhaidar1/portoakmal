
import React from 'react'
import './App.css'

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
	return (
		<div className="app-root">
			<header className="site-header">
				<div className="container header-inner">
					<div className="brand">Akmaludin</div>
					<nav className="nav">
						<a href="#about">About</a>
						<a href="#projects">Projects</a>
						<a href="#skills">Skills</a>
						<a href="#contact" className="btn-outline">Contact</a>
					</nav>
				</div>
			</header>

			<main>
				<section className="hero section">
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
								<img src="/image.jpg" alt="Akmaludin" className="avatar-img" />
								<h3>Akmaludin</h3>
								<p className="muted">Frontend Engineer • Product Designer • Accessibility</p>
								<div className="contact-inline">
									<a href="akmale2076@gmail.com">Email</a>
									<a href="https://github.com/akmalqusoyhaidar1">GitHub</a>
									<a href="https://www.linkedin.com/in/akmal-udin-2b470532b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
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
					</div>
				</section>

				<section id="contact" className="section">
					<div className="container">
						<div className="card contact-grid">
							<div>
								<h2>Let’s work together</h2>
								<p className="muted">Interested in working together? Send an email or fill the form.</p>
								<p><strong>Email:</strong> <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a></p>
							</div>
							<form className="contact-form" onSubmit={(e)=>{e.preventDefault();alert('Thanks — form submission is a demo in this template')}}>
								<label>
									<span className="sr-only">Name</span>
									<input placeholder="Your name" required />
								</label>
								<label>
									<span className="sr-only">Email</span>
									<input type="email" placeholder="you@example.com" required />
								</label>
								<label>
									<span className="sr-only">Message</span>
									<textarea placeholder="Tell me about the project" rows={4} required />
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
