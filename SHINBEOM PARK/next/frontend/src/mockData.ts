export interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
  content: string;
}

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "React 18의 새로운 기능 소개",
    author: "김철수",
    date: "2026-01-21",
    views: 1234,
    content: "React 18에서 추가된 Concurrent 기능에 대해 알아봅시다."
  },
  {
    id: 2,
    title: "TypeScript 5.0 마이그레이션 가이드",
    author: "이영희",
    date: "2026-01-20",
    views: 856,
    content: "TypeScript 5.0으로 업그레이드하는 방법을 단계별로 설명합니다."
  },
  {
    id: 3,
    title: "Vite를 사용한 빠른 개발 환경 구축",
    author: "박민수",
    date: "2026-01-19",
    views: 2103,
    content: "Vite를 활용하여 개발 환경을 최적화하는 방법을 공유합니다."
  },
  {
    id: 4,
    title: "Next.js 14 App Router 완벽 가이드",
    author: "정수진",
    date: "2026-01-18",
    views: 3421,
    content: "Next.js 14의 App Router를 활용한 최신 개발 패턴을 소개합니다."
  },
  {
    id: 5,
    title: "CSS-in-JS vs Tailwind CSS 비교",
    author: "최동욱",
    date: "2026-01-17",
    views: 1567,
    content: "다양한 CSS 솔루션의 장단점을 비교 분석합니다."
  },
  {
    id: 6,
    title: "React Query를 활용한 서버 상태 관리",
    author: "강민지",
    date: "2026-01-16",
    views: 2890,
    content: "React Query로 효율적인 데이터 페칭과 캐싱을 구현하는 방법입니다."
  },
  {
    id: 7,
    title: "웹 접근성 개선하기: ARIA 속성 활용법",
    author: "윤서준",
    date: "2026-01-15",
    views: 734,
    content: "ARIA 속성을 활용하여 웹 접근성을 향상시키는 실전 팁을 공유합니다."
  },
  {
    id: 8,
    title: "성능 최적화: 번들 사이즈 줄이기",
    author: "임하은",
    date: "2026-01-14",
    views: 1923,
    content: "웹 애플리케이션의 번들 크기를 줄이는 다양한 기법들을 알아봅니다."
  },
  {
    id: 9,
    title: "React Testing Library 실전 가이드",
    author: "송지훈",
    date: "2026-01-13",
    views: 1245,
    content: "실무에서 바로 적용할 수 있는 테스트 작성 패턴을 소개합니다."
  },
  {
    id: 10,
    title: "모던 자바스크립트 패턴과 베스트 프랙티스",
    author: "한예린",
    date: "2026-01-12",
    views: 2567,
    content: "2026년 기준 최신 자바스크립트 개발 패턴과 권장 사항입니다."
  }
];
