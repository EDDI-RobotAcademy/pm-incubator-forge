
export const ControlFlowForSumExample = () => {
    
     let loopResultArray = []
     let summation = 0
         
      for(let i = 1, j = 0; j <= 2; i += 2, j++) {
          loopResultArray.push(i)
          summation += loopResultArray[j]

          // i = 1, j = 0 일 때
          // loopResultArray = [1]
          // summation = 0 + 1(loopResultArray[0]) = 1

          // i = 3, j = 1 일 때
          // loopResultArray = [1, 3]
          // summation = 1 + 3(loopResultArray[1]) = 4

           // i = 5, j = 2 일 때
          // loopResultArray = [1, 3, 5]
          // summation = 4 + 5(loopResultArray[2]) = 9
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

