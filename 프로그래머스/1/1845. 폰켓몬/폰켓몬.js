const solution = (nums) => {
  let numsSet = [...new Set(nums)];
  let numsHalf = Math.floor(nums.length / 2);
  return numsSet.length > numsHalf ? numsHalf : numsSet.length;
};