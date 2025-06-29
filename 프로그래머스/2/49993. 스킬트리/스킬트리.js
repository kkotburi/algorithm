const solution = (skill, skill_trees) =>
  skill_trees.filter(
    (skill_tree) =>
      !skill.indexOf(
        skill_tree
          .split("")
          .filter((v) => skill.split("").includes(v))
          .join("")
      )
  ).length;