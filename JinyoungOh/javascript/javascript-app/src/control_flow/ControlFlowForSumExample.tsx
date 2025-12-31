export const ControlFlowForSumExample = () => {
    let loopReusltArray = []
    let summation = 0

    for (let i = 1, j = 1; i <= 5; i += 2, j++) {
        loopReusltArray.push(i)
        summation += loopReusltArray[j - 1]
    }

    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
                `
loopResultArray = ${loopReusltArray}
summation = ${summation}
                `
                }</pre>
        </div>
    )
}