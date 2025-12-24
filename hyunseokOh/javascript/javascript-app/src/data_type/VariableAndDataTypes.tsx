export const VariableAndDataTypes = () => {
    let firstNumber = 10; // 숫자형 데이터
    const secondConstant = "Hello"; // 문자열 데이터
    var thirdBoolean = true; // 불리언 데이터
    let fourthNull = null; // null 데이터
    let fifthUndefined = undefined; // undefined 데이터
    let sixthMap = { key: "value" }; // 객체(맵) 데이터
    let seventhArray: number[] = [1, 2, 3, 4, 5]; // 배열 데이터

    return (
        <div>
            <h2>Variable and Data Types Example</h2>
            <pre>{`
let firstNumber: number = ${firstNumber};                       // 숫자형 데이터
const secondConstant: string = "${secondConstant}";             // 문자열 데이터
var thirdBoolean: boolean = ${thirdBoolean};                    // 불리언 데이터
let fourthNull: null = ${fourthNull};                           // null 데이터
let fifthUndefined: undefined = ${fifthUndefined};              // undefined 데이터
let sixthMap: { key: string } = ${sixthMap}                     // 객체(맵) 데이터
let sixthMapJsonify: string = JSON.stringify(${sixthMap});      // 객체(맵) 데이터를 문자열로 변환
let seventhArray: number[] = [${seventhArray.join(', ')}];      // 배열 데이터  
            `
            }</pre>        
        </div>
    )
}