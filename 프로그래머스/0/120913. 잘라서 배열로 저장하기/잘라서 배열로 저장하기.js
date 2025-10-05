const solution = (my_str, n) => my_str.match(new RegExp(`.{1,${n}}`, "g"));
