import React from 'react';
import './BoardList.css';

// Post 인터페이스 정의를 BoardList.tsx 내부로 옮깁니다.
export interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
}

// mockPosts 데이터를 BoardList.tsx 내부로 옮깁니다.
const mockPosts: Post[] = [
  { id: 1, title: '첫 번째 게시글입니다.', author: '김철수', date: '2026-01-20', views: 123 },
  { id: 2, title: '두 번째 게시글입니다.', author: '이영희', date: '2026-01-19', views: 45 },
  { id: 3, title: '세 번째 게시글입니다.', author: '박민수', date: '2026-01-18', views: 78 },
  { id: 4, title: '네 번째 게시글입니다.', author: '최유리', date: '2026-01-17', views: 201 },
  { id: 5, title: '다섯 번째 게시글입니다.', author: '정지훈', date: '2026-01-16', views: 60 },
];

const BoardList: React.FC = () => {
  return (
    <div className="board-list-container">
      <h1>게시판</h1>
      <table className="board-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {mockPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.author}</td>
              <td>{post.date}</td>
              <td>{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;