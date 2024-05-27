const solution = (d, budget) =>
  d
    .sort((a, b) => a - b)
    .reduce((count, price) => count + ((budget -= price) >= 0), 0);
