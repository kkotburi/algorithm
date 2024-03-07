function solution(arr) {
  let length = 0;
  while (Math.pow(2, length) < arr.length) length++;
  const answer = Array(Math.pow(2, length) - arr.length).fill(0);
  return arr.concat(answer);
}