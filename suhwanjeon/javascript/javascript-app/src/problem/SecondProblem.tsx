// 3,6,9,12,15를 더한 결과를 출력해봅시다. 
export const SecondProblem = () => {
    let loopResultArray = []
    let summation = 0

    // i = number 
    // j = count로 넣어도 되고, // 명시성이 살아나면서 더욱 직관적으로 보이게 된다. 
    // j = 인덱스적 관점 (목차, 순서 관점)

    for (let i = 3, j = 0; j <= 4; i += 3, j++) {
        loopResultArray.push(i)
        summation += loopResultArray[j]
        
    } 

    
    return (
        <div>
            <h3>javascript 제어문 예제 (for)</h3>

            <pre>{
                `
loopResultArray = ${loopResultArray}
summation = ${summation}
                `
            }</pre>
        </div>
    )
}