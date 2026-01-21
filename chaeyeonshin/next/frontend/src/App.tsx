import './App.css'

type Post = {
  id: number
  title: string
  author: string
  date: string
  views: number
}

const mockPosts: Post[] = [
  {
    id: 104,
    title: 'Next.js로 블로그 시작하기',
    author: '강개발',
    date: '2024-03-02',
    views: 412,
  },
  {
    id: 103,
    title: 'UI 컴포넌트 정리: 버튼 편',
    author: '이프론트',
    date: '2024-02-27',
    views: 198,
  },
  {
    id: 102,
    title: 'TypeScript 제네릭 쉽게 이해하기',
    author: '박타입',
    date: '2024-02-21',
    views: 320,
  },
  {
    id: 101,
    title: 'React Query 캐싱 팁',
    author: '최쿼리',
    date: '2024-02-15',
    views: 285,
  },
]

function App() {
  return (
    <main className="board">
      <header className="board__header">
        <div>
          <p className="board__eyebrow">Mock Data</p>
          <h1 className="board__title">게시판 리스트</h1>
          <p className="board__description">
            프론트엔드 예제로 가짜 데이터를 사용해 간단한 게시판을
            구성했습니다.
          </p>
        </div>
        <button className="board__button">새 글 작성</button>
      </header>

      <section className="board__table">
        <div className="table__head">
          <span className="col col--id">번호</span>
          <span className="col col--title">제목</span>
          <span className="col col--author">작성자</span>
          <span className="col col--date">작성일</span>
          <span className="col col--views">조회수</span>
        </div>
        <div className="table__body">
          {mockPosts.map((post) => (
            <article key={post.id} className="table__row">
              <span className="col col--id">{post.id}</span>
              <span className="col col--title">{post.title}</span>
              <span className="col col--author">{post.author}</span>
              <span className="col col--date">{post.date}</span>
              <span className="col col--views">{post.views.toLocaleString()}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
