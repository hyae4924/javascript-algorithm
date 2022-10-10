// [선택정렬특징]
// 각 회전마다 앞에서부터 차례로 특정됨

function solution(arr) {
  const answer = arr.slice();
  for (let i = 0; i < answer.length; i++) {
    let finalSelected = answer[i];
    for (let j = i + 1; j < answer.length; j++) {
      if (finalSelected > answer[j]) finalSelected = answer[j];
    }
    const index = answer.indexOf(finalSelected);
    [answer[i], answer[index]] = [answer[index], answer[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
// Refer
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length; i++) {
//     let idx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[idx]) idx = j;
//     }
//     [arr[i], arr[idx]] = [arr[idx], arr[i]];
//   }
//   return answer;
// }

// let arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(arr));
