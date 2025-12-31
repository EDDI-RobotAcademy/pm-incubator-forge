import './App.css'
import { VariableAndDataTypes } from './data_type/VariableAndDataType'
import { CalculationExample } from './math_operation/CalculationExample'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { FirstProblem } from './problem/FirstProblem'
import { ControlFlowSwitch } from './control_flow/ControlFlowIfSwitch'
import { ControlFlowFor } from './control_flow/ControlFlowFor'
import { ControlFlowForSummation } from './control_flow/ControlFlowForSummation'
import { ControlFlowForSummationExample } from './control_flow/ControlFlowForSummationExample'
import { SecondProblem } from './problem/SecondProblem'


// 실행 방법: npm run dev
// 실행 이후 나타는 Local: https://localhost:숫자/가 있음
// http://localhost:숫자/ 를 웹 브라우저에 입력

// 그리고 현재 구성 특성 상 웹 브라우저를 켜놓고
// 코드만 바꾸면 알아서 페이지가 코드에 따라 변경됨

function App() {

  return (
    <>
      <div>
        {/* 커스텀 태그 생성 */}
        {/* 이 커스텀 태그는 단순히 사칙연사 + 나머지(MOD) 연산 */}
        {/* 이와 같은 형태로 직접 커스텀 태그를 만들면 
            지저분해지는 상황을 방지할 수 있습니다. */}
        {/* 관심사의 분리를 달성할 수 있음 */}
        <CalculationExample/>
        <VariableAndDataTypes/>
        <LogicalOperationExample/>
        <ControlFlowIf/>
        <FirstProblem/>
        <ControlFlowSwitch/>
        <ControlFlowFor/>
        <ControlFlowForSummation/>
        <ControlFlowForSummationExample/>
        <SecondProblem/>
      </div>
    </>
  )
}

export default App
