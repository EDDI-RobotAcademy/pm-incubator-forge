import React from 'react';
import { mockPosts } from '../data/mockData.js';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
}

const BoardList: React.FC = () => {
  return (
    <div className="board-list-container">
      <h1>게시판</h1>
      <table className="board-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {mockPosts.map((post: Post) => (
            <tr key={post.id}>
              <td data-label="ID">{post.id}</td>
              <td data-label="제목">{post.title}</td>
              <td data-label="작성자">{post.author}</td>
              <td data-label="날짜">{post.date}</td>
              <td data-label="조회수">{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;
