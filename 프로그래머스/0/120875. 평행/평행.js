const slope = (arr1, arr2, arr3, arr4) =>
  (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]) ===
  (arr4[1] - arr3[1]) / (arr4[0] - arr3[0]);

const solution = (dots) =>
  slope(dots[0], dots[1], dots[2], dots[3]) ||
  slope(dots[0], dots[2], dots[1], dots[3]) ||
  slope(dots[0], dots[3], dots[1], dots[2])
    ? 1
    : 0;