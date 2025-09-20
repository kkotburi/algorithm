const solution = (dots) => {
  let [[x1, y1], [x2, y2], [x3, y3]] = dots.sort(([a], [b]) => a - b);
  return Math.abs(y1 - y2) * Math.abs(x1 - x3);
};