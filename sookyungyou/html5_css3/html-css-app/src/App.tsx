import './style/main.css'
import './App.css'

//실행방법: npm run dev
//실행 이후 나타나는 local: http://localhost:숫자/ 가 있음
//http://localhost:숫자/를 웹브라우저에 입력해야 페이지 보임

//그리고 현재 구성 특성 상 웹브라우저 그냥 켜놓고
//코드만 바꾸면 알아서 페이지가 코드에 따라서 변경됨 
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

        {/*ctr+/: 주석 */}
        {/* 실제로 사람들과 개발 진행 시 내 생각 공유x */}
        {/* 시간이 지나도 해당 파트가 무엇인지 기록하기 위해 사용 */}
        <p>단락 paragraph의 역할입니다.</p>
        {/* 리스트 (list) */}
        <li>리스트1</li>
        <li>리스트2</li>
        {/* ul: unordered list */}
        <ul>
          <li>리스트1</li>
          <li>리스트2</li>
          <li>리스트3</li>
         </ul>
         {/* ol: ordered list */}
         <ol>
          <li>리스트1</li>
          <li>리스트2</li>
          <li>리스트3</li>
         </ol>
         
        {/* tailwindcss 같은 편한 것 있음 */}
        {/* html / css를 알고 쓰는 것과 차이가 있음 */}
        <div className="box">
          <h2>CSS 속성 적용</h2>
          <p>CSS는  HTML요소를 스타일링 하기 위한 목적으로 사용</p>
          <a href='https://www.w3schools.com/'target="_blank">
            HTML / CSS 학습 사이트 
          </a>
        </div>

        <div className="box">
          <h2>표 만들기</h2>
          <p>표는 데이터를 행과 열로 표현</p>

          {/* 표 만들 때 초기 테이블 틀 */}
          <table>
            {/* 표 내에서 제목에 해당하는 파트 구성 */}
            <thead>
              {/* 행 */}
              <tr>
                {/* 제목 열*/}
                <th>첫 번째 제목 열</th>
                <th>두 번째 제목 열</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>데이터 1</td>
                <td>데이터 2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="box">
          <h2>Form (형식)</h2>
          <p>Form 형식은 데이터를 입력할 수 있는 형태</p>

          <form>

            <label htmlFor='name'>이름 </label>
            {/* 레이블-이름필드*/}

            <input type='text' id='name' name='name'/>
            {/* 이름 필드를 식별할 수 있는 id값(name) 입력 타입이 문자 */}

            <br/>
            {/* 개행 (엔터) */}

            <label htmlFor='email'>이메일 </label>
            

            <input type='email' id='email' name='email'/>
            {/* 입력타입이 이메일 타입 */}

            <br/>
            {/* 개행 (엔터) */}

            <button type="submit" className='custom-button'>
              제출
            {/* 버튼생성 타입이 submit이기 때문에 클릭하면 액션 발생  */}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
