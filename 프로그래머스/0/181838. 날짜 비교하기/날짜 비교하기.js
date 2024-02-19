const solution = (date1, date2) => {
  date1 = new Date(date1.join("-"));
  date2 = new Date(date2.join("-"));
  let answer = date2.getTime() - date1.getTime();
  return answer > 0 ? 1 : 0;
};
