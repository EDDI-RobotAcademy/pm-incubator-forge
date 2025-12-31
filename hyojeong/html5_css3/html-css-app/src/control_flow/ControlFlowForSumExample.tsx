export const ControlFlowForSumExample = () => {
    let LoopResultArray = []
    let summation = 0
// for (초기화; 조건부; 증감부)
// 초기화를 여러 개 할 경우 내부 구분은 ',' 쉼표
// 증감부도 여러 개 존재할 경우 내부 구분 '.' 쉼표
    for (let i = 1, j = 0; j <= 2; i += 2, j++) {
        LoopResultArray.push(i)
        summation += LoopResultArray[i - 1]
    }
// i 가 2씩 증가하니까 1 3 5까지 가야 3번 돌린다...
// j 기준으로 하면 3으로 하면 됨

// i = 1, j = 0 일 때
// LoopResultArrau = [1]
// summation = 0 + 1(LoopResultArray[0]) = 1

// i = 3, j = 1  일 때
// LoopResultArrau = [1]
// summation = 1 + 3(LoopResultArray[0]) = 4

// i = 5, j = 2  일 때
// LoopResultArrau = [1, 3, 5]
// summation = 4 + 5(LoopResultArray[0]) = 9

//결과는 전부 동일 (동의어 1)
// for (Let i = 1. j = 1; j <=3; i += 2, j++) {
//      LoopResultArray.push(1)}
//      summation += LoopResultArray



    return (
        <div>
            <h3>javascript 제어문 (SumExample)</h3>

            <pre>{
            `
            LoopResultArray = ${LoopResultArray}
            summation = ${summation}

            `
    }</pre>
        </div>
    )
}