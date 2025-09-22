const solution = (arr) => {
  let num = Math.max(arr.length, Math.max(...arr.map((v) => v.length)));
  for (let a of arr) while (a.length < num) a.push(0);
  while (arr.length < num) arr.push(Array(num).fill(0));
  return arr;
};