const solution = (phone_number) =>
  Array(phone_number.length - 4)
    .fill("*")
    .join("") + phone_number.slice(-4);
