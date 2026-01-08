export const MapReduceExample = () => {
    let number_array: number[] = [2, 4, 6, 8, 10];
    
    let result_array: number = 
        number_array.reduce((accumulator, element) => accumulator + element, 0)
        // reduce((누적 대상, 배열 요소)  => 누적 대상 + 배열 요소, 초기값)
        // for loop 구성의 단순화 버전

    return (
        <div>
            <h3>javascript Map Function</h3>

            <pre>{
                `
number_array = [${number_array}]
result_array = [${result_array}]
                `
            }</pre>
        </div>
    )
}