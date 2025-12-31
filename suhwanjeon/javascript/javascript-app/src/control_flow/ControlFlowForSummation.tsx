export const ControlFlowForSummation = () => {
    let loopResultArray = []
    // 값을 누산(누적)하려면 누적하려는 대상값에 초기값 설정이 필요합니다.
    // 숫자가 아닌 대상과 계산을 할 경우 NaN (Not a Number)
    // 그렇기 때문에 summation에 0을 지정하여
    // NaN 발생을 피했다 생각하면 됩니다. 
    let summation = 0

    // 앞서 위의 for 루프와 마찬가지로 3번 반복하게 됩니다.     
    for (let i = 1; i <= 3; i++) {
        loopResultArray.push(i)
        // loopResultArray = [1, 2, 3]
    }

    for (let i = 1; i <= 3; i++) {
        // summation = summation + loopResultArray[i - 1]
        summation += loopResultArray[i - 1]
    }

    // i = 1 일 때 
    // summation = 0 + 1 
    /// ??? 왜 1을 더하지? 
    // loopResultArray [i - 1] 에서 looseResultArray[1 - 1] 인데
    // loopResultArray[0] 이건 뭐지?
    // 배열의 시작 인덱스 0부터 입니다. 
    // 연산 이후 summation은 1이 됩니다. 

    // i = 2 일 때
    // summation = 1(summation)
    // summation = 1 + 2(loopResultArray[1])
    // summation = 3

    // i = 3 일 때 
    // summation = 3 (summation)
    // summation = 3 + 3(loopResultArray[2])
    // summation = 6 
    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
                `
loopResultArray = ${loopResultArray}
summation = ${summation}
                `
            }</pre>
        </div>
    )
}