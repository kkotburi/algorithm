const solution = (myStr) => {
  let answer = myStr.split(/a|b|c/).filter((v) => v);
  return answer.length ? answer : ["EMPTY"];
};