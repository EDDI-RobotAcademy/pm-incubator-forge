
export type BoardPost = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string; // YYYY-MM-DD
  views: number;
};

function formatDateYYYYMMDD(date: Date) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function createMockPosts(count: number): BoardPost[] {
  // 고정된 기준 날짜를 사용해 새로고침해도 데이터가 일관되게 보이도록 함
  const baseDate = new Date('2026-01-21T00:00:00Z');

  const authors = ['김철수', '이영희', '박민수', '최유리', '정수진', '오지훈', '한지민'];
  const topics = [
    '공지사항',
    '프로젝트 공유',
    '질문',
    '스터디 모집',
    '회고',
    '팁 & 노하우',
    '자료 공유',
  ];

  const posts: BoardPost[] = [];
  for (let i = 0; i < count; i += 1) {
    const id = i + 1;
    const author = authors[i % authors.length];
    const topic = topics[i % topics.length];
    const date = new Date(baseDate);
    date.setUTCDate(baseDate.getUTCDate() - i);

    posts.push({
      id,
      title: `[${topic}] 목데이터 게시글 ${id}`,
      content:
        '이 글은 Mock Data로 만든 게시글입니다. 검색/정렬/페이지네이션 동작을 확인하기 위한 샘플 내용이에요.',
      author,
      createdAt: formatDateYYYYMMDD(date),
      views: ((id * 73) % 1000) + 10,
    });
  }

  return posts;
}

export const boardPosts: BoardPost[] = createMockPosts(37);
