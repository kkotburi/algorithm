const solution = (board) =>
  Math.max(
    ...board.reduce(
      (a, c) => [
        c[0] + Math.max(a[1], a[2], a[3]),
        c[1] + Math.max(a[0], a[2], a[3]),
        c[2] + Math.max(a[0], a[1], a[3]),
        c[3] + Math.max(a[0], a[1], a[2]),
      ],
      [0, 0, 0, 0]
    )
  );