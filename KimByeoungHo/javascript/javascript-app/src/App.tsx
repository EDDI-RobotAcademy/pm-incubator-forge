import { CalculationExample } from './math_operation/CalculationExample'
import './App.css'

function App() {
 
  return (
    <>
      <div>
        {/* 여러분들만의 커스텀 태그 생성 */}
        {/* 이 커스텀 태그는 단순히 사칙연산 + 나머지(MOD) 연산 */}
        <CalculationExample/>
      </div>
    </>
  )
}

export default App
