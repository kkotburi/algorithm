const solution = (a, b, c, d) => {
  let arr = [a, b, c, d];
  let obj = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]]++;
  }

  let values = Object.values(obj);

  if (values.find((v) => v === 4)) {
    return 1111 * values.indexOf(4);
  }
  if (values.find((v) => v === 3)) {
    return (10 * values.indexOf(3) + values.indexOf(1)) ** 2;
  }
  if (values.filter((v) => v === 2).length === 2) {
    return (
      (values.indexOf(2) + values.lastIndexOf(2)) *
      Math.abs(values.indexOf(2) - values.lastIndexOf(2))
    );
  }
  if (values.filter((v) => v === 2).length === 1) {
    return values.indexOf(1) * values.lastIndexOf(1);
  }

  return Math.min(...arr);
};