export const LogicalOperationExample = () => {

    const strictEquality = 10 === ("10"as any)
    // ===의 경우 완벽하게 일치하는지 여부를
    // 타입까지 일치하는지 확인하는 것입니다
    // 현재 숫자 10과 문자열 10을 비교하기 때문에 false

    const roughEquality = 10 == ("10" as any)
    // 숫자 10과 문자열 10을 비교하는데 type일치는 보지 않습니다.
    // 둘 다 같은 10이기 때문에 true로 처리합니다.

    const logicalAnd = true && false
    // 논리 연산 AND (&&)
    // AND 특성으로 모든 것이 참인 경우에만 참

    const logicalOr = true || false
    // 논리 연산 OR (||)
    // OR 특성으로 하나라도 참이여도 참

    const bitwiseAnd = 5 & 4   // 4
    // 비트 연산 AND 
    // 2`2, 2`1, 2`0
    //  1    0    1   (5)
    //  1    0    0   (4)

    const bitwiseOr = 5 | 2    // 7
    // 비트 연산 OR
    // 2`2, 2`1, 2`0
    //  1    0    1   (5)
    //  0    1    0   (2)

    return (
        <div>
            <h3>javascript 논리 연산자</h3>

            <pre>{
                `
console. log(10 === "10")       // ${strictEquality}
console. log(10 == "10")        // ${roughEquality}
console. log(true && false)     // ${logicalAnd}
console. log(true || false)     // ${logicalOr}
console. log(5 & 4)             // ${bitwiseAnd}
console. log(5 | 2)             // ${bitwiseOr}
                `
            }</pre>
        </div>
    )
}