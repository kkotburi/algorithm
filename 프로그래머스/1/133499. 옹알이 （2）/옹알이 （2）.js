const solution = (babbling) => {
  let reg1 = /(aya|ye|woo|ma)\1+/;
  let reg2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (acc, cur) => (!reg1.test(cur) && reg2.test(cur) ? ++acc : acc),
    0
  );
};
