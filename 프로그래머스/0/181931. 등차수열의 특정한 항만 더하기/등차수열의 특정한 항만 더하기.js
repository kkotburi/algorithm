const solution = (a, d, included) =>
  included.reduce((acc, cur, idx) => {
    return cur ? acc + a + d * idx : acc;
  }, 0);