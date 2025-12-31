export const ControlFlowFor = () => {
//대괄호를 사용하여 배열 생성
//배열을 사용하는 이유
//1. 여러개의 값을 하나의 변수에 담을 수 있다.
//2. 반복문 for, foreach와 함께 사용하여 효율적인 코드 작성 가능

// 배열 작성법
// let 배열 이름 = [value1, value2, value3, ...];

    let loopResultArray = []

    for (let i = 1; i <= 3; i++) {
        loopResultArray.push(i)
    }
// for 문 작성법
// for (초기식; 조건식; 증감식) {
//    반복 실행할 코드
// }
    return (
        <div>
            <h3> javascript 제어문 (for) </h3>

         <pre>{

                `
                loopResultArray = [${loopResultArray}]
                `
            }</pre>
        </div>
    )
}