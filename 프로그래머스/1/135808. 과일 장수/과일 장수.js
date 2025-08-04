const solution = (_, m, score) =>
  score
    .sort()
    .filter((_, i) => !((score.length - i) % m))
    .reduce((a, c) => a + c, 0) * m;
