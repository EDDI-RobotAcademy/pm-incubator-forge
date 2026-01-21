import './App.css'

type BoardItem = {
  id: number
  title: string
  author: string
  createdAt: string
  views: number
  category?: string
}

const mockBoardData: BoardItem[] = [
  {
    id: 1,
    title: 'Next.js로 게시판 만들기 기초 가이드',
    author: '김개발',
    createdAt: '2024-12-20',
    views: 1248,
    category: '튜토리얼',
  },
  {
    id: 2,
    title: 'API 연동 전 Mock Data 활용 팁',
    author: '오하루',
    createdAt: '2024-12-18',
    views: 986,
    category: '팁',
  },
  {
    id: 3,
    title: 'Tailwind 없이도 예쁜 테이블 스타일링하기',
    author: '이디자인',
    createdAt: '2024-12-12',
    views: 742,
    category: '디자인',
  },
  {
    id: 4,
    title: '상태 관리 라이브러리 선택 기준은?',
    author: '박아키',
    createdAt: '2024-12-05',
    views: 1388,
    category: '아키텍처',
  },
  {
    id: 5,
    title: '프로젝트 구조 잡을 때 고려할 점',
    author: '정정리',
    createdAt: '2024-11-28',
    views: 514,
    category: '베스트프랙티스',
  },
]

function App() {
  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">Mock Data</p>
        <h1>게시판 리스트</h1>
        <p className="sub">
          API 연동 전, 가짜 데이터로 테이블 구조를 먼저 잡아볼 수 있어요.
        </p>
        <button className="primary-btn" type="button">
          새 글 작성
        </button>
      </header>

      <section className="board">
        <div className="board-header">
          <div>
            <p className="eyebrow">Total {mockBoardData.length}</p>
            <h2>최신 글</h2>
          </div>
          <button className="ghost-btn" type="button">
            필터/정렬 준비중
          </button>
        </div>

        <div className="table-wrapper">
          <table className="board-table">
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {mockBoardData.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>
                    <div className="title-cell">
                      <span className="title">{post.title}</span>
                      {post.category && (
                        <span className="chip" aria-label="카테고리">
                          {post.category}
                        </span>
                      )}
                    </div>
                  </td>
                  <td>{post.author}</td>
                  <td>{post.createdAt}</td>
                  <td>{post.views.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default App
