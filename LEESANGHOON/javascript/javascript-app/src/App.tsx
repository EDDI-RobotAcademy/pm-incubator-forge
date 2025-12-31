import './App.css'
import { CalculationExample } from './math_operation/CalculationExample'
import { VariableAndDataType } from './data_type/VariableAndDataType'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { FirstProblem } from './problem/FirstProblem'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'
import { ControlFlowFor } from './control_flow/ControlFlowFor'
import { ControlFlowForSummation } from './control_flow/ControlFlowForSummation'
import { ControlFlowForSumExample } from './control_flow/ControlFlowForSumExample'


function App() {
  return (
    <>
      <div>
      <CalculationExample/>
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
