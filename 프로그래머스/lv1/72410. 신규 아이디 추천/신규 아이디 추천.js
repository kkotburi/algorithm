const solution = (new_id) => {
  if (/^[a-z0-9-_]([\.]?[a-z0-9-_]){3,15}$/.test(new_id)) {
    return new_id;
  } else {
    let answer = "";
    // 1. 소문자 치환
    answer = new_id.toLowerCase();
    // 5. 빈 문자열 a 대입
    answer = answer.replace(/ /g, "a");
    // 2. 소문자, 숫자, 빼기, 밑줄, 마침표 제외한 모든 문자 추출
    const extraction = new RegExp(/[a-z0-9-_\.]/, "g");
    answer = answer.match(extraction).join("");
    // 3. 마침표가 2번 이상 연속된 부분 하나로 치환
    answer = answer.replace(/\.+/g, ".");
    // 4. 처음이나 끝 마침표 제거
    if (answer[0] === ".") {
      answer = answer.slice(1);
    }
    // 6. 16자 이상 첫 15개의 문자 제외한 나머지 문자 제거
    console.log(answer.length);
    if (answer.length > 15) {
      answer = answer.slice(0, 15);
    }
    // => 제거 후 마침표가 끝에 위치한다면 제거
    if (answer[answer.length - 1] === ".") {
      answer = answer.slice(0, answer.length - 1);
    }
    // 7. 2자 이하 길이가 3이 될 때까지 반복
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }

    return answer === "undefined" ? "aaa" : answer;
  }
};