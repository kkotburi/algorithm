const solution = (answers) => {
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let b1 = answers.filter((v, i) => v === a1[i % a1.length]).length;
  let b2 = answers.filter((v, i) => v === a2[i % a2.length]).length;
  let b3 = answers.filter((v, i) => v === a3[i % a3.length]).length;

  let answer = [b1, b2, b3];

  return answer
    .map((_, i) => i + 1)
    .filter((_, i) => answer[i] === Math.max(...answer));
};