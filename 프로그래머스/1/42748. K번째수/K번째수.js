const solution = (array, commands) => {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let arraySlice = [];
    for (let j = commands[i][0] - 1; j < commands[i][1]; j++) {
      arraySlice.push(array[j]);
    }
    answer.push(arraySlice.sort((a, b) => a - b)[commands[i][2] - 1]);
  }
  return answer;
};
