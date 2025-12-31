// 3, 6, 9, 12, 15 를 더한 결과를 출력해봅시다.
export const SecondProblem = () => {
    let loopResultArray = []
    let summation = 0

    for (let i = 3, j = 0; j <= 4; i += 3, j++) {
        loopResultArray.push(i)
        summation += loopResultArray[j]
}

    // let number =3;
    // let count = 0;
    // for (; count <=4; number += 3, count++) {
    //      loopResultArray.push(number)
    //      summation += loopResultArray[count]

    return (
        <div>
            <h3>javascript 두번째 퀴즈 (for)</h3>

            <pre>{
                `
loopResultArray = ${loopResultArray}
summation = ${summation}
                `
            }</pre>
        </div>
    )
}