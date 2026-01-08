export const ControlFlowFor = () => {

    let loopResultArray = [];
    // [] : 배열(array)을 선언하고 값을 담는 기호
    // 배열: 여러개의 값을 하나의 배열로 만든 객체
        // 같은 타입의 데이터를 연속된 공간에 나열하고 (int 배열> int, String 배열> 문자열)
        // 각 데이터에 인덱스(index)를 부여해놓은 자료구조
    // 예시: [이커머스 장바구니안에 여러개의 상품을 한번에 담아서] 계산할 때 사용


    // for문: (초기값; 조건부; 증감부) { 반복시킬 코드 }
    // 조건이 만족된다는 전제하에 반복시킬 코드: loopResultArray.push(i);
    for (let i = 1; i <= 3; i++) {
        loopResultArray.push(i);
        // i=1(카운터 시작값), i<=3(참이면 내부진입해서 .push(i) 실행), i++(반복시 i에 +1)
        // 동작 순서: 초기화 → 조건 확인 → 코드 실행 → 증감 → 조건 확인 → 코드 실행... (조건이 거짓될 때까지)        
    }

    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
                `
loopResultArray = [${loopResultArray}]
                `
            }</pre>
        </div>
    )
}