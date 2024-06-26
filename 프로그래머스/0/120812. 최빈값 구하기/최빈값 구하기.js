function solution(array) {
  let frequency = 0;
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    let length = array.filter((v) => v === array[i]).length;
    if (array[i] !== answer && length > frequency) {
      frequency = length;
      answer = array[i];
    } else if (array[i] !== answer && length === frequency) {
      answer = -1;
    }
  }
  return answer;
}