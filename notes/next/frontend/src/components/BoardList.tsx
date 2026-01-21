import { useState } from 'react';
import type { Post } from '../mockData';
import { mockPosts } from '../mockData';
import './BoardList.css';

const BoardList = () => {
  const [posts] = useState<Post[]>(mockPosts);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const formatViews = (views: number) => {
    return views.toLocaleString('ko-KR');
  };

  return (
    <div className="board-container">
      <h1 className="board-title">게시판</h1>
      <div className="board-header">
        <div className="board-header-item">번호</div>
        <div className="board-header-item title-header">제목</div>
        <div className="board-header-item">작성자</div>
        <div className="board-header-item">작성일</div>
        <div className="board-header-item">조회수</div>
      </div>
      <div className="board-list">
        {posts.map((post) => (
          <div key={post.id} className="board-item">
            <div className="board-item-cell">{post.id}</div>
            <div className="board-item-cell title-cell">{post.title}</div>
            <div className="board-item-cell">{post.author}</div>
            <div className="board-item-cell">{formatDate(post.createdAt)}</div>
            <div className="board-item-cell">{formatViews(post.views)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardList;
