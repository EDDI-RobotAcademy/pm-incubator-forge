export const ControlFlowForSummation = () => {
   let LoopResultArray = []
   let summation = 0
   // 값을 누적하기 위해 누적 대상값에 초기값 설정 필요
   // 숫자 x 대상과 계산 시 NaN (Not a Number)
   // 따라서 summation 에 0을 지정하여 NaN 피함

   for (let i = 1; i <= 3; i++) {
        LoopResultArray.push(i)
         //LoopResultArray = [1, 2, 3]
         // 배열은 0부터 시작하기 때문에 index 0 고려해야 함
   }

   for (let i = 1; i <= 3; i++) {
        summation += LoopResultArray[i - 1]
   }
   // '+='의 의미: '=' 왼쪽 대상과 오른쪽 대상 합쳐서 왼쪽 대상에 대입 
   // 왼쪽 = 왼쪽 + 오른쪽
   // summation = summation + LoopResultArray[i - 1]
   //[i - 1]의 의미: 배열은 0부터 시작이기 때문! (1-1=0)

   // 전의 for 루프와 마찬가지로 3번 반복
   
   // i = 1 일 때
   // summation = 0 (summation) + 1(LoopResultArray[0])
   // summation 이 0인 이유는 아직 누적 값 없어서 초기 설정한 0
   // + 1 하는 이유
   // loopResultArray[i - 1] 에서 loopResultArray[1 - 1] 인데
   // loopResultArray[0] 이건 뭐지?
   // 배열의 시작은 인덱스 0부터임 ->  [1, 2, 3] 중 첫번째로 push된 i 값은 1
   // 따라서 연산 이후 summation은 1이 됩니다.

   // i = 2 일 때
   // summation = 1(summation)
   // summation = 1 + 2(loopResultArray[1])
   // summation = 3

   // i = 3 일 때
   // summation = 3(summation)
   // summation = 3 + 3(loopResultArray[2])
   // summation = 6


   
    return (
        <div>
            <h3>javascript 제어문 (for)</h3>
            
            <pre>{
                `
LoopResultArray = ${LoopResultArray} 
summation = ${summation}

                `        
    
             }</pre>
        </div>
    )
}