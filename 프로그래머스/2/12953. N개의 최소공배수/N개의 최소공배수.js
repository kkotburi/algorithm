const solution = (arr) => {
  let answer = Math.max(...arr);
  while (arr.filter((v) => answer % v).length) {
    answer++;
  }
  return answer;
};