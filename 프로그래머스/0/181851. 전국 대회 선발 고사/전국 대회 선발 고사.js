const solution = (rank, attendance) => {
  let answer = [];
  for (let i = 1; answer.length < 3; i++) {
    if (attendance[rank.indexOf(i)]) {
      answer.push(rank.indexOf(i));
    }
  }
  return answer[0] * 10000 + answer[1] * 100 + answer[2];
};
