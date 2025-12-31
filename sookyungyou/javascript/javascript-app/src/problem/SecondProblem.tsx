export const ControlFlowForSumExample = () => {
   let LoopResultArray = []
   let summation = 0
   
   // for (초기화; 조건부; 증감부)
   // 초기화 여러 개 할 경우 내부 구분은 ',' 쉼표로 함
   // 증감부 여러 개 존재할 경우 내부 구분을 ',' 쉼표로 함

   for (let i = 1, j = 0; j <= 2; i+=2, j++) {
        LoopResultArray.push(i)
        summation += LoopResultArray[j]
        // i = 1, j = 0 일 떄
        // LoopResultArray = [1]
        // summation = 0 + 1(LoopResultArray[0]) = 1

        // i = 1 + 2(i+=2) = 3, j = 0 + 1(j++) = 1 일 떄
        // LoopResultArray = [1, 3]
        // summation = 1 + 3(LoopResultArray[1]) = 4

        // i = 3 + 2(i+=2) = 5, j = 1 + 1(j++) = 2 일 떄
        // LoopResultArray = [1, 3, 5]
        // summation = 4 + 5(LoopResultArray[2]) = 9
         
   }

  // 결과는 전부 동일 (동의어1)
  // for (let i = 1, j = 1; j <= 3; i += 2, j++) {
  //      LoopResultArray.push(i)
  //      summation += LoopResultArray[j-1]
  //  }

  // 결과는 전부 동일 (동의어2)
  // for (let i = 1, j = 1; i <= 5; i += 2, j++) {
  //      LoopResultArray.push(i)
  //	  summation += loopResultArray[j-1]
  // } 


   
    return (
        <div>
            <h3>javascript 제어문 (for)</h3>
            
            <pre>{
                `
LoopResultArray = ${LoopResultArray} 
summation = ${summation}

                `        
    
             }</pre>
        </div>
    )
}