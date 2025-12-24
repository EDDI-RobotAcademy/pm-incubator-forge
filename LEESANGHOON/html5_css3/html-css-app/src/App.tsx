import './style/main.css'
import './App.css'


function App() {

  return (
    <>
    <div>
      <h1>First HTML5/CSS3</h1>
      <h2>First HTML5/CSS3</h2>
      <h3>First HTML5/CSS3</h3>
      <h4>First HTML5/CSS3</h4>
      <h5>First HTML5/CSS3</h5>
      <h6>First HTML5/CSS3</h6>
      <p>단락 paragraph의 역할입니다.</p>

      {/* 리스트(list) */}


      <ul>
        <li>리스트 1</li>
        <li>리스트 2</li>
        <li>리스트 3</li>
        <li>리스트 4</li>
      </ul>

      <ol>
        <li>리스트 1</li>
        <li>리스트 2</li>
        <li>리스트 3</li>
        <li>리스트 4</li>
      </ol>

      {/* a href 는 하이퍼링크 거는 부분 */}
      <div className = "box">
        <h2>CSS 속성 적용 </h2>
        <p>CSS는 HTML 요소를 스타일링 하기 위한 목적으로 사용</p>
        <a href ="https://www.w3schools.com/" target = "black">
          HTML / CSS 학습 사이트
        </a>
      </div>

        <div className ="box">
          <h2>표 만들기</h2>
          <p>표는 데이터를 행과 열로 표현</p>
          {/* 표를 만들 때 초기 테이블 틀 */}
          <table>
            {/* 표 내에서 제목에 해당하는 파트 구성 */}
            <thead>
              {/* 행 */}
              <tr>
                {/* 제목 열 */}
                <th>첫번째 제목 열</th>
                <th>두번째 제목 열</th>
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

        <div className ="box">
          <h2>Form(형식)</h2>
          <p>Form 형식은 데이터를 입력할 수 있는 형태</p>
          <form>
            {/* 레이블 - 이름 필드 */}
            <label htmlFor = "name">이&nbsp;&nbsp;&nbsp;름</label>
            {/* 이름 필드를 식별할 수 있는 id 값(name) 입력 타입이 문자 */}
            <input type = "text" id = "name" name = "name"/>
            {/* 개행 엔터 */}
          <br/>
            <label htmlFor = "email">이메일</label>
            {/* 입력 타입이 이메일 타입 */}
            <input type = "email" id = "email" name = "email"/>
          <br/>
          {/* 버튼 생성 - 타입이 submit 이기 때문에 클릭하면 액션이 발생할 수 있음 */}
          <button type = "submit" className ="custom-button">
            제출
          </button>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
