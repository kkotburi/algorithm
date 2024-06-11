const solution = (nums) => {
  let numSet = new Set(nums);
  let halfNumsLength = parseInt(nums.length / 2);
  return numSet.size > halfNumsLength ? halfNumsLength : numSet.size;
};