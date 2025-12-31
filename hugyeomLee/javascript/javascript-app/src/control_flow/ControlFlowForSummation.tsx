export const ControlFlowSummation = () => {
    let LoopResultArray = []
    let summation = 0
// 값을 누산(누적) 하려면 누적하려는 대상값에 초기값 설정이 필요합니다
// 숫자가 아닌 대상과 계산을 할 경우 NaN (Not a Number) 이라는 결과가 나오게 됩니다.
// 따라서 숫자 누산을 할 경우엔 반드시 초기값을 0으로 설정해야 합니다. (summation = 0)
// NaN 발생을 피했다 생각하면 됩니다

    for (let i = 1; i <= 3; i++) {
        LoopResultArray.push(i)
        // LoopResultArray = [1, 2, 3]
        // 배열이 요상하게 0장부터 시작함
        // 1장부터 시작하는 것이 아니기 때문에 index 0을 고려해야함
    }
    // 앞서 위의 for 루프와 마찬가지로 3번 반복하게 됩니다
    for (let i = 1; i <= 3; i++) {
        summation += LoopResultArray[i - 1]
        // summation = summation + LoopResultArray[i - 1]
        // 즉, [i - 1]을 한 이유는 배열의 인덱스가 0부터 시작하기 때문입니다
    
    }

        // i = 1 일 때
        // summation = 0(summation) + 1(loopResultArray[0])
        // ??? 왜 1을 더하지?
        // loopResultArray[i - 1] 에서 loopResultArray[1 - 1] 인데
        // loopResultArray[0] 이건 뭐지?
        // 배열의 시작 인덱스 0부터입니다.
        // 연산 이후 summation은 1이 됩니다.

        // i = 2 일 때
        // summation = 1(summation)
        // summation = 1 + 2(loopResultArray[1])
        // summation = 3

        // i = 3 일 때
        // summation = 3(summation)
        // summation = 3 + 3(loopResultArray[2])
        // summation = 6

    // summation += LoopResultArray[i - 1]
    // 잘 보면 '+=' 이라는 특이한 부분이 보입니다
    // 이는 summation = summation + LoopResultArray[i - 1] 와 동일한 표현입니다
    // 즉, summation 변수에 담긴 기존 값에다가 LoopResultArray 배열의 i-1 번째 값을 더한 후
    // 그 최종 계산된 값을 다시 summation 변수에 할당하는 작업을 수행합니다
    // '=' 왼쪽 대상과 오른쪽 대상을 합쳐서 다시 왼쪽 대상에 할당하는 작업을 수행한다고 이해하면 됩니다 
    return (
        <div>
            <h3>Javascript 제어문 (for)</h3>

            <pre>{
                `
LoopResultArray = ${LoopResultArray}
summation = ${summation}
                `
            }</pre>
        </div>
    )
}