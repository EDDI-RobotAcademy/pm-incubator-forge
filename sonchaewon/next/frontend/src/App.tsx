import { useMemo, useState } from 'react'
import './App.css'

type Post = {
  id: number
  title: string
  author: string
  date: string
  views: number
  comments: number
  tags: string[]
  pinned?: boolean
  summary: string
}

const POSTS: Post[] = [
  {
    id: 1,
    title: '신규 디자인 시스템 적용 안내',
    author: '관리자',
    date: '2024-12-28',
    views: 412,
    comments: 6,
    tags: ['공지', '디자인'],
    pinned: true,
    summary: '1월 10일부터 새 디자인 시스템이 단계적으로 반영됩니다.',
  },
  {
    id: 2,
    title: '주간 스프린트 회고 공유',
    author: '민지',
    date: '2025-01-03',
    views: 289,
    comments: 12,
    tags: ['회고', '스프린트'],
    summary: '지난주 스프린트에서 개선이 필요한 부분과 잘한 점을 정리했습니다.',
  },
  {
    id: 3,
    title: 'API 응답 캐싱 전략 검토 요청',
    author: '지훈',
    date: '2025-01-05',
    views: 198,
    comments: 3,
    tags: ['백엔드', '성능'],
    summary: '트래픽 피크 시간대 응답 지연을 줄이기 위한 캐싱 전략 제안입니다.',
  },
  {
    id: 4,
    title: 'QA 테스트 케이스 템플릿 배포',
    author: '수연',
    date: '2025-01-06',
    views: 152,
    comments: 4,
    tags: ['QA', '템플릿'],
    summary: '기능별 공통 테스트 케이스 템플릿과 작성 가이드를 공유합니다.',
  },
  {
    id: 5,
    title: '프론트엔드 번들 사이즈 모니터링 대시보드',
    author: '유진',
    date: '2025-01-07',
    views: 241,
    comments: 8,
    tags: ['프론트엔드', '도구'],
    summary: '배포 후 번들 사이즈 추이를 자동으로 수집하는 대시보드를 소개합니다.',
  },
  {
    id: 6,
    title: '신입 온보딩 체크리스트 업데이트',
    author: '관리자',
    date: '2025-01-08',
    views: 175,
    comments: 5,
    tags: ['온보딩', 'HR'],
    summary: '신입 온보딩 프로세스에 최신 자료와 링크를 반영했습니다.',
  },
]

const sortPosts = (posts: Post[], sortBy: string) => {
  if (sortBy === 'views') {
    return [...posts].sort((a, b) => b.views - a.views)
  }
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

function App() {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'latest' | 'views'>('latest')

  const filteredPosts = useMemo(() => {
    const byKeyword = POSTS.filter((post) => {
      const term = search.trim().toLowerCase()
      if (!term) return true
      return (
        post.title.toLowerCase().includes(term) ||
        post.author.toLowerCase().includes(term) ||
        post.tags.some((tag) => tag.toLowerCase().includes(term))
      )
    })
    const pinned = byKeyword.filter((p) => p.pinned)
    const normal = byKeyword.filter((p) => !p.pinned)
    return [...pinned, ...sortPosts(normal, sortBy)]
  }, [search, sortBy])

  const stats = useMemo(
    () => ({
      total: POSTS.length,
      pinned: POSTS.filter((p) => p.pinned).length,
      comments: POSTS.reduce((sum, p) => sum + p.comments, 0),
      views: POSTS.reduce((sum, p) => sum + p.views, 0),
    }),
    [],
  )

  return (
    <div className="app-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Mock 게시판</p>
          <h1>팀 소식과 공지를 한눈에</h1>
          <p className="subtitle">
            목업 데이터로 구성된 게시판입니다. 검색과 정렬 기능을 확인해 보세요.
          </p>
        </div>
        <div className="actions">
          <button className="primary-btn" type="button">
            새 글 작성
          </button>
        </div>
      </header>

      <section className="board-toolbar">
        <div className="search-box">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="제목, 작성자, 태그 검색..."
          />
        </div>
        <div className="controls">
          <label className="control-label" htmlFor="sort">
            정렬
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'latest' | 'views')}
          >
            <option value="latest">최신순</option>
            <option value="views">조회순</option>
          </select>
        </div>
      </section>

      <section className="board-stats">
        <div className="stat-card">
          <p className="stat-label">전체 글</p>
          <p className="stat-value">{stats.total}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">고정 공지</p>
          <p className="stat-value">{stats.pinned}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">댓글 수</p>
          <p className="stat-value">{stats.comments}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">총 조회</p>
          <p className="stat-value">{stats.views}</p>
        </div>
      </section>

      <section className="board-list">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className={`board-row ${post.pinned ? 'pinned' : ''}`}
          >
            <div className="row-main">
              <div className="row-title">
                {post.pinned && <span className="badge">공지</span>}
                <h3>{post.title}</h3>
              </div>
              <p className="row-summary">{post.summary}</p>
              <div className="row-meta">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>조회 {post.views}</span>
                <span>•</span>
                <span>댓글 {post.comments}</span>
              </div>
            </div>
            <div className="row-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}

        {filteredPosts.length === 0 && (
          <div className="empty-state">
            <p>조건에 맞는 게시글이 없습니다.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default App
