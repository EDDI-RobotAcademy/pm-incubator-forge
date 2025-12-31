import './App.css'
import { CalculationExample } from './math_operation/CalculationExample'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import {FirstProblem} from './problem/FirstProblem'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'
import { ControlFlowFor } from './control_flow/ControlFlowFor'
import { ControlFlowForSummation } from './control_flow/ControlFlowForSummation'
import { ControlFlowForSumExample } from './control_flow/ControlFlowForSumExample'

function App() {


  return (
    <>
      <div>
        <CalculationExample/>
        {/* 나만의 커스텀 태그 생성 */}
        {/* 이 커스텀 태그는 단순히 사칙연산+나머지(MOD) 연산 */}
        {/* 여러개의 연산을 태그 하나로 정리 */}
        {/* 이러한 직접 커스텀 태그를 만들면 지저분해지는 상황 방지 가능 */}
        {/* 관심사의 분리 달성 가능 */}
        {/* 같은 걸 여러번 반복하여 재사용 가능! */}
        <VariableAndDataTypes/> 
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
