export const FirstProblem = () =>{

    let x = 10
    let z = 5
    let result;


    if (z > x){
        result = "Hello"
    }else if(z <= x){
        result = "Hi"
    }

return(
    <div>
    <h3>javascript 문제 1</h3>
    <pre>{
    `
result = ${result}         
    `
}</pre>
    </div>
)
}