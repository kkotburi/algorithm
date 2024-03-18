const solution = (n) => {
  let answer = [];
  for (let i = 2; i <= n; i++) {
    if (!(n % i) && !answer.find((v) => !(i % v))) {
      answer.push(i);
    }
  }
  return answer;
};
