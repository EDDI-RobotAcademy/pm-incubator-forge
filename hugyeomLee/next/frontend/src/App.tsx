import './App.css'

type Post = {
  id: number
  title: string
  author: string
  date: string
  views: number
  pinned?: boolean
}

const mockPosts: Post[] = [
  {
    id: 132,
    title: 'Next.js 15 릴리즈 핵심 정리',
    author: '김개발',
    date: '2026-01-18',
    views: 352,
    pinned: true,
  },
  {
    id: 131,
    title: 'React 19 업그레이드 시 주의할 점',
    author: '이프론트',
    date: '2026-01-16',
    views: 298,
    pinned: true,
  },
  {
    id: 130,
    title: '팀 개발을 위한 깃 브랜치 전략 정리',
    author: '박리드',
    date: '2026-01-15',
    views: 187,
  },
  {
    id: 129,
    title: 'TanStack Query 캐싱 패턴 모음',
    author: '전상욱',
    date: '2026-01-14',
    views: 164,
  },
  {
    id: 128,
    title: 'TypeScript에서 발생하는 any 남용 줄이기',
    author: '안타입',
    date: '2026-01-13',
    views: 201,
  },
  {
    id: 127,
    title: '데이터 시각화를 위한 Recharts 예제',
    author: '신데이터',
    date: '2026-01-12',
    views: 143,
  },
  {
    id: 126,
    title: 'ESLint + Prettier 설정 모음 (2026 버전)',
    author: '정린터',
    date: '2026-01-11',
    views: 176,
  },
  {
    id: 125,
    title: '프로덕션에서 쓰는 form 상태 관리 팁',
    author: '홍UX',
    date: '2026-01-10',
    views: 132,
  },
]

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero__text">
          <p className="eyebrow">Mock Data</p>
          <h1>커뮤니티 게시판</h1>
          <p className="subtitle">
            백엔드 없이 목업 데이터로 게시글 목록을 렌더링합니다.
          </p>
        </div>
        <button className="primary-btn" type="button">
          새 글 작성
        </button>
      </header>

      <section className="board">
        <div className="board__header">
          <span className="pill">전체 {mockPosts.length}건</span>
          <div className="legend">
            <span className="legend__item">
              <span className="dot dot--pinned" />
              공지
            </span>
            <span className="legend__item">
              <span className="dot dot--default" />
              일반
            </span>
          </div>
        </div>

        <div className="table" role="table" aria-label="게시글 목록">
          <div className="table__head" role="rowgroup">
            <div className="table__row table__row--head" role="row">
              <span className="cell cell--id" role="columnheader">
                번호
              </span>
              <span className="cell cell--title" role="columnheader">
                제목
              </span>
              <span className="cell cell--author" role="columnheader">
                작성자
              </span>
              <span className="cell cell--date" role="columnheader">
                작성일
              </span>
              <span className="cell cell--views" role="columnheader">
                조회
              </span>
            </div>
          </div>

          <div className="table__body" role="rowgroup">
            {mockPosts.map((post) => (
              <div
                key={post.id}
                className={`table__row ${post.pinned ? 'table__row--pinned' : ''}`}
                role="row"
              >
                <span className="cell cell--id" role="cell">
                  {post.pinned ? '공지' : post.id}
                </span>
                <span className="cell cell--title" role="cell">
                  {post.title}
                </span>
                <span className="cell cell--author" role="cell">
                  {post.author}
                </span>
                <span className="cell cell--date" role="cell">
                  {post.date}
                </span>
                <span className="cell cell--views" role="cell">
                  {post.views.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
