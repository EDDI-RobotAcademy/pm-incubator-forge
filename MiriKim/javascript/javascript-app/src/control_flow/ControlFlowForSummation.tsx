export const ControlFlowForSummation = () => {

    let loopResultArray = [];
    let summation = 0;
    // loop 하려는 대상의 초기값 설정 (NaN 오류 없도록)

    for (let i = 1; i <= 3; i++) {
        loopResultArray.push(i);
        // loopResultArray = [1,2,3]
        // Array는 0부터 시작함 :: 모든 양수
        // index 0을 고려해야함
    }

    for (let i = 1; i <= 3; i++) {
        summation += loopResultArray[i - 1];
        // Array는 정수 1부터 시작하는게 아니기 때문에, 0에서 시작하려고 -1 해줌

        // i = 1 일 때
        // summation = 0 + 1
        
        // i = 2 일 때
        // summation = 1(summation)
        // summation = 1 + 2(loopResultArray[1])
        // summation = 3

        // i = 3 일 때
        // summation = 3(summation)
        // summation = 3 + 3(loopResultArray[2])
        // summation = 6
    }


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