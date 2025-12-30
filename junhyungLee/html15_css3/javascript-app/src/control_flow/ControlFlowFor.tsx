
export const ControlFlowFor = () => {
     // 대괄호를 열고 닫는 뭔가가 있다면 배열
     // 배열을 사용하는 이유는?
     // 반복하는 for, foreach 와 함께 사용하면 좋은 이유는 무엇일까?

     // 배열은 여러 개의 정보를 한 공간에 담아 넣을 수 있다.
     // 장바구니(cart) 가격 정보라고 가정을 하면
     // 마우스, 키보드, 모니터 2개, 스피커, 헤드셋
     // 50000, 500000, 400000 * 2, 100000, 200000
     // 50000 + 500000 + 400000 + 400000 + 100000 + 200000
     // 누적치 = 결제 금액

     // 반복을 시켜야 하기 때문에 for, foreach와 함께 사용하는 것이 좋음.

     // 배열 작성하는 방법
     // 1. let을 그냥 적는다.
     // 2. 배열 이름을 작성(목적에 맞게 명시적으로 취향껏)
     // 3. '=[]' 형태로 아무것도 없는 배열 생성

     let loopResultArray = []

     // for 루프의 경우의 동작
     // let i = 1
     // i값이 1로 시작
     // i <= 3;
     // i가 3보다 작거나 같은가? true / false
     // 이 질문이 해답이 true 라면 내부로 진입해서
     // loopResultArray.push(i) -> push로 밀어넣음
     // i++ -> i = i + 1 || 1씩 증가한 값을 밀어넣음
     // loopResulyArray = [1] , loopResulyArray = [1,2], loopResulyArray = [1,2,3]
     // false 일 떄 종료
     
     for(let i = 1; i <= 3; i++) {
          loopResultArray.push(i)
     
     }
    
          // for(초기화; 조건부; 증감부)  -> 조건이 만족된다는 전제하에 반복시킬 코드
          
    return (
    <div>
        <h3>javascript 제어문 (for)</h3>

            <pre>{
               `               
loopResultArray = ${loopResultArray}
               `  
            }</pre>
         </div>
    )
}

