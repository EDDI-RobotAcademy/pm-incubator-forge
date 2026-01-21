import './App.css'

type Post = {
  id: number
  title: string
  author: string
  category: '공지' | '질문' | '공유'
  views: number
  likes: number
  comments: number
  date: string
  status: 'hot' | 'new' | 'normal'
}

const posts: Post[] = [
  {
    id: 1,
    title: '프로젝트 킥오프 회의록 공유합니다',
    author: '김프로',
    category: '공유',
    views: 812,
    likes: 34,
    comments: 12,
    date: '2026-01-20',
    status: 'hot',
  },
  {
    id: 2,
    title: '디자인 시스템 토큰 네이밍 질문',
    author: '박디자이너',
    category: '질문',
    views: 293,
    likes: 9,
    comments: 7,
    date: '2026-01-21',
    status: 'new',
  },
  {
    id: 3,
    title: '6주차 스프린트 회고 공지',
    author: '운영팀',
    category: '공지',
    views: 654,
    likes: 22,
    comments: 15,
    date: '2026-01-19',
    status: 'hot',
  },
  {
    id: 4,
    title: '신규 온보딩 체크리스트 초안',
    author: '이PM',
    category: '공유',
    views: 178,
    likes: 6,
    comments: 3,
    date: '2026-01-18',
    status: 'normal',
  },
  {
    id: 5,
    title: '데이터 계정 권한 요청 방법 안내',
    author: '운영팀',
    category: '공지',
    views: 401,
    likes: 11,
    comments: 4,
    date: '2026-01-17',
    status: 'normal',
  },
]

const statusLabel: Record<Post['status'], string> = {
  hot: '지금 주목',
  new: 'NEW',
  normal: '',
}

const categoryColor: Record<Post['category'], string> = {
  공지: 'notice',
  질문: 'question',
  공유: 'share',
}

function App() {
  const totalViews = posts.reduce((sum, post) => sum + post.views, 0)
  const totalComments = posts.reduce((sum, post) => sum + post.comments, 0)
  const hotCount = posts.filter((post) => post.status === 'hot').length

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Mock Data 게시판</p>
          <h1>포지티브 메이커 커뮤니티</h1>
          <p className="subtitle">
            팀 안팎의 정보를 한눈에 확인하는 게시판 리스트입니다. 지금 화제가
            되는 글을 놓치지 마세요.
          </p>
        </div>
        <button className="primary-btn">새 글 작성</button>
      </header>

      <section className="stat-grid">
        <article className="stat-card">
          <p className="stat-label">총 조회수</p>
          <p className="stat-value">{totalViews.toLocaleString()}회</p>
          <p className="stat-hint">최근 등록된 글 포함</p>
        </article>
        <article className="stat-card">
          <p className="stat-label">댓글</p>
          <p className="stat-value">{totalComments.toLocaleString()}개</p>
          <p className="stat-hint">참여가 활발한 글을 확인하세요</p>
        </article>
        <article className="stat-card">
          <p className="stat-label">실시간 인기</p>
          <p className="stat-value">{hotCount}건</p>
          <p className="stat-hint">상태가 HOT인 글 수</p>
        </article>
      </section>

      <section className="board-card">
        <div className="board-card__header">
          <div>
            <p className="eyebrow">전체 글 {posts.length}건</p>
            <h2>게시판 리스트</h2>
          </div>
          <div className="board-badges">
            <span className="badge notice">공지</span>
            <span className="badge question">질문</span>
            <span className="badge share">공유</span>
          </div>
        </div>

        <div className="board-table__wrap">
          <table className="board-table">
            <thead>
              <tr>
                <th style={{ width: '10%' }}>구분</th>
                <th style={{ width: '45%' }}>제목</th>
                <th style={{ width: '15%' }}>작성자</th>
                <th style={{ width: '10%' }}>조회</th>
                <th style={{ width: '10%' }}>댓글</th>
                <th style={{ width: '10%' }}>등록일</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>
                    <span
                      className={`badge ${categoryColor[post.category]}`}
                      aria-label={post.category}
                    >
                      {post.category}
                    </span>
                  </td>
                  <td className="title-cell">
                    <div className="title-line">
                      <span className="post-title">{post.title}</span>
                      {statusLabel[post.status] && (
                        <span className={`chip chip-${post.status}`}>
                          {statusLabel[post.status]}
                        </span>
                      )}
                    </div>
                    <div className="meta-line">
                      <span>좋아요 {post.likes}</span>
                      <span>댓글 {post.comments}</span>
                    </div>
                  </td>
                  <td>{post.author}</td>
                  <td>{post.views.toLocaleString()}</td>
                  <td>{post.comments}</td>
                  <td>{post.date}</td>
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
