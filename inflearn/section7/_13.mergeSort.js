const merge = (left, right) => {
  const merged = [];
  let cnt1 = (cnt2 = 0);
  for (; cnt1 < left.length && cnt2 < right.length; ) {
    if (left[cnt1] < right[cnt2]) merged.push(left[cnt1++]);
    else merged.push(right[cnt2++]);
  }
  for (; cnt1 < left.length || cnt2 < right.length; ) {
    if (cnt1 < left.length) merged.push(left[cnt1++]);
    if (cnt2 < right.length) merged.push(right[cnt2++]);
  }
  return merged;
};

const mergeSort = arr => {
  if (arr.length === 1) return arr;
  const center = parseInt(arr.length / 2);
  const left = mergeSort(arr.slice(0, center));
  const right = mergeSort(arr.slice(center));
  return merge(left, right);
};

console.log(mergeSort([3, 1, 21, 18, 4, 6, 42]));
