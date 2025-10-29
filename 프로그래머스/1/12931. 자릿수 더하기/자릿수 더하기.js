const solution = (n) =>
  (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
