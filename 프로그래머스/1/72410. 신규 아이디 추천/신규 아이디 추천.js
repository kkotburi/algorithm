const solution = (new_id) => {
  let answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");
  let len = answer.length;

  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
};