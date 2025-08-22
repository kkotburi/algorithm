const solution = (n) => {
  if (n === 1) return 1;
  let arr = Array.from(n.toString(2));

  return arr.reduce((a, b) => +a + +b);
};