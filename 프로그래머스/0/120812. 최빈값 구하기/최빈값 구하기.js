function solution(array) {
  let answer = new Map();
  for (let n of array) answer.set(n, (answer.get(n) || 0) + 1);
  answer = [...answer].sort((a, b) => b[1] - a[1]);
  return answer.length === 1 || answer[0][1] > answer[1][1] ? answer[0][0] : -1;
}