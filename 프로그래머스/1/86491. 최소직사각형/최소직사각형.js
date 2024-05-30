const solution = (sizes) => {
  let width = [];
  let length = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      width.push(sizes[i][0]);
      length.push(sizes[i][1]);
    } else {
      width.push(sizes[i][1]);
      length.push(sizes[i][0]);
    }
  }
  return Math.max(...width) * Math.max(...length);
};
