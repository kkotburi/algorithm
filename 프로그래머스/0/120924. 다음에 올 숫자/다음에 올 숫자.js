const solution = (common) =>
  common[1] - common[0] === common[2] - common[1]
    ? common.pop() + common[1] - common[0]
    : common.pop() * (common[1] / common[0]);