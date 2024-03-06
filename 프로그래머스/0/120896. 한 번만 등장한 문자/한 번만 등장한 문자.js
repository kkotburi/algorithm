const solution = (s) => {
  s = [...s];
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (s.filter((v) => v === s[i]).length === 1) {
      answer.push(s[i]);
    }
  }
  return answer.sort().join("");
};
