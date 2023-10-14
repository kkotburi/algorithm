const solution = (n, t, m, p) => {
  let number = "";
  for (let i = 0; p + (t - 1) * m > number.length; i++) {
    number += i.toString(n);
  }
  let answer = "";
  for (let i = 0; t > answer.length; i++) {
    if (number[p - 1 + m * i]) {
      answer += number[p - 1 + m * i].toUpperCase();
    }
  }
  return answer;
};
