const solution = (num, total) => {
  const min = Math.ceil(total / num - num / 2);
    return Array(num)
    .fill()
    .map((_, i) => i + min);
};