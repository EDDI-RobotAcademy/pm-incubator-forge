export const MapFilterExample = () => {
   let number_array: number[]= [2, 4, 6, 8, 10]

   // filter가 오면 배열의 요소를 element로 뽑습니다.
   // 화살표 이후가 핵심인데
   // element % 4 === 0은 아래를 의미합니다. 
   // 배열의 낱개 요소를 5로 나눈 나머지가 0 맞아? True / False
   // filter는 조건의 결과가 True인 녀석들만 뽑아갑니다.
   let result_array: number[]= 
       number_array.filter(element => element % 4 === 0)

    // 만약 for 루프로 구현한다면 어떻게 해야 했을까? Te -> Ti로 논리 검증
    // for () {
    //      if (배열 요소 % 4 === 0) {
    //          result_array.push(배열 요소)
    //      }
    // }

  return (
      <div>
          <h3>javascript Filter Function</h3>

          <pre>{
              ` 
number_array = ${number_array}
result_array = ${result_array}
              ` 
          }</pre>
      </div>
    )
}