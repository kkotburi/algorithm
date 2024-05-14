const solution = (num) => {
  let answer = 0;
  while (num !== 1) {
    if (num % 2) {
      num = num * 3 + 1;
      answer++;
    } else {
      num = num / 2;
      answer++;
    }
  }
  return answer < 500 ? answer : -1;
};
