const solution = (l, r) => {
  let result = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(
    (n) => !/[^05]/.test(n)
  );
  return result.length ? result : [-1];
};