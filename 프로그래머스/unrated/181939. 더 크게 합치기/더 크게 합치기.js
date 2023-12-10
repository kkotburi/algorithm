const solution = (a, b) =>
  Math.max(
    Number(a.toString() + b.toString()),
    Number(b.toString() + a.toString())
  );