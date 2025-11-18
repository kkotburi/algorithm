const solution = (cipher, code) =>
  cipher
    .split("")
    .filter((_, i) => (i + 1) % code === 0)
    .join("");
