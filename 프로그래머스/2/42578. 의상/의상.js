const solution = (clothes) =>
  Object.values(
    clothes.reduce((acc, obj) => {
      acc[obj[1]] = acc[obj[1]] ? acc[obj[1]] + 1 : 1;
      return acc;
    }, {})
  ).reduce((a, b) => a * (b + 1), 1) - 1;