const solution = (myString) => {
  let answer = "";
  for (let i = 0; i < myString.length; i++) {
    myString.charCodeAt(i) < 108 ? (answer += "l") : (answer += myString[i]);
  }
  return answer;
};
