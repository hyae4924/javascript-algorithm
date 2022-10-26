// 삽입정렬응용
function solution(size, arr) {
  const workList = arr.slice();
  const working = new Array(size).fill(0);

  for (let i = 0; i < workList.length; i++) {
    if (working.includes(workList[i])) {
      const index = working.indexOf(workList[i]);
      working.splice(index, 1);
      working.unshift(workList[i]);
    } else {
      working.unshift(workList[i]);
      working.pop();
    }
  }
  return working;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
// Rerfer1
// function solution1(size, arr) {
//   let answer = Array.from({ length: size }, () => 0);
//   arr.forEach(x => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
//     if (pos === -1) {
//       for (let i = size - 1; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     } else {
//       for (let i = pos; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     }
//     answer[0] = x;
//   });
//   return answer;
// }
// let arr1 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
// console.log(solution1(5, arr1));

// // Refer2
// function solution2(size, arr) {
//   let answer = [];
//   arr.forEach(x => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
//     if (pos === -1) {
//       answer.unshift(x);
//       if (answer.length > size) answer.pop();
//     } else {
//       answer.splice(pos, 1);
//       answer.unshift(x);
//     }
//   });

//   return answer;
// }
// let arr2 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
// console.log(solution2(5, arr));
