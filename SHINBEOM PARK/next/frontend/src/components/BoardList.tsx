// import { Post } from '../mockData.ts';
import './BoardList.css';

interface BoardListProps {
  posts: Post[];
}

function BoardList({ posts }: BoardListProps) {
  return (
    <div className="board-container">
      <h1 className="board-title">게시판</h1>
      <div className="board-stats">
        총 <strong>{posts.length}</strong>개의 게시글
      </div>
      
      <table className="board-table">
        <thead>
          <tr>
            <th className="col-id">번호</th>
            <th className="col-title">제목</th>
            <th className="col-author">작성자</th>
            <th className="col-date">작성일</th>
            <th className="col-views">조회수</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="board-row">
              <td className="col-id">{post.id}</td>
              <td className="col-title">
                <span className="title-text">{post.title}</span>
              </td>
              <td className="col-author">{post.author}</td>
              <td className="col-date">{post.date}</td>
              <td className="col-views">{post.views.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;
