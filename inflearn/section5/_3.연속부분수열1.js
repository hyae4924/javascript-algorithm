function solution(m, arr) {
  let left = (right = answer = sum = 0);
  for (; right < arr.length; ) {
    sum += arr[right++];
    if (sum === m) {
      ++answer;
    }
    for (; sum >= m; ) {
      sum -= arr[left++];
      if (sum === m) ++answer;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

//  -----------Refer------------
// function solution(m, arr) {
//   let answer = 0,
//     lt = 0,
//     sum = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     if (sum === m) answer++;
//     while (sum >= m) {
//       sum -= arr[lt++];
//       if (sum === m) answer++;
//     }
//   }
//   return answer;
// }

// let a = [1, 2, 1, 3, 1, 1, 1, 2];
// console.log(solution(6, a));

// let b = [1, 2, 3, 4, 5];
// console.log(b.slice(0, 2));
