const solution = (n) => {
  let answer = [n];
  for (let i = 0; answer[i] > 1; i++) {
    if (!(n % 2)) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    answer.push(n);
  }
  return answer;
};
