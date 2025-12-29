export const LogicalOperationExample = () => {
    // === 의 경우 완벽하게(타입 및 값) 일치하는지 확인합니다.
    // 문자열 10과 숫자 10을 비교하기때문에 false가 나옵니다.
    const strictEquality = 10 === ("10" as any)
    // == 의 경우 값만(타입x) 일치하는지 확인합니다.
    // 따라서 true 값이 나옵니다.
    const roughEquality = 10 == ("10" as any)
    // 논리 연산 AND (&&)
    // 양쪽 값이 모두 참일 때 true
    const logicalAnd = true && false
    // 논리 연산 OR (||)
    // 둘 중 하나만 참이어도 true
    const logicalOr = true || false
    // 비트 연산 AND (&) - 약간 불필요
    // 2^2, 2^1, 2^0
    //  1    0    1  (5)
    //  1    0    0  (4)
    const bitwiseAnd = 5 & 4
    // 비트 연산 OR (|) - 약간 불필요
    // 2^2, 2^1, 2^0
    //  1    0    1  (5)
    //  0    1    0  (2)
    const bitwiseOr = 5 | 2

    return (
        <div>
            <h3>javascript 논리 연산자</h3>

            <pre>{
                `
console.log(10 === "10");           // ${strictEquality}
console.log(10 == "10");            // ${roughEquality}
console.log(true && false);         // ${logicalAnd}
console.log(true || false);         // ${logicalOr}
console.log(5 & 4);                 // ${bitwiseAnd}
console.log(5 | 2);                 // ${bitwiseOr}
                `
            }</pre>           
        </div>
    )
}
