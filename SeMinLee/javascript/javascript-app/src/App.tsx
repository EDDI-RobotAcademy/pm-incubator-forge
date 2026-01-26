import './App.css'
import { ArraySliceExample } from './array/ArraySliceExample'
import { ArraySpliceExample } from './array/ArraySpliceExample'
import { ControlFlowFor } from './control_flow/ControlFlowFor'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { ControlFlowSumExample } from './control_flow/ControlFlowSumExample'
import { ControlFlowSummation } from './control_flow/ControlFlowSummation'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { MapExample } from './map/MapExample'
import { MapFilterExample } from './map/MapFilterExample'
import { MapReduceExample } from './map/MapReduceExample'
import { CalculationExample } from './math_operation/CalculationExample'
import { FirstProblem } from './problem/FirstProblem'
import { SecondProblem } from './problem/SecondProblem'

function App() {

  return (
    <>
    <div>
      {/*커스텀 태그 생성*/}
      <CalculationExample />
      <VariableAndDataTypes />
      <LogicalOperationExample />
      <ControlFlowIf />
      <FirstProblem />
      <ControlFlowSwitch />
      <ControlFlowFor />
      <ControlFlowSummation />
      <ControlFlowSumExample />
      <SecondProblem />
      <MapExample />
      <MapReduceExample />
      <MapFilterExample />
      <ArraySliceExample />
      <ArraySpliceExample />
    </div>
    </>
  )
}

export default App
