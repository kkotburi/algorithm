const solution = (score) => {
  let average = score.map(([english, math]) => (english + math) / 2);
  let answer = [];
  for (let i = 0; i < average.length; i++) {
    answer.push([...average].sort((a, b) => b - a).indexOf(average[i]) + 1);
  }
  return answer;
};
