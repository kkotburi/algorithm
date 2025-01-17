const solution = (land) => {
  let max = 0;
  let idx = 0;

  for (let i = 1; i < land.length; i++) {
    max = Math.max(...land[i - 1]);
    idx = land[i - 1].indexOf(max);
    land[i - 1][idx] = 0;
    land[i] = land[i].map(
      (v, j) => (v += j === idx ? Math.max(...land[i - 1]) : max)
    );
  }

  return Math.max(...land[land.length - 1]);
};
