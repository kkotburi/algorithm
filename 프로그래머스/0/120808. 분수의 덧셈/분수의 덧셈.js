const solution = (numer1, denom1, numer2, denom2) => {
  let answer = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
  for (let i = 2; i <= answer[1]; i++) {
    if (!(answer[0] % i) && !(answer[1] % i)) {
      answer = [answer[0] / i, answer[1] / i];
      i--;
    }
  }
  return answer;
};