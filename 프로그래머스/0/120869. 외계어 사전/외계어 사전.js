const solution = (spell, dic) =>
  dic.some((v) => spell.sort().toString() == [...v].sort().toString()) ? 1 : 2;
