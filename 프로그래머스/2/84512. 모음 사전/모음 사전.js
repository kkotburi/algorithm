const solution = (word) =>
  word
    .split("")
    .reduce(
      (a, b, i) => a + ("AEIOU".indexOf(b) * (5 ** (5 - i) - 1)) / 4 + 1,
      0
    );