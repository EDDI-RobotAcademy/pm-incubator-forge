export const LogicalOperationExample = () =>{
    // 숫자 10과 문자열 10을 비교하기 때문에 false
    const strictEqualty = 10 ===("10" as any)
    // 둘다 같은 10이기 때문에 true
    const roughEqualty = 10 ==("10" as any)
    const logicalAnd = true && false
    const logicalOr = true  || false

    const bitwiseAnd = 5 & 4
    const bitwiseOr = 5 | 2


return(
    <div>
    <h3>javascript 논리 연산자</h3>
    <pre>{
    `
console.log(10 === "10"); // ${strictEqualty}
console.log(10 == "10"); // ${roughEqualty}
console.log(true && false); // ${logicalAnd}
console.log(true || false); // ${logicalOr}
console.log(5 & 4); // ${bitwiseAnd}
console.log(5 | 4); // ${bitwiseOr}
    `
}</pre>
    </div>
)
}