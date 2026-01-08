// z가 x 보다 크면 Hello,
// z가 x 보다 작거나 같으면 Hi 출력

export const FirstProblem = () => {
    let x = 10;
    let z = 20;
    let result;

    if (z > x) {
        //참이면
        result = "Hello"
    } else {
        //거짓이면
        result = "Hi"
    }

    let ternaryResult = z > x ? "Hello" : "Hi"

    return (
        <div>
            <h3>javascript 제어문 (if)</h3>

            <pre>{
                `
x = ${x}                            // 10
z = ${z}                            // 20
result = ${result}                  // Hello
ternaryResult = ${ternaryResult}
                `
            }</pre>
        </div>
    )
}