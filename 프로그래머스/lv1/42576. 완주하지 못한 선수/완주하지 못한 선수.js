const solution = (participants, completions) => {
  let answer = "";

  const sortParticipants = participants.sort();
  const sortCompletions = completions.sort();

  for (i = 0; i < sortParticipants.length; i++) {
    if (sortParticipants[i] !== sortCompletions[i]) {
      return (answer = sortParticipants[i]);
    }
  }

  return answer;
};