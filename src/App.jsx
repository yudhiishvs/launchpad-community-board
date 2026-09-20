import './App.css'

const resources = [
  { name: 'MDN Web Docs', category: 'Foundations', format: 'Learning path', mark: 'mdn', color: 'blue', description: 'Start with HTML, CSS, and JavaScript. Build a solid foundation one concept at a time.', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development', note: 'Your first stop' },
  { name: 'React Learn', category: 'Frontend', format: 'Interactive guide', mark: '⚛', color: 'mint', description: 'Turn ideas into interfaces with components, props, and state. Learn by editing real examples.', url: 'https://react.dev/learn', note: 'Build your first component' },
  { name: 'The Odin Project', category: 'Foundations', format: 'Curriculum', mark: 'O', color: 'sand', description: 'Follow a project-based path from your first webpage to a full-stack application.', url: 'https://www.theodinproject.com/paths', note: 'Learn by building' },
  { name: 'JavaScript.info', category: 'Foundations', format: 'Tutorial', mark: 'JS', color: 'yellow', description: 'Make sense of JavaScript, from variables and functions to promises and the browser.', url: 'https://javascript.info/', note: 'Understand the language' },
  { name: 'web.dev Learn', category: 'Frontend', format: 'Course collection', mark: '</>', color: 'lavender', description: 'Explore responsive design, performance, and the fundamentals of a better web experience.', url: 'https://web.dev/learn', note: 'Make the web work better' },
  { name: 'Flexbox Froggy', category: 'Practice', format: 'Coding game', mark: '↔', color: 'mint', description: 'Help the frogs reach their lily pads while practicing CSS alignment and layout.', url: 'https://flexboxfroggy.com/', note: 'A little practice goes far' },
  { name: 'Grid Garden', category: 'Practice', format: 'Coding game', mark: '▦', color: 'blue', description: 'Grow your CSS Grid skills by placing water and tending a garden with code.', url: 'https://cssgridgarden.com/', note: 'Get comfortable with grids' },
  { name: 'GitHub Skills', category: 'Tools', format: 'Hands-on lessons', mark: 'git', color: 'lavender', description: 'Practice repositories, pull requests, and collaboration inside a real GitHub project.', url: 'https://skills.github.com/', note: 'Work together, ship together' },
  { name: 'Vite Guide', category: 'Tools', format: 'Documentation', mark: 'ϟ', color: 'yellow', description: 'Set up a development server, build your app, and understand the tools behind your project.', url: 'https://vite.dev/guide/', note: 'From setup to build' },
  { name: 'Accessibility Tutorials', category: 'Frontend', format: 'Practical guides', mark: 'Aa', color: 'sand', description: 'Make images, forms, and navigation work for more people with guidance from W3C WAI.', url: 'https://www.w3.org/WAI/tutorials/', note: 'Build for everyone' },
  { name: 'Exercism JavaScript', category: 'Practice', format: 'Code exercises', mark: '{ }', color: 'lavender', description: 'Strengthen your problem-solving skills through focused JavaScript exercises.', url: 'https://exercism.org/tracks/javascript', note: 'Put your knowledge to work' },
  { name: 'Pro Git', category: 'Tools', format: 'Online book', mark: '↗', color: 'mint', description: 'Learn version control, branching, and the Git commands that keep your projects organized.', url: 'https://git-scm.com/book/en/v2', note: 'Keep track of your progress' },
]

function ResourceCard({ resource, number }) {
  return (
    <article className={`resource-card ${resource.color}`}>
      <div className="card-art" aria-hidden="true"><span className="art-grid" /><span className="resource-mark">{resource.mark}</span><span className="card-number">{String(number).padStart(2, '0')}</span><span className="art-caption">{resource.note}</span></div>
      <div className="card-body">
        <div className="card-meta"><span>{resource.category}</span><span>{resource.format}</span></div>
        <h3>{resource.name}</h3>
        <p>{resource.description}</p>
        <a className="resource-link" href={resource.url} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${resource.name} (opens in a new tab)`}>Explore resource <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#resources">Skip to resources</a>
      <header className="site-header"><a className="brand" href="#"><span className="brand-icon" aria-hidden="true">↗</span>launchpad<span className="brand-dot">.</span></a><span className="header-note">THE STUDENT DEVELOPER BOARD</span><a className="header-link" href="#resources">Find your next step <span aria-hidden="true">↘</span></a></header>
      <main>
        <section className="intro" aria-labelledby="page-title">
          <div className="intro-copy"><p className="eyebrow"><span /> FOR THE NEXT GENERATION OF BUILDERS</p><h1>A little direction.<br />A lot of <span>possibility.</span></h1><p className="intro-description">Your starting point for the web. A collection of resources to help student developers learn, practice, and build something of their own.</p><a className="browse-link" href="#resources">Explore the board <span aria-hidden="true">↓</span></a></div>
          <div className="intro-art" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><span className="star star-one">✳</span><span className="star star-two">+</span><div className="code-note"><div className="note-dots"><i/><i/><i/></div><span className="code-comment">// every developer starts somewhere</span><p><span>const</span> nextStep = &#123;<br />&nbsp; curiosity: <em>true</em>,<br />&nbsp; keepBuilding: <em>true</em><br />&#125;</p><div className="note-bottom">YOU'VE GOT THIS. <span>↗</span></div></div><div className="little-tag">LESS SCROLLING. MORE BUILDING.</div></div>
        </section>
        <section id="resources" className="board" aria-labelledby="board-title"><div className="board-heading"><div><p className="eyebrow">THE RESOURCE COLLECTION</p><h2 id="board-title">Good places to start<span>.</span></h2></div><p className="resource-count"><strong>12</strong> resources · One next step</p></div><div className="resource-grid">{resources.map((resource, index) => <ResourceCard key={resource.url} resource={resource} number={index + 1} />)}</div></section>
      </main>
      <footer><a className="brand" href="#">launchpad<span className="brand-dot">.</span></a><p>Keep learning. Keep making things.</p><span>Built by Yudhiishbala V Senthilkumar</span></footer>
    </>
  )
}
