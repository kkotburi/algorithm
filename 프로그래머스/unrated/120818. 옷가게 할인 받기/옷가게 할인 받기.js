const discounts = [
  [500000, 0.8],
  [300000, 0.9],
  [100000, 0.95],
];

const solution = (price) => {
  for (let i = 0; i < discounts.length; i++) {
    if (price >= discounts[i][0]) {
      return Math.floor(price * discounts[i][1]);
    }
  }
  return price;
};