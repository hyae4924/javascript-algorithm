function solution1(arr) {
  const answer = arr.slice();
  for (let i = 0; i < answer.length; i++) {
    const tmp = answer.slice();
    for (let j = 0; j < answer.length - i - 1; j++) {
      // 둘다 음수면 신경쓰지말고 패스
      if (answer[j] < 0 && answer[j + 1] < 0) continue;
      if (answer[j] > answer[j + 1])
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
    }
    // 시간단축용
    if (tmp.join() === answer.join()) return answer;
  }
  return answer;
}
let arr1 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution1(arr1));

// Refer1
// function solution1(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > 0 && arr[j + 1] < 0) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return answer;
// }
// let arr1 = [1, 2, 3, -3, -2, 5, 6, -6];
// console.log(solution1(arr1));

// Refer2
// function solution2(arr) {
//   let answer = [];
//   for (let x of arr) {
//     if (x < 0) answer.push(x);
//   }
//   for (let x of arr) {
//     if (x > 0) answer.push(x);
//   }
//   return answer;
// }
// let arr2 = [1, 2, 3, -3, -2, 5, 6, -6];
// console.log(solution2(arr2));
