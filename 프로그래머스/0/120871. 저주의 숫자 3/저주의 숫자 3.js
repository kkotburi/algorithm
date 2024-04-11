const solution = (n) =>
  [...Array(n * 3)]
    .map((_, i) => i + 1)
    .filter((v) => v % 3 && !v.toString().includes(3))[n - 1];