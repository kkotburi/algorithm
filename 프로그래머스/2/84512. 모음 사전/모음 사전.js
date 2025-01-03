const solution = (words) =>
  [...words].reduce(
    (a, c, i) => a + "AEIOU".indexOf(c) * ~~(781 / 5 ** i) + 1,
    0
  );
