import './App.css'
import './style/main.css'

// 실행 방법: npm run dev
// 실행 이후 나타나는 Local: httt://localhost:5173/ 가 있음
// http://localhost:5173/를 웹 브라우저에 입력해야 페이지가 보입니다.

//그리고 현재 구성 특성 상 웹 브라우저를 그냥 켜놓고
// 코드만 바꾸면 알아서 페이지가 코드에 따라 변경됩니다.

// Ctrl + / 를 누르면 자동으로 특정 위치에서 사용할 수 있는 주석이 만들어짐
function App() {

  return (
    <>
      <div>
        {/* h1 태그는 제목을 표시할 때 사용합니다 */}
        {/* 숫자 크기에 따라 사이즈가 조정됩니다. */}
        <h1>First HTML5/CSS3</h1>
        <h2>First HTML5/CSS3</h2>
        <h3>First HTML5/CSS3</h3>
        <h4>First HTML5/CSS3</h4>
        <h5>First HTML5/CSS3</h5>
        <h6>First HTML5/CSS3</h6>
        {/* 주석 */}
        {/* 실제 여러 사람들과 개발 할 때 내 머리속의 생각이 공유되지 않기 때문 */}
        <p>단락 paragraph의 역할입니다.</p>

        {/*리스트(list)*/}
        {/* ul = unordered list */}
        <ul>
          <li>리스트1</li>
          <li>리스트2</li>
          <li>리스트3</li>
          <li>리스트4</li>
        </ul>

        {/* ol = ordered list */}
        <ol>
          <li>리스트1</li>
          <li>리스트2</li>
          <li>리스트3</li>
          <li>리스트4</li>
        </ol>

        {/* tailwindss 같은 편리한 녀석들이 존재함 */}
        {/* html / css를 알고 쓰는 것과 차이가 있긴함 */}
        <div className="box">
          <h2>CSS 속성 적용</h2>
          <p>CSS는 HTML요소를 스타일링 하기 위한 목적으로 사용</p>

          {/* a href의 경우엔 하이퍼링크를 거는 부분 */}
          {/* 그렇기 때문에 'HTML/CSS 학습 사이트'를 누르면 해당 사이트로 이동함 */}
          <a href='https://www.w3schools.com/' target= " _balnk">
          HTML / CSS 학습 사이트
          </a>
        </div>
        
        <div className='box'>
          <h2>표 만들기</h2>
          <p>표는 데이터를 행과 열로 표현</p>
          {/* 표를 만들 때 초기 테이블 툴 */}
          <table>
            {/* 표 내에서 제목에 해당하는 파트 구성 */}
            <thead>
              {/* 행 */}
              <tr>
                {/* 제목 열 */}
                <th>첫 번째 제목 열</th>
                <th>두 번째 제목 열</th>
              </tr>
            </thead>

            {/* 테이블 내용 */}
            <tbody>
              <tr>
                {/* 열 */}
                <td>데이터 1</td>
                <td>데이터 2</td>
              </tr>
            </tbody>
          </table>
        </div>
             <div className="box">
        <h2>Form(형식)</h2>
        <p>Form 형식은 데이터를 입력할 수 있는 형태</p>

        <form>
          {/* 레이블 - 이름 필드 */}
          <label htmlFor='name'>이&nbsp;&nbsp;&nbsp;름</label>
          {/* 이름 필드를 식별할 수 있는 id 값(name) 입력 타임이 문자 */}
          <input type='text' id='name' name='name'/>
          {/* 개행(엔터) */}
          <br/>

          <label htmlFor='email'>이메일</label>
          {/* 입력 타임이 이메일 타입 */}
          <input type='email' id='email' name='email'/>
          <br/>

          {/* 버튼 생성 - 타입이 submit이기 때문에 클릭하면 액션이 발생할 수 있음 */}
          <button type="submit" className='custom-button'>
            제출
          </button>
        </form>
        </div>
      </div>
    </>
  )
}

export default App 
