const solution = (arr, delete_list) =>
  arr.filter((element) => !delete_list.includes(element));
