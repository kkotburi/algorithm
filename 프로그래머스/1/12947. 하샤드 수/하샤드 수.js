const solution = (x) => (x % eval([...x.toString()].join("+")) ? false : true);
