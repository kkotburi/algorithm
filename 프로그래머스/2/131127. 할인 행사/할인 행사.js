const solution = (want, number, discount) => {
  let answer = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    let slice = discount.slice(i, i + 10);
    for (let j = 0; j < want.length; j++) {
      if (slice.filter((item) => item === want[j]).length !== number[j]) {
        break;
      } else if (j === want.length - 1) {
        answer++;
      }
    }
  }
  return answer;
};