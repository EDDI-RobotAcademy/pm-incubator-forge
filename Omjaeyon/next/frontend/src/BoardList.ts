import { mockBoardData, type BoardPost } from './MockData';

export function createBoardList(): HTMLElement {
  const boardContainer = document.createElement('div');
  boardContainer.className = 'board-container';

  // 게시판 헤더
  const header = document.createElement('div');
  header.className = 'board-header';
  header.innerHTML = `
    <h1>게시판</h1>
    <button id="write-btn" class="write-button">글쓰기</button>
  `;
  boardContainer.appendChild(header);

  // 게시판 테이블
  const table = document.createElement('table');
  table.className = 'board-table';
  
  // 테이블 헤더
  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th class="col-id">번호</th>
      <th class="col-title">제목</th>
      <th class="col-author">작성자</th>
      <th class="col-date">작성일</th>
      <th class="col-views">조회수</th>
      <th class="col-likes">좋아요</th>
    </tr>
  `;
  table.appendChild(thead);

  // 테이블 바디
  const tbody = document.createElement('tbody');
  mockBoardData.forEach((post: BoardPost) => {
    const row = document.createElement('tr');
    row.className = 'board-row';
    row.innerHTML = `
      <td class="col-id">${post.id}</td>
      <td class="col-title">
        <a href="#" class="post-link" data-id="${post.id}">${post.title}</a>
      </td>
      <td class="col-author">${post.author}</td>
      <td class="col-date">${post.createdAt}</td>
      <td class="col-views">${post.views}</td>
      <td class="col-likes">${post.likes}</td>
    `;
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  boardContainer.appendChild(table);

  // 이벤트 리스너 추가
  boardContainer.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('post-link')) {
      e.preventDefault();
      const postId = target.getAttribute('data-id');
      if (postId) {
        showPostDetail(parseInt(postId));
      }
    }
    if (target.id === 'write-btn' || target.closest('#write-btn')) {
      alert('글쓰기 기능은 추후 구현 예정입니다.');
    }
  });

  return boardContainer;
}

function showPostDetail(postId: number): void {
  const post = mockBoardData.find(p => p.id === postId);
  if (post) {
    const detailHtml = `
      <div class="post-detail">
        <div class="post-header">
          <h2>${post.title}</h2>
          <button class="close-btn" id="close-detail">닫기</button>
        </div>
        <div class="post-info">
          <span>작성자: ${post.author}</span>
          <span>작성일: ${post.createdAt}</span>
          <span>조회수: ${post.views}</span>
          <span>좋아요: ${post.likes}</span>
        </div>
        <div class="post-content">
          ${post.content}
        </div>
      </div>
    `;
    
    const app = document.querySelector<HTMLDivElement>('#app');
    if (app) {
      app.innerHTML = detailHtml;
      
      const closeBtn = document.getElementById('close-detail');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          initBoard();
        });
      }
    }
  }
}

export function initBoard(): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (app) {
    app.innerHTML = '';
    const boardList = createBoardList();
    app.appendChild(boardList);
  }
}
