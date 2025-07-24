const solution = (n, t, m, p) => {
  let tube = Array.apply(null, Array(t)).map((_, i) => i * m + p - 1);
  let line = "";
  let max = m * t + p;

  for (let i = 0; line.length <= max; i++) line += i.toString(n);

  return tube
    .map((v) => line[v])
    .join("")
    .toUpperCase();
};