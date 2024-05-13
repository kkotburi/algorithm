const solution = (numbers) => {
  let answer = 0;
  for (let i = 1; i <= 9; i++) {
    if (!numbers.find((v) => v === i)) {
      answer += i;
    }
  }
  return answer;
};
