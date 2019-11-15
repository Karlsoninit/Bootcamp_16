export default class Draw {
  constructor() {}

  draw = arr => {
    const drawImage = arr.map(({ image }) => {
      return `<img width='400px' src=${image}/>`;
    });
    return drawImage;
  };
}
