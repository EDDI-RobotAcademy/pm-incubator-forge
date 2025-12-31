//3,6,9,12,15 를 더한 결과를 출력하시오.
export const SecondProblem = () =>{
   let loopResultArray = []
   let summation = 0

   //j기준(인덱스count) 4 i기준(값number)은 15?맞았당
    for(let i = 3, j=0; j<=4; i+=3, j++){
    loopResultArray.push(i)
    summation += loopResultArray[j]
    
    }

    
    return(
     <div>
        <h3> 자바스크립트 ControlForSum (문제) </h3>

        <pre>{
         `
    loopResultArray = ${loopResultArray}
    summation = ${summation}
      
         `   
         }</pre>
     </div>
    )
    

}