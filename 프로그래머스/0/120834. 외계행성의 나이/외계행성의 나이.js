const solution = (age) => {
  let strAge = age.toString();
  let answer = "";
  let prgrm = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  for (let i = 0; i < strAge.length; i++) {
    answer += prgrm[strAge[i]];
  }
  return answer;
};