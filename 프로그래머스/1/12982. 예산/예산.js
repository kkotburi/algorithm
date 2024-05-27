const solution = (d, budget) => {
  d = d.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < d.length; i++) {
    if (budget >= d[i]) {
      budget -= d[i];
      answer++;
    }
  }
  return answer;
};
