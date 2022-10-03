function solution(arr1, arr2) {
  let sortedArr1 = arr1.slice().sort((a, b) => a - b);
  let sortedArr2 = arr2.slice().sort((a, b) => a - b);
  let cnt1 = (cnt2 = 0);
  const answer = [];
  for (; sortedArr1.length > cnt1 && sortedArr2.length > cnt2; ) {
    if (sortedArr1[cnt1] === sortedArr2[cnt2]) {
      answer.push(sortedArr1[cnt1]);
      cnt1++;
      cnt2++;
    } else if (sortedArr1[cnt1] < sortedArr2[cnt2]) cnt1++;
    else cnt2++;
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));

// // ------Reference-------
// function solution(arr1, arr2) {
//     let answer = [];
//     arr1.sort((a, b) => a - b);
//     arr2.sort((a, b) => a - b);
//     let p1 = (p2 = 0);
//     while (p1 < arr1.length && p2 < arr2.length) {
//       if (arr1[p1] == arr2[p2]) {
//         answer.push(arr1[p1++]);
//         p2++;
//       } else if (arr1[p1] < arr2[p2]) p1++;
//       else p2++;
//     }
//     return answer;
//   }

//   let a = [1, 3, 9, 5, 2];
//   let b = [3, 2, 5, 7, 8];
//   console.log(solution(a, b));
