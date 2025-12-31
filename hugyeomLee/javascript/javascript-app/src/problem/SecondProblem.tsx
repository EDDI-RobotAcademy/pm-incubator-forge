export const SecondProblem = () => {
    // 3, 6, 9, 12, 15를 더한 결과를 출력해봅시다.
    let LoopResultArray = []
    let summation = 0

    let i = 3;
    // i 는 더해가고 싶은 숫자 즉 number
    let j = 0;
    // j 는 i를 몇 번 더하고 싶은지 즉 index

    for (; j <= 4; i += 3, j++) {
        LoopResultArray.push(i)
        summation += LoopResultArray[j]
    }

    return (
        <div>
            <h3>Javascript 제어문 (for)</h3>

            <pre>{
                `
LoopResultArray = ${LoopResultArray}
summation = ${summation}
                `
            }</pre>
        </div>
    )
}
