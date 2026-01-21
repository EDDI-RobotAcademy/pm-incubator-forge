export const ArraySliceExample = () => {
    let number_array: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// 아래 코드는 위의 number_array에서
// 3번 인덱스 ~ 7번 비포함 인덱스까지 정보를 잘라서 가져왔음
// 인덱스는 0부터 시작함
// 게시물을 한꺼번에 500개를 띄워줘 할 때 쓰임
    let sliced_array: number[] = number_array.slice(3, 7)

    return (
        <div>
            <h3>Javascript Array Function</h3>

            <pre>{
                `
number_array = ${number_array}
sliced_array = ${sliced_array}
                `
            }</pre>
        </div>
    )
}
