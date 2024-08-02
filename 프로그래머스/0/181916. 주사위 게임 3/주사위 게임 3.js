const solution = (a, b, c, d) => {
  let arr = [a, b, c, d];
  
  let map = new Map();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let sortedMap = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
  let maxFqc = Math.max(...map.values());
  let [p, q, r, s] = sortedMap;

  if (sortedMap.length === 1) {
    return p * 1111;
  }
  if (sortedMap.length === 2) {
    return maxFqc === 3 ? (10 * p + q) ** 2 : (p + q) * Math.abs(p - q);
  }
  if (sortedMap.length === 3) {
    return q * r;
  }

  return Math.min(p, q, r, s);
};
