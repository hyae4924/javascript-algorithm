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
