export default class Draw {
  constructor() {}

  draw = arr => {
    const drawImage = arr
      .map(({ image }) => {
        return `<img clas='image' width='400px' src=${image}/>`;
      })
      .join("");
    return drawImage;
  };
}
