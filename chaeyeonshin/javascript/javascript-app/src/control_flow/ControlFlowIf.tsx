export const ControlFlowIf = () => {
    let x = 10;
    let result;

    // if문 작성 요령
    // 1. if (조건) {참인 경우} else {거짓인 경우}

    // x > 5 :x가 5보다 큰가?
    // 답은 참 또는 거짓
    if (x > 5) {
        // 참이면 if 내부 진입
        result = "x는 5보다 크다."
    } else {
        // 거짓이면 else 내부 진입
        result = "x는 5보다 크지 않습니다."
    }

    // 삼항 연산자 작성 요령
    // 조건 ? 참인 경우 : 거짓인 경우
    let ternaryResult = x > 5 ? "x는 5보다 크다." : "x는 5보다 크지 않습니다."

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

