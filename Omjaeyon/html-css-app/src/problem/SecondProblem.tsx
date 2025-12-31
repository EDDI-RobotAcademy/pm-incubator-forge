
//3, 6, 9, 12, 15 를 더한 값 출력하기 

export const SecondProblem = () => {
let loopResultArray = []
let summation = 0

for (let i = 3; i <= 15; i += 3) {
    loopResultArray.push(i)
    summation += i

}

return (
        <div>
        <h3>javascript제어문  (for) </h3>
            <pre>{
  
  ` 

  loopResultArray = ${loopResultArray}
  summation = ${summation}  
              `   }</pre>
        </div>
    )               }