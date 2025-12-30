export const FirstProblem = () => {
    let x = 13;
    let z = 11;
    let result;


    if (z > x) {

        result = "Hello"
    } else {
        result = "Hi."
    }

    let ternaryResult = z > x ? "Hello" : "Hi"

    return (
        <div>
            <h3>javascript 첫번째 퀴즈</h3>

            <pre>{
                `          
x =  ${x}                           
z =  ${z}                           
result = ${result}    
ternaryResult = ${ternaryResult}             
                `
            }</pre>
        </div>
    )
}