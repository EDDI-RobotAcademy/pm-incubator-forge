import { useMemo, useState } from 'react'
import './App.css'

type BoardPost = {
  id: number
  title: string
  description: string
  author: string
  createdAt: string
  views: number
  category: string
  tags: string[]
}

const mockPosts: BoardPost[] = [
  {
    id: 101,
    title: '프론트엔드 성능 최적화 체크리스트',
    description: 'Lighthouse 점수 올리기 위해 적용할 수 있는 실무 팁 모음',
    author: '김프론',
    createdAt: '2024-12-02',
    views: 1280,
    category: '프론트엔드',
    tags: ['React', '성능', 'Best Practice'],
  },
  {
    id: 98,
    title: '신규 프로젝트 셋업 가이드',
    description: '팀 공용 Vite 템플릿, ESLint, Prettier 설정 공유합니다.',
    author: '이가이드',
    createdAt: '2024-11-27',
    views: 742,
    category: '프로세스',
    tags: ['Vite', 'ESLint', 'Prettier'],
  },
  {
    id: 95,
    title: 'API 에러 핸들링 패턴 정리',
    description: 'Axios 인터셉터와 Error Boundary를 활용한 에러 흐름 정리',
    author: '박백엔드',
    createdAt: '2024-11-19',
    views: 956,
    category: '백엔드',
    tags: ['Axios', '에러핸들링', 'Clean Code'],
  },
  {
    id: 90,
    title: '디자인 시스템 토큰 관리법',
    description: 'Figma 변수와 코드 토큰을 연결하는 파이프라인 경험 공유',
    author: '최디자인',
    createdAt: '2024-11-05',
    views: 534,
    category: '디자인',
    tags: ['Design System', 'Figma', 'Token'],
  },
  {
    id: 87,
    title: 'React Query로 상태 단순화하기',
    description: '서버 상태와 캐싱을 통합해 전역 상태 코드를 줄인 사례',
    author: '정상태',
    createdAt: '2024-10-30',
    views: 1182,
    category: '프론트엔드',
    tags: ['React Query', '상태관리', '캐싱'],
  },
]

function App() {
  const [keyword, setKeyword] = useState('')

  const filteredPosts = useMemo(() => {
    const lowerKeyword = keyword.trim().toLowerCase()
    if (!lowerKeyword) return mockPosts

    return mockPosts.filter((post) => {
      const haystack = [
        post.title,
        post.description,
        post.author,
        post.category,
        post.tags.join(' '),
      ]
        .join(' ')
        .toLowerCase()

      return haystack.includes(lowerKeyword)
    })
  }, [keyword])

  return (
    <div className="page">
      <header className="page__header">
        <div>
          <p className="eyebrow">Mock Data Board</p>
          <h1>커뮤니티 게시판</h1>
          <p className="subtitle">
            MockData로 구성한 게시글 리스트 예시입니다. 검색으로 빠르게
            찾아보세요.
          </p>
        </div>
        <label className="search">
          <span className="search__label">검색</span>
          <input
            type="text"
            placeholder="제목, 내용, 작성자, 태그 검색"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
        </label>
      </header>

      <section className="board">
        <div className="board__summary">
          <span className="count">총 {filteredPosts.length}건</span>
          <span className="hint">Mock 데이터이므로 자유롭게 변경 가능합니다</span>
        </div>

        <div className="board__list">
          <div className="board__head">
            <span className="col col--id">No</span>
            <span className="col col--title">제목</span>
            <span className="col col--author">작성자</span>
            <span className="col col--meta">분류 · 조회</span>
          </div>

          {filteredPosts.map((post) => (
            <article key={post.id} className="board__row">
              <span className="col col--id">#{post.id}</span>
              <div className="col col--title">
                <p className="title">{post.title}</p>
                <p className="description">{post.description}</p>
                <div className="tags">
                  <span className="badge badge--category">{post.category}</span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col col--author">
                <p className="author">{post.author}</p>
                <p className="date">{post.createdAt}</p>
              </div>
              <div className="col col--meta">
                <p className="views">{post.views.toLocaleString()} 조회</p>
              </div>
            </article>
          ))}

          {filteredPosts.length === 0 && (
            <div className="board__empty">
              <p>검색 결과가 없습니다.</p>
              <p className="hint">키워드를 줄이거나 다른 단어를 입력해보세요.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default App
