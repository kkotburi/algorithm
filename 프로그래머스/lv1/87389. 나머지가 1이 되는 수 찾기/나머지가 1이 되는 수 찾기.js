const solution = (n) => {
  let answer = 0;

  for (i = 1; i < n; i++) {
    answer++;
    if (n % i === 1) {
      break;
    }
  }

  return answer;
};