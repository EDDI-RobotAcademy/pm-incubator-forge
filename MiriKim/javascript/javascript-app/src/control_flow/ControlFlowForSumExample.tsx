export const ControlFlowForSumExample = () => {
    let loopResultArray = [];
    let summation = 0;

    for (let i = 1, j = 1; i <= 5; i += 2, j++) {
        // i는 1부터 시작해서 2씩 커지는데 5까지만 반복함 -- 그동안 j는 1씩 커짐
        // (i=1 j=0) (i=3 j=1) (i=5 j=2)
        loopResultArray.push(i);
        summation += loopResultArray[j - 1];
    }

    // 같은 값 1
    // for (let i = 1, j = 0; j <= 2; i += 2, j++) 
    //     loopResultArray.push(i)
    //     summation += loopResultArray[j]
    // 같은 값 2
    // for (let i = 1, j = 1; j <= 3; i += 2, j++)

    console.log(summation)
    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
                `
loopResultArray = [${loopResultArray}]
summation = ${summation}
                `
            }</pre>
        </div>
    )
}
