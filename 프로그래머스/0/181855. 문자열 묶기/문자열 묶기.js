const solution = (strArr) => {
  let answer = 0;
  for (let i = 1; i <= 30; i++) {
    let count = strArr.filter((v) => v.length === i).length;
    if (answer < count) {
      answer = count;
    }
  }
  return answer;
};
