const GreatestCommonDivisor = (a, b) =>
  a % b ? GreatestCommonDivisor(b, a % b) : b;

const solution = (numer1, denom1, numer2, denom2) => {
  let denum = numer1 * denom2 + numer2 * denom1;
  let num = denom1 * denom2;
  let gcd = GreatestCommonDivisor(denum, num);

  return [denum / gcd, num / gcd];
};