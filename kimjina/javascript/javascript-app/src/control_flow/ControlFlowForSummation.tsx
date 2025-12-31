export const ControlFlowForSummation = () => {
    let loopResultArray = []
    // 값을 누산(누적) 하려면 누적하려는 대상값에 초기값 설정이 필요하다
    // 숫자가 아닌 대상과 계산을 할 경우 NaN(Not a Number)
    // 그렇기 때문에 summation에 0을 지정하여 
    // NaN 발생을 피했다 생각하면 된다.
    let summation = 0
    

    for (let i = 1; i <= 3; i++) {
        loopResultArray.push(i)
    }

    for (let i = 1; i <= 3; i++) {
        summation += loopResultArray[i - 1]

        
    }
    
return (
    <div>
        <h3> javascript 제어문 (for)</h3>

        <pre>{
             `
loopResultArray = ${loopResultArray}
summation = ${summation}
             `   
            }</pre>
    </div>
   )
}