const solution = (brown, yellow) => {
  let x = (brown - 12) * 0.5;
  let y = yellow - brown + 8;
  let i = (8 + x + Math.sqrt(Math.pow(x, 2) - 4 * y)) * 0.5;
  let j = (8 + x - Math.sqrt(Math.pow(x, 2) - 4 * y)) * 0.5;
  return [i, j];
};
