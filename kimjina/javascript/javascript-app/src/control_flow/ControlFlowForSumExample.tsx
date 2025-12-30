export const ControlFlowForSumExample = () => {
    let loopResultArray = []
    let summation = 0
    
    // 상수값 같은 경우 고정하는게 좋고, 상황에 따라 바꿔야 한다면 let
    // for (초기화; 조건부; 증감부;)
    // 초기화를 여러 개 존재할 경우 내부 구분은 ',' 쉼표로 함
    // 증감부도 여러 개 존재할 경우 내부 구분을 ',' 쉼표로 함
    for (let i = 1, j = 0; j <= 2; i += 2, j++) {
        loopResultArray.push(i)
        summation += loopResultArray[j]
        // (해석) i = 1, j = 0 일때
        // loopResultArray = [1]
        // summation = 0 + 1(loopResultArray[0]) = 1

        // (해석) i = 3, j = 1 일때
        // loopResultArray = [1, 3]
        // summation = 1 + 3(loopResultArray[1]) = 4

        // (해석) i = 5, j = 2 일때
        // loopResultArray = [1, 3, 5]
        // summation = 4 + 5(loopResultArray[2]) = 9


    }
    // 결과는 전부 동일함 (동의어 1)
    // for(let i = 1, j =1; j <=3; i += 2, j++) {
    // loopResultArray.push(i)
    //  summation += loopResultArray[j - 1] 
    // }

    // 결과는 전부 동일함 (동의어 2)
    // for(let i = 1, j =1; i <= 5; i += 2, j++) {
    // loopResultArray.push(i)
    //  summation += loopResultArray[j - 1] 
    // }
return (
    <div>
        <h3> javascript 제어문 (for)</h3>

        <pre>{
             `
loopResultArray = ${loopResultArray}
summation = ${summation}
             `   
            }</pre>
    </div>
   )
}