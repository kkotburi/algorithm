const solution = (num_list) =>
  num_list.map((v) => v.toString(2).length - 1).reduce((a, c) => a + c);