const solution = (new_id) => {
  if (/^[a-z0-9-_](?!.*[.]{2,})[a-z0-9-_.]{1,13}[a-z0-9]$/.test(new_id)) {
    return new_id;
  } else {
    let answer = "";
    answer = new_id
      .toLowerCase()
      .replace(/[^\w-_.]/g, "")
      .replace(/\.+/g, ".")
      .replace(/^\.|\.$/g, "")
      .replace(/^$/, "a")
      .slice(0, 15)
      .replace(/\.$/, "");
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }
    return answer;
  }
};