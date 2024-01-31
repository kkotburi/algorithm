const solution = (n) => {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push([]);
    for (let j = 0; j < n; j++) {
      i === j ? answer[i].push(1) : answer[i].push(0);
    }
  }
  return answer;
};