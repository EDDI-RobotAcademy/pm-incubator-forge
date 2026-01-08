
export const MapFilterExample = () => {   
    let number_array: number[] = [2, 4, 6, 8, 10];
    
    let result_array: number[] = 
        number_array.filter(element => element % 4 === 0);
        // filter : [array] 요소를 element로 뽑는다
        // element % 4 === 0 의 의미 : 배열 낱개 요소 /4가 0이 맞니?
        // 배열의 낱개 요소를 4로 나눈 나머지가 0인 요소만 걸러내기
        // True 해당하는 요소가 결과값


    // 만약 for루프로 구현한다면 어떻게 해야 했을까? Te -> Ti로 논리 검증
    //  for (배열 전체 순회) {
    //   if (배열 요소 % 4 === 0) {
    //   result_array_push(배열 요소) 
    //     } }
    return (
        <div>
            <h3>javascript Filter Function</h3>

            <pre>{
                `
number_array = [${number_array}]
result_array = [${result_array}]
                `
            }</pre>
        </div>
    )
}