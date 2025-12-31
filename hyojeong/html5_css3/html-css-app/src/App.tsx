import './App.css'
import { ControlFlowFor } from './control_flow/ControlFlowFor'
import { ControlFlowForSumExample } from './control_flow/ControlFlowForSumExample'
import { ControlFlowForSummation } from './control_flow/ControlFlowForSummation'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { CalculationExample } from './math_operation/CalculationExample'
import { FirstProblem } from './problem/FirstProblem'
import { SecondProblem } from './problem/SecondProblem'


function App() {

  return (
  
    <div>
      <CalculationExample></CalculationExample>
      <VariableAndDataTypes></VariableAndDataTypes>
      <LogicalOperationExample></LogicalOperationExample>
      <ControlFlowIf></ControlFlowIf>
      <FirstProblem/>
      <ControlFlowFor></ControlFlowFor>
      <ControlFlowSwitch/>
      <ControlFlowForSummation/>
      <ControlFlowForSumExample/>
      <SecondProblem/>
      </div>
  )
}

export default App
