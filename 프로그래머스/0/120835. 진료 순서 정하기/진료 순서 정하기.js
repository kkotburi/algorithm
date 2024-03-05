const solution = (emergency) => {
  let sortedEmergency = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => sortedEmergency.indexOf(v) + 1);
};
