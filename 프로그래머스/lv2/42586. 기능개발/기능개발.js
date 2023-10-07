const solution = (progresses, speeds) => {
  let answer = [];
  let temp = [];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  for (let i = 0; i < days.length; i++) {
    temp.push(days[i]);
    if (temp[0] < days[i + 1] || !days[i + 1]) {
      answer.push(temp.length);
      temp = [];
    }
  }

  return answer;
};