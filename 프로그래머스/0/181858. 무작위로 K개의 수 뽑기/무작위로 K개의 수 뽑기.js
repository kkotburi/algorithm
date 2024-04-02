const solution = (arr, k) => {
  let unique = [...new Set(arr)].slice(0, k);
  if (unique.length < k) {
    while (unique.length !== k) {
      unique.push(-1);
    }
  }
  return unique;
};