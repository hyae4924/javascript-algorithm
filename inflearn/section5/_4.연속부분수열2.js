function solution(m, arr) {
  let sum = (left = right = answer = 0);
  for (; right < arr.length; right += 1) {
    sum += arr[right];
    for (; sum > m; ) {
      sum -= arr[left];
      left += 1;
    }
    answer += right - left + 1;
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

//---------Refer--------
// function solution(m, arr) {
//     let answer = 0,
//       sum = 0,
//       lt = 0;
//     for (let rt = 0; rt < arr.length; rt++) {
//       sum += arr[rt];
//       while (sum > m) {
//         sum -= arr[lt++];
//       }
//       answer += rt - lt + 1;
//     }
//     return answer;
//   }

//   let a = [1, 3, 1, 2, 3];
//   console.log(solution(5, a));
