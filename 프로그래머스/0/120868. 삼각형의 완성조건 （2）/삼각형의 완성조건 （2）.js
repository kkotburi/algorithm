const solution = (sides) => {
  sides = sides.sort((a, b) => a - b);
  let answer = 0;
  for (let i = sides[1] - sides[0]; i < sides[1]; i++) {
    answer++;
  }
  for (let i = sides[1] + 1; i < sides[0] + sides[1]; i++) {
    answer++;
  }
  return answer;
};
