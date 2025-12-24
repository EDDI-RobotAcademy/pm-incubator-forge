export const VariableAndDataTypes = () => {
    let firstNumber = 10;
    const secondCostant = "Hello";
    var thirdBoolean = true;
    let fourthNull = null;
    let fifthUndefined = undefined;

    // 변수 작성법
    // 1. 맨 앞에 let, const, var 중 하나를 작성한다.
    // 2. 변수 이름을 작성한다.
    // 3. 변수의 값을 지정한다.

    // Question? 변수 이름이 필요한 이유
    // 100개의 점수를 합산해서 평균을 계산하는 프로그램
    // 평균을 계산할 때 변수 이름을 z로 해놓으면 알아보기 어렵다.(명시성이 떨어짐)
    // 따라서 let average 같은 형태로 작성

    // Map 형식
    // 사물함 열쇠 <- key
    // 사물함 내용물 <- value
    let sixthMap = { key: "value"};
    
    // 배열
    // 1 - 1000 까지의 숫자를 적어야 할때
    // first, second, third, ..., thousand 직접 적을 수 있지만
    // 배열을 사용하면 편리하게 작성가능
    let seventhArray = [1, 2, 3];

    return (
        <div>
            <h3>javascript 변수와 데이터 타입</h3>
            {/* pre 태그의 `` 사이에 있는 것은 다 출력 */}
            <pre>{
                `
let firstNumber = ${firstNumber}             // 숫자 타입(number)
const secondConstant = ${secondCostant}      // 문자열 타입(string)
var thirdBoolean = ${thirdBoolean}           // 참/거짓(boolean)
let fourthNull = ${fourthNull}               // Null 타입
let fifthUndefined = ${fifthUndefined}       // Undefined 타입
let sixthMap = ${sixthMap}                   // Object 타입이며 Map 형식
let sixthMapJsonify = ${JSON.stringify(sixthMap)} // Object 타입 해석
let seventhArray = ${seventhArray}           // 배열 타입(Array)
                `
            }</pre>           
        </div>
    )
}

// JSON.stringify(변수이름) 형태로 작성하면
// 해당 변수 이름이 Object라는 전제하에 Object 내부의 내용을 출력하게 됩니다.