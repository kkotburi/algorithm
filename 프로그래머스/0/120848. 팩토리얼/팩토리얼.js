const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= 10; i++) {
    n = n / i;
    if (n < i + 1) {
      answer = i;
      break;
    }
  }
  return answer;
};
