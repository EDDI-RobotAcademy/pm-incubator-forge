
import React from 'react';
import { Post } from '../data/posts.ts';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const preview =
    post.content.length > 70 ? `${post.content.slice(0, 70)}…` : post.content;

  return (
    <tr className="post-row">
      <td className="col-id">{post.id}</td>
      <td className="col-title">
        <span className="post-title">{post.title}</span>
      </td>
      <td className="col-preview">
        <span className="post-preview">{preview}</span>
      </td>
      <td className="col-author">
        <span className="author-pill">{post.author}</span>
      </td>
      <td className="col-date">{post.date}</td>
    </tr>
  );
};

export default PostItem;
