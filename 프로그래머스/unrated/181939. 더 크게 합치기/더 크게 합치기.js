const solution = (a, b) => {
  let ab = Number(a.toString() + b.toString());
  let ba = Number(b.toString() + a.toString());
  return ab >= ba ? ab : ba;
};
