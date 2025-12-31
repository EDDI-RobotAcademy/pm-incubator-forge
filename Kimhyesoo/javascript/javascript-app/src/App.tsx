import './App.css'
import {CalculationExample} from './math_operation/CalculationExample'
import  {VariableAndDataTypes} from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { FirstProblem } from './problem/FirstProblem'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'
import { ControlFlowFor } from './control_flow/ControlFlowFor'
import { ControlFlowSummation } from './control_flow/ControlFlowSummation'
import { ControlFlowForSumExample } from './control_flow/ControlFlowForSumExample'




function App() {

  return (
    <>
      <div>
        {/* 여러분들만의 커스텀 태그 생성 */}
        {/* 이 커스텀 태그는 단순히 사칙연산 + 나머지(MOD) 연산 */}
        {/* 이와 같은 형태로 직접 커스텀 태그를 만들면 지저분 해지는 상황을 방지 */}
        {/* 관심사의 분리를 달성할 수 있음 */}
        <CalculationExample/>
        <VariableAndDataTypes/>
        <LogicalOperationExample/>
        <ControlFlowIf/>
        <FirstProblem/>
        <ControlFlowSwitch/>
        <ControlFlowFor/>
        <ControlFlowSummation/>
        <ControlFlowForSumExample/>
      </div>
    </>
  )
}

export default App
