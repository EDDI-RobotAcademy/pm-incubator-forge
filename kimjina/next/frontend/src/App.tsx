import './App.css'

type Post = {
  id: number
  title: string
  author: string
  date: string
  views: number
  category: string
  comments?: number
  isPinned?: boolean
}

const mockPosts: Post[] = [
  {
    id: 101,
    title: '프로젝트 킥오프 자료 공유',
    author: '한지민',
    date: '2026-01-18',
    views: 132,
    category: '공지',
    comments: 6,
    isPinned: true,
  },
  {
    id: 100,
    title: '2월 스프린트 일정 안내',
    author: '관리자',
    date: '2026-01-17',
    views: 98,
    category: '공지',
    comments: 2,
    isPinned: true,
  },
  {
    id: 99,
    title: '신규 입사자 온보딩 체크리스트',
    author: '박서준',
    date: '2026-01-15',
    views: 76,
    category: '자료실',
    comments: 4,
  },
  {
    id: 98,
    title: '디자인 시스템 업데이트 회고',
    author: '이수민',
    date: '2026-01-14',
    views: 54,
    category: '회고',
  },
  {
    id: 97,
    title: '이번 주 QA 이슈 정리',
    author: '정아린',
    date: '2026-01-13',
    views: 47,
    category: 'QA',
    comments: 3,
  },
  {
    id: 96,
    title: '프로덕트 가설 검증 실험 공유',
    author: '최도윤',
    date: '2026-01-11',
    views: 39,
    category: '실험',
  },
  {
    id: 95,
    title: '성능 모니터링 대시보드 가이드',
    author: '김지나',
    date: '2026-01-09',
    views: 61,
    category: '가이드',
  },
  {
    id: 94,
    title: '신규 협업 도구 테스트 모집',
    author: '문세윤',
    date: '2026-01-08',
    views: 42,
    category: '공지',
    comments: 1,
  },
]

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('ko-KR', {
    month: '2-digit',
    day: '2-digit',
  })

const formatViews = (views: number) => views.toLocaleString('ko-KR')

function App() {
  const orderedPosts = [...mockPosts].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="board-page">
      <header className="board-header">
        <div className="board-heading">
          <p className="eyebrow">Mock Data</p>
          <h1 className="board-title">팀 게시판 리스트</h1>
          <p className="board-description">
            실제 API 없이도 빠르게 구성을 확인할 수 있는 예시 데이터입니다.
          </p>
        </div>
        <button className="primary-btn" type="button">
          새 글 쓰기
        </button>
      </header>

      <div className="board-toolbar">
        <div className="board-meta">
          전체 {orderedPosts.length}건 · 최근 업데이트{' '}
          {formatDate(orderedPosts[0].date)}
        </div>
        <div className="pill">목업 데이터</div>
      </div>

      <div className="table-wrapper">
        <table className="board-table">
          <thead>
            <tr>
              <th scope="col" className="col-number">
                No
              </th>
              <th scope="col" className="col-title">
                제목
              </th>
              <th scope="col">작성자</th>
              <th scope="col">작성일</th>
              <th scope="col" className="col-views">
                조회수
              </th>
            </tr>
          </thead>
          <tbody>
            {orderedPosts.map((post, index) => (
              <tr
                key={post.id}
                className={post.isPinned ? 'pinned-row' : undefined}
              >
                <td className="col-number">
                  {post.isPinned ? '공지' : index + 1}
                </td>
                <td className="col-title">
                  <div className="title-cell">
                    <span className={`badge badge-${post.category}`}>
                      {post.category}
                    </span>
                    <span className="title-text">{post.title}</span>
                    {post.comments ? (
                      <span className="comment-count">+{post.comments}</span>
                    ) : null}
                  </div>
                </td>
                <td>{post.author}</td>
                <td>{formatDate(post.date)}</td>
                <td className="col-views">{formatViews(post.views)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="board-footer">
        <p className="footer-text">
          페이지네이션, 검색, 정렬 등을 추가해 확장할 수 있습니다.
        </p>
      </div>
    </div>
  )
}

export default App
