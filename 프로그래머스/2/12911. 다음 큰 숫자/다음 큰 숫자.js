const solution = (n, answer = n + 1) =>
  n.toString(2).replace(/0/g, "") === answer.toString(2).replace(/0/g, "")
    ? answer
    : solution(n, answer + 1);
