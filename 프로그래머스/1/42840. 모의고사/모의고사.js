const solution = (answers) => {
  let answer = [];
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let b1 = answers.filter((a, i) => a === a1[i % a1.length]).length;
  let b2 = answers.filter((a, i) => a === a2[i % a2.length]).length;
  let b3 = answers.filter((a, i) => a === a3[i % a3.length]).length;
  let max = Math.max(b1, b2, b3);

  if (b1 === max) {
    answer.push(1);
  }
  if (b2 === max) {
    answer.push(2);
  }
  if (b3 === max) {
    answer.push(3);
  }

  return answer;
};