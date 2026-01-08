export const ArraySpliceExample = () => {
    let number_array: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    let spliced_array: number[] = [...number_array]; 
    // ...(spread) : elements 전부 해체해서 낱개화
    // 인즉 splilced_array로 number, array 코드를 카피한거

    spliced_array.splice(3,1, 777);
        // 배열의 3번을 시작으로 1개 인덱스 잘라내고 777로 교체
        // 8 자리에 777

    let second_spliced_array: number[] = [...number_array];
    second_spliced_array.splice(4, 3, 0);
        // 배열의 4번을 시작으로 3개 인덱스 잘라내고 0으로 교체
        // 10, 12, 14 자리에 각각 0

    return (
        <div>
            <h3>javascript Array Splice</h3>

            <pre>{
                `
number_array = [${number_array}]
spliced_array = [${spliced_array}]
second_spliced_array = [${second_spliced_array}]
                `
            }</pre>
        </div>
    )
}
