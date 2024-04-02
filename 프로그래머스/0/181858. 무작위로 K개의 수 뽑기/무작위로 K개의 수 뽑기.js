const solution = (arr, k) => {
  const set = Array(k).fill(-1);
  const unique = arr.filter((a, i) => arr.indexOf(a) === i);
  set.splice(0, unique.length, ...unique);
  return set.slice(0, k);
};