function solution(str1, str2) {
  let result = "yes";
  let copy1 = str1.split("");
  let copy2 = str2.split("");
  for (; copy1.length > 0; ) {
    const item = copy1.pop();
    const index = copy2.indexOf(item);
    if (index < 0) return "NO";
    copy2.splice(index, 1);
  }
  return result;
}

let a = "AbaAeCe";
let b = "baeeACA";
// let a = "abacCC";
// let b = "CcaaCb";
console.log(solution(a, b));

// solution2----------
// function solution(str1, str2) {
//   const map = new Map();
//   for (let i = 0; i < str1.length; i++) {
//     if (!map.has(str1[i])) map.set(str1[i], 1);
//     else map.set(str1[i], map.get(str1[i]) + 1);
//   }
//   for (let i = 0; i < str2.length; i++) {
//     if (!map.has(str2[i]) || map.get(str2[i]) === 0) return "NO";
//     map.set(str2[i], map.get(str2[i] - 1));
//   }
//   return "yes";
// }

// // let a = "AbaAeCe";
// // let b = "baeeACA";
// let a = "abacCdC";
// let b = "CcaaCeb";
// console.log(solution(a, b));

// Refer------------------------------
//   function solution(str1, str2) {
//   let answer = "YES";
//   let sH = new Map();
//   for (let x of str1) {
//     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//     else sH.set(x, 1);
//   }
//   for (let x of str2) {
//     if (!sH.has(x) || sH.get(x) == 0) return "NO";
//     sH.set(x, sH.get(x) - 1);
//   }
//   return answer;
// }

// let a = "AbaAeCe";
// let b = "baeeACA";
// console.log(solution(a, b));
