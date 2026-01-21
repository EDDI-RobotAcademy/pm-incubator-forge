import './App.css'

type Post = {
  id: number
  title: string
  author: string
  createdAt: string
  views: number
  comments: number
}

const mockPosts: Post[] = [
  {
    id: 120,
    title: '프론트엔드 프로젝트 구조 잡기',
    author: 'Jinyoung',
    createdAt: '2025-01-15',
    views: 452,
    comments: 18,
  },
  {
    id: 119,
    title: 'React Query 캐싱 전략 공유',
    author: 'Minji',
    createdAt: '2025-01-14',
    views: 388,
    comments: 12,
  },
  {
    id: 118,
    title: '모노레포에서 Vite 설정하기',
    author: 'Dohyun',
    createdAt: '2025-01-13',
    views: 271,
    comments: 5,
  },
  {
    id: 117,
    title: 'Form Validation 라이브러리 비교',
    author: 'Seoyeon',
    createdAt: '2025-01-12',
    views: 199,
    comments: 9,
  },
  {
    id: 116,
    title: '성능 프로파일링 체크리스트 공유',
    author: 'Hajin',
    createdAt: '2025-01-11',
    views: 321,
    comments: 7,
  },
]

function App() {
  return (
    <main className="page">
      <header className="page__header">
        <p className="page__eyebrow">Mock Data</p>
        <h1 className="page__title">게시판 리스트</h1>
        <p className="page__subtitle">
          서버 없이도 미리보기 할 수 있도록 가짜 데이터를 사용한 게시판 예시입니다.
        </p>
      </header>

      <section className="board">
        <div className="board__meta">
          <span>총 {mockPosts.length}개 글</span>
          <button
            className="board__button"
            type="button"
            onClick={() => alert('신규 글 작성은 아직 준비 중입니다!')}
          >
            글쓰기
          </button>
        </div>

        <div className="board__table">
          <div className="board__head">
            <div className="cell cell--id">번호</div>
            <div className="cell cell--title">제목</div>
            <div className="cell cell--author">작성자</div>
            <div className="cell cell--date">작성일</div>
            <div className="cell cell--views">조회</div>
            <div className="cell cell--comments">댓글</div>
          </div>

          <div className="board__body">
            {mockPosts.map((post) => (
              <div key={post.id} className="board__row">
                <div className="cell cell--id">{post.id}</div>
                <div className="cell cell--title">{post.title}</div>
                <div className="cell cell--author">{post.author}</div>
                <div className="cell cell--date">{post.createdAt}</div>
                <div className="cell cell--views">{post.views.toLocaleString()}</div>
                <div className="cell cell--comments">{post.comments}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
