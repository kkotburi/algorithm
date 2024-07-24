const solution = (n, left, right) => {
  let answer = [];
  for (let i = left; i <= right; i++) {
    let s = parseInt(i / n);
    let r = i % n;
    answer.push(Math.max(s, r) + 1);
  }
  return answer;
};