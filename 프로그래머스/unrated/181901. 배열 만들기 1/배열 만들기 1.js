const solution = (n, k) => {
  let answer = [];
  for (let i = k; i <= n; i++) {
    if (!(i % k)) {
      answer.push(i);
    }
  }
  return answer;
};
