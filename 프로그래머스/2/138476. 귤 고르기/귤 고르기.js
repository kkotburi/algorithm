const solution = (k, tangerine) => {
  let answer = 0;
  let dic = {};

  tangerine.forEach((v) => (dic[v] = (dic[v] || 0) + 1));
  let arr = Object.values(dic).sort((a, b) => b - a);

  for (let i of arr) {
    answer++;
    if (k > i) {
      k -= i;
    } else break;
  }

  return answer;
};