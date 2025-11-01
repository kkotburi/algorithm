const solution = (age) =>
  age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");