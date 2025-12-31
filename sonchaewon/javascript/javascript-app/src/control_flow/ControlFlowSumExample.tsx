export const ControlFlowSumExample = () =>{
   let loopResultArray = []
   let summation = 0

   //j기준에서는 2
   //i기준에서는 5
    for(let i = 1, j=0; j<=2; i+=2, j++){
    loopResultArray.push(i)
    summation += loopResultArray[j]
    
    }

    
    return(
     <div>
        <h3> 자바스크립트 제어문 (sumex) </h3>

        <pre>{
         `
    loopResultArray = ${loopResultArray}
    summation = ${summation}
      
         `   
         }</pre>
     </div>
    )
    

}