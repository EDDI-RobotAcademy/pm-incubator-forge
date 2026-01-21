import './App.css'
import { ArraySliceExample } from './array/ArraySliceExample'
import { ArraySpliceExample } from './array/ArraySpliceExample'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { MapExample } from './map/MapExample'
import { MapFilterExample } from './map/MapFIlterExample'
import { MapReduceExample } from './map/MapReduceExample'
import { CalculationExample } from './math_operation/CalculationExample'
import { FirstProblem } from './problem/FirstProblem'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'
import { ControlFlowFor } from './control_flow/ControlFlowFor'
import { ControlFlowSummation } from './control_flow/ControlFlowSummation'
import { ControlFlowForSumExample } from './control_flow/ControlFlowForSumExample'
import { SecondProblem } from './problem/SecondProblem'


function App() {

  return (
    <>
      <div>
        {/* 여러분들만의 커스텀 태그 생성 */}
        {/* 이 커스텀 태그는 단순히 사칙연상 + 나머지(MOD) 연산 */}
        {/* 이와 같은 형태로 직접 커스텀 태그를 만들면
            지저분해지는 상황을 방지할 수 있습니다.  */}
        {/* 관심사의 분리를 달성할 수 있음. */}
        <CalculationExample/>
        <VariableAndDataTypes/>
        <LogicalOperationExample/>
        <ControlFlowIf/>
        <FirstProblem/>

        {/* 결석 부분 복습 */}
        <ControlFlowSwitch/>
        <ControlFlowFor/>
        <ControlFlowSummation/>
        <ControlFlowForSumExample/>

        <SecondProblem/>
        <MapExample/>
        <MapReduceExample/>
        <MapFilterExample/>
        <ArraySliceExample/>
        <ArraySpliceExample/>
      </div>
    </>
  )
}

export default App
