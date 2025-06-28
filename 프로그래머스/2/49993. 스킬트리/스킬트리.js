const solution = (skill, skill_trees) =>
  skill_trees
    .map((v) => v.replace(new RegExp(`[^${skill}]`, "g"), ""))
    .filter((v) => !skill.indexOf(v) || v === "").length; 