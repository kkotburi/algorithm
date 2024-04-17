const solution = (polynomial) => {
  polynomial = polynomial.split(" + ");
  let count = polynomial
    .filter((v) => v.includes("x"))
    .map((v) => v.replace("x", "") || "1")
    .reduce((a, c) => a + parseInt(c, 10), 0);
  let constant = polynomial
    .filter((v) => !v.includes("x"))
    .reduce((a, c) => a + parseInt(c, 10), 0);
  let answer = [];
  if (count) answer.push(`${count === 1 ? "" : count}x`);
  if (constant) answer.push(constant);
  return answer.join(" + ");
};