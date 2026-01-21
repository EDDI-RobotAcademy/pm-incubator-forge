import './App.css'

type BoardPost = {
  id: number
  title: string
  author: string
  createdAt: string
  views: number
}

const mockPosts: BoardPost[] = [
  {
    id: 5,
    title: 'React 상태 관리 전략 총정리',
    author: '김민철',
    createdAt: '2024-12-10T09:15:00',
    views: 412,
  },
  {
    id: 4,
    title: 'Next.js 15 업그레이드 체크리스트',
    author: '이서윤',
    createdAt: '2024-12-08T15:00:00',
    views: 358,
  },
  {
    id: 3,
    title: '프론트엔드 코드 리뷰 잘하는 법',
    author: '박준형',
    createdAt: '2024-12-05T11:30:00',
    views: 501,
  },
  {
    id: 2,
    title: 'UI 접근성(Accessibility) 기본기 다지기',
    author: '최예린',
    createdAt: '2024-12-01T08:45:00',
    views: 277,
  },
  {
    id: 1,
    title: '타입스크립트로 안전한 API 클라이언트 만들기',
    author: '정하준',
    createdAt: '2024-11-28T18:20:00',
    views: 623,
  },
]

/**
 * 게시판 목록 화면 컴포넌트
 */
function App(): JSX.Element {
  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate)
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date)
  }

  return (
    <main className="board-layout">
      <header className="board-header">
        <div>
          <p className="board-subtitle">Mock Data</p>
          <h1 className="board-title">게시판 리스트</h1>
        </div>
        <button type="button" className="primary-button">
          글쓰기
        </button>
      </header>

      <section className="board-card">
        <div className="board-toolbar">
          <span className="badge">총 {mockPosts.length}건</span>
          <input
            className="search-input"
            type="search"
            placeholder="제목 검색 (mock)"
            aria-label="게시글 제목 검색"
          />
        </div>
        <table className="board-table">
          <colgroup>
            <col style={{ width: '80px' }} />
            <col />
            <col style={{ width: '140px' }} />
            <col style={{ width: '140px' }} />
            <col style={{ width: '90px' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">작성일</th>
              <th scope="col">조회수</th>
            </tr>
          </thead>
          <tbody>
            {mockPosts.map((post) => (
              <tr key={post.id}>
                <td className="number-cell">{post.id}</td>
                <td className="title-cell">
                  <a href="#">{post.title}</a>
                </td>
                <td>{post.author}</td>
                <td>{formatDate(post.createdAt)}</td>
                <td className="number-cell">{post.views.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}

export default App
