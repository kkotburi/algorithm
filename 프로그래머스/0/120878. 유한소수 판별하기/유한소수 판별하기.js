const solution = (a, b) => {
  for (let i = Math.min(a, b); i > 1; i--) {
    if (!(a % i) && !(b % i)) {
      b /= i;
      break;
    }
  }
  for (let j = 2; j <= b; j++) {
    if (j % 2 && j % 5 && !(b % j)) {
      return 2;
    }
  }
  return 1;
};