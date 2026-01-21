export interface BoardPost {
  id: number;
  title: string;
  author: string;
  content: string;
  createdAt: string;
  views: number;
  likes: number;
}

export const mockBoardData: BoardPost[] = [
  {
    id: 1,
    title: '첫 번째 게시글입니다',
    author: '홍길동',
    content: '이것은 첫 번째 게시글의 내용입니다.',
    createdAt: '2024-01-15 10:30:00',
    views: 125,
    likes: 12
  },
  {
    id: 2,
    title: '두 번째 게시글 제목',
    author: '김철수',
    content: '두 번째 게시글의 내용을 작성합니다.',
    createdAt: '2024-01-16 14:20:00',
    views: 89,
    likes: 8
  },
  {
    id: 3,
    title: '세 번째 게시글',
    author: '이영희',
    content: '세 번째 게시글입니다. 많은 내용이 들어갑니다.',
    createdAt: '2024-01-17 09:15:00',
    views: 156,
    likes: 15
  },
  {
    id: 4,
    title: '네 번째 게시글 제목입니다',
    author: '박민수',
    content: '네 번째 게시글의 내용입니다.',
    createdAt: '2024-01-18 16:45:00',
    views: 67,
    likes: 5
  },
  {
    id: 5,
    title: '다섯 번째 게시글',
    author: '정수진',
    content: '다섯 번째 게시글의 내용을 작성합니다.',
    createdAt: '2024-01-19 11:30:00',
    views: 203,
    likes: 22
  },
  {
    id: 6,
    title: '여섯 번째 게시글 제목',
    author: '최동욱',
    content: '여섯 번째 게시글입니다.',
    createdAt: '2024-01-20 13:20:00',
    views: 94,
    likes: 9
  },
  {
    id: 7,
    title: '일곱 번째 게시글',
    author: '강미영',
    content: '일곱 번째 게시글의 내용입니다.',
    createdAt: '2024-01-21 15:10:00',
    views: 78,
    likes: 7
  },
  {
    id: 8,
    title: '여덟 번째 게시글 제목입니다',
    author: '윤태호',
    content: '여덟 번째 게시글의 내용을 작성합니다.',
    createdAt: '2024-01-22 10:00:00',
    views: 112,
    likes: 11
  }
];
