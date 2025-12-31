export const LogicalOperationExample = () => {
    // === 의 경우 완벽하게 일치하는지 여부를 봅니다.
    // 타입까지 일치하는지 확인하는 것입니다
    // 현재 숫자 10과 문자열 10을 비교하기 때문에 false
    const strictEquality = 10 === ("10" as any)
    // 숫자 10과 문자열 10을 비교하는데 type 일치는 보지 않습니다.
    // 둘 다 같은 10이기 때문에 true로 처리합니다.
    const roughEquality = 10 == ("10" as any)
    // 논리 연산 AND (&&)
    // AND 특성으로 모든 것이 참인 경우에만 참
    const logicalAnd = true && false
    // 앤터 키에 보면 원 표시가 보일텐데 그거 Shift 누르고 입력하면 파이프가 만들어집니다
    // 논리 연산 OR (||)
    // OR 특성으로 하나만 참이어도 참
    const logicalOr = true || false
    // 비트연산 AND
    // 2^2, 2^1, 2^0 
    //  1    0    1   (5)
    //  1    0    0   (4)
    const bitwiseAnd = 5 & 4    // 4
    // 비트연산 OR
    // 2^2, 2^1, 2^0 
    //  1    0    1   (5)
    //  0    1    0   (2)
    const bitwiseOr = 5 | 2     // 7

    return (
        <div>
            <h3>javascript 논리 연산자</h3>

            <pre>{
                // esc키 아래 물결 (~) 부분을 쉬프트 키 누르지 않고 찍으면 백틱
                `
console.log(10 === "10");       // ${strictEquality}
console.log(10 == "10");        // ${roughEquality}
console.log(true && false);     // ${logicalAnd}
console.log(true || false);     // ${logicalOr}
console.log(5 & 4);             // ${bitwiseAnd}
console.log(5 | 2);             // ${bitwiseOr}
                `
            }</pre>
        </div>
    )
}