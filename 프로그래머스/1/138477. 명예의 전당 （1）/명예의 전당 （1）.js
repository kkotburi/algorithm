const solution = (k, score) => {
  let answer = [];
  return score.reduce((acc, cur) => {
    answer.push(cur);
    answer = answer.sort((a, b) => b - a).slice(0, k);
    return [...acc, Math.min(...answer)];
  }, []);
};
