// // solution2
// // 그리디 알고리즘 O(n)
function solution(times) {
  const TimeLine = [];
  for (let i = 0; i < times.length; i++) {
    TimeLine.push(["s", times[i][0]]);
    TimeLine.push(["e", times[i][1]]);
  }
  const sorted = TimeLine.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0].charCodeAt() - b[0].charCodeAt();
  });
  let count = 0;
  let max = 0;
  for (let item of sorted) {
    if (item[0] === "s") ++count;
    else --count;
    if (max < count) max = count;
  }
  return max;
}
let arr = [
  [5, 10],
  [8, 11],
  [4, 12],
  [12, 13],
  [9, 14],
];
console.log(solution(arr));

// solution1
// // (n^2)  N(5<=N<=100,000) 이기때문에 O(n^2)도가능
// function solution(times) {
//   const copy = times.map(item => item.map(item2 => item2));
//   const sorted = copy.sort((a, b) => {
//     if (a[1] === b[1]) return a[0] - b[0];
//     else return a[1] - b[1];
//   });
//   let max = 0;
//   for (let i = 0; i < sorted.length; i++) {
//     const start = sorted[i][0];

//     let count = 0;
//     for (let j = 0; j < sorted.length; j++) {
//       if (start >= sorted[j][0] && start < sorted[j][1]) count++;
//     }
//     console.log(count);
//     if (count > max) max = count;
//   }
//   return max;
// }
// let arr = [
//   [5, 10],
//   [12, 13],
//   [4, 12],
//   [9, 14],
//   [8, 11],
// ];
// console.log(solution(arr));

// Refer
// function solution(times) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let T_line = [];
//   for (let x of times) {
//     T_line.push([x[0], "s"]);
//     T_line.push([x[1], "e"]);
//   }
//   T_line.sort((a, b) => {
//     if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
//     else return a[0] - b[0];
//   });
//   let cnt = 0;
//   for (let x of T_line) {
//     if (x[1] === "s") cnt++;
//     else cnt--;
//     answer = Math.max(answer, cnt);
//   }
//   return answer;
// }

// let arr = [
//   [5, 10],
//   [8, 11],
//   [4, 12],
//   [12, 13],
//   [9, 14],
// ];
// console.log(solution(arr));
