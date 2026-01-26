import './App.css'

type Post = {
  id: number
  title: string
  author: string
  createdAt: string
  views: number
  comments: number
  category: '공지' | '질문' | '자유'
}

const mockPosts: Post[] = [
  {
    id: 105,
    title: '신규 프로젝트 킥오프 안내',
    author: '관리자',
    createdAt: '2024-12-12',
    views: 245,
    comments: 12,
    category: '공지',
  },
  {
    id: 104,
    title: 'Next.js 환경 변수 설정 방법',
    author: '이유진',
    createdAt: '2024-12-11',
    views: 198,
    comments: 4,
    category: '질문',
  },
  {
    id: 103,
    title: '팀원과 코드 스타일 합의해보기',
    author: '김철수',
    createdAt: '2024-12-10',
    views: 132,
    comments: 7,
    category: '자유',
  },
  {
    id: 102,
    title: 'CI 파이프라인 속도 개선 기록 공유',
    author: '박영희',
    createdAt: '2024-12-08',
    views: 176,
    comments: 9,
    category: '자유',
  },
  {
    id: 101,
    title: 'eslint 기본 설정 템플릿',
    author: '관리자',
    createdAt: '2024-12-05',
    views: 302,
    comments: 15,
    category: '공지',
  },
]

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

function App() {
  return (
    <div className="board-page">
      <header className="board-header">
        <div>
          <p className="eyebrow">Mock Data</p>
          <h1>게시판 리스트</h1>
          <p className="subtitle">샘플 데이터로 구성된 게시글 목록입니다.</p>
        </div>
        <button className="primary-button" type="button">
          새 글 작성
        </button>
      </header>

      <div className="table-wrapper">
        <table className="board-table">
          <thead>
            <tr>
              <th style={{ width: '8%' }}>번호</th>
              <th style={{ width: '15%' }}>말머리</th>
              <th>제목</th>
              <th style={{ width: '14%' }}>작성자</th>
              <th style={{ width: '16%' }}>작성일</th>
              <th style={{ width: '10%' }}>조회수</th>
              <th style={{ width: '10%' }}>댓글</th>
            </tr>
          </thead>
          <tbody>
            {mockPosts.map((post) => (
              <tr key={post.id}>
                <td className="number">{post.id}</td>
                <td>
                  <span className={`chip chip-${post.category}`}>{post.category}</span>
                </td>
                <td className="title">
                  <a href="#">{post.title}</a>
                </td>
                <td>{post.author}</td>
                <td>{formatDate(post.createdAt)}</td>
                <td className="numeric">{post.views.toLocaleString()}</td>
                <td className="numeric">{post.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
