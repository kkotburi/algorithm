const solution = (myString, pat) =>
  myString.match(new RegExp(`(?=${pat})`, "g"))?.length || 0;