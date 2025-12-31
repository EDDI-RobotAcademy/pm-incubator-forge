export const ControlFlowForSumExample = () => {
    let loopResultArray = []
    let summation = 0

    // j 기준에서는 2
    // i 기준에서는 5로 지정하면 됨
    for (let i = 1, j = 0; j <= 2; i += 2, j++) {
        loopResultArray.push(i)
        summation += loopResultArray[j]
    }

    // 결과는 전부 동일 
    // j 기준 (동의어 1)
    // for (let i = 1, j = 1; i <= 3; i += 2, j++) {
    //     loopResultArray.push(i)
    //     summation += loopResultArray[j-1]
    // }

    // i 기준 (동의어 2)
    // for (let i = 1, j = 1; i <= 5; i += 2, j++) {
    //     loopResultArray.push(i)
    //     summation += loopResultArray[j-1]
    // }

    return (
        <div>
            <h3>javascript 제어문 (summation - example)</h3>

            <pre>{
                `
loopResultArray = ${loopResultArray}
summation = ${summation}
                `
            }</pre>
        </div>
    )
}