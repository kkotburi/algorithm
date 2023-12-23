const solution = (str_list, ex) =>
  str_list.filter((item) => !item.includes(ex)).join("");
