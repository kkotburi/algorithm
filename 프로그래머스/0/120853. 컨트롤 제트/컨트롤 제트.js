const solution = (s) => {
  let arr = s.split(" ");
  while (arr.indexOf("Z") > -1) {
    arr.splice(arr.indexOf("Z") - 1, 2);
  }
  return arr.reduce((a, b) => parseInt(a) + parseInt(b), 0);
};