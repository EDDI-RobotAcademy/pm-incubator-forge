export const ControlFlowSummation = () => {
    let loopResultArray = []
// 값을 누적시키기 위해서는 초기값 설정이 필요
// 누적 합계를 저장할 변수를 0으로 초기화

    let summation = 0;

    for (let i = 1; i <= 3; i++) {
        loopResultArray.push(i)
    }

    for (let i = 1; i <= 3; i++) {


        summation += loopResultArray[i - 1];
// summation = summation + loopResultArray[i - 1];
// [i-1] : 배열의 인덱스는 0부터 시작하기 때문에 i에서 1을 뺀 값을 인덱스로 사용

    }

    return (
        <div>
            <h3> javascript 제어문 (for) </h3>

         <pre>{

                `
                loopResultArray = [${loopResultArray}]
                summation = ${summation}
                `
            }</pre>
        </div>
    )
}