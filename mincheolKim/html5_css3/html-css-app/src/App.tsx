import './style/main.css'
import './App.css'

// 실행 방법: npm run dev
// 실행 이후 나타나는 Local: http://localhost:숫자/ 가 있음
// http://localhost:숫자/ 접속
// 맨 처음 숫자는 5173으로 나오는데 만약 5173이 이미 사용 중이라면 5174, 5175... 순으로 올라감

// 그리고 현재 구성 특성 상 웹 브라우저를 그냥 켜놓고
// 코드만 바꾸면 페이지가 자동으로 새로고침 된다.

// HTML (HyperText Markup Language)
// 하이퍼텍스트 마크업 언어
// 웹 페이지를 만들기 위한 언어
// 문서의 구조를 정의하고 내용을 표시하는 데 사용

// Ctrl + / 를 누르면 자동으로 특성 위치에서 사용할 수 있는 주석이 만들어짐
function App() {

  return (
    <>
      <div>
        {/* h1 태그는 제목을 표시할 때 사용합니다. */}
        {/* 숫자 크기에 따라 사이즈가 조정됩니다. */}
        <h1>First HTML/CSS3</h1>
        <h2>First HTML/CSS3</h2>
        <h3>First HTML/CSS3</h3>
        <h4>First HTML/CSS3</h4>
        <h5>First HTML/CSS3</h5>
        <h6>First HTML/CSS3</h6>

        {/* 주석 */}
        {/* 실제 여러 사람들과 개발 할 때 내 머릿속의 생각이 공유되지 않기 때문 */}
        <p>단락 paragraph의 역할이다.</p>

        {/* 리스트(list) */}
        {/* ul = unordered list: 순서가 없는 리스트 */}
        <ul>
          <li>리스트 1</li>
          <li>리스트 2</li>
          <li>리스트 3</li>
        </ul>

        {/* ol = ordered list: 순서가 있는 리스트 */}
        <ol>
          <li>리스트 1</li>
          <li>리스트 2</li>
          <li>리스트 3</li>
        </ol>

        {/* tailwindcss 같은 편리한 녀석들이 존재함 */}
        {/* CSS (Cascading Style Sheets): 캐스케이딩 스타일 시트 */}
        {/* html / css를 알고 쓰는 것과 차이가 있긴 함 */}
        <div className="box">
          <h2>CSS 속성 적용</h2>
          <p>CSS는 HTML 요소를 스타일링 하기 위한 목적으로 사용.</p>
          
          {/* a href의 경우엔 하이퍼링크를 거는 부분 */}
          {/* 그렇기 때문에 HTML/CSS 학습 사이트'를 누르면 특정 사이트로 이동함 */}
          <a href='https://www.w3schools.com' target='_blank'>
          HTML / CSS 학습 사이트
          </a>
        </div>

        <div className="box">
          <h2> 표 만들기 </h2>
          <p>표는 데이터를 행과 열로 표현</p>

          {/* table 태그는 표 전체를 감싸는 태그 */}
          {/* 표를 만들 때 초기 테이블 틀 */}
          <table>
            {/* thead는 표의 헤더(제목) 부분을 정의 */}
            <thead>
              {/* tr은 테이블의 행(row)을 정의 */}
              <tr>
                <th>첫 번째 제목 열</th>
                <th>두 번째 제목 열</th>
                <th>세 번째 제목 열</th>
              </tr>
            </thead>

            {/* tbody는 표의 본문 부분을 정의 */}
            <tbody>
              <tr>
                {/* 열: td는 테이블의 데이터 셀을 정의 */}
                <td>데이터 1-1</td>
                <td>데이터 1-2</td>
                <td>데이터 1-3</td>
              </tr>
              <tr>
                <td>데이터 2-1</td>
                <td>데이터 2-2</td>
                <td>데이터 2-3</td>
              </tr>
              <tr>
                <td>데이터 3-1</td>
                <td>데이터 3-2</td>
                <td>데이터 3-3</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="box">
          <h2>Form(형식)</h2>
          <p>Form 형식은 데이터를 입력할 수 있는 형태</p>

          <form>
            {/* label - 이름 필드 */}
            <label htmlFor='name'>이름</label>
            {/* 이름 필드를 식별할 수 있는 id값(name) 입력 타입이 문자 */}
            <input type='text' id='name' name='name'/>
            {/* 개행(엔터) */}
            <br/>

            <label htmlFor='email'>이메일</label>
            {/* 입력 타입이 이메일 타입 */}
            <input type='email' id='email' name='email'/>
            <br/>

            {/* 버튼 생성 - 타입이 submit이기 때문에 클릭하면 뭔가 액션이 발생할 수 있음 */}
            <button type='submit' className='custom-button'>
              제출
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
