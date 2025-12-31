// 3, 6, 9, 12, 15 를 더한 결과 출력

export const SecondProblem = () => {
    let loopResultArray = []
    let summation = 0;

    for (let i = 1, j = 0; i <= 5; i ++, j++) {
        loopResultArray.push(i*3)
        summation += loopResultArray[j];
    }

    return (
        <div>
            <h3> for문 문제 출력 (for) </h3>

         <pre>{

                `
                loopResultArray = [${loopResultArray}]
                summation = ${summation}
                `
            }</pre>
        </div>
    )
}