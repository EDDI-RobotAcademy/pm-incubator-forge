export const ControlFlowForSummation = () => {
    let LoopResultArray = []
    let summation = 0

    for (let i = 1; i <= 3; i++) {
        LoopResultArray.push(i)
    }

    for (let i = 1; i <= 3; i++) {
        summation += LoopResultArray[i - 1]
    }

    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
            `
            LoopResultArray = ${LoopResultArray}
            summation = ${summation}

            `
    }</pre>
        </div>
    )
}