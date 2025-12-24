import './App.css'
import './styles/main.css'

function App() {

  return (
    <>
      <div>
        <h1>Hello, World!</h1>
        <h2>Hello, World!</h2>
        <h3>Hello, World!</h3>
        <h4>Hello, World!</h4>
        <h5>Hello, World!</h5>

        <p>단락 paragraph의 역할입니다.</p>


        {/* 리스트(List) */}

        {/* ul= unordered list */}
        <ul>
          <li>리스트 1</li>
          <li>리스트 2</li>
          <li>리스트 3</li> 
          <li>리스트 4</li>
          <li>리스트 5</li>
        </ul>

         {/* ol= ordered list */}
        <ol>
          <li>리스트 1</li>
          <li>리스트 2</li>
          <li>리스트 3</li> 
          <li>리스트 4</li>
          <li>리스트 5</li>
        </ol>

        {/* tailwindcss 같은 편리한 녀석들이 존재함 */}
        {/* html / css를 알고 쓰는 것과 차이가 있긴 함 */}
        <div className="box">
          <h2>CSS 속성 적용</h2>
          <p>CSS는 HTML을 스타일링 하기 위한 목적으로 사용</p>

          {/*a href의 경우엔 하이퍼링크 거는 부분 */}
          {/*target='blank'은 새로운 창에서 띄우는 것 의미 */}
          <a href="https://www.w3schools.com/" target='_blank'>
          CSS / HTML 학습사이트
          </a>
        </div>
        <div className="box">
          <h2>표 만들기</h2>
          <p>표는 데이터를 행과 열로 표현</p>
          {/* 표를 만들 때 초기 테이블 틀 */}
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

        <div className = "box">
            <h2>Form(형식)</h2>
            <p>Form 형식은 데이터를 입력 할 수 있는 형태</p>

            <form>
              {/* 레이블 - 이름 필드 */}
              <label htmlFor="name">
                이
                &nbsp;&nbsp;&nbsp;
                름
                </label>
              {/* 이름 필드를 식별할 수 있는 id 값 (name) 입력 타입이 문자 */}
              <input type="text" id='name' name='name'/>
              <br />

              <label htmlFor="email">이메일</label>
              {/* 입력 타입이 이메일 타입 */}
              <input type="email" id='email' name='email'/>
              <br />

              {/* 버튼 생성 - 타입이 submit이기 때문에 클릭하면 뭐가 액션이 발생할 수 있음 */}
              <button type="submit" className="custom-button">
                제출
              </button>
            </form>
          </div>
      </div>
    </>
  )
}

export default App
