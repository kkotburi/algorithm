const solution = (arr) => {
  let answer = 0;
  let x1 = [...arr];
  for (let i = 0; i >= 0; i++) {
    let x2 = [];
    for (let j = 0; j < x1.length; j++) {
      if (x1[j] >= 50 && !(x1[j] % 2)) {
        x2.push(x1[j] / 2);
      } else if (x1[j] < 50 && x1[j] % 2) {
        x2.push(x1[j] * 2 + 1);
      } else {
        x2.push(x1[j]);
      }
    }
    if (x1.every((v, i) => v === x2[i])) {
      answer = i;
      break;
    } else {
      x1 = [...x2];
    }
  }
  return answer;
};