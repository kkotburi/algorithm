const solution = (a, b) => {
  let answer = Number(a.toString() + b.toString());
  return answer >= 2 * a * b ? answer : 2 * a * b;
};
