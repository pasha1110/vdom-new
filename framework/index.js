export const init = (target, comp) => {
  const app = document.querySelector(target);
  const newElement = document.createElement(comp.type);
  const newTextContent = document.createTextNode(comp.template);

  newElement.append(newTextContent);
  app.append(newElement);
};
