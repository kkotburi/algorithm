const solution = (my_string, indices) =>
  [...my_string].filter((v, i) => !indices.includes(i)).join("");
