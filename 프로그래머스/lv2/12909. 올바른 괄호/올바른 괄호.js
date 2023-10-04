const solution = (s) => {
  let answer = 0;

  for (i = 0; i < s.length; i++) {
    if (!answer && s[i] === ")") {
      answer--;
      break;
    }
    s[i] === "(" ? answer++ : answer--;
  }

  return Boolean(!answer);
};