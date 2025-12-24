// 확장자가 tsx가 아니면 return () 내부의 HTML 코드가 인식되지 않음.

// Javascript에서 함수형 객체 만들 때 사용하는데 아래 패턴으로 기억하면 됩니다.
// 1. export const <- 고정
// 2. 함수 이름
// 3. = () => {} 고정
// 4. 구동시킬 코드 내부에 작성
// 5. return 내부에는 react 
export const CalculationExample = () => {
    const add = 3 + 3;
    const subtract = 10 - 5;
    const multiply = 4 * 2;
    const divide = 20 / 4;
    const remainder = 10 % 3;

    return (
        <div>
            <h3>연산 결과</h3>
            {/* 잘 보면 {add} 같은 것이 보임. */}
            {/* 위의 const add 값이 {add} 로 전달되서 보이는 것임 */}
            <p>3 + 3 = {add}</p>
            <p>10 - 5 = {subtract}</p>
            <p>20 / 4 = {divide}</p>
            <p>4 * 2 = {multiply}</p>
            <p>10 % 3 = {remainder}</p>
        </div>
    )
}