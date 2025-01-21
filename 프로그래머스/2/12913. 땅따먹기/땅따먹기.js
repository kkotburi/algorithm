const solution = (board) => {
  const final = board.reduce((scores, row) => {
    const newScores = [];

    scores.forEach((score, iscore) => {
      row.forEach((v, i) => {
        if (i === iscore) return;
        if (!newScores[i]) newScores[i] = [];
        newScores[i].push(score + v);
      });
    });

    return newScores.map((scores) => Math.max(...scores));
  });

  return Math.max(...final);
};
