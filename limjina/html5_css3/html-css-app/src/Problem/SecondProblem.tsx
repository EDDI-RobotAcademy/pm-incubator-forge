export const SecondProblem = () => {
    let loopResultArray = []
    let summation = 0

    // 1. 3부터 15까지 3씩 증가하며 배열에 추가
    for (let i = 3; i <= 15; i += 3) {
        loopResultArray.push(i)
    }

    // 2. 배열의 모든 요소를 더하기
    // 인덱스는 0부터 시작해야 하며, 배열의 길이(length)보다 작을 때까지 반복합니다.
    for (let i = 0; i < loopResultArray.length; i++) {
        summation += loopResultArray[i]
    }
    
    return (
        <div>
            <h3>javascript 제어문 (for)</h3>
            <pre>{
                `
loopResultArray = ${loopResultArray.join(', ')}    
summation = ${summation}            
              `
            }</pre>
        </div>
    )   
}