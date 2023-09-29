const solution = (new_id) => {
  if (/^[a-z0-9-_]([\.]?[a-z0-9-_]){3,15}$/.test(new_id)) {
    return new_id;
  } else {
    let answer = "";

    answer = new_id.toLowerCase();

    const extraction = new RegExp(/[a-z0-9-_\.]/, "g");
    answer = answer.match(extraction).join("");

    answer = answer.replace(/\.+/g, ".");

    if (answer[0] === ".") {
      answer = answer.slice(1);
    }

    answer = answer.replace(/^$/, "a");

    if (answer.length > 15) {
      answer = answer.slice(0, 15);
    }
    if (answer[answer.length - 1] === ".") {
      answer = answer.slice(0, answer.length - 1);
    }

    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }

    return answer === "undefined" ? "aa" : answer;
  }
};