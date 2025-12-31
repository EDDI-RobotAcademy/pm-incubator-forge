// 3 6 9 12 15 더한 결과 출력

export const SecondProblem = () =>{

    let loopResultArray = []
    let summation = 0

for (let i = 3, j = 0; i < 16; i += 3, j++) {
        loopResultArray[j] = i
        summation += loopResultArray[j]
    }

    

return(
    <div>
    <h3>javascript 문제2 (for)</h3>
        <pre>{
    `
loopResultArray = ${loopResultArray}
summation = ${summation}
    `
        }</pre>
    </div>
)
}