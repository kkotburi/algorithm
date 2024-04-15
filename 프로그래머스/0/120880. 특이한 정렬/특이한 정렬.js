const solution = (numlist, n) => {
  let diflist = numlist.map((v) => (v - n) ** 2).sort((a, b) => a - b);
  let answer = [];
  for (let i = 0; i < diflist.length; i++) {
    let num = numlist
      .sort((a, b) => b - a)
      .find((v) => (v - n) ** 2 === diflist[i]);
    if (diflist[i - 1] === diflist[i]) {
      num = n - Math.sqrt(diflist[i]);
    }
    answer.push(num);
  }
  return answer;
};