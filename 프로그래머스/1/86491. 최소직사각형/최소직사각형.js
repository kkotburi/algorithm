const solution = (sizes) => {
  let [width, length] = sizes.reduce(
    ([a, b], [c, d]) => [
      Math.max(a, Math.max(c, d)),
      Math.max(b, Math.min(c, d)),
    ],
    [0, 0]
  );
  return width * length;
};