const solution = (s) => {
  let hash = {};
  return [...s].map((v, i) => {
    let answer = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return answer;
  });
};