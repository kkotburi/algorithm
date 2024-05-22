const solution = (s) => {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  let answer = true;
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      answer = false;
      break;
    }
  }
  return answer;
};
