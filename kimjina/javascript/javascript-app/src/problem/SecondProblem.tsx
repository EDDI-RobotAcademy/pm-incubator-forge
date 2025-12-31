export const SecondProblem = () => {
    //3, 6, 9, 12, 15 를 더한 결과를 출력해봅시다.
 let loopResultArray = []
    let summation = 0
    
    let number = 3;
    let count = 0; 
    // let number = 3;
    // let count = 0; 로 변환 가능
    for (; count <= 4; number += 3, count++){
        loopResultArray.push(number)
        summation += loopResultArray[count]
    }
// for (let i = 3; i <= 15; i += 3)도 가능
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