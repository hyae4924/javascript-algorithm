// [삽입정렬특징]
// 1. 두번째 자료부터 시작
// 2. 각회전마다 비교대상 key를 정함
// 3. 자신의 앞자료들을 차례로 비교해 차리를 찾아감
function solution(arr) {
  const answer = arr.slice();
  for (let i = 1; i < answer.length; i++) {
    const key = answer[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (key < answer[j]) answer[j + 1] = answer[j];
      else break;
    }
    answer[j + 1] = key;
  }
  return answer;
}
let arr = [9, 42, 32, 41, 7, 15, 44, 64, 87, 23, 41, 22];
console.log(solution(arr));

// my first solution-------------------------------------------------
// function solution(arr) {
//   // for no side effect
//   const answer = arr.slice();
//   for (let i = 1; i < answer.length; i++) {
//     let index;
//     const key = answer.splice(i, 1)[0];
//     console.log("삭제", answer);
//     for (let j = i - 1; j >= 0; j--) {
//       // 정렬할 필요가 없는경우=>그자리에 다시 삽입(맨뒤인경우)
//       if (j === i - 1 && key > answer[j]) {
//         answer.splice(i, 0, key);
//         console.log("추가1", answer);
//         break;
//       }
//       //회전하며 들어가 인덱스 찾기
//       if (key < answer[j]) {
//         index = j;
//       }
//     }
//     //인덱스가있으면 (가운데인경우)
//     if (index) {
//       answer.splice(index, 0, key);
//       console.log("추가2", answer);
//     }
//     //인덱스가 없으면 (젤 작은경우)
//     if (!index && answer.length !== arr.length) {
//       answer.splice(0, 0, key);
//       console.log("추가3", answer);
//     }
//   }
//   return answer;
// }
// let arr = [9, 42, 32, 41, 7, 15, 44, 64, 87, 23, 41, 22];
// console.log(solution(arr));

// Refer1-------------------------------------------------------
// function solution1(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length; i++) {
//     let tmp = arr[i];
//     let j;
//     for (j = i - 1; j >= 0; j--) {
//       if (arr[j] > tmp) arr[j + 1] = arr[j];
//       else break;
//     }
//     arr[j + 1] = tmp;
//   }
//   return answer;
// }
// let arr1 = [11, 7, 5, 6, 10, 9];
// console.log(solution1(arr1));

// Refer2------------------------------------------------------
// function solution2(arr) {
//   let answer = [];
//   answer.push(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < answer.length; j++) {
//       if (arr[i] < answer[j]) {
//         answer.splice(j, 0, arr[i]);
//         break;
//       }
//     }
//   }
//   return answer;
// }
// let arr2 = [11, 7, 5, 6, 10, 9];
// console.log(solution2(arr2));
