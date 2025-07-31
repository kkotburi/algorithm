const solution = (word) =>
  word
    .split("")
    .reduce(
      (a, c, i) =>
        a + [781, 156, 31, 6, 1][i] * ["A", "E", "I", "O", "U"].indexOf(c) + 1,
      0
    );
