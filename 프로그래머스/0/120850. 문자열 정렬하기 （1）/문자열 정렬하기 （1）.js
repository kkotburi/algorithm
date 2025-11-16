const solution = (my_string) =>
  my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));