export const ControlFlowIf = () => {
    let x = 10;
    let z = 5;
    let result;

    // x > 5 부등식은 x가 5보다 크다?
    // 해당 질문의 답은 참 혹은 거짓

    if (x > 5) {
        // 조건이 참이려면 if 내부로 진입
        result = "x는 5 보다 크다."
        // 조건이 거짓이라면 else로 빠지게 됨
    } else {
        result = "x는 5보다 작다."
    }

    // if 문 작성 요령
    // 1. 일단 if () {} 를 적어둡니다.
    // 2. 소괄호 내부에 조건을 작성합니다.
    // 3. 조건이 만족되었을 경우 어떤 작업을 할 것인지 {} 중괄화 내부에 내용을 작성
    // 4. 아닌 경우를 표현하고자 한다면 else {} 를 작성
    // 5. 실제 조건이 거짓이 되었을 경우 els의 {} 중괄호 내부에 내용 작성

    // 삼항 연산자라고 부름
    // x > 5 ? A : B
    // 조건 ? 참인 경우 : 거짓인 경우
    // x가 5보다 크다면? 참인 경우 : 거짓인 경우
    // 이후 최종 계산된 결과가 ternaryResult에 설정됨.
    let ternaryResult = x > 5 ? "x는 5보다 크다" : "x는 5보다 작거나 같다."
    
    return (
        <div>
            <h3>javascript 제어문 (if)</h3>

            <pre>{
                `
x = ${x}                            // 10
result = ${result}                  // Hello
ternaryResult = ${ternaryResult}
                `
            }</pre>
        </div>
    )
}