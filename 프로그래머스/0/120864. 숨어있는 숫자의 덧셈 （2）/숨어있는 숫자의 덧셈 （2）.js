const solution = (my_string) => {
  my_string = my_string.replace(/[a-z]/gi, "a").split("a");
  answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    answer += +my_string[i];
  }
  return answer;
};
