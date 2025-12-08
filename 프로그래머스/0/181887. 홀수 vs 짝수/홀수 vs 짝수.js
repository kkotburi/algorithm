const solution = (num_list) => {
  let even = 0;
  let odd = 0;

  num_list.map((v, i) => (i % 2 ? (odd += v) : (even += v)));

  return odd > even ? odd : even;
};