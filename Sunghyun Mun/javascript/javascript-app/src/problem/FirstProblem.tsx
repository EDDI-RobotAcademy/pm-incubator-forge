// z가 x보다 크면 Hello
// x가 z보다 작거나 같은면 Hi

export const FirstProblem = () => {
    let x = 25;
    let z = 16
    let result;

    if (x > z) {
        // x가 z보다 크다.
        result = "Hello"
    } else {
        // z가 x보다 작거나 같다.
        result = "Hi"
    }

    let ternaryResult = x > z ? "Hello" : "Hi"

    return (
        <div>
            <h3>javascript 제어문 (if)</h3>

            <pre>{
                `           
x = ${x}                            // 25
result = ${result}                  // Hello
ternaryResult = ${ternaryResult}

                `
            }</pre>
        </div>
    )
}