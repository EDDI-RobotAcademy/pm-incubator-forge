import React from 'react';
import { mockPosts, type Post } from '../data/mockPosts.ts';

const BoardList: React.FC = () => {
  return (
    <div className="board-list-container">
      <h1>게시판 목록</h1>
      {mockPosts.length > 0 ? (
        <ul className="board-list">
          {mockPosts.map((post: Post) => (
            <li key={post.id} className="board-list-item">
              <h2>{post.title}</h2>
              <div className="post-meta">
                <span className="author">✍️ {post.author}</span>
                <span className="date">📅 {post.date}</span>
              </div>
              <p className="post-excerpt">{post.content}</p>
              <button className="ghost-button">자세히 보기</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>게시글이 없습니다.</p>
      )}
    </div>
  );
};

export default BoardList;
