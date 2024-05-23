const solution = (arr1, arr2) =>
  arr1.map((v, i) => v.map((w, j) => w + arr2[i][j]));