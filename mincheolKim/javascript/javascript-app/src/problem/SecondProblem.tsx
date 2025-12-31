// 3, 6, 9, 12, 15를 더한 결과를 출력해봅시다.
export const SecondProblem = () => {
    let loopResultArray = []
    let summation = 0

    for (let i = 3, j = 0; j <= 4; i += 3, j++) {
        loopResultArray.push(i)
        summation += loopResultArray[j]
    }

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