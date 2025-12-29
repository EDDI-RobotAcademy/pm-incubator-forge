import './App.css'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { CalculationExample } from './math_operation/CalculationExample'


function App() {

  return (    
    <>
      <div>
        {/* 여러분들만의 커스텀 태그 생성 */}
        {/* 이 커스텀 태그는 단순히 사칙연산 + 나머지(MOD) 연산 */}
        {/* 지저분해지는 상황을 방지할 수 있습니다. */}
        {/* 관심사의 분리를 달성할 수 있음 */}
        <CalculationExample/>
        <VariableAndDataTypes/>
        <LogicalOperationExample/>
        <ControlFlowIf/>
      </div>
    </>
  )
}
export default App
