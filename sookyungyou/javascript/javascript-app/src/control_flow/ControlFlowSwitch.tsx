export const ControlFlowSwitch = () => {
    let grade = Math.floor(Math.random() * 5.3) + 1
    // Math.random()은 0 이상 1 미만의 값
    // 0 <= random <= 0.9999999999999999999
    // Math.random() * 5.3은 범위를 늘림 (0  ~ 5.2999999)
    // Math.floor(숫자)는 소수점 버림 (1.9 -> 1) (바닥함수)
    // Math.floor()에 +1 하는 이유: Math.floor()는 0부터 시작 -> 1~6 만들기 위해
    // 따라서 grade는 1, 2, 3, 4, 5, 6 중 하나
    // 1(SSS), 2(SS), 3(S), 4(A), 5(B), 6(심해)

    let gradeName

    switch (grade) {
    // switch는 grade 값이 뭐냐에 따라 다르게 처리함
        case 1: gradeName = "SSS"; break;
        case 2: gradeName = "SS"; break;
        case 3: gradeName = "S"; break;
        case 4: gradeName = "A"; break;
        case 5: gradeName = "B"; break;
        // grade 가 1일 경우 (case 1) gradeName에 SSS 넣고 멈춰 (break)

        default: gradeName = "규격 외 (심해)"; break;
        // grade가 1~5 전부 해당 x (6일 경우)
        // 6이 나올 확률이 낮은 이유: 5 ~ 5.2999999 나와야 함
        // 다른 애들은 1 ~ 1.9999999 -> 훨씬 확률 높음 
    }
    

    return (
        <div>
        {/* return 부분은 화면에서 보여주는 내용 */}
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