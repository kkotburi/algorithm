const solution = (spell, dic) => {
  let answer = 2;
  for (let i = 0; i < dic.length; i++) {
    if (spell.sort().toString() === [...dic[i]].sort().toString()) {
      answer--;
      break;
    }
  }
  return answer;
};