const solution = (q, r, code) =>
  [...code].filter((_, i) => i % q === r).join("");
