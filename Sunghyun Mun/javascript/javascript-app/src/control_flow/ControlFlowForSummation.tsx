export const ControlFlowForSummation = () => {
    let loopResultArray = []
    // 값을 누산(누적) 하려면 누적하려는 초기 대상값에 초기값 설정이 필요함
    // 숫자가 아닌 대상과 계산을 할 경우 NaN (Not a Number)
    // 그렇기 대문에 summation에 0을 지정하여
    // NaN 발생을 피했다 생각하면 됨
    let summation = 0

    for (let i = 1; i <= 3; i++) {
        loopResultArray.push(i)
        // loopResultArray = [1, 2, 3]
        // 배열이 요상하게 0부터 시작함
        // 1장 부터 시작하는 것이 아니기 때문에 index 0을 고려해야함     
    }

    // 앞서 위의 for 루프와 마찬가지로 3번을 반복하게 됨
    for (let i = 1; i <= 3; i++) {
        // summation = summation + loopResultArray[i - 1]
        // 즉 [i - 1]을 한 이유는 시작이 0이기 때문임
        summation += loopResultArray[i - 1]

        // i = 1 일 때
        // summation = 0 + 1
        // 왜 1을 더할까?
        // loopResultArray[i - 1] 에서 loopResultArray[1 - 1] dlsep
        // loopResultArray[0] 이건 뭘까?
        // 배열 시작 인덱스 0부터 임
        // 연산 이후 summation은 1이 됨

        // i = 2 일 때
        // summation = 1(summation)
        // summation = 1 + 2(loopResultArray[1])
        // summation = 3

        // i = 3 일 때
        // summation = 3(summation)
        // summation = 3 + 3(loopResultArray[2])
        // summation = 6
    }


    // summation += loopResultArray[i - 1]
    // 잘 보면 '+=' 이라는 특이한 부분이 보임
    // 해당 파트는 아래와 같이 분해할 수 있음
    // '=' 왼쪽 대상과 오른쪽 대상을 합쳐서 왼쪽 대상에 대입
    // summation = summation + loopResultArray[i - 1]

    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
                `
loopReusltArray = ${loopResultArray}
summation = ${summation}                
                `
            }</pre>
        </div>
    )
}