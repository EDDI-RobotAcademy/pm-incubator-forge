export const SecondProblem = () => {
    let loopResultArray = []
    let summation = 0

    // 1️⃣ 배열 생성
   for (let i = 3; i <= 15; i+=3) {
	loopResultArray.push(i)
	summation += i
} 

    return (
        <div>
            <h3>SecondProblem</h3>

            <pre>{`
loopResultArray = ${loopResultArray}
summation = ${summation}
            `}</pre>
        </div>
    )
}