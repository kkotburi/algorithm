const solution = (brown, yellow) => {
  let answer = [];
  for (let i = 1; i <= yellow; i++) {
    const width = yellow / i + 2;
    const height = i + 2;
    if (brown === width * height - yellow) {
      answer.push(width, height);
      break;
    }
  }
  return answer;
};