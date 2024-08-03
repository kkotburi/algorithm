const solution = (lines) => {
  let start = Math.min(...lines.flat());
  let end = Math.max(...lines.flat());
  let lst = [...Array(end - start)].fill(0);

  lines.forEach((el) => {
    for (let i = el[0]; i < el[1]; i++) {
      lst[i - start] += 1;
    }
  });

  return lst.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
};