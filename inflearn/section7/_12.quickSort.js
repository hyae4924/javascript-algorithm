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
