const solution = (order) => {
  let answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
};