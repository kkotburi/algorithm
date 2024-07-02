const solution = (n, m) => {
  let answer = [];
  for (let i = Math.min(n, m); i > 0; i--) {
    if (!(n % i) && !(m % i)) {
      answer.push(i);
      break;
    }
  }
  for (let j = Math.max(n, m); j >= Math.max(n, m); j++) {
    if (!(j % n) && !(j % m)) {
      answer.push(j);
      break;
    }
  }
  return answer;
};