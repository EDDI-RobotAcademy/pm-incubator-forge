export interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
}

export const mockPosts: Post[] = [
  { id: 1, title: '첫 번째 게시글입니다.', author: '김철수', date: '2026-01-20', views: 123 },
  { id: 2, title: '두 번째 게시글입니다.', author: '이영희', date: '2026-01-19', views: 45 },
  { id: 3, title: '세 번째 게시글입니다.', author: '박민수', date: '2026-01-18', views: 78 },
  { id: 4, title: '네 번째 게시글입니다.', author: '최유리', date: '2026-01-17', views: 201 },
  { id: 5, title: '다섯 번째 게시글입니다.', author: '정지훈', date: '2026-01-16', views: 60 },
];