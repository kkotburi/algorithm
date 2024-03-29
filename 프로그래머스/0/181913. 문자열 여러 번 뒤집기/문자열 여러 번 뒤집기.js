const solution = (my_string, queries) => {
  let answer = my_string.split("");
  let result = "";
  for (let i of queries) {
    let num = i[1] - i[0];
    result = answer.slice(i[0], i[1] + 1).reverse();
    answer.splice(i[0], num + 1);
    answer.splice(i[0], 0, ...result);
  }
  return answer.join("");
};