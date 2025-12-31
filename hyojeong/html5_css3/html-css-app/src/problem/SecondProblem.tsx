export const SecondProblem = () => {
    let LoopResultArray = []
    let summation = 0

    let number = 3;
    let count = 0;
// 3, 6, 9, 12, 15  더한 결과값 출력하기
    for (; count <= 4; number += 3, count++) {
        LoopResultArray.push(number)
        summation += LoopResultArray[count]
    }

// j <=4 ; 5회 돌 거니까 4를 넣음

    return (
        <div>
            <h3>Second Problem 3,6,9,12,15 더한 결과 출력해보기</h3>

            <pre>{
            `
            LoopResultArray = ${LoopResultArray}
            summation = ${summation}

            `
    }</pre>
        </div>
    )
}