const contition = (c, distance, array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let count = 1;
    let pass = false;
    for (let j = i + 1; j < array.length; j++) {
      if (count === c && pass == true) return true;
      if (array[j] - array[i] === distance) {
        count++;
        pass = true;
      } else if (array[j] - array[i] > distance) count++;
    }
  }
  return false;
};
function solution(c, stable) {
  const sorted = stable.slice().sort((a, b) => a - b);
  let maxDistance = sorted[sorted.length - 1] - sorted[0];
  let minDistance = sorted[1] - sorted[0];
  let middle = parseInt((maxDistance + minDistance) / 2);
  let answer = minDistance;
  for (; maxDistance !== minDistance; ) {
    if (contition(c, middle, sorted) && middle > answer) {
      answer = middle;
      minDistance = middle + 1;
    } else maxDistance -= 1;
    middle = parseInt((maxDistance + minDistance) / 2);
  }
  return answer;
}
[1, 2, 4, 8, 9];
let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));

// 말의 최대거리는 몇인가?
// 어짜피 이분검색을 할테니 자잘한 정도의 범위는 스킵하겠다
// 이분검색을하며 조건을 만족하는 최대값을 찾아보자
// 가능한조건은 무엇인가
// 3마리가 모두 들어갈 수 있고 거리가 최대라면 업데이트한다
// 만약 기존 answer보다 값이크고 조건을 만족한다면 업데이트하고
// 범위를 수정하는데  범위는 값이 작은부분을 날린다
// 조건을 만족하지못한다면? //   가장 큰 범위에서 1씩 낮춘다

// Refer
// function count(stable, dist) {
//   let cnt = 1,
//     ep = stable[0];
//   for (let i = 1; i < stable.length; i++) {
//     if (stable[i] - ep >= dist) {
//       cnt++;
//       ep = stable[i];
//     }
//   }
//   return cnt;
// }
// function solution(c, stable) {
//   let answer;
//   stable.sort((a, b) => a - b);
//   let lt = 1;
//   let rt = stable[stable.length - 1];
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (count(stable, mid) >= c) {
//       answer = mid;
//       lt = mid + 1;
//     } else rt = mid - 1;
//   }
//   return answer;
// }
// let arr = [1, 2, 8, 4, 9];
// console.log(solution(3, arr));
