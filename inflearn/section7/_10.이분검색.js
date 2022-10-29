// 인자로 들어오는 배열의 길이의 범위가 1,000,000까지 가능이니
// 시간복잡도 o(n)으로 해결해도 된다고 판단됨
function solution1(target, arr) {
  let count = 0;
  for (let item of arr) {
    if (item < target) count++;
  }
  return ++count;
}
// 오름차순후 , 이분검색을 활용한 방법
// 시간복잡도 o(logn)
function solution2(target, arr) {
  const copy = arr.slice().sort((a, b) => a - b);
  let left = 0;
  let right = copy.length - 1;
  let center;
  for (; target !== copy[center]; ) {
    center = parseInt((left + right) / 2);
    if (copy[center] > target) right = center - 1;
    else if (copy[center] < target) left = center + 1;
  }
  return center + 1;
}
// Refer
// function solution(target, arr) {
//   let answer;
//   arr.sort((a, b) => a - b);
//   let lt = 0,
//     rt = arr.length - 1;
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (arr[mid] === target) {
//       answer = mid + 1;
//       break;
//     } else if (arr[mid] > target) rt = mid - 1;
//     else lt = mid + 1;
//   }

//   return answer;
// }

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution2(32, arr));
