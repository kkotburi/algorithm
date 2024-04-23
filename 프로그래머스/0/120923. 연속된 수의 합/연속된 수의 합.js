const solution = (num, total) => {
  let answer = [];
  if (total % num) {
    answer = [Math.floor(total / num), Math.ceil(total / num)];
  } else {
    answer = [total / num];
  }
  for (let i = 1; i < num / 2; i++) {
    answer.push(Math.floor(total / num) - i);
    answer.push(Math.ceil(total / num) + i);
  }
  return answer.sort((a, b) => a - b);
};
