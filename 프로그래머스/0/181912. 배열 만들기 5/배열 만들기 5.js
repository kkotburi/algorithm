const solution = (intStrs, k, s, l) =>
  intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);