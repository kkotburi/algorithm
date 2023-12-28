const solution = (num_list) => {
  let answer = num_list;
  let a = num_list[num_list.length - 2];
  let b = num_list[num_list.length - 1];
  if (b > a) {
    answer.push(b - a);
  } else {
    answer.push(b * 2);
  }
  return answer;
};
