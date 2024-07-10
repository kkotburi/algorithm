const solution = (n) => {
  let answer = n + 1;
  while (
    n.toString(2).replace(/0/g, "") !== answer.toString(2).replace(/0/g, "")
  ) {
    answer++;
  }
  return answer;
};
