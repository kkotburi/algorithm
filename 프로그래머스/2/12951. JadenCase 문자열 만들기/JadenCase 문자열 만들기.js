const solution = (s) =>
  s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase())
    .join(" ");
