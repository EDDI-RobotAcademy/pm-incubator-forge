
export const LogicalOperationExample = () => {
    // === 의 경우 완벽하게 일치하는지 여부를 봅니다.
    // 타입까지 일치하는지 확인
    // 현재 숫자 10과 문자열 10을 비교하기 때문에 false
    const strictEquality = 10 === ("10" as any)
    // == 은 동등한지, 숫자 10과 문자열 10을 비교하는데 type을 보지 않는다.
    // 둘다 같은 10 이기 때문에 true로 처리한다.
    const roughEquality = 10 == ("10" as any)
    // 논리 연산 AND(&&) 
    // AND 특성으로 모든 것이 참인 경우에만 참
    const logicalAnd = true && false
    // 논리 연산 OR(||)
    // OR 특성으로 하나만 참이여도 참
    const logicalOr = true || false
    // 비트연산 AND
    // 2^2, 2^1, 2^0
    //  1    0    1 (5)
    //  1    0    0 (4)  
    const bitwiseAnd = 5 & 4    
    const bitwiseOr = 5 | 2

return (
    <div>
        <h3>javascript 논리 연산자</h3>

            <pre>{
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

