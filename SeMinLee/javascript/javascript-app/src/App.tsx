import './App.css'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { CalculationExample } from './math_operation/CalculationExample'

function App() {

  return (
    <>
    <div>
      {/*커스텀 태그 생성*/}
      <CalculationExample />
      <VariableAndDataTypes />
    </div>
    </>
  )
}

export default App
