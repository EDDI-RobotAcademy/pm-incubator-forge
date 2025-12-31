export const ControlFlowForSumExample = () => {
    let loopResultArray = []
    let summation = 0

    for (let i = 1, j = 0; j <= 2; i+=2, j++) {
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