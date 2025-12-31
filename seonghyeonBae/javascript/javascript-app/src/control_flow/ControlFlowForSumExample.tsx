export const ControlFlowForSumExample = () => {
    let loopResultArray = []
    let summation = 0

    // 1. 범위를 5까지로 늘립니다 (1, 3, 5 가 되도록)
    for (let i = 1; i <= 5; i += 2) {
        loopResultArray.push(i)
        
        // 2. 배열 인덱스 대신 i를 직접 더하거나, 방금 넣은 값을 더합니다.
        // 기존 코드인 loopResultArray[i - 1]은 i가 3일 때 index 2를 찾는데,
        // 배열엔 [1, 3] 두 개뿐이라 index 0, 1밖에 없어서 에러(undefined)가 납니다.
        summation += i 
    }
    

    return (
        <div>
            <h3>javascript 제어문 (if)</h3>

            <pre>{
                `
loopResultArray = ${loopResultArray} 
summation = ${summation}
                `
            }</pre>
        </div>
    )
}