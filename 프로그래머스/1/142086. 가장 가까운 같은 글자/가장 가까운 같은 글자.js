const solution = (s) => {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i - 1; j >= -1; j--) {
      if (s[i] === s[j]) {
        answer.push(i - j);
        break;
      } else if (j === -1) {
        answer.push(-1);
      }
    }
  }
  return answer;
};
