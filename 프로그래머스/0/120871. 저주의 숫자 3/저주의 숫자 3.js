const solution = (n) => {
  let answer = n;
  for (let i = 3; i <= answer; i++) {
    if (!(i % 3) || i.toString().includes(3)) {
      answer++;
    }
  }
  return answer;
};
