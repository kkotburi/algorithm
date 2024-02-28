const solution = (i, j, k) => {
  let answer = 0;
  for (let index = i; index <= j; index++) {
    answer += index.toString().split(k.toString()).length - 1;
  }
  return answer;
};
