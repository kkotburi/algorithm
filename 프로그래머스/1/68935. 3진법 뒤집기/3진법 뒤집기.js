const solution = (n) => {
  let answer = "";
  for (let i = n.toString(3).length - 1; i >= 0; i--) {
    answer += n.toString(3)[i];
  }
  return parseInt(answer, 3);
};
