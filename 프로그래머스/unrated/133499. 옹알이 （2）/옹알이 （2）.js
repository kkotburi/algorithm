const solution = (babbling) => {
  let answer = 0;

  for (i = 0; i < babbling.length; i++) {
    if (
      !/(aya|ye|woo|ma)\1+/.test(babbling[i]) &&
      /^(aya|ye|woo|ma)+$/.test(babbling[i])
    ) {
      answer++;
    }
  }

  return answer;
};