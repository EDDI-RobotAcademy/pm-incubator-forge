// 3, 6, 9, 12, 15 를 더한 결과를 출력

export const SecondProblem = () => {
    
     let loopResultArray = []
     let summation = 0
     
        //  Case 1
      for(let i = 3; i <= 15; i += 3) { 
          loopResultArray.push(i)
          summation += i

        // for (초기식; 조건식; 증감식)
        // Case 2
        //  for(let i = 3, j= 0; j <= 4; i += 3, j++) { 
        //   loopResultArray.push(i)
        //   summation += loopResultArray[j]

        // Case 3
        // let i = 3;
        // let count = 0;
        // for (;count <= 4; number += 3, count++) {
        // loopResultArray.push(number)
        // summation = loopResultArray[count] 
        // }
     }
  
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

