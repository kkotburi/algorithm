const solution = (n) => {
  n = n.toString();
  let answer = 0;
  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i]);
  }
  return answer;
};
