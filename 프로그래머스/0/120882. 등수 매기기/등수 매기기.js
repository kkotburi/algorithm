const solution = (score) =>
  score.map(
    (el) => score.filter((v) => v[0] + v[1] > el[0] + el[1]).length + 1
  );