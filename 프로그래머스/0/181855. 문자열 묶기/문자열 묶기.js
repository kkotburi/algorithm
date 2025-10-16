const solution = (strArr) => {
  let answer = new Map();
  for (const str of strArr)
    answer.set(str.length, (answer.get(str.length) || 0) + 1);
  return Math.max(...answer.values());
};
