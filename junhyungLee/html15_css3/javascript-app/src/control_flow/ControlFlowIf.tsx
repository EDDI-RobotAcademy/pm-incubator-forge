
export const ControlFlowIf = () => {
   let x = 10;
   let result;

    // x > 5 부등식은 x가 5보다 크냐?
    //  해당 질문의 답은 참 혹은 거짓

   if(x > 5) {
        result = "x는 5보다 크다."
   } else {

        result = "x는 5보다 작거나 같다."
   }
   
    // if 문 작성 요령
    // 1. 일단 if () {} 를 적어둔다.
    // 2. 소괄호 내부에 조건을 작성한다.
    // 3. 조건이 만족하면 어떤 작업을 할 것인지 {} 중괄호 내부에 작성
    // 4. 아닌 경우를 표헌하고자 한다면 else {} 를 작성
    // 5. 실제 조건이 거짓이 되었을 경우 else의 {} 중괄호 내부에 내용 작성

    // 상항 연산자
    // teneraryResult
    // x > 5 ? A:B
    // 조건 ? 참인 경우 : 겨짓인 경우
    // X가 5보다 크다면? 참인 경우 : 거짓인 경우

   let ternaryResult = x > 5 ? "x는 5보다 크다" : "X는 5 보다 작거나 같다."

    return (
    <div>
        <h3>javascript 제어문 (if)</h3>

            <pre>{
            `               
x = ${x}                            // 10
result = ${result}                  // x는 5보다 크다.
ternaryResult = ${ternaryResult}

                `
            }</pre>
         </div>
    )
}

