export const ControlFlowForSumExample = () =>{

    let loopResultArray = []
    let summation = 0

    for(let i = 1, j = 1; j <= 3; i += 2, j++){
        loopResultArray.push(i)
         summation += loopResultArray[j - 1]
    }


return(
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