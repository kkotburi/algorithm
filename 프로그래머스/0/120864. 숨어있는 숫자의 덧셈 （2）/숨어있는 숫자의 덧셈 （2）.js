const solution = (my_string) =>
  (my_string = my_string
    .replace(/[a-z]/gi, " ")
    .split(" ")
    .reduce((a, c) => a + Number(c), 0));
