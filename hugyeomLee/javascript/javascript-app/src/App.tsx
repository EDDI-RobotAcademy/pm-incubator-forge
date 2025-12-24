import './App.css'
import { CalcuationExample } from './math_operation/CalculationExample'

function App() {

  return (
    <>
      <div>
       {/* 여러분들만의 커스텀 태그를 생성 */}
       {/* 이 커스텀 태그는 단순히 사칙연산 +  */}
       {/* CalculationExample로 복잡한 연산을 치환하여 하나의 태그로 처리 
       - 여러개 연산 -> 태그 하나로 */}
       {/* 이와 같은 형태로 직접 커스텀 태그를 만들면 
       지저분해지는 상황을 방지할 수 있습니다 */}
       {/* 관심사의 분리를 달성할 수 있음 */}
       <CalcuationExample/>
      </div>
    </>
  )
}

export default App
