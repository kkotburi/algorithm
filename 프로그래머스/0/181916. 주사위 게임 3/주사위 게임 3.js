const solution = (a, b, c, d) => {
  let map = new Map();

  for (const num of [a, b, c, d]) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let num = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
  let [p, q, r, s] = num;

  switch (num.length) {
    case 1:
      return p * 1111;
    case 2:
      return Math.max(...map.values()) === 3
        ? (10 * p + q) ** 2
        : (p + q) * Math.abs(p - q);
    case 3:
      return q * r;
    default:
      return Math.min(p, q, r, s);
  }
};