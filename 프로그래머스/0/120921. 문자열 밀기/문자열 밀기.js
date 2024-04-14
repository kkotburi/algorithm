const solution = (A, B) => {
  let answer = -1;
  for (let i = 1; i < A.length; i++) {
    if (B === A.substr(-i) + A.substr(0, A.length - i)) {
      answer = i;
      break;
    }
  }
  return A === B ? 0 : answer;
};
