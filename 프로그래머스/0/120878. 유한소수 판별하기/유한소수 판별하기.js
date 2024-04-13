const solution = (a, b) => {
  let n = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (!(a % i) && !(b % i)) n = i;
  }
  b /= n;
  for (let j = 2; j <= b; j++) {
    if (j % 2 && j % 5 && !(b % j)) {
      return 2;
    }
  }
  return 1;
};