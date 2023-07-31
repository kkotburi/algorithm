const solution = (intStrs, k, s, l) => {
  const answer = intStrs
    .map((intStr) => parseInt(intStr.slice(s, s + l)))
    .filter((num) => num > k);
  return answer;
};