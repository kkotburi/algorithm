const solution = (lottos, win_nums) => {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  const unknown = lottos.filter((lotto) => lotto === 0).length;
  const intersection = win_nums.filter((num) => lottos.includes(num)).length;

  const caseWin = unknown + intersection;

  return [rank[caseWin], rank[intersection]];
};