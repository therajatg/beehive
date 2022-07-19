export const search = (input, allUsers) => {
  if (input.trim().length === 0) {
    return null;
  } else {
    return (
      allUsers.filter(
        (person) =>
          person.username.includes(input) ||
          person.firstName.includes(input) ||
          person.lastName.includes(input)
      ) ?? null
    );
  }
};
