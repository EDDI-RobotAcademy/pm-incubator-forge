// z가 x 보다 크면 Hello,
// z가 x 보다 작거나 같으면 Hi를 출력해주세요.
// z값과 x값은 여러분들 편의대로 아무 숫자나 사용하면 됩니다.
export const FirstProblem = () => {
    let x = 3;
    let z = 7;
    let result;

    if (z > x) {
        // z는 x 보다 크다.
        result = "Hello"
    } else {
        // z는 x 보다 작거나 같다.
        result = "Hi"
    }

    let ternaryResult = z > x ? "Hello" : "Hi"

    return (
        <div>
            <h3>javascript 첫 번째 퀴즈</h3>

            <pre>{
                `
z가 x 보다 크면 Hello,
z가 x 보다 작거나 같으면 Hi를 출력해주세요.
x = ${x}
z = ${z}
result = ${result}
ternaryResult = ${ternaryResult}
                `
            }</pre>
        </div>
    )
}