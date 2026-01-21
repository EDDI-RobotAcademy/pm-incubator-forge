import './App.css'

type Post = {
  id: number
  title: string
  author: string
  date: string
  views: number
  tag?: string
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: '첫 방문자분들을 위한 커뮤니티 이용 가이드',
    author: '관리자',
    date: '2024-12-15',
    views: 1240,
    tag: '공지',
  },
  {
    id: 2,
    title: 'Next.js로 사이드 프로젝트 시작해보신 분 계신가요?',
    author: 'Jamie',
    date: '2024-12-10',
    views: 326,
  },
  {
    id: 3,
    title: 'Vite + React 조합으로 마이그레이션 해본 후기 공유',
    author: 'Alex',
    date: '2024-12-09',
    views: 281,
  },
  {
    id: 4,
    title: '데이터 패칭 시에 SWR vs React Query 어떤 걸 선호하세요?',
    author: 'Dana',
    date: '2024-12-08',
    views: 198,
  },
  {
    id: 5,
    title: 'Mock 데이터로 UI 먼저 만드는 방법 정리했습니다',
    author: 'Chris',
    date: '2024-12-06',
    views: 412,
    tag: 'Tip',
  },
]

function App() {
  return (
    <div className="app">
      <header className="board-header">
        <p className="eyebrow">Mock Data</p>
        <h1>커뮤니티 게시판</h1>
        <p className="subtitle">샘플 데이터로 게시글 리스트를 그려봅니다.</p>
      </header>

      <section className="board-card">
        <div className="board-toolbar">
          <div className="summary">
            <span className="dot" aria-hidden />
            총 {mockPosts.length}건의 게시글을 불러왔어요.
          </div>
          <button className="primary-btn" type="button">
            글쓰기
          </button>
        </div>

        <div className="table">
          <div className="table-head">
            <span>번호</span>
            <span>제목</span>
            <span>작성자</span>
            <span>작성일</span>
            <span>조회수</span>
          </div>
          <div className="table-body">
            {mockPosts.map((post) => (
              <div className="table-row" key={post.id}>
                <span className="cell id">#{post.id}</span>
                <div className="cell title">
                  {post.tag && <span className="chip">{post.tag}</span>}
                  <span className="title-text">{post.title}</span>
                </div>
                <span className="cell author">{post.author}</span>
                <span className="cell date">{post.date}</span>
                <span className="cell views">{post.views.toLocaleString()}회</span>
              </div>
            ))}
          </div>
        </div>

        <p className="helper-text">
          현재는 Mock 데이터만 사용 중이며, 추후 API 연동 예정입니다.
        </p>
      </section>
    </div>
  )
}

export default App
