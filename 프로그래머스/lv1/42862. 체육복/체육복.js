const solution = (n, lost, reserve) => {
  const filterdLost = lost.filter((item) => !reserve.includes(item)).sort();
  const filterdReserve = reserve.filter((item) => !lost.includes(item)).sort();

  for (let i = 0; i < filterdLost.length; i++) {
    for (let j = 0; j < filterdReserve.length; j++) {
      if (
        filterdLost[i] === filterdReserve[j] + 1 ||
        filterdLost[i] === filterdReserve[j] - 1
      ) {
        filterdReserve.splice(j, 1);
        filterdLost.splice(i, 1);
        j--;
        i--;
      }
    }
  }
  return n - filterdLost.length;
};