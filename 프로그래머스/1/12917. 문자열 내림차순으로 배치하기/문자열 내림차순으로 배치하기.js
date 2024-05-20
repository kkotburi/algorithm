const solution = (s) =>
  s
    .split("")
    .map((v) => v.charCodeAt())
    .sort((a, b) => b - a)
    .map((v) => String.fromCharCode(v))
    .join("");
