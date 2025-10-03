const solution = (s) => {
  let arr = s.split(" ");
  while (arr.indexOf("Z") > -1) {
    arr.splice(arr.indexOf("Z") - 1, 2);
  }
  return arr.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
};