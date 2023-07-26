const solution = (num_list, n) => {
  const answer = num_list.find((num) => {
    return num === n;
  });
  if (answer) {
    return 1;
  } else {
    return 0;
  }
};