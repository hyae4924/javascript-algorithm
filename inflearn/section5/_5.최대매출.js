function solution(k, arr) {
  let sum = arr.slice(0, k).reduce((a, b) => a + b);
  let answer = sum;
  for (let left = 0, right = k; right < arr.length; left++, right++) {
    sum -= arr[left];
    sum += arr[right];
    if (sum > answer) answer = sum;
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

// function solution(k, arr) {
//     let answer,
//       sum = 0;
//     for (let i = 0; i < k; i++) sum += arr[i];
//     answer = sum;
//     for (let i = k; i < arr.length; i++) {
//       sum += arr[i] - arr[i - k];
//       answer = Math.max(answer, sum);
//     }
//     return answer;
//   }

//   let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
//   console.log(solution(3, a));
