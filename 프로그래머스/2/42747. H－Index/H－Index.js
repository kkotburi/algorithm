const solution = (citations) => {
  let answer = 0;
  citations.sort((a, b) => b - a);
  while (citations[answer] > answer) answer++;
  return answer;
};