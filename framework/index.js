import * as snabbdom from 'snabbdom';
const patch = snabbdom.init([]);

export const init = (target, comp) => {
  const app = document.querySelector(target);
  patch(app, comp.template);
};
