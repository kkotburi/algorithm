const solution = (number, limit, power) => {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let divisor = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (j ** 2 === i) {
        divisor++;
      } else if (!(i % j)) {
        divisor += 2;
      }
    }

    divisor > limit ? (answer += power) : (answer += divisor);
  }

  return answer;
};