//  3, 6, 9, 12 ,15를 더한 결과를 출력해봅시다.

export const SecondProblem = () => {
    let loopResultArray = []
    let summation = 0

    let i = 3
    let j = 0
    for (; j <= 4; i+=3, j++) {
        loopResultArray.push(i)
        summation += loopResultArray[j]
    }
    
    return (
        <div>
            <h3>15보다 작은 3의 양의 배수들의 합</h3>

            <pre>{
                ` 
loopResultArray = ${loopResultArray}
summation = ${summation}
                `
            }</pre>
        </div>
    )
}

