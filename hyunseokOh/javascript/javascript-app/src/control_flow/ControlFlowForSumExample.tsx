export const ControlFlowForSumExample = () => {
    let loopResultArray = [];// 결과를 저장할 배열
    let summation = 0; // 합계를 저장할 변수

    for (let i = 1; i <= 5; i+=2) {// 1부터 5까지 반복
        loopResultArray.push(i);
        summation += loopResultArray[loopResultArray.length - 1]; // 배열 요소들을 합산
    }

    return (
        <div>
            <h2>Control Flow For Example</h2>
            <pre>{`
loopResultArray = ${loopResultArray}; // for 문 결과 저장
summation = ${summation}; // 배열 요소들의 합계 저장
            `
            }</pre>        
        </div>
    )
}