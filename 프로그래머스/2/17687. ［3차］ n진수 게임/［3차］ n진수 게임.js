const solution = (n, t, m, p) => {
  let numbers = "";
  for (let i = 0; p + (t - 1) * m > numbers.length; i++) {
    numbers += i.toString(n);
  }
  let answer = "";
  for (let i = 0; t > answer.length; i++) {
    if (numbers[p - 1 + m * i]) {
      answer += numbers[p - 1 + m * i].toUpperCase();
    }
  }
  return answer;
};