import React, { useState } from 'react'
import './App.css'
import './style/main.css' 

// 실행 방법: npm run dev 
// 실행 이후 나타나는 Local:http://localhost:숫자/ 가 있음
// http://localhost:숫자/ 를 웹 브라우저에 입력해야 페이지가 보입니다.

// 그리고 현재 구성 특성 상 웹 브라우저를 그냥 켜놓고
//코드만 바꾸면 알아서 페이지가 코드에 따라 변경됩니다. 

// Cmd + / 를 누르면 자동으로 특정 위치에서 사용할 수 있는 주석이 만들어짐 
function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [errors, setErrors] = useState({ name: false, email: false, phone: false, address: false })
  const [error, setError] = useState(false)

  const validateEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
  const validatePhone = (s: string) => {
    const digits = s.replace(/\D/g, '')
    return digits.length >= 7 && digits.length <= 15
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = {
      name: name.trim() === '',
      email: !validateEmail(email),
      phone: !validatePhone(phone),
      address: address.trim() === ''
    }
    setErrors(newErrors)
    const hasError = Object.values(newErrors).some(Boolean)
    setError(hasError)

    if (!hasError) {
      setError(false)
      alert('폼이 정상적으로 제출되었습니다!')
      setName('')
      setEmail('')
      setPhone('')
      setAddress('')
    }
  }

  return (
    <>
      <div>
        {/* h1 태그는 제목을 표시할 때 사용합니다 */}
        {/* 숫자 크기에 따라 사이즈가 조정됩니다. */}
      <h1>First HTML5/CSS3</h1>
      <h2>Second HTML5/CSS3</h2>
      <h3>Third HTML5/CSS3</h3>
      <h4>Fourth HTML5/CSS3</h4>
      <h5>Fifth HTML5/CSS3</h5>
      <h6>Sixth HTML5/CSS3</h6>

      {/* 주석 */}
      {/* 주석을 다는 이유: 여러 사람들과 개발 할 때 내 머리속의 생각이 공유되지 않기 때문 */}
      {/* 시간이 지나더라도 해당 파트가 무엇인지 기록을 해두기 위해 사용함. */}
      <p>단락 paragraph의 역할입니다.</p>
      
      {/* 리스트(List) */}
      {/* ul = unorded list = 순서 없는 리스트 */}
      <ul>
        <li>리스트 아이템 1</li>
        <li>리스트 아이템 2</li>
        <li>리스트 아이템 3</li>
      </ul>

      {/* ol = ordered list = 순서 있는 리스트 */}
      <ol>
        <li>순서 있는 리스트 아이템 1</li>
        <li>순서 있는 리스트 아이템 2</li>
        <li>순서 있는 리스트 아이템 3</li>
      </ol>

{/* tailwindcss 같은 편리한 녀석들이 존재함 */}
{/* html / css를 열고 쓰는 것과 차이가 있긴함 */}
<div className="box">
    <h2> CSS 속성 적용 </h2>
    <p>CSS는 HTML 요소를 스타일링 하기 위한 목적으로 사용</p>
    
    {/* a href의 경우엔 하이퍼링크를 거는 부분 */}
    {/* 그렇기 때문에 'HTML/CSS 학습사이트'를 누르면 특정 사이트로 이동함 */}
    <a href='https://www.w3schools.com' target="_blank">
      HTML / CSS 학습 사이트 
      </a>
   </div>
 
 <div className="box">
    <h2>표 만들기 </h2> {/* 표 만들기에 쓰는 기호들 꼭 익히기 */}
    <p>표는 데이터를 행과 열로 표현</p>
    <table>
      <thead>
        <tr>
          <th>첫 번째 제목 열 </th>
          <th>두 번째 제목 열 </th>
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
  
          <form onSubmit={handleSubmit} noValidate>
            {error && (
              <p className="error-message" role="alert" aria-live="assertive">
                올바르게 작성해주세요
              </p>
            )}

            {/* 레이블 - 이름 필드 */}
            <label htmlFor="name">이&nbsp;&nbsp;&nbsp;름:</label>
            {/* 이름 필드를 식별할 수 있는 id값(name) 입력 타입이 문자 */}
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? 'invalid' : ''}
            />
            {/*개행(엔터) */}
            <br />
            <label htmlFor="email">이메일:</label>
            {/* 입력 타입이 이메일 타입 */}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'invalid' : ''}
            />
            <br />
            <label htmlFor="phone">전화번호:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={errors.phone ? 'invalid' : ''}
            />
            <br />
            <label htmlFor="address">주소:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={errors.address ? 'invalid' : ''}
            />
            <br />

            {/* 버튼 생성 - 타입이 submit이기 때문에 클릭하면 뭔가 액션이 발생할 수 잇음 */}
            <button type="submit" className='custom-button'>
              제출
            </button>
          </form>
          </div>
        </div>  {/* <-- 누락된 최상위 div 닫기 추가 */}
      </>
  );     {/* <-- return 닫는 괄호 추가 */}
}       {/* <-- 함수 닫는 중괄호 추가 */}

export default App
