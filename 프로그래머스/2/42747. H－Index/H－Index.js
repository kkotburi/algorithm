const solution = (citations) => {
  citations.sort((a, b) => b - a);
  let answer = 0;
  while (citations[answer] > answer) answer++;
  return answer;
};