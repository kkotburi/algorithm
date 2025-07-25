const isPrime = (num) => {
  if (!num || num === 1) return false;
  for (let i = 2; i <= +Math.sqrt(num); i++) {
    if (!(num % i)) return false;
  }
  return true;
};

const solution = (n, k) =>
  n
    .toString(k)
    .split("0")
    .filter((v) => isPrime(+v)).length;