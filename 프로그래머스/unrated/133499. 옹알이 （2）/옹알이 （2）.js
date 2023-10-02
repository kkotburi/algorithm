const solution = (babbling) => {
  let answer = 0;
  const possibleList = ["aya", "ye", "woo", "ma"];
  const impossibleList = ["ayaaya", "yeye", "woowoo", "mama"];

  for (i = 0; i < babbling.length; i++) {
    if (
      !impossibleList.filter((impossible) => babbling[i].includes(impossible))
        .length
    ) {
      for (j = 0; j < possibleList.length; j++) {
        if (babbling[i]) {
          babbling[i] = babbling[i].replaceAll(possibleList[j], "0");
        } else {
          break;
        }
      }
    }

    if (!babbling[i].replaceAll("0", "")) {
      answer++;
    }
  }

  return answer;
};