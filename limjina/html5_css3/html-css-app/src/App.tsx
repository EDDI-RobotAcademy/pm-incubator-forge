import './App.css'

import { CalculationExample } from './math_operation/CalculationExample' 
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './Logical_operation/LogicalOperationExample'
import { ControlFlowIf } from './control_flow/ControlFlowf'
import { ControlFlowSwitch } from './control_flow/ControlFlowfSwitch'
import { ControlFlowFor } from './control_flow/ControlFlowFor'
import { ControlFlowForSummation } from './control_flow/ControlFlowForSummation'
import { SecondProblem } from './Problem/SecondProblem'
// 실행 방법: npm run dev
// 실행 이후 나타나는 Local: http://localhost:숫자/ 가 있음
// http://localhost:숫자/ 를 웹 브라우저에 입력해야 페이지가 보입니다.

// 그리고 현재 구성 특성 상 웹 브라우저를 그냥 켜놓고
// 코드만 바꾸면 알아서 페이지가 코드에 따라 변경됩니다.

// Ctrl + / 를 누르면 자동으로 특정 위치에서 사용할 수 있는 주석이 만들어짐
function App() {

  return (
    <>
      <div>
      <CalculationExample/>
      <VariableAndDataTypes/>
      <LogicalOperationExample/>
      <ControlFlowIf/>
      <ControlFlowSwitch/>
      <ControlFlowFor/>
      <ControlFlowForSummation/>
      <SecondProblem/>
      </div>
    </>
  )
}

export default App
