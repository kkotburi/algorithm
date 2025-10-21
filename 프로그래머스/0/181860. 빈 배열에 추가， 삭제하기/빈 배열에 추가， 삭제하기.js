const solution = (arr, flag) =>
  arr.reduce(
    (a, c, i) =>
      flag[i] ? [...a, ...new Array(c * 2).fill(c)] : a.slice(0, -c),
    []
  );
