const solution = (intStrs, k, s, l) => {
  return intStrs
    .map((intStr) => parseInt(intStr.substr(s, l)))
    .filter((intStr) => intStr > k);
};