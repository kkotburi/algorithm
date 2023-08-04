const solution = (n) => {
  let answer = [];

  for (let i = 0; i < n / 2; i++) {
    answer.push("수");
    if (i !== n / 2 - 0.5) {
      answer.push("박");
    }
  }

  return answer.join("");
};