const solution = (num_list) => {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 ? odd++ : even++;
  }
  return [even, odd];
};
