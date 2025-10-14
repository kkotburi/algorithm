const solution = (arr) => {
  let answer = -1;
  let before = [-1];

  while (!arr.every((v, i) => v === before[i])) {
    before = [...arr];

    arr = arr.map((v) => {
      if ((v >= 50) & !(v % 2)) return v / 2;
      if ((v < 50) & v % 2) return v * 2 + 1;
      return v;
    });

    answer++;
  }

  return answer;
};