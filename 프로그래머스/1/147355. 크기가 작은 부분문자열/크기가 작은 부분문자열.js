const solution = (t, p) => {
  let substring = [];
  for (let i = 0; i <= t.length - p.length; i++) {
    substring.push(t.substring(i, i + p.length));
  }
  let answer = 0;
  for (let j = 0; j < substring.length; j++) {
    if (Number(substring[j]) <= Number(p)) {
      answer++;
    }
  }
  return answer;
};
