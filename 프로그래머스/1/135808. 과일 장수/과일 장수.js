const solution = (k, m, score) => {
  score.sort((a, b) => b - a);
  let boxes = [];
  for (let i = 0; i < score.length; i += m) {
    boxes.push(score.slice(i, i + m));
  }
  let answer = 0;
  for (let j = 0; j < boxes.length; j++) {
    if (boxes[j][m - 1]) {
      answer += boxes[j][m - 1] * m;
    }
  }
  return answer;
};
