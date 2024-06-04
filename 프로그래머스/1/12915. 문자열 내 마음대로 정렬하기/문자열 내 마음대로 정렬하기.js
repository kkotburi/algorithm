const solution = (strings, n) => {
  let answer = [];
  for (let i = 0; i < strings.length; i++) {
    answer.push(strings[i].substr(n, 1) + strings[i]);
  }
  return answer.sort().map((v) => v.substr(1));
};
