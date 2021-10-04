const createElement =
  (tagName) =>
  (str, ...args) => ({
    type: tagName,
    template: str.reduce(
      (acc, currentStr, index) => acc + currentStr + (args[index] || ''),
      ''
    ),
  });

export const div = createElement('div');
