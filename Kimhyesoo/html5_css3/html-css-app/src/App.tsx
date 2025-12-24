//실행 방법: Terminal창에서 npm run dev
//실행 이후 나타나는 Local: http://localhost:숫자가 있음
//http://localhost:숫자 를 복사해서 웹 브라우저에 띄운채로 코드 작업하고
// 실시간으로 페이지 변경 확인
// ctrl+/ 입력하면 해당 위치에서 사용가능한 주석 자동처리
// import는 코드 끌어올 때 사용

import './App.css'
import './style/main.css'

function App() {

  return (
    <>
      <div>
        {/*h1~h5는 제목의 크기 */}
        <h1>First HTML5/CSS3</h1>
        <h2>First HTML5/CSS3</h2>
        <h3>First HTML5/CSS3</h3>
        <h4>First HTML5/CSS3</h4>
        <h5>First HTML5/CSS3</h5>
        
        {/*p는 단락표시 */}
        <p>단락 paragraph의 역할입니다.</p>
        {/*리스트(list) unordered list(순서가 X)*/}
        <ul>
          <li>리스트 1</li>
          <li>리스트 2</li>
          <li>리스트 3</li>
          <li>리스트 4</li>
        </ul>
        {/*리스트(list) ordered list(순서가 O)*/}
        <ol>
          <li>리스트 1</li>
          <li>리스트 2</li>
          <li>리스트 3</li>
          <li>리스트 4</li>
        </ol>
        {/*tailwindcss 같은 편리한 녀석들이 존재함
        html / css를 알고 쓰는 것과 차이가 있음 */}

        <div className="box">
          <h2>CSS 속성 적용</h2>
          <p>CSS는 HTML요소를 스타일링 하기 위한 목적으로 사용</p>
          {/*a href의 경우엔 하이퍼링크 거는 부분 */}
          {/*target='blank'은 새로운 창에서 띄우는 것 의미 */}
          <a href='https://www.w3schools.com/' target='blank'>
          HTML / CSS 학습 사이트
          </a>
        </div>

        <div className="box">
          <h2>표 만들기</h2>
          <p>표는 데이터를 행과 열로 표현</p>
          {/* 표 만들 때 초기 테이블 툴 */}
          <table>
             {/* 표 제목*/}
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
            {/* 이름 필드를 식별할 수 있는 id값(name) 입력 타입 문자 */}
            <input type='text' id='name' name='name'/>
            {/* 개행 (엔터) */}
            <br/>

            {/* 입력타입 이메일 */}
            <label htmlFor='email'>이메일</label>
            <input type='email' id='email' name='email'/>
            <br/>

            {/* 버튼생성 - 타입이 submit이기 때문에 클릭하면 액션 발생 */}
            <button type='submit' className='custom-button'>제출</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
