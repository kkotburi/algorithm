const solution = (balls, share) => {
  let answer = 1;
  for (let i = balls; i > balls - share; i--) {
    answer *= i;
  }
  for (let i = share; i > 1; i--) {
    answer /= i;
  }
  return Math.floor(answer);
};