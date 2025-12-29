
export const FirstProblem= () => {
   let x = 10;
   let z = 20;

   let result;


   if(z > x) {
        result = "Hello"

   } else {
        result = "Hi"
   }
   
   let ternaryResult = x > z ? "Hello" : "Hi"
    return (
    <div>
        <h3>FirstProblem 문제 (if)</h3>

            <pre>{
            `               
x = ${x}                      
result = ${result}
ternearyResult = ${ternaryResult}                  

            `
            }</pre>
         </div>
    )
}