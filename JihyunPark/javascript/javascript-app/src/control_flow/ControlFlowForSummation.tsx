export const ControlFlowForSummation = () => {
    let loopResultArray = []
    // 값을 누산(누적)하려면 누적하려는 대상값에 초기값 설정이 필요함
    // 숫자가 아닌 대상과 계산을 할 경우 NaN(Not a Number) 발생
    // 그렇기 때문에 summation의 초기값을 0으로 설정해서
    // NaN 발생을 피했다 생각하면 됨
    let summation = 0

    for (let i = 1; i <= 3; i++) {
        loopResultArray.push(i)
        // loopResultArray[1,2,3]
    }

    // 앞서 위의 for 루프와 마찬가지로 3번 반복하게 됨
    for (let i = 1; i <= 3; i++) {
        // summation = summation + loopResultArray[i - 1]
        // 즉 [i-1]을 한 이유는 시작이 0이라서!
        summation += loopResultArray[i - 1]

        // i가 1일 때
        // summation = 0 + 1
        // ?? 왜 1을 더하지?
        // 배열 시작 인덱스가 0부터 시작하기 때문
        // 연산 이후 summation은 1이 됨

        // i = 2
        // summation = 1(summation)
        // summation = 1 + 2(loopResultArray[1])
        // summation = 3
        
        // i = 3
        // summation = 3(summation)
        // summation = 3 + 3(loopResultArray[2])
        // summation = 6
    }

    // sumation += loopResultArray[i - 1]
    // 잘 보면 += 라는 특수한 연산자가 보임
    // 해당 파트는 아래와 같이 분해할 수 있음
    // '=' 왼쪽 대상과 오른쪽 대상을 더한 후
    // 그 결과를 '=' 왼쪽 대상에 대입 한다는 의미
    // summation = summation + loopResultArray[i - 1]

    return (
        <div>
            <h3>javascript 제어문 (summation)</h3>

            <pre>{
                `
loopResultArray = ${loopResultArray}
summation = ${summation}
                `
            }</pre>
        </div>
    )
}