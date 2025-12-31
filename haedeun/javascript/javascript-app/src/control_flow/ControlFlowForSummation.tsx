export const ControlFlowForSummation = () => {
    let loopResultArray = []
    // 값을 누산(누적) 하려면 누적하려는 대상값에 초기값 설정이 필요
    // 숫자가 아닌 대상과 계산을 할 경우 Nan (Not a Number)
    // 그렇기 때문에 summation에 0을 지정하여
    // NaN 발생을 피했다 생각하면 됨.
    let summation = 0

    for (let i = 1; i <= 3; i++){
        loopResultArray.push(i)
        // loopResultArray = [1, 2, 3]
        // 1장부터 시작하는 것이 아니기 때문에 index 0을 고려해야 함
}
// 앞서 위의 for 루프와 마찬가지로 3번 반복하게 됨
    for (let i = 1; i <= 3; i++){
        // summation = summation +loopResultArray[i - 1]
        // 즉 [i - 1]을 한 이뉴는 시작이 0이기 때문
        summation += loopResultArray[i - 1]

        // i = 1 일 때
        // summation = 0 + 1
        // ???? 왜 1을 더하지?
        // loopResultArray[i - 1] 에서 loopResultArray[i - 1] 인데
        // loopResultArray[0] 이건 뭐지?
        // 배열의 시작 인덱스는 0부터
        // 연산 이후 summation은 1이 됨

        // i = 2 일 때
        // summation = 1(summataion)
        // summation = 1 + 2(loopResultArray[1])
        // summation = 3

        // i = 3 일 때
        // summation = 3(summation)
        // summation = 3 + 3(loopResultArray[2])
        // summation = 6
}


// summation += loopResultArray[i -1]
// 잘 보면 '+=' dlfksms xmrdlgks qnqnsdl qhdla.
// 해당 파트는 아래와 같이 분해 가능
// '=' 왼쪽 대상과 오른쪽 대상을 합쳐서 왼쪽 대상에 대입
// summation = summaion + loopResultArray[i - 1]

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