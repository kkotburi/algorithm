const solution = (x, y, n) => {
  const queue = [[x, 0]];
  const done = {};

  let [l, r] = [0, 1];
  let answer = Infinity;

  while (l < r) {
    const [num, count] = queue[l++];

    if (done[num] || num > y) continue;
    if (num === y) {
      answer = Math.min(answer, count);
      continue;
    }

    done[num] = true;

    queue[r++] = [num * 3, count + 1];
    queue[r++] = [num * 2, count + 1];
    queue[r++] = [num + n, count + 1];
  }

  return answer === Infinity ? -1 : answer;
};
