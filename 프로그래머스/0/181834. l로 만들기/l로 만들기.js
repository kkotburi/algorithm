const solution = (myString) =>
  [...myString].map((v) => (v < "l" ? "l" : v)).join("");
