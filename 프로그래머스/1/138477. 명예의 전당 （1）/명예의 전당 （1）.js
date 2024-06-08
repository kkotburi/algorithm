const solution = (k, score) => {
  let hall = [];
  let answer = [];
  for (let i = 0; i < score.length; i++) {
    if (hall.length < k) {
      hall.push(score[i]);
    } else if (score[i] > Math.min(...hall)) {
      hall.push(score[i]);
      hall.sort((a, b) => b - a).pop();
    }
    answer.push(Math.min(...hall));
  }
  return answer;
};
