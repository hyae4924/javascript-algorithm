// 이분검색 이용
function solution(m, songs) {
  // DVD의 길이가 될수 있는 범위
  // 최대의 범위에서 이분검색을 통해 최소의 범위까지 줄여가며
  //  최적의 답을 찾아보자

  let left = Math.max(...songs);
  let right = songs.reduce((a, b) => a + b, 0);
  let center = parseInt((left + right) / 2);
  let answer = right;

  for (; left <= right; ) {
    let minute = 0;
    let count = 1;
    for (let i = 0; i < songs.length; i++) {
      if (center >= minute + songs[i]) {
        minute += songs[i];
      } else {
        count++;
        minute = 0;
        minute += songs[i];
      }
    }

    if (count <= m && answer > center) answer = center;
    if (count > m) {
      left = center + 1;
      center = parseInt((left + right) / 2);
    } else {
      right = center - 1;
      center = parseInt((left + right) / 2);
    }
  }
  return answer;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));

// firstSoultion-----------------------------------
// const fixArray = array => {
//   const maxIndex = array.findIndex(
//     item => item.reduce((a, b) => a + b, 0) === findMax(array)
//   );
//   if (maxIndex === 0) {
//     array[maxIndex + 1].unshift(array[maxIndex].pop());
//   } else if (maxIndex === array.length - 1) {
//     array[maxIndex - 1].push(array[maxIndex].shift());
//   } else {
//     const frontSum = array[maxIndex - 1].reduce((a, b) => a + b, 0);
//     const backSum = array[maxIndex + 1].reduce((a, b) => a + b, 0);
//     let target;
//     if (frontSum >= backSum) {
//       target = maxIndex + 1;
//       array[target].unshift(array[maxIndex].pop());
//     } else {
//       target = maxIndex - 1;
//       array[target].push(array[maxIndex].shift());
//     }
//   }
// };
// const findMax = array => {
//   let max = 0;
//   for (let i = 0; i < array.length; i++) {
//     const sum = array[i].reduce((a, b) => a + b, 0);
//     if (sum > max) max = sum;
//   }
//   return max;
// };
// const findMin = array => {
//   let min = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < array.length; i++) {
//     const sum = array[i].reduce((a, b) => a + b, 0);
//     if (min > sum) min = sum;
//   }
//   return min;
// };
// function solution(m, songs) {
//   const chunckSize = parseInt(songs.length / m);
//   const array = [];
//   for (let i = 0; i < songs.length; i += chunckSize) {
//     array.push(songs.slice(i, i + chunckSize));
//   }
//   let max = findMax(array);
//   let min = findMin(array);
//   let cal = max - min;
//   let tmpForCal = 0;
//   let tmpForMax = max;
//   for (;;) {
//     fixArray(array);
//     max = findMax(array);
//     min = findMin(array);
//     tmpForCal = max - min;
//     if (cal < tmpForCal) break;
//     else {
//       cal = tmpForCal;
//       tmpForMax = max;
//     }
//   }
//   return tmpForMax;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(solution(3, arr));
// firstSoultion-----------------------------------

// Refer----------------------------------------
// function count(songs, capacity) {
//   let cnt = 1,
//     sum = 0;
//   for (let x of songs) {
//     if (sum + x > capacity) {
//       cnt++;
//       sum = x;
//     } else sum += x;
//   }
//   return cnt;
// }
// function solution(m, songs) {
//   let answer;
//   let lt = Math.max(...songs);
//   let rt = songs.reduce((a, b) => a + b, 0);
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (count(songs, mid) <= m) {
//       answer = mid;
//       rt = mid - 1;
//     } else {
//       lt = mid + 1;
//     }
//   }
//   return answer;
// }
