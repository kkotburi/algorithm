const solution = (myString) => {
  let answer = "";
  for (let i = 0; i < myString.length; i++) {
    if (myString[i].toLowerCase() === "a") {
      answer += "A";
    } else {
      answer += myString[i].toLowerCase();
    }
  }
  return answer;
};