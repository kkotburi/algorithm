const solution = (myStr) => {
  let answer = myStr.split(/a|b|c/).filter((v) => v !== "");
  return answer[0] ? answer : ["EMPTY"];
};
