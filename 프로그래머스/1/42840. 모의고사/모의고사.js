const solution = (answers) => {
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score = [a1, a2, a3].map(
    (a) => answers.filter((v, i) => v === a[i % a.length]).length
  );

  return [1, 2, 3].filter((_, i) => score[i] === Math.max(...score));
};