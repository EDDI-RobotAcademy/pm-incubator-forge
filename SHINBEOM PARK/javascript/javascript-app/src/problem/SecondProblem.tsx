// 3, 6, 9, 12, 15 를 더한 결과를 출력하라.
export const SecondProblem = () => {
    let summation = 0;

    for (let i = 3; i <= 15; i += 3) {
        summation += i;
    }


    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
                `
합계 = ${summation}
                `
            }</pre>
        </div>
    )
}