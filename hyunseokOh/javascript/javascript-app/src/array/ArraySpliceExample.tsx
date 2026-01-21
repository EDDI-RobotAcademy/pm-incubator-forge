export const ArraySpliceExample = () => {
    let number_array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];   // 원본 배열
    let spliced_array: number[] = [...number_array] // 배열 복사
    // ... spread 연산자를 사용하여 원본 배열을 복사

    spliced_array.splice(3, 1, 777);    // 인덱스 3에서 1개 요소 제거 후 777 추가

    let second_spliced_array: number[] = [...number_array] // 배열 복사
    second_spliced_array.splice(5, 2);  // 인덱스 5에서 2개 요소 제거
    
    return (
        <div>
            <h2>Array Splice Example</h2>
            <pre>{`
number_array = ${number_array.join(", ")} // 원본 배열
spliced_array = ${spliced_array.join(", ")} // splice 함수 결과 저장 (인덱스 3에서 1개 요소 제거 후 777 추가)
second_spliced_array = ${second_spliced_array.join(", ")} // splice 함수 결과 저장 (인덱스 5에서 2개 요소 제거)
            `
            }</pre>        
        </div>
    )
}