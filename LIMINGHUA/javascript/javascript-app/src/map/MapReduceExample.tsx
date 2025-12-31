export const MapReduceExample = () => {
    let number_array: number[] = [2, 4, 6, 8, 10]

    // reduce의 경우엔 아래와 같이 연산됩니다
    // ((누산 대상, 배열의 요소) => 누산 대상 + 배열의 요소, 초기값)
    // 여기서 누산 대상은 for Loop에서의 summation, 배열의 요소는 loopResultArray[j]에 해당하다고 보면 됨


    // 실행 효율 Te 관점입니다
    // 앞서 만들었던 다소 복잡한 연산의 for Loop 구성을 단순화 시킨 작업임
    let result_array: number = 
        number_array.reduce((accumulator, element) => accumulator + element, 0)

    return (
        <div>
            <h3>javascript Reduce Function</h3>
            
            <pre>{
                `
number_array = ${number_array}
result_array = ${result_array}
                `
            }</pre>
        </div>
    )
}