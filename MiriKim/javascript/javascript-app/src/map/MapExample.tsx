export const MapExample = () => {

    let number_array: number[] = [2, 4, 6, 8, 10];
    // (자바스크립트의 경우) let number_array = [2, 4, 6, 8, 10]
    // let _____: number[]  -> let 타입스크립트: [숫자배열]

    let square_result_array: number[] = number_array.map(num => num * num);
        // square_result_array라는 명령 = number[] 숫자들을 square 해서 배열하겠다
        // 3. => 를 통해 이 내용을 회살표 내용의 연산으로 적용함을 의미함
        //    num * num = 각 요소의 제곱
    return (
        <div>
            <h3>javascript Map Function</h3>
            <pre>{
                `
number_array = [${number_array}]
square_result_array = [${square_result_array}]
                `
            }</pre>
        </div>
    )
}