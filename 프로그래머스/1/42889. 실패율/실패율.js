const solution = (N, stages) => {
  let answer = [];
  for (let i = 1; i <= N; i++) {
    let arrived = stages.filter((v) => v >= i).length;
    let fail = stages.filter((v) => v === i).length;
    answer.push([i, fail / arrived]);
  }
  return answer.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
};