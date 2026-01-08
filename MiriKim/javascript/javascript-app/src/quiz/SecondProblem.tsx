// 3, 6, 9, 12, 15 를 더한 결과값 출력

export const SecondProblem = () => {
    let summation = 0;

    for (let i = 3; i <= 15; i += 3) {
        // 3에서 시작해서 3씩 커지는데, 15까지만 나와라
        summation += i;
    }


    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{`합계 = ${summation}`}</pre>
        </div>
    )
}