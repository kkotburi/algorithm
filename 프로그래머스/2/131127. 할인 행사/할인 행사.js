const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const solution = (want, number, discount) => {
  let answer = 0;
  let array = new Array(number.length).fill(0);
  for (let i = 0; i < discount.length; i++) {
    array[want.indexOf(discount[i])]++;
    array[want.indexOf(discount[i - 10])]--;
    if (equals(array, number)) answer++;
  }
  return answer;
};