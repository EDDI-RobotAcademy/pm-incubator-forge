// 자바스크립트에서 함수형 객체를 만들 떄 아래 패턴 기억
//1. expert const (고정)
// = () => {} 고정
// 구동시킬 코드 내부에 작성
// return 내부에는 react


export const CalculationExample = () => {
    const add = 3 + 3;
    const subtract = 10 - 5;
    const multiply = 4 * 2;
    const divide = 20 / 4;
    const remainder = 10 % 3;
    
    return (
        <div>   
            <h3>연산결과</h3>
            <p>3 + 3 = {add}</p>
            <p>10 - 5 = {subtract}</p>
            <p>4 * 2 = {multiply}</p>
            <p>20 / 4 = {divide}</p>
            <p>10 % 3 = {remainder}</p>
        </div>

    )

}