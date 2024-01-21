const camelCaseToTitle = (input: string): string => {
  return input
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

export { camelCaseToTitle };
