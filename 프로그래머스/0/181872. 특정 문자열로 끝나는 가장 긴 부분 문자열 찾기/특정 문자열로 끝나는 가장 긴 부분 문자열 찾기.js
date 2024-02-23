const solution = (myString, pat) => {
  let answer = "";
  for (let i = myString.length - 1; i >= 0; i--) {
    if (myString[i] === pat[pat.length - 1]) {
      answer = myString.slice(0, i + 1);
      break;
    }
  }
  return answer;
};