const solution = (lines) => {
  let line = new Array(200).fill(0);
  lines.forEach(([a, b]) => {
    while (a < b) {
      line[a + 100]++;
      a++;
    }
  });
  return line.reduce((acc, curr) => (curr > 1 ? acc + 1 : acc), 0);
};