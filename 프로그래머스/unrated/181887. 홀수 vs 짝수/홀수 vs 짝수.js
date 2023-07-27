const solution = (num_list) => {
  let output_1 = 0;
  let output_2 = 0;
  for (let i = 0; i <= num_list.length - 1; i++) {
    if (i % 2 === 0 && i >= 0) {
      output_1 += num_list[i];
    }
    if (i % 2 !== 0 && i >= 0) {
      output_2 += num_list[i];
    }
  }
  return output_1 > output_2 ? output_1 : output_2;
};