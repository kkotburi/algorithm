const solution = (picture, k) => {
  let answer = [];
  picture.forEach((v) => {
    const expanded = [...v].reduce((acc, curr) => acc + curr.repeat(k), "");
    for (let i = 0; i < k; i++) answer.push(expanded);
  });
  return answer;
};