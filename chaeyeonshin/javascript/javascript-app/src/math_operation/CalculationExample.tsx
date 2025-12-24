// Javascript에서 함수형 객체를 만들 때 사용하는 패턴
// 1. export const <- 고정
// 2. 함수 이름
// 3.  = () => {} <- 고정
// 4. {}내부에 구동시킬 코드 작성
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
            {/* {add} 같은 것은 위의 const add값이 전달 */}
            <p>3 + 3 = {add}</p>
            <p>10 - 5 = {subtract}</p>
            <p>4 * 2 = {multiply}</p>
            <p>20 / 4 = {divide}</p>
            <p>10 % 3 = {remainder}</p>
        </div>
    )
}