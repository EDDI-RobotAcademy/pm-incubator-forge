export const ControlFlowSummation = () =>{
   let loopResultArray = []
   //값을 누산(누적)하려면 누적하려는 대상값에 초기값 설정이 필요합니다.
   //초기값설정:숫자가 아닌 대상과 계산을 할 경우 NaN(Not a number)
   //때문에 summation에 0을 지정하여 NaN발생을 막음
   let summation = 0

    for(let i = 1; i<=3; i++){
    loopResultArray.push(i)
    //index0을 고려해야함
    }

    //앞서 위의 for루프와 마찬가지로 3번 반복하게 됩니다
    for(let i = 1; i<=3; i++){
    summation += loopResultArray[i-1]
    }
    // 위의 '+='는 아래와 같이 분해할 수 있습니다
    //'=' 왼쪽 대상과 오른쪽 대상을 합쳐서 왼쪽 대상에 대입
    // 즉, summation += loopResultArray[i-1] 는
    // summation = summation+loopResultArray[i-1] 이라는 뜻.

    return(
     <div>
        <h3>자바스크립트 제어문 (sum)</h3>

        <pre>{
         `
    loopResultArray = ${loopResultArray}
    summation = ${summation}
      
         `   
         }</pre>
     </div>
    )
    

}