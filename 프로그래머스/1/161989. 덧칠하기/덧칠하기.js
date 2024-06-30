const solution = (n, m, section) => {
  let answer = 0;
  let paint = 0;
  for (let i = 0; i < section.length; i++) {
    if (paint < section[i]) {
      answer++;
      paint = section[i] + m - 1;
    }
  }
  return answer;
};