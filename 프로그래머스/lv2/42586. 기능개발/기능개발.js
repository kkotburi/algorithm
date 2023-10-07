const solution = (progresses, speeds) => {
  let answer = [];
  let temp = [];

  for (let i = 0; i < progresses.length; i++) {
    progresses[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
  }

  for (let i = 0; i < progresses.length; i++) {
    temp.push(progresses[i]);
    if (temp[0] < progresses[i + 1] || !progresses[i + 1]) {
      answer.push(temp.length);
      temp = [];
    }
  }

  return answer;
};