const solution = (array) => {
  array = array.join("");
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "7") {
      answer++;
    }
  }
  return answer;
};
