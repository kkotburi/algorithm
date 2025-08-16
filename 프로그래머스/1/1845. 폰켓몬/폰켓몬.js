const solution = (nums) => {
  let numsSet = [...new Set(nums)];
  let numsHalf = nums.length / 2;
  return numsSet.length > numsHalf ? numsHalf : numsSet.length;
};