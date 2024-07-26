const solution = (clothes) => {
  let answer = 1;
  let type = [];
  for (let i = 0; i < clothes.length; i++) {
    if (!type.find((v) => v === clothes[i][1])) {
      type.push(clothes[i][1]);
      answer *= clothes.filter((v) => v[1] === clothes[i][1]).length + 1;
    }
  }
  return answer - 1;
};