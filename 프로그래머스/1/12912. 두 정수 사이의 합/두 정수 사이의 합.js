const solution = (a, b) => {
  let range = [a, b].sort((a, b) => a - b);
  let answer = 0;
  for (let i = range[0]; i <= range[1]; i++) {
    answer += i;
  }
  return answer;
};
