// 3, 6, 9, 12, 15를 더한 결과를 출력해보자.

export const SecondProblem = () => {
    let loopResultArray = []
    let summation = 0

    // 내가 작성한 코드
    // for (let i = 1; i <= 5; i++) {
    //     loopResultArray.push(i*3)
    //     summation += loopResultArray[i-1]
    // }

    // 모범 답안
    let number = 3;
    let count = 0;

    for (; count < 5; number += 3, count++) {
        loopResultArray.push(number);
        summation += loopResultArray[count]
    }

    return (
        <div>
            <h3>javascript 제어문 (summation - SecondProblem)</h3>

            <pre>{
                `
loopResultArray = ${loopResultArray}
summation = ${summation}
                `
            }</pre>
        </div>
    )
}