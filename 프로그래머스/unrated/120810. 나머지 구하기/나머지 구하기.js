const solution = (num1, num2) => {
  let answer = num1;
  for (let i = 1; i <= num1 / num2; i++) {
    answer -= num2;
  }
  return answer;
};
