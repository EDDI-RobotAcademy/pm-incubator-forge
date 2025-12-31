// 3, 6, 9, 12, 15 를 더한 결과를 출력해봅시다.
export const SecondProblem = () => {
    let loopResultAlrray = []
    let summation = 0

    let number = 3;
    let count = 0;
 
    for (; count <= 4; number += 3, count++) {
        loopResultAlrray.push(number)
        summation += loopResultAlrray[count]
    }

    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
            `
loopResultArray = ${loopResultArray}
summation = ${summation}            
            `
             } </pre>
        </div>
    )
}