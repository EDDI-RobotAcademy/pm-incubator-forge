export const ControlFlowSwitch = () => {
// Math.random() : 0 이상 1 미만의 실수 난수 생성
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random

    let grade = Math.floor(Math.random() * 5) + 1; // 1 ~ 5 사이의 랜덤 정수
    let gradeName
    switch(grade) {
        case 1:
            gradeName = "SSS"; break;
        case 2:
            gradeName = "SS"; break;
        case 3:
            gradeName = "S"; break;
        case 4:
            gradeName = "A"; break;
        case 5:
            gradeName = "B"; break;

        default: gradeName = "규격 외(심해)"; break;
    }

    return (
        <div>
            <h3> javascript 제어문 (switch) </h3>

         <pre>{

                `
                grade = ${grade}
                gradeName = ${gradeName}
                `
            }</pre>
        </div>
    )
}