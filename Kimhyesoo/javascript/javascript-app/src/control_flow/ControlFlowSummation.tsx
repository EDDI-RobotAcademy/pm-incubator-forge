export const ControlFlowSummation = () => {
    let loopResultArray = []
    // 값을 누산(누적)하려면 누적하려는 대상값에 초기값 설정이 필요
    // 숫자가 아닌 대상과 계산을 할경우 Nan(Not a Number)
    // 그렇기 때문에 summation 정의하여 NaN 발생경우 제거
    let summation = 0;

    for( let i =1; i<=3; i++){
        loopResultArray.push(i)
    }
    
    for( let i =1; i<=3; i++){
        // summation = summation + loopResultArray[i-1]
        summation +=loopResultArray[i - 1]
    }

    return(
        <div>
            <h3>Javascript 제어문(summation)</h3>
            <pre>{
            `
            loopResultArray = ${loopResultArray}
            summation = ${summation}
            ` 
            }</pre>
        </div>
    )
}