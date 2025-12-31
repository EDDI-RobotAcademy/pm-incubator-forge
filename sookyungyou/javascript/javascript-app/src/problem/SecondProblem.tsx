// Q: 3, 6, 9, 12, 15를 더한 결과 출력하기
export const SecondProblem = () => {
   let LoopResultArray = []
   let summation = 0
   
   let number = 3;
   let count = 0;

   for (; count <= 4; number+=3, count++) {
        LoopResultArray.push(number)
        summation += LoopResultArray[count]
       
   }

// number와 count를 아래처럼 안에 넣어도 되지만, 지저분해보임 
// for (let number = 3, count = 0; count <= 4; number+=3, count++) {
//       LoopResultArray.push(number)
//       summation += LoopResultArray[count]     
//   }

   
    return (
        <div>
            <h3>두 번째 퀴즈</h3>
            
            <pre>{
                `
LoopResultArray = ${LoopResultArray} 
summation = ${summation}

                `        
    
             }</pre>
        </div>
    )
}