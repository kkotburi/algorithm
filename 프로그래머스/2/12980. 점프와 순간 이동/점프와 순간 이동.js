const solution = (n) =>
  n === 1 ? 1 : Array.from(n.toString(2)).reduce((a, b) => +a + +b);
