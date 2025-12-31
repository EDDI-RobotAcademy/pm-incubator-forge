import './App.css'
import { FirstProblem } from './problem/FirstProblem'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { CalcuationExample } from './math_operation/CalculationExample'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'
import { ControlFlowFor } from './control_flow/ControlFlowFor' 
import { ControlFlowSummation } from './control_flow/ControlFlowForSummation' 
import { SecondProblem } from './problem/SecondProblem'
import { ControlFlowForSumExample } from './control_flow/ControlFlowForSumExample'

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
       {/* 제대로 된 태그를 만들어 놓으면 복붙으로 재사용 가능 */}
       <CalcuationExample/>
       <LogicalOperationExample/>
       <VariableAndDataTypes/>
        <ControlFlowIf/>
        <FirstProblem/>
        <ControlFlowSwitch/>
        <ControlFlowFor/>
        <ControlFlowSummation/>
        <ControlFlowForSumExample/>
        <SecondProblem/>
      </div>
    </>
  )
}

export default App
