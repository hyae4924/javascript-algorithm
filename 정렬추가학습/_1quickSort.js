// [퀵 정렬]
// 분할 정복 알고리즘의 하나,
// 평균적으로 매우 빠른 수행 속도를 자랑하는 정렬 방법
// 합병 정렬(merge sort)과 달리 퀵 정렬은 리스트를 비균등하게 분할한다.
// 를 피벗(pivot)을 기준으로 두 개의 비균등한 크기로 분할하고 분할된 부분 리스트를 정렬한 다음, 두 개의 정렬된 부분 리스트를 합하여 전체가 정렬된 리스트가 되게 하는 방법이다.
const quickSort = arr => {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (pivot >= arr[i]) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);
  return [...leftSorted, pivot, ...rightSorted];
};

console.log(quickSort([3, 1, 21]));
