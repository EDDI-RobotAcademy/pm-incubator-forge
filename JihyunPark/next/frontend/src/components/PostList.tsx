
import React from 'react';
import PostItem from './PostItem';
import { mockPosts } from '../data/posts.ts';

const PostList: React.FC = () => {
  return (
    <section className="post-list-page">
      <div className="post-list-card">
        <header className="post-list-header">
          <div>
            <p className="eyebrow">COMMUNITY BOARD</p>
            <h1>게시판</h1>
            <p className="subtitle">최근 게시글을 한눈에 확인하세요.</p>
          </div>
          <span className="pill">총 {mockPosts.length}건</span>
        </header>

        <table className="post-list-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>내용</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {mockPosts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PostList;
