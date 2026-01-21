
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
    content: "이것은 첫 번째 게시글의 내용입니다.",
    author: "김철수",
    date: "2026-01-20",
  },
  {
    id: 2,
    title: "두 번째 게시글",
    content: "이것은 두 번째 게시글의 내용입니다.",
    author: "이영희",
    date: "2026-01-19",
  },
  {
    id: 3,
    title: "세 번째 게시글",
    content: "이것은 세 번째 게시글의 내용입니다.",
    author: "박민수",
    date: "2026-01-18",
  },
  {
    id: 4,
    title: "네 번째 게시글",
    content: "새로운 기능에 대한 안내입니다.",
    author: "최지영",
    date: "2026-01-17",
  },
  {
    id: 5,
    title: "다섯 번째 게시글",
    content: "주간 업데이트 소식입니다.",
    author: "강동원",
    date: "2026-01-16",
  },
  {
    id: 6,
    title: "여섯 번째 게시글",
    content: "시스템 점검 공지입니다.",
    author: "윤아름",
    date: "2026-01-15",
  },
  {
    id: 7,
    title: "일곱 번째 게시글",
    content: "커뮤니티 가이드라인 변경 안내입니다.",
    author: "서준호",
    date: "2026-01-14",
  },
  {
    id: 8,
    title: "여덟 번째 게시글",
    content: "새로운 이벤트 소식을 확인하세요.",
    author: "정혜진",
    date: "2026-01-13",
  },
];
