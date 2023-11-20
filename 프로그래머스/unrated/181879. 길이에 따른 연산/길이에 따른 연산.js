const solution = (num_list) => {
  let answer = num_list[0];
  for (let i = 1; i < num_list.length; i++) {
    if (num_list.length > 10) {
      answer += num_list[i];
    } else {
      answer = answer * num_list[i];
    }
  }
  return answer;
};
