export const ControlFlowForSumExample = () => {
  let loopResultArray = []
  let summation = 0

  // for (초기화; 조건부; 증감부)
  // 초기화를 여러 개 할 경우 내부 구분은 ',' 쉼표로 합니다.
  // 증감부도 여러 개 존재할 경우 내부 구분을 ',' 쉼표로 합니다.

  // i 기준에서는 2
  // j 기준에서는 5로 지정하면 됩니다.
  for (let i = 1, j = 1; i <= 5; i+= 2, j++) {
      loopResultArray.push(i)
      summation += loopResultArray[j - 1]
      // i = 1, j = 0 일 때
      // loopResultArray = [1]
      // summation = 0 + 1(loopResultArray[1]) = 4

      // i = 3, j = 1 일 때
      // loopResultArray = [1, 3]
      // summation = 1 + 3(loopResultArray[1]) = 4

      // i = 5, j = 2 일 때
      // loopResultArray = [1, 3, 5]
      // summation = 4 + 5(loopResultArray[2]) = 9
  }

  // 결과는 전부 동일합니다. (동의어1)
  // for (let i = 1, j = 1; j<= 3; i += 2; J++) {
  //      loopResultArray.push(i)
  //      summation += loopResultArray[j - i]
  // )

  // 결과는 전부 동일합니다. (동의어2)
  // for (let i = 1, j = 1; i<= 5; i += 2; J++) {
  //      loopResultArray.push(i)
  //      summation += loopResultArray[j - i]
  // )

  
  return (
      <div>
          <h3>javascript 제어문 (for)</h3>

          <pre>{
              ` 
loopResultArray = ${loopResultArray}
summation = ${summation}
              ` 
          }</pre>
      </div>
    )
}