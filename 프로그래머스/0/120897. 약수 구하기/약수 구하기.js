const solution = (n) => {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) {
      answer.push(i);
    }
  }
  return answer;
};
