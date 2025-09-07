const solution = (n, answer = n + 1) =>
  n.toString(2).match(/1/g).length === answer.toString(2).match(/1/g).length
    ? answer
    : solution(n, answer + 1);
