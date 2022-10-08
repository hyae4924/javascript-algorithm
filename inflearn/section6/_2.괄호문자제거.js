function solution(s) {
  const stack = [];
  for (let item of s) {
    if (item === ")") {
      for (; true; ) {
        const pop = stack.pop();
        if (pop === "(") break;
      }
    } else stack.push(item);
  }
  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));

// Refer
// function solution(s) {
//   let answer;
//   let stack = [];
//   for (let x of s) {
//     if (x === ")") {
//       while (stack.pop() !== "(");
//     } else stack.push(x);
//   }
//   answer = stack.join("");
//   return answer;
// }

// let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// console.log(solution(str));
