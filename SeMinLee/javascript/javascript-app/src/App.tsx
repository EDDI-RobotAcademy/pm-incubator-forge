import './App.css'
import { ControlFlowFor } from './control_flow/ControlFlowFor'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { ControlFlowSumExample } from './control_flow/ControlFlowSumExample'
import { ControlFlowSummation } from './control_flow/ControlFlowSummation'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { CalculationExample } from './math_operation/CalculationExample'
import { FirstProblem } from './problem/FirstProblem'

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
    </div>
    </>
  )
}

export default App
