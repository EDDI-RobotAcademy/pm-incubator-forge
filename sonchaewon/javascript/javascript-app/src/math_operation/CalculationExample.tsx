export const CalculationExample = () =>{
    const add =3+3;
    const substract =10-5;
    const multiply =4*2;
    const divide =20/4;
    const remainder =10%3;

    return(
        <div>
            <h3>연산 결과</h3>
            <p>3+3 = {add}</p>
            <p>10-5 = {substract}</p>
            <p>4*2 = {multiply}</p>
            <p>20/4 = {divide}</p>
            <p>10%3 = {remainder}</p>
        </div>
    )

}