const solution = (name, yearning, photo) => {
  let answer = [];
  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (name.indexOf(photo[i][j]) !== -1) {
        sum += yearning[name.indexOf(photo[i][j])];
      }
    }
    answer.push(sum);
  }
  return answer;
};