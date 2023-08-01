const solution = (myString, pat) => {
  let newString = [];

  for (let i = 0; i < myString.length - pat.length + 1; i++) {
    let string = myString.substr(i, pat.length);
    if (string === pat) {
      newString.push(string);
    }
  }

  const answer = newString.length;

  return answer;
};