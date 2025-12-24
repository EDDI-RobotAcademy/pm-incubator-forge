export const VariableAndDataTypes = () => {
    //자바스크립트에서 변수를 선언하는 방법
    //1. let : 재할당 가능한 변수 선언
    //2. const : 재할당 불가능한 상수 선언
    //3. var : 구식 변수 선언 (사용 권장하지 않음)
    let firstNumber = 10;
    const secondConstant = "Hello";
    var thirdBoolean = true;
    let fourthNull = null;
    let fifthUndefined = undefined;

    // 변수 작성법
    //1. 맨 앞에 let, const, var 키워드 작성
    //2. 변수 이름 작성 (영문, 숫자, 언더스코어(_), 달러($) 사용 가능, 숫자로 시작 불가)
    //3. 변수의 값을 지정
    //4. 등호(=) 작성
    //5. 세미콜론(;) 작성(생략 가능)

    let sixMap = { key: "value1" };

    //배열은 대괄호 [] 안에 값들을 콤마(,)로 구분하여 나열
    //1~1000 까지의 숫자를 적을 때
    // first, second, third, ..., thousand
    //이런식으로 일일이 다 적는 것은 비효율적
    //배열을 사용하면 [1,2,3, ..., 1000] 처럼 간단히 표현 가능
    let sevenArray = [1, 2, 3];
    

    return (
        <div>
            <h3>변수와 데이터 타입 </h3>
            <pre>{
            `
let firstNumber = ${firstNumber}               //숫자 타입(Number)
const secondConstant = ${secondConstant}       //문자열 타입(String)
var thirdBoolean = ${thirdBoolean}             //불린(참/거짓) 타입(Boolean)
let fourthNull = ${fourthNull}                 //널 타입(Null)
let fifthUndefined = ${fifthUndefined}         //언디파인드 타입(Undefined)
let sixMap = ${sixMap}                         //객체 타입(Object)(Map 형식)
let sixMapJsonify = ${JSON.stringify(sixMap)}  //객체 타입(Object)(JSON 형식)
let sevenArray = ${sevenArray}                 //배열 타입(Array)
            `
            }</pre>
            
        </div>
    )

}

//JSON.stringify() : 자바스크립트 객체를 JSON 문자열로 변환하는 메서드
//JSON.stringify() 를 이용하면 객체의 변수명이 object일 경우 object의 내용을 표시함