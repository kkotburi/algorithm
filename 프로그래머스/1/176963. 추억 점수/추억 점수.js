const solution = (name, yearning, photo) => {
  let answer = [];
  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      for (let k = 0; k < name.length; k++) {
        if (name[k] === photo[i][j]) {
          sum += yearning[k];
        }
      }
    }
    answer.push(sum);
  }
  return answer;
};