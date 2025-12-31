// 3, 6, 9, 12, 15  를 더한 결과를 출력
export const SecondProblem = () => {
    let loopReusltArray = []
    let summation = 0

    for (let i = 3; i <= 15; i += 3) {
        loopReusltArray.push(i)
        summation += i
    }

    return (
        <div>
            <h3>javascript 두번째 퀴즈 (for)</h3>

            <pre>{
                `
loopResultArray = ${loopReusltArray}
summation = ${summation}
                `
                }</pre>
        </div>
    )
}