const solution = (my_string, n) =>
  [...my_string].map((spelling) => spelling.repeat(n)).join("");
