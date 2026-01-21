import { useMemo, useState } from 'react';
import type { BoardPost } from '../data/boardData';
import { boardPosts } from '../data/boardData';

const PAGE_SIZE = 10;

type SortOption = 'latest' | 'oldest';

function includesIgnoreCase(text: string, query: string) {
  return text.toLowerCase().includes(query.toLowerCase());
}

export default function BoardList() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortOption>('latest');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q) return boardPosts;

    return boardPosts.filter((post: BoardPost) => {
      return (
        includesIgnoreCase(post.title, q) ||
        includesIgnoreCase(post.content, q) ||
        includesIgnoreCase(post.author, q)
      );
    });
  }, [query]);

  const sorted = useMemo(() => {
    const copy = [...filtered];
    copy.sort((a, b) => {
      const dateCompare =
        sort === 'latest'
          ? b.createdAt.localeCompare(a.createdAt)
          : a.createdAt.localeCompare(b.createdAt);
      if (dateCompare !== 0) return dateCompare;
      return sort === 'latest' ? b.id - a.id : a.id - b.id;
    });
    return copy;
  }, [filtered, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const pageSafe = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (pageSafe - 1) * PAGE_SIZE;
  const pageItems = sorted.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <section className="board">
      <header className="board-header">
        <div className="board-title-wrap">
          <h1 className="board-title-h1">게시판</h1>
          <p className="board-subtitle">총 {sorted.length}건</p>
        </div>

        <div className="board-toolbar">
          <label className="board-search">
            <span className="board-search-label">검색</span>
            <input
              className="board-search-input"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="제목/내용/작성자 검색"
              inputMode="search"
            />
          </label>

          <label className="board-sort">
            <span className="board-sort-label">정렬</span>
            <select
              className="board-sort-select"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value as SortOption);
                setPage(1);
              }}
            >
              <option value="latest">최신순</option>
              <option value="oldest">오래된순</option>
            </select>
          </label>
        </div>
      </header>

      <div className="board-table-wrap" role="region" aria-label="게시판 목록">
        <table className="board-table">
          <thead>
            <tr>
              <th className="col-no" scope="col">
                No
              </th>
              <th className="col-title" scope="col">
                제목
              </th>
              <th className="col-author" scope="col">
                작성자
              </th>
              <th className="col-date" scope="col">
                작성일
              </th>
              <th className="col-views" scope="col">
                조회
              </th>
            </tr>
          </thead>
          <tbody>
            {pageItems.length === 0 ? (
              <tr>
                <td className="board-empty" colSpan={5}>
                  검색 결과가 없습니다.
                </td>
              </tr>
            ) : (
              pageItems.map((post, idx) => {
                const displayNo = sorted.length - (startIndex + idx);
                return (
                  <tr key={post.id} className="board-row">
                    <td className="col-no">{displayNo}</td>
                    <td className="col-title">
                      <button
                        type="button"
                        className="board-title-button"
                        onClick={() => window.alert(`선택한 글: ${post.title}`)}
                      >
                        {post.title}
                      </button>
                      <div className="board-preview">{post.content}</div>
                    </td>
                    <td className="col-author">{post.author}</td>
                    <td className="col-date">{post.createdAt}</td>
                    <td className="col-views">{post.views.toLocaleString()}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <footer className="board-pagination" aria-label="페이지 이동">
        <button
          type="button"
          className="board-page-btn"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={pageSafe <= 1}
        >
          이전
        </button>
        <span className="board-page-indicator">
          {pageSafe} / {totalPages}
        </span>
        <button
          type="button"
          className="board-page-btn"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={pageSafe >= totalPages}
        >
          다음
        </button>
      </footer>
    </section>
  );
}
