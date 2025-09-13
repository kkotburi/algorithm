const solution = (d, budget) => {
  while (d.sort((a, b) => a - b).reduce((a, b) => a + b, 0) > budget) d.pop();
  return d.length;
};