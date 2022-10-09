function solution(n, k) {
  const array = new Array(n).fill().map((item, index) => index + 1);
  let count = 1;
  for (; array.length > 1; ) {
    if (count === k) {
      array.shift();
      count = 1;
    } else {
      array.push(array.shift());
      count++;
    }
    console.log(array);
  }
  return array[0];
}

console.log(solution(8, 3));
//   Refer
// function solution(n, k) {
//   let answer;
//   let queue = Array.from({ length: n }, (v, i) => i + 1);
//   while (queue.length) {
//     for (let i = 1; i < k; i++) queue.push(queue.shift());
//     queue.shift();
//     if (queue.length === 1) answer = queue.shift();
//     console.log(queue);
//   }
//   return answer;
// }
// console.log(solution(8, 3));
