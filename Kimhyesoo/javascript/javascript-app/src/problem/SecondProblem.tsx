// 3,6,9,12,15를 더한 결과 출력
export const SecondProblem = () => {
    let loopResultArray = []
    let summation = 0
    let i,j;
 
    for(i = 3, j = 0; j<=4; i+=3,j++){
        // i = 3, j =0; i<=15; i+=3,j++
        loopResultArray.push(i)
        summation +=loopResultArray[j]
    }
    return(
        <div>
            <h3>Javascript 두 번째 퀴즈</h3>
            <pre>{
            `
            loopResultArray = ${loopResultArray}
            summation = ${summation}
            ` 
            }</pre>
        </div>
    )
}