const solution = (word) => {
  const alphas = ["A", "E", "I", "O", "U"];
  let isFind = false;
  let answer = -1;

  (function f(depth, make) {
    isFind = make == word;
    answer++;

    if (depth == 5 || isFind) return;

    for (let i = 0; i < 5; i++) {
      if (isFind) break;

      f(depth + 1, make + alphas[i]);
    }
  })(0, "");

  return answer;
};
