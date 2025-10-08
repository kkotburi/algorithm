const solution = (price, money, count) =>
  Math.max((price * count * ++count) / 2 - money, 0);
