function solution(s) {
  const arr = s.split("");
  const object = {};
  let winner;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in object)) object[arr[i]] = 1;
    else ++object[arr[i]];
  }
  for (let key in object) {
    if (object[key] > count) {
      winner = key;
      count = object[key];
    }
  }
  return winner;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));

//----------   Reference---------
// function solution(s) {
//   let answer;
//   let sH = new Map();
//   for (let x of s) {
//     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//     else sH.set(x, 1);
//   }
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let [key, val] of sH) {
//     if (val > max) {
//       max = val;
//       answer = key;
//     }
//   }
//   return answer;
// }

// let str = "BACBACCACCBDEDE";
// console.log(solution(str));
