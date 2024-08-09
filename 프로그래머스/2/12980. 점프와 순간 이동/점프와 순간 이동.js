const solution = (n) => {
  let ans = 1;
  while (n !== 1) {
    if (n % 2) {
      ans++;
    }
    n = Math.floor(n / 2);
  }
  return ans;
};