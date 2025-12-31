// 3, 6, 9, 12, 15 를 더한 결과를 출력해봅시다.
export const SecondProblem = () => {
    let loopResultArray = []
    let summation = 0

    let number = 3;
    let count = 0;

    for (; count <= 4; number += 3, count++) {
        loopResultArray.push(number)
        summation += loopResultArray[count]
    }

    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
                `
loopReusltArray = ${loopResultArray}
summation = ${summation}                
                `
            }</pre>
        </div>
    )
}