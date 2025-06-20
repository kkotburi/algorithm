const solution = (x, y, n) => {
  let answer = 0;
  let test = [x];

  if (x === y) return 0;

  while (true) {
    const set = new Set();
    answer++;

    test.forEach((item) => {
      if (item + n <= y) set.add(item + n);
      if (item * 2 <= y) set.add(item * 2);
      if (item * 3 <= y) set.add(item * 3);
    });

    if (set.size === 0) return -1;
    if (set.has(y)) return answer;

    test = set;
  }
};