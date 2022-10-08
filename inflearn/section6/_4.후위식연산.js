function solution(s) {
  const stack = [];
  for (let item of s) {
    if (!isNaN(item)) stack.push(Number(item));
    else {
      const right = stack.pop();
      const left = stack.pop();
      if (item === "*") stack.push(left * right);
      else if (item === "/") stack.push(left / right);
      else if (item === "+") stack.push(left + right);
      else if (item === "-") stack.push(left - right);
    }
  }
  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));
// Refer
// function solution(s) {
//   let answer;
//   let stack = [];
//   for (let x of s) {
//     if (!isNaN(x)) stack.push(Number(x));
//     else {
//       let rt = stack.pop();
//       let lt = stack.pop();
//       if (x === "+") stack.push(lt + rt);
//       else if (x === "-") stack.push(lt - rt);
//       else if (x === "*") stack.push(lt * rt);
//       else if (x === "/") stack.push(lt / rt);
//     }
//   }
//   answer = stack[0];
//   return answer;
// }

// let str = "352+*9-";
// console.log(solution(str));
