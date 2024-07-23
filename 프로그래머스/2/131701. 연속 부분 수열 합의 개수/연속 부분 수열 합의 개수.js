const solution = (elements) => {
  let answer = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = i; j < i + elements.length; j++) {
      sum += elements[j % elements.length];
      answer.add(sum);
    }
  }
  return answer.size;
};