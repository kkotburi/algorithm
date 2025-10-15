const solution = (num_list, n) =>
  Array(num_list.length / n)
    .fill([])
    .map(() => num_list.splice(0, n));