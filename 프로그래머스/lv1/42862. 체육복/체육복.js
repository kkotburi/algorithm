const solution = (n, lost, reserve) => {
  let filterdLost = lost.filter((item) => !reserve.includes(item)).sort();
  let filterdReserve = reserve.filter((item) => !lost.includes(item)).sort();

  for (let i = 0; i < filterdLost.length; i++) {
    for (let j = 0; j < filterdReserve.length; j++) {
      if (
        filterdLost[i] === filterdReserve[j] + 1 ||
        filterdLost[i] === filterdReserve[j] - 1
      ) {
        filterdReserve.splice(j, 1);
        j--;
        filterdLost.splice(i, 1);
        i--;
      }
    }
  }
  return n - filterdLost.length;
};