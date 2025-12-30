
export const FirstProblem= () => {
   let x = 10;
   let z = 20;
   let result;


   if(z > x) {
        result = "Hello"

   } else {
        result = "Hi"
   }
   
   let ternaryResult = z > x ? "Hello" : "Hi"
    return (
    <div>
        <h3>javascript 첫 번째 퀴즈 (if)</h3>

            <pre>{
            `               
x = ${x}
z = ${z}                      
result = ${result}
ternearyResult = ${ternaryResult}                  

            `
            }</pre>
         </div>
    )
}