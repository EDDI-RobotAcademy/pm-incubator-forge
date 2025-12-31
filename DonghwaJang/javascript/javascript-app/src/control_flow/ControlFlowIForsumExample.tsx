export const ControlFlowForSumExample = () => {
    let loopResultArray = []
    let summation = 0

    // 1️⃣ 배열 생성
   for (let i = 1, j = 0; j <= 2; i += 2, j++) {
	loopResultArray.push(i)
	summation += loopResultArray[j]
} 

    return (
        <div>
            <h3>javascript 제어문ex</h3>

            <pre>{`
loopResultArray = ${loopResultArray}
summation = ${summation}
            `}</pre>
        </div>
    )
}