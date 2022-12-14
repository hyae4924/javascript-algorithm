// 정렬문제
function solution(arr) {
  const answer = [];
  const sorted = arr.slice().sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== arr[i]) answer.push(i + 1);
  }
  return answer;
}
let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));

// Refer
// function solution(arr) {
//   let answer = [];
//   let sortArr = arr.slice();
//   sortArr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== sortArr[i]) answer.push(i + 1);
//   }
//   return answer;
// }

// let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
// console.log(solution(arr));
