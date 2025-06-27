const solution = (skill, skill_trees) => {
  const isCorrect = (n) => {
    let test = skill.split("");
    for (let i = 0; i < n.length; i++) {
      if (!skill.includes(n[i]) || n[i] === test.shift()) continue;
      return false;
    }
    return true;
  };
  return skill_trees.filter(isCorrect).length;
};
