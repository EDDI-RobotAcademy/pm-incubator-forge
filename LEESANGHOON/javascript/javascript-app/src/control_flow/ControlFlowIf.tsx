export const ControlFlowIf = () =>{
    let x = 10;
    let result;

    if (x > 5){
        result = "x는 5보다 크다"
    }else{
        "x는 5보다 작다"
    }

        // 삼항 연산자: if문과 비슷
    let ternaryRessult = x > 5 ? "x는 5보다 크다" : "x는 5보다 작거나 같다."

return(
    <div>
    <h3>javascript 제어문 (if)</h3>
    <pre>{
    `
x = ${x}                            // 10
result = ${result}                  // x는 5보다 크다
ternaryResult = ${ternaryRessult}
    `
}</pre>
    </div>
)
}