// 광고 가능 등에 사용
export const ArraySpliceExample = () => {
    let number_array: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    // '...' spread 방식으로 요소를 전부 해체해서 낱개화함
    // 결론적으로 아래 코드는 number, array 배열을 카피 떴음.
    let spliced_array: number[] = [...number_array]

    // 8의 원래 위치가 3번 인덱스
    // 3번 인덱스에서 1개를 지우려고 합니다.
    // 그 자리에 777이 배치됨. 
    spliced_array.splice(3, 1, 777)

    let second_spliced_array: number[] = [...number_array]
    // 10의 원래 위치인 4번 인덱스부터 3개를 지웁니다.
    // 그리고 해당위치에 0을 배치합니다.
    second_spliced_array. splice(4, 3, 0)

    return (
        <div>
            <h3>javascript Array Splice</h3>

            <pre>{
                `
number_array = ${number_array}
spliced_array = ${spliced_array}
second_spliced_array = ${second_spliced_array}
                `
            }</pre>
        </div>
    )
}