import './App.css'

type Card = {
  id: string
  title: string
  owner: string
  tag: string
  due: string
  description: string
}

type Column = {
  id: string
  title: string
  accent: string
  cards: Card[]
}

const mockBoard: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    accent: '#cbd5e1',
    cards: [
      {
        id: 'todo-1',
        title: 'Design landing hero',
        owner: 'Alex Kim',
        tag: 'Design',
        due: 'Jan 25',
        description: 'Refine hero layout and add primary CTA options.',
      },
      {
        id: 'todo-2',
        title: 'Set up analytics events',
        owner: 'Jordan Lee',
        tag: 'Tracking',
        due: 'Jan 27',
        description: 'Define page view + CTA click events in GA4.',
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    accent: '#bfdbfe',
    cards: [
      {
        id: 'inprogress-1',
        title: 'Auth API integration',
        owner: 'Priya Singh',
        tag: 'Backend',
        due: 'Jan 24',
        description: 'Hook login/signup to staging API with error states.',
      },
      {
        id: 'inprogress-2',
        title: 'Profile settings UI',
        owner: 'Sam Park',
        tag: 'UI',
        due: 'Jan 26',
        description: 'Add avatar upload and notification preferences.',
      },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    accent: '#fde68a',
    cards: [
      {
        id: 'review-1',
        title: 'Docs: onboarding guide',
        owner: 'Morgan Lee',
        tag: 'Docs',
        due: 'Jan 23',
        description: 'First draft ready; needs accuracy check.',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    accent: '#bbf7d0',
    cards: [
      {
        id: 'done-1',
        title: 'Dark mode palette',
        owner: 'Taylor Fox',
        tag: 'Design',
        due: 'Jan 20',
        description: 'Final color tokens approved and documented.',
      },
    ],
  },
]

function App() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Project Board</p>
          <h1>Team Snapshot</h1>
          <p className="lede">
            A simple cards view backed by mock data. Use this as a starting
            point for real data or interactions.
          </p>
        </div>
        <div className="meta">
          <span className="pill neutral">Sprint 12</span>
          <span className="pill success">On Track</span>
        </div>
      </header>

      <section className="board">
        {mockBoard.map((column) => (
          <div key={column.id} className="column">
            <div className="column-header">
              <span
                className="accent"
                style={{ backgroundColor: column.accent }}
                aria-hidden
              />
              <div>
                <h2>{column.title}</h2>
                <p className="count">{column.cards.length} cards</p>
              </div>
            </div>
            <div className="cards">
              {column.cards.map((card) => (
                <article key={card.id} className="card">
                  <div className="card-top">
                    <span className="pill muted">{card.tag}</span>
                    <span className="pill due">Due {card.due}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p className="card-desc">{card.description}</p>
                  <div className="card-footer">
                    <div className="avatar" aria-hidden>
                      {card.owner
                        .split(' ')
                        .map((part) => part[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="owner">{card.owner}</p>
                      <p className="subtle">Owner</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App
