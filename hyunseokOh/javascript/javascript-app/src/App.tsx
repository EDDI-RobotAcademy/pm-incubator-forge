import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CalculationExample } from './math_operation/CalculationExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* 커스텀 컴포넌트 */}
        <CalculationExample/>
      </div>
    </>
  )
}

export default App
