// 그리디 알고리즘
// greedy(욕심 많은, 욕심쟁이의) 알고리즘 뜻 그대로
// 1. 여러 경우 중 하나를 결정해야 할 때마다 그 순간이 최적이라고 생각되는 것을 선택해 나가는 방식으로 진행하여 최종적인 해답에 도달하여 해결함
// 2. 각 선택의 시점에서 이루어지는 결정은 지역적으로는 최적이지만, 그것들을 계속 수집하여 최종적인 해답을 만들었다고 하여, 그것이 최적이라는 보장은 없다.
// 3. 일반적으로, 머리속에 떠오르는 생각을 검증 없이 바로 구현하면 Greedy 접근이 된다.
// 4. 해서 검증이 된 경우에만 사용해야한다
function solution(meeting) {
  const deepCopy = meeting.map(item => item.map(item => item));
  const sorted = deepCopy.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let count = 0;
  let point = 0;
  for (let i = 0; i < sorted.length; i++) {
    let start = sorted[i][0];
    let end = sorted[i][1];
    if (point <= start) {
      point = end;
      count++;
    }
  }
  return count;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
// REFER
// function solution(meeting) {
//   let answer = 0;
//   meeting.sort((a, b) => {
//     if (a[1] === b[1]) return a[0] - b[0];
//     else return a[1] - b[1];
//   });
//   console.log(meeting);
//   let et = 0;
//   for (let x of meeting) {
//     if (x[0] >= et) {
//       answer++;
//       et = x[1];
//     }
//   }
//   return answer;
// }

// let arr = [
//   [1, 4],
//   [2, 3],
//   [3, 5],
//   [4, 6],
//   [5, 7],
// ];
// console.log(solution(arr));
