const solution = (my_string, is_suffix) => {
  let answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (my_string.slice(i) === is_suffix) {
      answer += 1;
      break;
    }
  }
  return answer;
};
