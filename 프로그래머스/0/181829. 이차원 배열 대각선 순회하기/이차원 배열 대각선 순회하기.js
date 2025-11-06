const solution = (board, k) =>
  board.reduce(
    (sum, row, i) =>
      sum + row.reduce((acc, num, j) => (i + j <= k ? acc + num : acc), 0),
    0
  );