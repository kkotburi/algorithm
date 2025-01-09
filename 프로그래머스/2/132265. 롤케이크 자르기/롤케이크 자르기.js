const solution = (topping) => {
  let answer = 0;
  const map = new Map();
  const set = new Set();

  for (let index = 0; index < topping.length; index++) {
    const key = topping[index];
    if (map.has(key)) {
      const value = map.get(key);
      map.set(key, value + 1);
    } else {
      map.set(key, 1);
    }
  }

  for (let index = 0; index < topping.length; index++) {
    const targetTopping = topping[index];
    set.add(targetTopping);
    const value = map.get(targetTopping);
    if (value === 1) {
      map.delete(targetTopping);
    } else {
      map.set(targetTopping, value - 1);
    }
    if (set.size === map.size) {
      answer += 1;
    }
  }

  return answer;
};
