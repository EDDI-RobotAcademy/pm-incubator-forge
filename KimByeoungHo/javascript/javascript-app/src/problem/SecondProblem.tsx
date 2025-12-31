export const SecondProblem = () => {
    let loopResultArray = []
    let summation = 0


    let Number = 3;
    let Count = 0;

    for (;Count <= 4; Number += 3, Count++) {
        loopResultArray.push (Number)
        summation += loopResultArray[Count]
    }

  return (
    <div>
      <h3>두번째 문제 (For)</h3>

      <pre>
        {
        `
            loopResultArray = ${loopResultArray}
            summation = ${summation}
        `
        }
      </pre>
    </div>
  )
}

export default SecondProblem
