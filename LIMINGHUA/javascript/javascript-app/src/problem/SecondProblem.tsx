// 3, 6, 9, 12, 15를 더한 결과를 출력해봅시다.

export const SecondProblem = () => {
    let loopResultArray = []
    let summation = 0

    let number = 3;
    let count = 0;

    for (; count <= 4; number += 3, count++) {
        loopResultArray.push(number)
        summation += loopResultArray[count]
        // i = 3, j = 0 일 때
        // loopResultArray = [3]
        // summation = 0 + 3(loopResultArray = [0]) = 3

        // i = 6, j = 1 일 때
        // loopResultArray = [3 , 6]
        // summation = 3 + 6(loopResultArray = [1]) = 9

        // i = 9, j = 2 일 때
        // loopResultArray = [3, 6, 9]
        // summation = 9 + 9(loopResultArray = [2]) = 18
    }

    return (
        <div>
            <h3>javascript 두번째퀴즈(for)</h3>
            
            <pre>{
                `
loopResultArray = ${loopResultArray}
summation = ${summation}
                `
            }</pre>
        </div>
    )
}