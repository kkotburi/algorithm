const solution = (n) =>
  +(n + "")
    .split("")
    .map((v) => Number(v))
    .sort((a, b) => b - a)
    .join("");
