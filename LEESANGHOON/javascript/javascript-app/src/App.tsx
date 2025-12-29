import './App.css'
import { CalculationExample } from './math_operation/CalculationExample'
import { VariableAndDataType } from './data_type/VariableAndDataType'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { FirstProblem } from './problem/FirstProblem'


function App() {
  return (
    <>
      <div>
      <CalculationExample/>
      <VariableAndDataType/>
      <LogicalOperationExample/>
      <ControlFlowIf/>
      <FirstProblem/>
      </div>
    </>
  )
}

export default App
