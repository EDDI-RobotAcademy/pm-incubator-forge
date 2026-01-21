
export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "첫 번째 게시글",
    content: "안녕하세요, 첫 번째 게시글입니다. 새 프로젝트를 소개하고 의견을 받고 싶어요.",
    author: "김철수",
    date: "2026-01-20",
  },
  {
    id: 2,
    title: "두 번째 게시글",
    content: "두 번째 게시글 내용은 이렇습니다. 디자인 가이드를 업데이트했는데 확인 부탁드립니다.",
    author: "박영희",
    date: "2026-01-19",
  },
  {
    id: 3,
    title: "세 번째 게시글",
    content: "세 번째 게시글입니다. 많은 관심 부탁드립니다! 이번 주 회의 안건을 미리 공유합니다.",
    author: "이지은",
    date: "2026-01-18",
  },
  {
    id: 4,
    title: "UI 라이브러리 제안",
    content: "공용 버튼/폼 스타일을 통일하기 위해 UI 라이브러리를 정리했습니다. 피드백 환영합니다.",
    author: "정민호",
    date: "2026-01-17",
  },
  {
    id: 5,
    title: "배포 일정 공지",
    content: "다음 주 수요일 오후 2시에 신규 버전을 배포합니다. 테스트 결과를 미리 공유해주세요.",
    author: "최은지",
    date: "2026-01-16",
  },
  {
    id: 6,
    title: "QA 체크리스트",
    content: "릴리즈 전 확인해야 할 QA 체크리스트 초안을 작성했습니다. 추가 항목 의견 주세요.",
    author: "이도윤",
    date: "2026-01-15",
  },
  {
    id: 7,
    title: "신규 온보딩 문서",
    content: "신규 팀원을 위한 온보딩 문서를 업데이트했습니다. 부족한 부분이 있다면 알려주세요.",
    author: "한수빈",
    date: "2026-01-14",
  },
  {
    id: 8,
    title: "퍼포먼스 개선 결과",
    content: "이미지 최적화와 코드 스플리팅으로 LCP를 20% 개선했습니다. 상세 리포트를 첨부합니다.",
    author: "서지훈",
    date: "2026-01-13",
  },
  {
    id: 9,
    title: "접근성 점검",
    content: "스크린리더 테스트와 콘트라스트 점검 결과를 공유합니다. 수정이 필요한 항목이 있습니다.",
    author: "오하늘",
    date: "2026-01-12",
  },
  {
    id: 10,
    title: "데이터 백업 안내",
    content: "이번 주 금요일 23시에 DB 스냅샷 백업이 있습니다. 그 전에 마이그레이션 요청을 완료해주세요.",
    author: "윤서진",
    date: "2026-01-11",
  },
];
