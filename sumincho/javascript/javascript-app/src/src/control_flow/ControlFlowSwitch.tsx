export const ControlFlowSwitch = () => {
    // Math.random()의 경우 0 <= random 값 < 1
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random

    //  0 <= random <= 0.9999999999999999999
    //  0 <= random < 1 <- * 5.3
    //  0 <= random <= 5.xxx
    //  1 <= random <= 6.xxx
    //  Math.floor() 는 버림 (바닥 함수)
    //  1, 2, 3, 4, 5, 6
    //  1(SSS), 2(SS), 3(S), 4(A), 5(B), 6(심해)
    let grade = Math.floor(Math.random() * 5.3) + 1
    let gradeName

    switch (grade) {
        case 1: gradeName = "SSS"; break;
        case 2: gradeName = "SS"; break;
        case 3: gradeName = "S"; break;
        case 4: gradeName = "A"; break;
        case 5: gradeName = "B"; break;

        default: gradeName = "규격 외(심해)"; break;
    }

    return (
        <div>
            <h3>javascript 제어문 (switch)</h3>

            <pre>{
                `
grade = ${grade}
gradeName = ${gradeName}
                `
            }</pre>
        </div>
    )
}