import './App.css'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { CalculationExample } from './math_operation/CalculationExample'

function App() {

  return (
    <>
      <div>
        {/* 나만의 커스텀 태그 생성 */}
        {/* 이 커스텀 태그는 단순히 사칙연산 + 나머지(MOD) 연산 */}
        {/* 커스텀 태그를 사용하면 코드가 간결해짐 */}
        {/* 관심사의 분리를 달성할 수 있음 - 원하는 기능이 있는 태그만 볼 수 있다. */}
        <CalculationExample />
        <VariableAndDataTypes />
      </div>
    </>
  )
}

export default App
