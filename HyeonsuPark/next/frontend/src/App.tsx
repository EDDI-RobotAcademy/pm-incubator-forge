import './App.css'

type BoardPost = {
  id: number
  title: string
  author: string
  createdAt: string
  category: '공지' | '토론' | '자료'
  views: number
  comments: number
}

const mockPosts: BoardPost[] = [
  {
    id: 8,
    title: '프로젝트 킥오프 회의 메모',
    author: '김민지',
    createdAt: '2024-06-02',
    category: '공지',
    views: 128,
    comments: 12,
  },
  {
    id: 7,
    title: '신규 런칭 QA 체크리스트 공유',
    author: '이현우',
    createdAt: '2024-05-30',
    category: '자료',
    views: 94,
    comments: 8,
  },
  {
    id: 6,
    title: '6월 스프린트 목표에 대한 의견 모으기',
    author: '박서윤',
    createdAt: '2024-05-28',
    category: '토론',
    views: 210,
    comments: 23,
  },
  {
    id: 5,
    title: '사용자 인터뷰 질문지 초안 검토 부탁',
    author: '정우성',
    createdAt: '2024-05-25',
    category: '토론',
    views: 77,
    comments: 5,
  },
  {
    id: 4,
    title: '데이터 대시보드 가이드 문서 업로드',
    author: '문지은',
    createdAt: '2024-05-21',
    category: '자료',
    views: 156,
    comments: 14,
  },
  {
    id: 3,
    title: '성장팀 실험 템플릿 (A/B, AA) 업데이트',
    author: '최민재',
    createdAt: '2024-05-18',
    category: '공지',
    views: 189,
    comments: 19,
  },
  {
    id: 2,
    title: 'NPS 설문 배포 일정 안내',
    author: '김지호',
    createdAt: '2024-05-14',
    category: '공지',
    views: 143,
    comments: 9,
  },
  {
    id: 1,
    title: '신규 온보딩 프로세스 제안서 공유',
    author: '서하늘',
    createdAt: '2024-05-11',
    category: '자료',
    views: 65,
    comments: 3,
  },
]

const categoryLabelClass: Record<BoardPost['category'], string> = {
  공지: 'badge badge--notice',
  토론: 'badge badge--discussion',
  자료: 'badge badge--resource',
}

function App() {
  return (
    <div className="page">
      <header className="page__header">
        <div>
          <p className="eyebrow">Team Forum</p>
          <h1>프로덕트 매니저 게시판</h1>
          <p className="subtitle">
            Mock Data로 구성된 게시판 리스트 예시입니다. 데이터 구조와 스타일만
            참고해 주세요.
          </p>
        </div>
        <button className="primary-button">새 글 작성</button>
      </header>

      <section className="board">
        <div className="board__meta">
          <span>전체 {mockPosts.length}건</span>
          <div className="board__legend">
            <span className="badge badge--notice">공지</span>
            <span className="badge badge--discussion">토론</span>
            <span className="badge badge--resource">자료</span>
          </div>
        </div>

        <div className="board__table">
          <div className="board__row board__row--head">
            <div className="cell cell--id">번호</div>
            <div className="cell cell--title">제목</div>
            <div className="cell cell--author">작성자</div>
            <div className="cell cell--date">작성일</div>
            <div className="cell cell--count">조회</div>
            <div className="cell cell--count">댓글</div>
          </div>

          {mockPosts.map((post) => (
            <div className="board__row" key={post.id}>
              <div className="cell cell--id">{post.id}</div>
              <div className="cell cell--title">
                <span className={categoryLabelClass[post.category]}>
                  {post.category}
                </span>
                <span className="title-text">{post.title}</span>
              </div>
              <div className="cell cell--author">{post.author}</div>
              <div className="cell cell--date">{post.createdAt}</div>
              <div className="cell cell--count">{post.views}</div>
              <div className="cell cell--count">{post.comments}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
