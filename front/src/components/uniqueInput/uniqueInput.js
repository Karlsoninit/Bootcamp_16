const createInput = (type, className) => {
  const createInput = document.createElement("input");
  createInput.setAttribute("type", type);
  createInput.classList.add(className);
  return createInput;
};

export default createInput;
