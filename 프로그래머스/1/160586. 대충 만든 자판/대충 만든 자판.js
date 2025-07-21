const solution = (keymap, targets) => {
  let answer = [];
  let map = {};

  for (let items of keymap) {
    items.split("").map((v, i) => (map[v] = map[v] < i + 1 ? map[v] : i + 1));
  }

  for (let items of targets) {
    answer.push(items.split("").reduce((a, c) => (a += map[c]), 0) || -1);
  }

  return answer;
};