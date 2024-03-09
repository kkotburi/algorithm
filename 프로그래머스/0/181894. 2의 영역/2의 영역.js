const solution = (arr) => {
  const start = arr.indexOf(2);
  const end = arr.lastIndexOf(2) + 1;
  return arr.includes(2) ? arr.slice(start, end) : [-1];
};