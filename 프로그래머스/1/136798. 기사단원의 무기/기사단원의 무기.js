const solution = (number, limit, power) => {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let divisor = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (!(i % j)) {
        divisor += 2;
      }
      if (j ** 2 === i) {
        divisor--;
      }
    }
    divisor > limit ? (answer += power) : (answer += divisor);
  }
  return answer;
};
