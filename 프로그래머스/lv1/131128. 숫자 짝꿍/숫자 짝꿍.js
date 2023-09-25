const solution = (X, Y) => {
  let answer = [];
  let arrayX = X.split("").sort();
  let arrayY = Y.split("").sort();
  for (let i = arrayX.length - 1; i >= 0; i--) {
    if (arrayX[i] < arrayY[arrayY.length - 1]) {
      for (
        let j = arrayY.length - 1;
        arrayX[i] < arrayY[arrayY.length - 1];
        j--
      ) {
        arrayY.pop();
        j++;
      }
      i++;
    } else if (arrayX[i] === arrayY[arrayY.length - 1]) {
      arrayY.pop();
      answer.push(arrayX[i]);
    } else if (answer[0] === "0" || arrayY.length === 0) {
      break;
    }
  }
  if (!answer.length) {
    return "-1";
  } else if (answer[0] === "0") {
    return "0";
  } else {
    return answer.sort((a, b) => b - a).join("");
  }
};