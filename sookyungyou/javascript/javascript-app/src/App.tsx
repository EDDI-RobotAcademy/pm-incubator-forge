import './App.css'
import { CalculationExample } from './math_operation/CalculationExample'

function App() {


  return (
    <>
      <div>
        <CalculationExample/>
        {/* 나만의 커스텀 태크 생성 */}
        {/* 이 커스텀 태그는 단순히 사칙연산+나머지(MOD) 연산 */}
      </div>
    </>
  )
}

export default App
