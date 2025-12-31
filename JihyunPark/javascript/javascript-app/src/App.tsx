import './App.css'
import { ControlFlowFor } from './control_flow/ControlFlowFor'
import { ControlFlowForSumExample } from './control_flow/ControlFlowForSumExample'
import { ControlFlowForSummation } from './control_flow/ControlFlowForSummation'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'
import { VariableAndDataType } from './data_type/VariableAndDataType'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { CalCulationExample } from './math_operation/CalculationExample' 
import { FirstProblem } from './Problem/FirstProblem'

function App() {

  return (
    <>
      <div>
        {/* 여러분들만의 커스텀 태그 생성 */}
        {/* 이 커스텀 태그는 단순히 사칙연산 + 나머지(MOD)연산 */}
        {/* 이와 같은 형태로 직접 커스텀 태그를 만들면
            지저분해지는 상황 막기 가능 */}
        <CalCulationExample/>
        <VariableAndDataType/>
        <LogicalOperationExample/>
        <ControlFlowIf/>
        <FirstProblem/>
        <ControlFlowSwitch/>
        <ControlFlowFor/> 
        <ControlFlowForSummation/>
        <ControlFlowForSumExample/>
        </div>
    </>
  )
}

export default App
