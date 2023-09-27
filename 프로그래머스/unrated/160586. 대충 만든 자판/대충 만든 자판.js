const solution = (keymap, targets) => {
  let answer = [];

  for (i = 0; i < targets.length; i++) {
    let count = 0;

    for (j = 0; j < targets[i].length; j++) {
      let countArray = keymap
        .map((key) => {
          if (key.indexOf(targets[i][j]) > -1) {
            return key.indexOf(targets[i][j]) + 1;
          }
        })
        .filter((key) => key);

      if (!countArray.length) {
        count = -1;
        break;
      } else {
        count += Math.min(...countArray);
      }
    }

    answer.push(count);
  }

  return answer;
};