export const ControlFlowFor = () => {
   let LoopResultArray = []
   // 대괄호는 배열(array)
   // 배열 사용 이유: 여러 정보 한 공간에 담을 수 o
   // <EXAMPLE>: 장바구니 구현 (Cart의 가격정보)
   // 마우스, 키보드 2개, 스피커
   // 50000, 30000*2, 100000
   // 50000 + 30000 + 30000 + 100000
   // 누적치 (결제금액)


   // <배열 작성법>
   // 1. let 적기
   // 2. 배열 이름 작성 (목적에 맞게 명시적으로)
   // 3. '= []' 이런 형태로 아무것도 없는 배열 생성 
   // ex) let LoopResultArray = []

   // 반복해야 하기 땨문에 for, foreach 와 함께 사용 b

   // <for 루프 동작>
   // let i = 1
   // i 값 1로 시작
   // i <= 3;
   // i가 3보다 작거나 같음? -> 반드시 true / false
   // true일때: 내부로 진입, LoopResultArray.push(i) 진행
   // push는 i값을 밀어넣는 작업
   // 이후 i++ 진행 (i++ 는 더하기 1)
   // 따라서 i값이 1개 증가

   for (let i = 1; i <= 3; i++) {
        LoopResultArray.push(i)
         //맨 처음 i = 1
         //이때 LoopResultArray = [1]

         //다음 반복 i = 1 + 1 (i++) = 2
         // LoopResultArray = [1, 2]

         //다음 반복 i = 2 + 1 (i++) = 3
         // LoopResultArray = [1, 2, 3]
   }
    // for (초기화=초기값; 조건부; 증감부=변화) {
    //      조건이 만족된다는 전제하에 반복시킬 코드 (루프내 코드)
    // }

    // 초기화 -> 조건부 -> 루프내 코드 -> 증감부 -> 조건부 -> 루프내 코드 -> ...
    // 조건이 틀리는 순간 루프 탈출


   



    return (
        <div>
            <h3>javascript 제어문 (for)</h3>
            
            <pre>{
                `
LoopResultArray = ${LoopResultArray} 


                `        
    
             }</pre>
        </div>
    )
}