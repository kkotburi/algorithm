const solution = (participant, completion) => {
  let map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i];
    let b = completion[i];
    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }
};