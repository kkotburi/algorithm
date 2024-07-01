// 다른 사람 풀이 참고
const solution = (N, stages) => {
  let answer = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    answer.push([i, curr / reach]);
  }
  answer.sort((a, b) => b[1] - a[1]);
  return answer.map((v) => v[0]);
};
