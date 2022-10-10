// [버블정렬특징]
// 각 회전마다 맨뒤에부터 특정됨
// 단축시킬 방법 생각해보기
function solution(arr) {
  const answer = arr.slice();
  for (let i = 0; i < answer.length; i++) {
    const tmp = answer.slice();
    for (let j = 0; j < answer.length - i - 1; j++) {
      if (answer[j] > answer[j + 1])
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
    }
    // 시간단축용
    if (tmp.join() === answer.join()) return answer;
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// Refer
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return answer;
// }

// let arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(arr));
