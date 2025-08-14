const solution = (arr1, arr2) =>
  arr1.map((row) =>
    arr2[0].map((_, i) =>
      row.reduce((acc, cur, idx) => acc + cur * arr2[idx][i], 0)
    )
  );