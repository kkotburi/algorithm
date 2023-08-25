const solution = (lottos, win_nums) => {
  const intersection = win_nums.filter((win_num) =>
    lottos.includes(win_num)
  ).length;
  const unkwon = lottos.filter((lotto) => lotto === 0).length;

  // 최대 개수
  let caseWin =
    unkwon === 0 && intersection === 0 ? 6 : 7 - (unkwon + intersection);
  // 최소 개수
  let caseLose = intersection === 0 ? 6 : 7 - intersection;

  return [caseWin, caseLose];
};