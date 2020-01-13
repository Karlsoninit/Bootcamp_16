import refs from "../../../services";


export const draw = value => {
  refs.container.innerHTML = value;
};
