export type Post = {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  views: number;
  content: string;
};

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "React 19의 새로운 기능들",
    author: "김개발",
    createdAt: "2024-01-15",
    views: 1250,
    content: "React 19에서 추가된 새로운 기능들을 살펴보겠습니다..."
  },
  {
    id: 2,
    title: "TypeScript 타입 가드 활용하기",
    author: "이타입",
    createdAt: "2024-01-14",
    views: 890,
    content: "TypeScript의 타입 가드를 활용하여 더 안전한 코드를 작성하는 방법을 알아봅시다..."
  },
  {
    id: 3,
    title: "Vite로 빠른 개발 환경 구축하기",
    author: "박빌드",
    createdAt: "2024-01-13",
    views: 2100,
    content: "Vite를 사용하여 빠르고 효율적인 개발 환경을 구축하는 방법을 소개합니다..."
  },
  {
    id: 4,
    title: "프론트엔드 성능 최적화 팁",
    author: "최성능",
    createdAt: "2024-01-12",
    views: 1560,
    content: "웹 애플리케이션의 성능을 향상시키기 위한 다양한 최적화 기법들을 정리했습니다..."
  },
  {
    id: 5,
    title: "컴포넌트 설계 패턴",
    author: "정설계",
    createdAt: "2024-01-11",
    views: 980,
    content: "재사용 가능하고 유지보수하기 쉬운 컴포넌트를 설계하는 패턴들을 살펴봅시다..."
  },
  {
    id: 6,
    title: "상태 관리 라이브러리 비교",
    author: "한상태",
    createdAt: "2024-01-10",
    views: 1750,
    content: "Redux, Zustand, Jotai 등 다양한 상태 관리 라이브러리를 비교해봅시다..."
  },
  {
    id: 7,
    title: "CSS-in-JS vs CSS Modules",
    author: "강스타일",
    createdAt: "2024-01-09",
    views: 1120,
    content: "CSS-in-JS와 CSS Modules의 장단점을 비교하고 각각의 사용 사례를 알아봅시다..."
  },
  {
    id: 8,
    title: "접근성(Accessibility) 개선하기",
    author: "윤접근",
    createdAt: "2024-01-08",
    views: 750,
    content: "웹 접근성을 개선하여 모든 사용자가 사용할 수 있는 웹사이트를 만드는 방법을 알아봅시다..."
  }
];
