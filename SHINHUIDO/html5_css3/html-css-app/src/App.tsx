import './style/main.css'
import './App.css'

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
    
        <p>단락 paragraph의 역할입니다.</p>
        {/* 리스트(list) */}
        <ul>
           <li>리스트 1</li>
           <li>리스트 2</li>
           <li>리스트 3</li>
        </ul>
        <div className="box">
          <h2>CSS 속성 적용</h2>
          <p>CSS는  HYML요소를 스타일링 하기 위한 목적으로 사용</p>
          <a href='https://www.w3schools.com/' target="_blank">
            HTML / CSS 학습 사이트
          </a>
        </div>
        
      <div className="box">
           <h2>표 만들기</h2>
          <p>표는 데이터를 행과 열로 표현</p>
          <table>
            <thead>
              <tr>
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
          <h2>Form(형식)</h2>
          <p>Form 형식은 데이터를 입력할 수 있는 형태</p>
          
          <form>
            <label htmlFor='name'>이&nbsp;&nbsp;&nbsp;름</label>
            <input type='text' id='name' name='name' />
            <br/>
            <label htmlFor='email'>이메일</label>
            <input type='email' id='email' name='email' />
            <br/>
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