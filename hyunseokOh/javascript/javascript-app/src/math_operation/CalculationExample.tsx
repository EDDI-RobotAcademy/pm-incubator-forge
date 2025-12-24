// CalculationExample.tsx
// const는 변하지 않는 상수를 선언할 때 사용합니다.
// 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 연산을 각각 수행하는 예제입니다.
// 결과는 JSX 내부에서 중괄호 {}를 사용하여 출력합니다.
export const CalculationExample = () => {
    const add = 3 + 3;
    const subtract = 10 - 4;
    const multiply = 5 * 6;
    const divide = 20 / 4;
    const remainder = 10 % 3;
    
    return (
        <div>
            <h3>Calculation Example</h3>
            <p>Addition: 3 + 3 = {add}</p>
            <p>Subtraction: 10 - 4 = {subtract}</p>
            <p>Multiplication: 5 * 6 = {multiply}</p>
            <p>Division: 20 / 4 = {divide}</p>
            <p>Remainder: 10 % 3 = {remainder}</p>
        </div>
    )
}