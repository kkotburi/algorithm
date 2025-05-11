const solution = (fees, records) => {
  const answer = [];
  const parkingTime = {};

  records.forEach((v) => {
    let [time, id, type] = v.split(" ");
    let [hour, minute] = time.split(":");
    time = hour * 1 * 60 + minute * 1;

    if (!parkingTime[id]) parkingTime[id] = 0;
    if (type === "IN") parkingTime[id] += 1439 - time;
    if (type === "OUT") parkingTime[id] -= 1439 - time;
  });

  for (let [car, time] of Object.entries(parkingTime)) {
    if (time <= fees[0]) {
      time = fees[1];
    } else {
      time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
    }
    answer.push([car, time]);
  }

  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
};