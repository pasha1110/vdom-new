import h from 'snabbdom/h';

const createElement =
  (tagName) =>
  (str, ...args) => ({
    type: 'Element',
    template: h(
      tagName,
      {},
      str.reduce(
        (acc, currentStr, index) => acc + currentStr + (args[index] || ''),
        ''
      )
    ),
  });

export const div = createElement('div');
