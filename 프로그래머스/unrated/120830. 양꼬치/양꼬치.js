const solution = (n, k) => {
  let drink = k - Math.floor(n / 10);
  drink > 0 ? drink : (drink = 0);

  let answer = n * 12000 + drink * 2000;

  return answer;
};
