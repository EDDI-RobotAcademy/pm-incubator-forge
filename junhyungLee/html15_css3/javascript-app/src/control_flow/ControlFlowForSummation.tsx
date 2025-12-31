
export const ControlFlowSummation = () => {
    
     let loopResultArray = []
     // 값을 누적 하려면 누적하려는 대상값에 초기값 설정이 필요
     // 숫자가 아닌 대상과 계산을 할 경우 NaN
     // summation에 0을 지정
     // NaN 발생을 방지

     let summation = 0

     for(let i = 1; i <= 3; i++) {
          loopResultArray.push(i)
          // loopResulyArray = [1,2,3]
     
     }

      for(let i = 1; i <= 3; i++) {
          summation += loopResultArray[i - 1]

          // i = 1 일 때
          // summation = 0 + 1
          // 배열의 시작 인덱스는 0부터
          // i = 2 일 떄
          // summation = 1 + 2
          // i = 3 일 때
          // summation = 3 + 3 
     
     }
     // summation = summation + loopResultArray [i - 1]
     // '=' 왼쪽 대상과 오른쪽 대상을 합쳐서 왼쪽 대상에 대입
     


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

