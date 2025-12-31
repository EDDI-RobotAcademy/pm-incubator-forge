export const ControlFlowForSumExample = () => {
    let loopResultArray = []
    let summation = 0

    // j는 배열 인덱스이므로 j<=3, i는 숫자 기준으로 j<=5
    for( let i = 1, j =1; j<=3; i+=2,j++){
        loopResultArray.push(i)
        // summation은 할인값 계산할 때 사용
        // ex) const DC_PERCENT = 0.8 변수 선언
        // ex) summation += loopResult * DC_PERCENT
        summation +=loopResultArray[j - 1]
    }
    return(
        <div>
            <h3>Javascript 제어문(summation)</h3>
            <pre>{
            `
            loopResultArray = ${loopResultArray}
            summation = ${summation}
            ` 
            }</pre>
        </div>
    )
}