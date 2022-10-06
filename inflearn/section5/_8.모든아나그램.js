const compare = (range, b) => {
  const bMap = new Map();
  for (let item of b) {
    if (!bMap.has(item)) bMap.set(item, 1);
    else bMap.set(item, bMap.get(item) + 1);
  }
  for (let item of range) {
    if (!bMap.has(item) || bMap.get(item) === 0) return false;
    bMap.set(item, bMap.get(item) - 1);
  }
  return true;
};

function solution(long, short) {
  let answer = 0;
  let left = 0;
  let right = short.length - 1;
  for (; right < long.length; right++, left++) {
    const range = long.slice(left, right + 1);
    if (compare(range, short)) answer += 1;
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));

// Refer---------------
// function compareMaps(map1, map2) {
//   if (map1.size !== map2.size) return false;
//   for (let [key, val] of map1) {
//     if (!map2.has(key) || map2.get(key) !== val) return false;
//   }
//   return true;
// }

// function solution(s, t) {
//   let answer = 0;
//   let tH = new Map();
//   let sH = new Map();

//   for (let x of t) {
//     if (tH.has(x)) tH.set(x, tH.get(x) + 1);
//     else tH.set(x, 1);
//   }
//   let len = t.length - 1;
//   for (let i = 0; i < len; i++) {
//     if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
//     else sH.set(s[i], 1);
//   }
//   let lt = 0;
//   for (let rt = len; rt < s.length; rt++) {
//     if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
//     else sH.set(s[rt], 1);
//     if (compareMaps(sH, tH)) answer++;
//     sH.set(s[lt], sH.get(s[lt]) - 1);
//     if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
//     lt++;
//   }
//   return answer;
// }

// let a = "bacaAacba";
// let b = "abc";
// console.log(solution(a, b));
