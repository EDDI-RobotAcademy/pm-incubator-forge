export const ControlFlowIf = () => {
    let x = 10;
    let z = 5;
    let result;

    if (x > z) {
        result = "Hello"
    } else {
        result = "Hi"
    }

    let ternaryResult = x > 5 ? "Hello" : "Hi"
    
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